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

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
        startAutoSync(session.user.id);
        startMainSync(session.user.id);
      } else {
        setLoading(false);
      }
    }).catch(() => {
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
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

  async function signInWithGoogle() {
    if (!supabase) return { error: new Error("Supabase nicht konfiguriert") };
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    return { error };
  }

  async function signOut() {
    if (user) await pushStatsToSupabase(user.id);
    stopAutoSync();
    stopMainSync();
    if (supabase) await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    setSession(null);
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
    user, profile, session, loading,
    isAuthenticated, tier, isPremium, isPro,
    signUp, signIn, signInWithGoogle, signOut, resetPassword,
  };
}
