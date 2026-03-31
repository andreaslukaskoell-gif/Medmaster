/**
 * In-App Purchase bridge for iOS/Android via cordova-plugin-purchase.
 * Falls back gracefully to no-op on web.
 *
 * Product: "medmaster_premium" (Non-Consumable, €29.90)
 * Apple takes 30% (15% with Small Business Program).
 */
/// <reference types="cordova-plugin-purchase" />
import { isNative, isIOS } from "./native";

/** IAP product ID — must match App Store Connect / Google Play Console */
export const IAP_PRODUCT_ID = "medmaster_premium";

type PurchaseResult = { ok: true } | { ok: false; error: string; cancelled?: boolean };

type IAPState = {
  ready: boolean;
  owned: boolean;
  loading: boolean;
};

let store: CdvPurchase.Store | null = null;
let stateListeners: Array<(state: IAPState) => void> = [];
let currentState: IAPState = { ready: false, owned: false, loading: true };

function notifyListeners() {
  for (const fn of stateListeners) fn(currentState);
}

function updateState(partial: Partial<IAPState>) {
  currentState = { ...currentState, ...partial };
  notifyListeners();
}

/** Subscribe to IAP state changes. Returns unsubscribe function. */
export function onIAPStateChange(fn: (state: IAPState) => void): () => void {
  stateListeners.push(fn);
  fn(currentState); // immediate callback with current state
  return () => {
    stateListeners = stateListeners.filter((l) => l !== fn);
  };
}

/** Get current IAP state */
export function getIAPState(): IAPState {
  return currentState;
}

/**
 * Initialize the IAP store. Call once at app startup.
 * On web, this is a no-op.
 */
export async function initIAP(onVerified?: (userId: string) => Promise<void>): Promise<void> {
  if (!isNative) {
    updateState({ ready: false, owned: false, loading: false });
    return;
  }

  try {
    // cordova-plugin-purchase registers on the global CdvPurchase namespace
    const cdv = (window as unknown as { CdvPurchase?: typeof CdvPurchase }).CdvPurchase;
    if (!cdv) {
      console.warn("[IAP] CdvPurchase not available on window");
      updateState({ ready: false, owned: false, loading: false });
      return;
    }
    store = cdv.store;

    const platform = isIOS ? cdv.Platform.APPLE_APPSTORE : cdv.Platform.GOOGLE_PLAY;

    // Register the product
    store!.register([
      {
        id: IAP_PRODUCT_ID,
        type: cdv.ProductType.NON_CONSUMABLE,
        platform,
      },
    ]);

    // When a purchase is approved, verify it server-side
    store!
      .when()
      .approved(async (transaction) => {
        // Get the receipt for server-side validation
        const receipt = transaction.parentReceipt;
        if (receipt && onVerified) {
          try {
            // The Supabase Edge Function validates the receipt and upgrades the profile
            const userId = localStorage.getItem("medmaster-user-id") ?? "";
            await onVerified(userId);
          } catch (err) {
            console.error("[IAP] Server verification failed:", err);
          }
        }
        // Finish the transaction (required by Apple)
        transaction.finish();
      })
      .finished(() => {
        updateState({ owned: isProductOwned(), loading: false });
      })
      .verified(() => {
        updateState({ owned: true, loading: false });
      });

    // Initialize the store
    await store!.initialize([platform]);
    updateState({ ready: true, owned: isProductOwned(), loading: false });
  } catch (err) {
    console.error("[IAP] Init failed:", err);
    updateState({ ready: false, owned: false, loading: false });
  }
}

/** Check if the premium product is owned */
export function isProductOwned(): boolean {
  if (!store) return false;
  const product = store.get(IAP_PRODUCT_ID);
  return product?.owned ?? false;
}

/** Start a purchase flow */
export async function purchasePremium(): Promise<PurchaseResult> {
  if (!store) return { ok: false, error: "IAP not initialized" };

  const product = store.get(IAP_PRODUCT_ID);
  if (!product) return { ok: false, error: "Product not found" };

  if (product.owned) return { ok: true }; // Already owned

  try {
    const offer = product.getOffer();
    if (!offer) return { ok: false, error: "No offer available" };

    updateState({ loading: true });
    const result = await store.order(offer);

    if (result && "isError" in result && result.isError) {
      updateState({ loading: false });
      const cancelled = result.code === 6777001; // USER_CANCELLED
      return { ok: false, error: result.message ?? "Purchase failed", cancelled };
    }

    // Purchase flow started — result comes via the .approved() listener
    return { ok: true };
  } catch (err) {
    updateState({ loading: false });
    return { ok: false, error: err instanceof Error ? err.message : "Purchase failed" };
  }
}

/** Restore previous purchases (e.g., after reinstall) */
export async function restorePurchases(): Promise<PurchaseResult> {
  if (!store) return { ok: false, error: "IAP not initialized" };

  try {
    updateState({ loading: true });
    await store.restorePurchases();
    const owned = isProductOwned();
    updateState({ owned, loading: false });
    return owned ? { ok: true } : { ok: false, error: "No previous purchase found" };
  } catch (err) {
    updateState({ loading: false });
    return { ok: false, error: err instanceof Error ? err.message : "Restore failed" };
  }
}

/** Get the localized price string from the store */
export function getLocalizedPrice(): string | null {
  if (!store) return null;
  const product = store.get(IAP_PRODUCT_ID);
  const offer = product?.getOffer();
  return offer?.pricingPhases?.[0]?.price ?? null;
}
