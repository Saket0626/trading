// Supabase Edge Function: sends a welcome email to new newsletter subscribers
// Requires: RESEND_API_KEY (and optionally RESEND_FROM, SITE_URL for custom domain/link)
// Deploy: supabase functions deploy send-newsletter-welcome

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const RESEND_FROM = Deno.env.get("RESEND_FROM") ?? "ChartWise <onboarding@resend.dev>";
const SITE_URL = Deno.env.get("SITE_URL") ?? "https://chartwise.vercel.app";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (!RESEND_API_KEY) {
    return new Response(
      JSON.stringify({ error: "RESEND_API_KEY not configured" }),
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
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Welcome to ChartWise</title></head>
<body style="font-family: system-ui, sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h1 style="color: #0A0D12;">You're subscribed!</h1>
  <p>Thanks for signing up for the ChartWise newsletter. You'll get updates on new lessons, tips, and platform improvements.</p>
  <p>In the meantime, <a href="${SITE_URL}/learn" style="color: #00D4AA;">start learning</a> — everything is free.</p>
  <p style="color: #64748b; font-size: 14px;">ChartWise — Learn trading from zero to quant. Education first, trading second.</p>
</body>
</html>`,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return new Response(JSON.stringify({ error: data.message || "Failed to send email" }), {
        status: res.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
