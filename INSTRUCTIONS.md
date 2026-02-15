# Instructions & Fixes Summary

This file summarizes the instructions and changes applied to the trading education app.

---

## Quick start — Navigate to the project folder

From your terminal, go to the trading project folder:

```bash
cd ~/trading
```

Or with the full path:

```bash
cd /Users/saketamanana/trading
```

---

## 1. Railway deployment (HTTP 502 fix)

### What was done
- **`nixpacks.toml`** — explicit build and start so the app builds and listens correctly on Railway.
- **`server.js`** — Express server that serves `sitemap.xml` and `robots.txt` **before** the SPA fallback. Uses `node server.js`.
- **`package.json` start script** — `node server.js`.

### Sitemap / robots 404 fix
The Express server registers `/sitemap.xml` and `/robots.txt` routes first, so they are never caught by the SPA fallback. After deploy:
1. Visit `https://www.chartwise.info/sitemap.xml` — you should see XML, not the 404 page.
2. If you use Cloudflare or another CDN, **purge the cache** for `/sitemap.xml` and `/robots.txt`.
3. Check Railway Deploy logs for `sitemap.xml exists: true` to confirm the file is in the build.

### If you still get 502
1. **Redeploy** after pushing these changes.
2. In Railway: **Settings → Networking** → ensure the generated domain’s **target port** matches the app (Railway usually sets this via `PORT`).
3. Add **`VITE_FINNHUB_API_KEY`** in Railway project variables if the app needs it.
4. Check **Deploy** and **Runtime** logs in Railway for build or startup errors.

---

## 2. Quiz scoring and “stuck” results

### Fixes applied
- **Double-counting the last question**  
  In `Quiz.tsx`, the final score now uses only `correctCount` (which already includes the last answer). No extra +1 on the last question.
- **Quiz state when changing lessons**  
  In `LessonPage.tsx`, a `useEffect` resets `quizComplete` and `quizScore` when `lesson.id` changes so the results screen doesn’t persist on the wrong lesson.

---

## 3. Pushing code to GitHub

Use these commands to update GitHub:

```bash
# Stage all changes
git add .

# Commit with a message
git commit -m "Your commit message here"

# Push (use 'main' or 'master' depending on your default branch)
git push origin main
```

If your default branch is `master`:

```bash
git push origin master
```

### Optional: use a branch

**First time** (create the branch and push):

```bash
git checkout -b your-branch-name
git add .
git commit -m "Your commit message here"
git push origin your-branch-name
```

**Every time after** (when you just want to update GitHub with new changes), use only these three—do **not** run `git checkout -b` again:

```bash
git add .
git commit -m "Your commit message here"
git push origin your-branch-name
```

If you usually work on `main` and push there:

```bash
git add .
git commit -m "Your commit message describing the changes"
git push origin main
```

---

## 4. Lesson navigation refresh and 100% cap

### Full page refresh on lesson navigation
- **Previous**, **Next**, and **Back to Level** were changed from React Router `<Link>` to plain **`<a href="...">`** in `LessonPage.tsx`.
- Clicking any of these does a full page load, so the new lesson and quiz load from scratch and the quiz never stays “stuck” from the previous lesson.

### Quiz score capped at 100%
- **`Quiz.tsx`**  
  Final score is capped before calling `onComplete`:  
  `const finalScore = Math.min(100, rawScore);`
- **`QuizResults.tsx`**  
  - Display uses `displayScore = Math.min(100, score)` so the big percentage never shows above 100%.  
  - “X out of Y correct” is derived from that capped score and never shows more correct than total questions.

---

## File reference

| Topic              | Files touched |
|--------------------|----------------|
| Railway 502        | `nixpacks.toml`, `package.json` |
| Quiz scoring       | `src/components/quiz/Quiz.tsx` |
| Quiz state reset   | `src/pages/LessonPage.tsx` (useEffect) |
| Nav refresh + cap  | `src/pages/LessonPage.tsx`, `src/components/quiz/Quiz.tsx`, `src/components/quiz/QuizResults.tsx` |
