// Supabase Edge Function: sends a welcome email to new newsletter subscribers
// Supports Resend OR Brevo. Add the API key for your chosen provider in Supabase Dashboard.
// Resend: RESEND_API_KEY
// Brevo: BREVO_API_KEY (+ BREVO_FROM for verified sender, e.g. "ChartWise <hello@yourdomain.com>")
// Optional: SITE_URL for links in the email

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");
const RESEND_FROM = Deno.env.get("RESEND_FROM") ?? "ChartWise <onboarding@resend.dev>";
const BREVO_FROM = Deno.env.get("BREVO_FROM"); // e.g. "ChartWise <hello@yourdomain.com>" — must be verified in Brevo
const SITE_URL = Deno.env.get("SITE_URL") ?? "https://chartwise.vercel.app";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const WELCOME_HTML = (siteUrl: string) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Welcome to ChartWise</title></head>
<body style="font-family: system-ui, sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h1 style="color: #0A0D12;">You're subscribed!</h1>
  <p>Thanks for signing up for the ChartWise newsletter. You'll get updates on new lessons, tips, and platform improvements.</p>
  <p>In the meantime, <a href="${siteUrl}/learn" style="color: #00D4AA;">start learning</a> — everything is free.</p>
  <p style="color: #64748b; font-size: 14px;">ChartWise — Learn trading from zero to quant. Education first, trading second.</p>
</body>
</html>`;

function parseFrom(f: string): { name: string; email: string } {
  const match = f.match(/^(.+?)\s*<([^>]+)>$/);
  if (match) return { name: match[1].trim(), email: match[2].trim() };
  return { name: "ChartWise", email: f.trim() };
}

async function sendViaResend(email: string): Promise<Response> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: [email],
      subject: "Welcome to ChartWise — Start Learning Trading",
      html: WELCOME_HTML(SITE_URL),
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    return new Response(JSON.stringify({ error: data.message || "Resend failed" }), {
      status: res.status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

async function sendViaBrevo(email: string): Promise<Response> {
  // Brevo requires a verified sender. Set BREVO_FROM in secrets, e.g. "ChartWise <hello@yourdomain.com>"
  const fromStr = BREVO_FROM || "ChartWise <onboarding@brevo.com>";
  const sender = parseFrom(fromStr);
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": BREVO_API_KEY!,
    },
    body: JSON.stringify({
      sender: { name: sender.name, email: sender.email },
      to: [{ email }],
      subject: "Welcome to ChartWise — Start Learning Trading",
      htmlContent: WELCOME_HTML(SITE_URL),
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    return new Response(
      JSON.stringify({ error: data.message || data.code || "Brevo failed" }),
      { status: res.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const useBrevo = !!BREVO_API_KEY;
  const useResend = !!RESEND_API_KEY;

  if (!useBrevo && !useResend) {
    return new Response(
      JSON.stringify({
        error: "No email provider configured. Add RESEND_API_KEY or BREVO_API_KEY in Supabase Edge Functions → Secrets.",
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const { email } = (await req.json()) as { email?: string };
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Valid email required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (useBrevo) {
      return await sendViaBrevo(email);
    }
    return await sendViaResend(email);
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
