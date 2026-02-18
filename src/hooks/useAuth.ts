import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { startAutoSync, stopAutoSync, pushStatsToSupabase } from "@/lib/syncService";
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

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
        startAutoSync(session.user.id);
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
      } else {
        stopAutoSync();
        setProfile(null);
        setLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
      stopAutoSync();
    };
  }, []);

  async function fetchProfile(userId: string) {
    try {
      const { data } = await supabase.from("profiles").select("*").eq("id", userId).single();
      if (data) setProfile(data as Profile);
    } finally {
      setLoading(false);
    }
  }

  async function signUp(email: string, password: string, username: string) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { username, display_name: username } },
    });
    return { error };
  }

  async function signIn(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error };
  }

  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    return { error };
  }

  async function signOut() {
    // Push final stats before signing out
    if (user) {
      await pushStatsToSupabase(user.id);
    }
    stopAutoSync();
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    setSession(null);
  }

  async function resetPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    return { error };
  }

  const tier = profile?.subscription_tier || "starter";
  const isAuthenticated = !!user;
  const isPremium = tier === "standard" || tier === "pro";
  const isPro = tier === "pro";

  console.log("Auth State:", { user: !!user, loading });

  return {
    user, profile, session, loading,
    isAuthenticated, tier, isPremium, isPro,
    signUp, signIn, signInWithGoogle, signOut, resetPassword,
  };
}
