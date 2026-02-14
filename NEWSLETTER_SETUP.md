# Newsletter Setup — Detailed Steps

This guide walks you through enabling the footer newsletter signup, which stores emails in Supabase and sends a welcome email to each new subscriber.

---

## QUICK SETUP — No Terminal (Dashboard Only)

You can add your API keys and deploy the function entirely from the Supabase Dashboard. No CLI needed.

### Step A — Add your API key (Secrets)

1. Go to [Supabase Dashboard](https://supabase.com/dashboard) → your project
2. In the left sidebar: **Edge Functions** → **Secrets**
3. Click **Add secret** (or **New secret**)
4. Add one of these (choose **Resend** OR **Brevo**):

   **Option 1 — Resend:**
   - **Name:** `RESEND_API_KEY`
   - **Value:** your Resend API key (starts with `re_`)

   **Option 2 — Brevo:**
   - **Name:** `BREVO_API_KEY`
   - **Value:** your Brevo API key (starts with `xkeysib-`)
   - (Optional) Add another secret:
     - **Name:** `BREVO_FROM`
     - **Value:** `ChartWise <hello@yourdomain.com>` (use a verified sender from your Brevo account)

5. (Optional) Add **SITE_URL** = `https://yoursite.com` if you want links in the email to point to your site
6. Click **Save**

### Step B — Deploy or update the Edge Function

1. In Supabase Dashboard: **Edge Functions** → **Functions**
2. If `send-newsletter-welcome` already exists: click it → **Code** tab
3. If it doesn’t exist: click **Deploy a new function** → **Via Editor** → name it `send-newsletter-welcome`
4. Replace the code with the contents of `supabase/functions/send-newsletter-welcome/index.ts` in this project
5. Click **Deploy** (or **Save and deploy**)

The function supports both Resend and Brevo. Whichever API key you added will be used automatically.

---

## Part 1: Database Table

### Step 1.1 — Run the SQL script

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project (or create one if you haven’t)
3. In the left sidebar, click **SQL Editor**
4. Click **New query**
5. Open the file `supabase-newsletter.sql` in this project
6. Copy its entire contents
7. Paste into the Supabase SQL Editor
8. Click **Run** (or press Cmd/Ctrl + Enter)
9. You should see “Success. No rows returned”

The `newsletter_subscribers` table is now ready.

---

## Part 2: Resend Account (for Welcome Emails)

### Step 2.1 — Create a Resend account

1. Go to [resend.com](https://resend.com)
2. Click **Start Building**
3. Sign up with email or GitHub
4. Confirm your email if prompted

### Step 2.2 — Get your API key

1. In Resend, go to **API Keys** (left sidebar or [resend.com/api-keys](https://resend.com/api-keys))
2. Click **Create API Key**
3. Name it something like `ChartWise Newsletter`
4. Choose **Sending access** (default)
5. Click **Add**
6. **Copy the key** (it starts with `re_`) — you won’t see it again

### Step 2.3 — (Optional) Verify your domain

For production, you should send from your own domain (e.g. `hello@yourdomain.com`):

1. In Resend, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g. `yourdomain.com`)
4. Add the DNS records Resend shows (MX, TXT, etc.) in your DNS provider
5. Wait for verification (usually a few minutes)

Until then, you can use `onboarding@resend.dev` for testing (Resend’s test sender).

### Alternative: Brevo (instead of Resend)

If you prefer Brevo:

1. Go to [brevo.com](https://www.brevo.com) and create an account
2. **SMTP & API** → **API Keys** → Create an API key
3. Add and verify a sender: **Senders** → Add your domain/email (Brevo requires a verified sender)
4. Add `BREVO_API_KEY` and optionally `BREVO_FROM` in Supabase Edge Functions → Secrets (see Quick Setup above)

---

## Part 3: Supabase CLI and Edge Function (Alternative to Quick Setup)

### Step 3.1 — Install Supabase CLI

**macOS (Homebrew):**
```bash
brew install supabase/tap/supabase
```

**Windows (Scoop):**
```bash
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

**npm (any OS):**
```bash
npm install -g supabase
```

Verify:
```bash
supabase --version
```

### Step 3.2 — Log in to Supabase

```bash
supabase login
```

A browser window will open. Sign in with your Supabase account and approve access.

### Step 3.3 — Find your project reference

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Open your project
3. In the URL you’ll see something like:  
   `https://supabase.com/dashboard/project/tuqrninrlqnknosmcyep`  
   The part after `/project/` is your **project ref** (e.g. `tuqrninrlqnknosmcyep`).

Alternatively: **Project Settings** (gear icon) → **General** → **Reference ID**.

### Step 3.4 — Link the CLI to your project

From your project root (where `package.json` is):

```bash
supabase link --project-ref YOUR_PROJECT_REF
```

Replace `YOUR_PROJECT_REF` with the value from Step 3.3. Example:

```bash
supabase link --project-ref tuqrninrlqnknosmcyep
```

If asked for the database password, use the one you set when creating the project. You can reset it in **Project Settings** → **Database** if needed.

### Step 3.5 — Set the Resend API key

```bash
supabase secrets set RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
```

Replace `re_xxxxxxxxxxxxxxxxxxxxxxxx` with the API key from Step 2.2.

Check it was set:

```bash
supabase secrets list
```

You should see `RESEND_API_KEY` listed (the value itself is hidden).

### Step 3.6 — (Optional) Custom sender and site URL

**Custom sender (after domain verification):**
```bash
supabase secrets set RESEND_FROM="ChartWise <hello@yourdomain.com>"
```

**Site URL (used for links in the email):**
```bash
supabase secrets set SITE_URL="https://yoursite.com"
```

Replace with your actual domain/URL.

### Step 3.7 — Deploy the Edge Function

From your project root:

```bash
supabase functions deploy send-newsletter-welcome
```

You should see output similar to:

```
Deploying Function send-newsletter-welcome...
Function send-newsletter-welcome deployed successfully.
```

---

## Part 4: Verify It Works

### Step 4.1 — Subscribe from your app

1. Start your app (`npm run dev`)
2. Scroll to the footer
3. Enter your email and click **Subscribe**
4. You should see “Thanks for subscribing!”
5. Check the inbox for that email for the welcome message

### Step 4.2 — Check Supabase

1. In Supabase, open **Table Editor**
2. Select `newsletter_subscribers`
3. Your new row should appear with the email and timestamp

### Step 4.3 — If no email arrives

1. Check spam/junk
2. In Resend, go to **Emails** to see send status and errors
3. In Supabase, open **Edge Functions** → `send-newsletter-welcome` → **Logs** to see function runs and errors

---

## Part 5: Daily Digest — “Come Back & Learn” Email

Send one email per day to all subscribers reminding them to return and do lessons, with a note that market news has been updated. **Only sends when market news has updated** (once per 24 hours), **3 hours after** the update.

### Step 5.1 — Run the daily sends table SQL

1. In Supabase **SQL Editor**, run the contents of `supabase-newsletter-daily.sql`
2. This creates `newsletter_daily_sends` to prevent duplicate sends per day

### Step 5.2 — Add secrets for the daily function

In **Edge Functions** → **Secrets**, add:

- **FINNHUB_API_KEY** — Your Finnhub API key (to fetch headlines for the email). Same key as in your app’s `.env` for market news.
- **CRON_SECRET** (optional) — A random string to secure the endpoint. If set, cron requests must send header `x-cron-secret: YOUR_SECRET`.

Resend/Brevo keys from Part 2 are reused.

### Step 5.3 — Deploy the daily function

1. Deploy `send-daily-newsletter` (via Dashboard **Deploy new function** → paste code from `supabase/functions/send-daily-newsletter/index.ts`)
2. Or via CLI: `supabase functions deploy send-daily-newsletter`

### Step 5.4 — Set up a daily cron job

Market news refreshes every 24 hours. Send the email **3 hours after** that refresh.

**Example:** If news “updates” at midnight UTC, run the cron at **03:00 UTC** daily.

**Options:**

1. **Vercel Cron** — Add to `vercel.json`:
   ```json
   {
     "crons": [{
       "path": "/api/cron/daily-newsletter",
       "schedule": "0 3 * * *"
     }]
   }
   ```
   Then create an API route that calls your Supabase Edge Function URL.

2. **cron-job.org** (free) — Create a job that:
   - URL: `https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-daily-newsletter`
   - Schedule: Daily at 03:00 UTC (or your chosen time)
   - Method: POST
   - Header: `x-cron-secret: YOUR_CRON_SECRET` (if you set `CRON_SECRET`)

3. **Railway / other hosts** — Use their cron or a separate cron service to POST to the function URL once per day.

The function will skip if it has already sent today.

---

## Troubleshooting

| Problem | What to try |
|--------|-------------|
| "Newsletter not configured" | Ensure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are in `.env` and the app was restarted |
| "RESEND_API_KEY not configured" / "No email provider configured" | Add `RESEND_API_KEY` or `BREVO_API_KEY` in Edge Functions → Secrets (Dashboard), then redeploy |
| Email not received | Check Resend → Emails for delivery status and errors |
| "Failed to invoke function" | Confirm the function is deployed and that Supabase credentials in `.env` match the linked project |
| Duplicate key / "already subscribed" | This is expected if the email is already in `newsletter_subscribers` |

---

## Summary Checklist

- [ ] Ran `supabase-newsletter.sql` in Supabase SQL Editor
- [ ] Created Resend account and API key
- [ ] Installed Supabase CLI and ran `supabase login`
- [ ] Ran `supabase link --project-ref YOUR_REF`
- [ ] Ran `supabase secrets set RESEND_API_KEY=re_xxx`
- [ ] Ran `supabase functions deploy send-newsletter-welcome`
- [ ] Tested signup and received welcome email
- [ ] (Optional) Ran `supabase-newsletter-daily.sql`, added FINNHUB_API_KEY, deployed `send-daily-newsletter`, set up cron for daily emails
