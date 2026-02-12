import { useState, useEffect } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
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

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) fetchProfile(session.user.id);
      else setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) fetchProfile(session.user.id);
      else { setProfile(null); setLoading(false); }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function fetchProfile(userId: string) {
    if (!supabase) return;
    const { data } = await supabase.from("profiles").select("*").eq("id", userId).single();
    if (data) setProfile(data as Profile);
    setLoading(false);
  }

  async function signUp(email: string, password: string, username: string) {
    if (!supabase) return { error: { message: "Supabase nicht konfiguriert" } };
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { username, display_name: username } },
    });
    return { error };
  }

  async function signIn(email: string, password: string) {
    if (!supabase) return { error: { message: "Supabase nicht konfiguriert" } };
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error };
  }

  async function signInWithGoogle() {
    if (!supabase) return { error: { message: "Supabase nicht konfiguriert" } };
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    return { error };
  }

  async function signOut() {
    if (!supabase) return;
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    setSession(null);
  }

  async function resetPassword(email: string) {
    if (!supabase) return { error: { message: "Supabase nicht konfiguriert" } };
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
