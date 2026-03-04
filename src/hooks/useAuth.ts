import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { startAutoSync, stopAutoSync, pushStatsToSupabase } from "@/lib/syncService";
import { startMainSync, stopMainSync } from "@/lib/sync";
import type { User, Session } from "@supabase/supabase-js";

interface Profile {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  medat_type: string;
  test_date: string | null;
  subscription_tier: "starter" | "standard" | "pro";
  subscription_expires_at: string | null;
  xp: number;
  level: number;
  streak_days: number;
}

const isDev = import.meta.env.DEV;

/** Test-User für lokale Entwicklung ohne echte Anmeldung */
const DEV_USER = {
  id: "dev-user",
  email: "test@medmaster.at",
} as User;

export function useAuth() {
  const [user, setUser] = useState<User | null>(isDev ? DEV_USER : null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(!isDev);

  useEffect(() => {
    if (isDev) {
      setUser(DEV_USER);
      setLoading(false);
      return;
    }

    if (!supabase) {
      setLoading(false);
      return;
    }

    // Timeout fallback: if auth takes >4s (e.g. Instagram in-app browser), stop loading
    const authTimeout = setTimeout(() => setLoading(false), 4000);

    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        clearTimeout(authTimeout);
        setSession(session);
        setUser(session?.user ?? null);
        if (session?.user) {
          fetchProfile(session.user.id);
          startAutoSync(session.user.id);
          startMainSync(session.user.id);
        } else {
          setLoading(false);
        }
      })
      .catch(() => {
        clearTimeout(authTimeout);
        setLoading(false);
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
        startAutoSync(session.user.id);
        startMainSync(session.user.id);
      } else {
        stopAutoSync();
        stopMainSync();
        setProfile(null);
        setLoading(false);
      }
    });

    return () => {
      clearTimeout(authTimeout);
      subscription.unsubscribe();
      stopAutoSync();
      stopMainSync();
    };
  }, []);

  async function fetchProfile(userId: string) {
    if (!supabase) {
      setLoading(false);
      return;
    }
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .maybeSingle();

      if (error) {
        console.warn("[useAuth] Profile fetch error:", error.message);
        setLoading(false);
        return;
      }

      if (data) {
        setProfile(data as Profile);
      } else {
        // Neuer User: kein Profil in DB → Standard-Profil für Welcome-State
        setProfile({
          id: userId,
          username: "",
          display_name: null,
          avatar_url: null,
          medat_type: "medat",
          test_date: null,
          subscription_tier: "starter",
          subscription_expires_at: null,
          xp: 0,
          level: 1,
          streak_days: 0,
        } as Profile);
      }
    } finally {
      setLoading(false);
    }
  }

  async function signUp(email: string, password: string, username: string) {
    if (!supabase) return { error: new Error("Supabase nicht konfiguriert") };
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { username, display_name: username } },
    });
    return { error };
  }

  async function signIn(email: string, password: string) {
    if (!supabase) return { error: new Error("Supabase nicht konfiguriert") };
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error };
  }

  async function signInWithGoogle(): Promise<{ error: Error | null }> {
    if (!supabase) return { error: new Error("Supabase nicht konfiguriert") };
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.origin + "/dashboard" },
      });
      if (error) return { error: new Error(error.message) };
      // signInWithOAuth returns a URL — if no redirect happened, open it manually
      if (data?.url) window.location.href = data.url;
      return { error: null };
    } catch (e: any) {
      return { error: new Error(e?.message || "Google Login fehlgeschlagen") };
    }
  }

  async function signOut() {
    if (user) await pushStatsToSupabase(user.id);
    stopAutoSync();
    stopMainSync();
    if (supabase) await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    setSession(null);
    window.location.href = "/";
  }

  async function deleteAccount() {
    if (!supabase || !user) return { error: new Error("Nicht eingeloggt") };
    try {
      // Delete profile data first
      await supabase.from("profiles").delete().eq("id", user.id);
      await supabase.from("user_stats").delete().eq("user_id", user.id);
      // Try RPC if available (requires Supabase function)
      const { error: rpcError } = await supabase.rpc("delete_user");
      if (rpcError) {
        // Fallback: sign out and send deletion request email
        console.warn("RPC delete_user not available, manual deletion needed:", rpcError.message);
      }
      stopAutoSync();
      stopMainSync();
      await supabase.auth.signOut();
      setUser(null);
      setProfile(null);
      setSession(null);
      // Clear local storage for this user
      const keysToRemove = Object.keys(localStorage).filter(
        (k) => k.startsWith("medmaster_") || k.startsWith("zustand-")
      );
      keysToRemove.forEach((k) => localStorage.removeItem(k));
      window.location.href = "/";
      return { error: null };
    } catch (err) {
      return { error: err instanceof Error ? err : new Error("Fehler beim Löschen") };
    }
  }

  async function resetPassword(email: string) {
    if (!supabase) return { error: new Error("Supabase nicht konfiguriert") };
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    return { error };
  }

  const tier = profile?.subscription_tier || "starter";
  const isAuthenticated = !!user;
  const isPremium = tier === "standard" || tier === "pro";
  const isPro = tier === "pro";

  return {
    user,
    profile,
    session,
    loading,
    isAuthenticated,
    tier,
    isPremium,
    isPro,
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
    deleteAccount,
    resetPassword,
  };
}
