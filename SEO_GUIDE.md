# Chartwise SEO Complete Guide — Toddler Instructions

**Goal:** Make Chartwise show up #1 when someone searches "Chartwise" on Google.

---

## What Words Mean (So Nothing Sounds Scary)

| Word | What it means (simple) |
|------|------------------------|
| **SEO** | Stuff that helps Google find and show your website |
| **Meta tag** | A hidden note inside your webpage that only Google and computers read |
| **Sitemap** | A list of every page on your site, like a map |
| **robots.txt** | A tiny file that tells Google "you can look at my site" |
| **Canonical** | The "main" URL for a page so Google doesn't get confused |
| **Schema** | Secret code that tells Google what your site is about |
| **og:image** | The picture people see when someone shares your link |
| **Favicon** | The tiny logo in the browser tab |
| **Lighthouse** | A tool inside Chrome that checks if your site is good |

---

## ✅ What Was Already Done in Your Code

All of this is already in your project. You don't need to change it.

- ✅ **STEP 1** — Title and meta description in index.html (with "Chartwise")
- ✅ **STEP 2** — Open Graph and Twitter Card tags
- ✅ **STEP 3** — JSON-LD WebSite + Organization schema
- ✅ **STEP 4** — sitemap.xml (313 URLs, generated at build)
- ✅ **STEP 5** — robots.txt in public/
- ✅ **STEP 6** — Canonical tag (base in index.html; updates on every page via SEOHead)
- ✅ **STEP 7** — "Chartwise" in h1, h2, first paragraph, 404 page, footer
- ✅ **STEP 8** — Preconnect for fonts; font-display:swap
- ✅ **STEP 11** — 404 page branded with Chartwise

---

## STEP 9 — Google Search Console (Do This Yourself)

**What it is:** A free tool from Google. You tell Google "my site exists" and it starts looking at it.

---

### 1️⃣ Open the website

1. Open Chrome (or any browser).
2. Click the address bar.
3. Type: **https://search.google.com/search-console**
4. Press Enter.
5. Sign in with your Google account (Gmail).

---

### 2️⃣ Add your website (property)

1. Look for a button that says **"Add property"** or **"Add a property"**.
2. Click it.
3. You will see two options:
   - **Domain** — Don't pick this (needs extra DNS setup).
   - **URL prefix** — ✅ Pick this one.
4. In the box, type exactly: **https://www.chartwise.info**
5. Click **"Continue"**.

---

### ⚠️ 3️⃣ Verify you own the site (the confusing part)

Google needs proof the site is yours.

**Option A: HTML tag (easiest for Railway)**

1. Google will show you a line of code that looks like:
   ```html
   <meta name="google-site-verification" content="abc123XYZ789..." />
   ```
2. Copy the **entire line** (from `<meta` to `/>`).
3. On your computer, open your project folder.
4. Open the file **index.html** (it's in the root folder, same level as package.json).
5. Find the `<head>` section (near the top).
6. Paste the line right after `<meta charset="UTF-8" />`.
7. Save the file.
8. Push your code to GitHub and deploy to Railway (so the change goes live).
9. Go back to Google Search Console.
10. Click the **"Verify"** button.
11. Wait 1–2 minutes.
12. If it says "Verification successful" — you're done!
13. If it fails, wait 24 hours and try again (sometimes it takes time).

**Option B: HTML file**

1. Google gives you a file to download (e.g. `google9876543210abcdef.html`).
2. Download it.
3. Put that file in your **public/** folder (next to robots.txt).
4. Deploy to Railway.
5. Click **"Verify"** in Search Console.

---

### 4️⃣ Submit your sitemap

1. In the left menu, click **"Sitemaps"**.
2. Find the box that says **"Add a new sitemap"**.
3. In the box, type exactly: **sitemap.xml**
4. Click **"Submit"**.
5. Done! Google will start crawling your pages (can take days).

---

### ⚠️ 5️⃣ Ask Google to look at your homepage first

1. At the top of Search Console, there is a search box.
2. Type: **https://www.chartwise.info/**
3. Press Enter.
4. Wait for the page to load.
5. Click **"Request indexing"**.
6. Google will try to crawl your homepage sooner.

---

## STEP 10 — Favicon & Apple Touch Icon

**What you need to create:**

| File | Size (pixels) | Where to put it |
|------|---------------|-----------------|
| favicon.ico | 32×32 or 48×48 | public/favicon.ico |
| favicon.png | 32×32 | public/favicon-32x32.png |
| favicon-16x16.png | 16×16 | public/favicon-16x16.png |
| apple-touch-icon.png | 180×180 | public/apple-touch-icon.png |

**How to create them (step by step):**

1. Go to **https://favicon.io**.
2. Choose **"Generate from text"** or **"Generate from image"**.
3. If from text: type "C" or "CW", pick a color, download.
4. If from image: upload your Chartwise logo, download.
5. Unzip the download.
6. You will see files like favicon.ico, apple-touch-icon.png.
7. Copy them into your project's **public/** folder.
8. If the names don't match, rename them to match the table above.
9. Run `npm run build` and redeploy.

**Right now:** Your site uses vite.svg as a fallback. It works, but custom favicons look more professional.

---

## OG Image (For when people share your link)

**What it is:** When someone pastes your link on Facebook, Twitter, or LinkedIn, a preview box appears. The big image in that box is your **og:image**.

**What you need to do:**

1. Create an image that is **1200 pixels wide × 630 pixels tall**.
2. Put your Chartwise logo and tagline on it (e.g. "Learn Trading From Zero to Quant").
3. Save it as **og-image.png**.
4. Put it in your **public/** folder.
5. The full path will be: **public/og-image.png**.
6. When live, it will be at: **https://www.chartwise.info/og-image.png**.

You can use Canva, Figma, or any image editor to make it.

---

## Schema: What is "sameAs"? (Explained like you're 4)

**sameAs** = "We are also on these other websites."

It's a list of your social media and other official links. Like saying: "Chartwise is on Twitter here, on LinkedIn here, on YouTube here."

Example (add these when you have accounts):
```json
"sameAs": [
  "https://twitter.com/chartwise",
  "https://www.linkedin.com/company/chartwise",
  "https://www.youtube.com/@chartwise"
]
```

If you don't have these yet, leave it as `[]` (empty). You can add them later in **index.html** inside the Organization script.

---

## STEP 12 — Run Lighthouse (Check Your Score)

**What it is:** A tool inside Chrome that grades your site on Performance, Accessibility, Best practices, and SEO.

**Exact steps:**

1. Deploy your site so it's live at **https://www.chartwise.info**.
2. Open **Google Chrome**.
3. Go to **https://www.chartwise.info**.
4. Press **F12** (or right-click → **Inspect**) to open DevTools.
5. Click the **"Lighthouse"** tab. (If you don't see it, click **">>"** and find **Lighthouse**.)
6. Check these boxes: **Performance**, **Accessibility**, **Best practices**, **SEO**.
7. Choose **"Desktop"** or **"Mobile"**.
8. Click **"Analyze page load"**.
9. Wait 30–60 seconds.
10. You will get a score for each category.

**Target scores:** 90+ for each (especially SEO).

**Top 3 things that usually need fixing:**

1. **Images** — Use WebP format, add `loading="lazy"`, and set width/height.
2. **Fonts** — Already using font-display: swap and preconnect. Good.
3. **Cumulative Layout Shift (CLS)** — Give images/videos explicit width and height so the page doesn't jump.

---

## Exact Terminal Commands

**Generate sitemap (run before build if you add new pages):**
```bash
npm run generate-sitemap
```

**Build your site (sitemap is auto-generated during build):**
```bash
npm run build
```

**Test that sitemap works (after deploy):**  
Open in browser: **https://www.chartwise.info/sitemap.xml**

**Test that robots.txt works:**  
Open in browser: **https://www.chartwise.info/robots.txt**

---

## Victory Checklist

Before you say "SEO is done," verify every item:

- [ ] **index.html** — Title is "Chartwise | Learn Trading From Zero to Quant"
- [ ] **index.html** — Meta description includes "Chartwise" and is 150–160 characters
- [ ] **og:image** — og-image.png exists in public/ (1200×630)
- [ ] **sitemap.xml** — Live at https://www.chartwise.info/sitemap.xml
- [ ] **robots.txt** — Live at https://www.chartwise.info/robots.txt
- [ ] **Favicons** — favicon.ico, favicon-32x32.png, favicon-16x16.png, apple-touch-icon.png in public/
- [ ] **Google Search Console** — Property added (https://www.chartwise.info)
- [ ] **Google Search Console** — Ownership verified
- [ ] **Google Search Console** — Sitemap submitted (sitemap.xml)
- [ ] **Google Search Console** — Homepage indexing requested (optional)
- [ ] **404 page** — Shows "Chartwise" and "Back to Chartwise Home"
- [ ] **Homepage** — "Chartwise" in h1, h2, and first paragraph
- [ ] **Lighthouse** — SEO score 90+

---

## If Build Fails on "generate-sitemap"

If you see an error when running `npm run build` related to tsx or generate-sitemap:

1. Run this first: `npm run generate-sitemap`
2. If that works, run: `npm run build`
3. If generate-sitemap fails, the sitemap.xml in public/ from a previous run will still be used. You can commit it to git so it's always there.
