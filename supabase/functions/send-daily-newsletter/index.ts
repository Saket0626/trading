// Supabase Edge Function: sends daily "come back + news updated" email to newsletter subscribers
// Run once per day, 3 hours after market news updates (e.g. 03:00 UTC if news updates at 00:00 UTC)
// Requires: RESEND_API_KEY or BREVO_API_KEY, FINNHUB_API_KEY (to verify news), CRON_SECRET (optional, to secure the endpoint)
// Cron: Call this function daily at your chosen time (e.g. 3 AM UTC)

import { createClient } from "npm:@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");
const FINNHUB_KEY = Deno.env.get("FINNHUB_API_KEY");
const CRON_SECRET = Deno.env.get("CRON_SECRET");
const RESEND_FROM = Deno.env.get("RESEND_FROM") ?? "ChartWise <onboarding@resend.dev>";
const SITE_URL = Deno.env.get("SITE_URL") ?? "https://www.chartwise.info";
const LEARNING_LINK = "https://chartwise.info";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-cron-secret",
};

function parseFrom(f: string): { name: string; email: string } {
  const match = f.match(/^(.+?)\s*<([^>]+)>$/);
  if (match) return { name: match[1].trim(), email: match[2].trim() };
  return { name: "ChartWise", email: f.trim() };
}

async function fetchLatestNewsHeadlines(): Promise<string[]> {
  if (!FINNHUB_KEY) return [];
  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/news?category=general&token=${FINNHUB_KEY}`
    );
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data.slice(0, 5).map((item: { headline?: string }) => item.headline || "").filter(Boolean);
  } catch {
    return [];
  }
}

function dailyEmailHtml(siteUrl: string, headlines: string[]): string {
  const headlinesHtml =
    headlines.length > 0
      ? `<ul style="margin: 16px 0; padding-left: 20px; color: #374151;">
          ${headlines.map((h) => `<li style="margin-bottom: 8px;">${h}</li>`).join("")}
        </ul>`
      : "";
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>ChartWise — Come Back & Learn</title></head>
<body style="font-family: system-ui, sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h1 style="color: #0A0D12;">Time to sharpen your skills</h1>
  <p>Your daily reminder: the market news has been updated, and there are lessons waiting for you.</p>
  <p><strong>Come back and continue learning</strong> — every lesson brings you closer to trading with confidence.</p>
  ${headlines.length > 0 ? `<p style="margin-top: 20px;"><strong>Today&rsquo;s headlines:</strong></p>${headlinesHtml}` : ""}
  <p style="margin-top: 24px;">
    <a href="${LEARNING_LINK}" style="display: inline-block; padding: 12px 24px; background: #00D4AA; color: #0A0D12; text-decoration: none; font-weight: 600; border-radius: 8px;">Continue Learning</a>
  </p>
  <p style="color: #64748b; font-size: 14px; margin-top: 32px;">ChartWise — Learn trading from zero to quant. Education first, trading second.</p>
</body>
</html>`;
}

async function sendViaResend(email: string, html: string): Promise<boolean> {
  if (!RESEND_API_KEY) return false;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: [email],
      subject: "ChartWise — Market news updated. Come back and learn.",
      html,
    }),
  });
  return res.ok;
}

async function sendViaBrevo(email: string, html: string): Promise<boolean> {
  if (!BREVO_API_KEY) return false;
  const fromStr = Deno.env.get("BREVO_FROM") || "ChartWise <onboarding@brevo.com>";
  const sender = parseFrom(fromStr);
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: { name: sender.name, email: sender.email },
      to: [{ email }],
      subject: "ChartWise — Market news updated. Come back and learn.",
      htmlContent: html,
    }),
  });
  return res.ok;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  // Optional: require cron secret to prevent unauthorized triggers
  if (CRON_SECRET) {
    const provided = req.headers.get("x-cron-secret");
    if (provided !== CRON_SECRET) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
  }

  const useBrevo = !!BREVO_API_KEY;
  const useResend = !!RESEND_API_KEY;
  if (!useBrevo && !useResend) {
    return new Response(
      JSON.stringify({ error: "No email provider. Add RESEND_API_KEY or BREVO_API_KEY." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) {
    return new Response(
      JSON.stringify({ error: "Supabase config missing." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);
  const today = new Date().toISOString().slice(0, 10);

  try {
    // Check if we already sent today
    const { data: existing } = await supabase
      .from("newsletter_daily_sends")
      .select("id")
      .eq("sent_date", today)
      .maybeSingle();

    if (existing) {
      return new Response(
        JSON.stringify({ message: "Already sent today.", sent_date: today }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Fetch latest news (market news has "updated" - we run 3h after the daily refresh)
    const headlines = await fetchLatestNewsHeadlines();

    // Fetch all subscribers
    const { data: subscribers, error: subError } = await supabase
      .from("newsletter_subscribers")
      .select("email");

    if (subError || !subscribers || subscribers.length === 0) {
      return new Response(
        JSON.stringify({ message: "No subscribers or error.", error: subError?.message }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const html = dailyEmailHtml(SITE_URL, headlines);
    const sendFn = useBrevo ? sendViaBrevo : sendViaResend;
    let sent = 0;
    for (const row of subscribers) {
      const ok = await sendFn(row.email, html);
      if (ok) sent++;
      await new Promise((r) => setTimeout(r, 100));
    }

    await supabase.from("newsletter_daily_sends").insert({
      sent_date: today,
      subscriber_count: sent,
    });

    return new Response(
      JSON.stringify({
        message: "Daily newsletter sent.",
        sent,
        total: subscribers.length,
        sent_date: today,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: err instanceof Error ? err.message : "Unknown error",
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
