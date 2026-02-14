import { supabase } from "../lib/supabase";

export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; error?: string }> {
  if (!supabase) {
    return { success: false, error: "Newsletter not configured. Add Supabase credentials and run supabase-newsletter.sql." };
  }
  const trimmed = email.trim().toLowerCase();
  if (!trimmed) return { success: false, error: "Please enter an email." };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) return { success: false, error: "Please enter a valid email." };

  const { error } = await supabase.from("newsletter_subscribers").insert({ email: trimmed });

  if (error) {
    if (error.code === "23505") {
      return { success: false, error: "This email is already subscribed." };
    }
    return { success: false, error: error.message };
  }

  // Send welcome email via Edge Function (fire-and-forget; we don't block signup on it)
  supabase.functions
    .invoke("send-newsletter-welcome", { body: { email: trimmed } })
    .then(({ error: fnError }) => {
      if (fnError) console.warn("Welcome email failed:", fnError);
    })
    .catch((err) => console.warn("Welcome email invoke failed:", err));

  return { success: true };
}

export function isNewsletterEnabled(): boolean {
  return !!supabase;
}
