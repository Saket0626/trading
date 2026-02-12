# Instructions & Fixes Summary

This file summarizes the instructions and changes applied to the trading education app.

---

## 1. Railway deployment (HTTP 502 fix)

### What was done
- **`nixpacks.toml`** added with explicit build and start so the app builds and listens correctly on Railway.
- **`package.json` start script** updated so the server listens on all interfaces:  
  `serve dist -s -l tcp://0.0.0.0:${PORT:-3000}`

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

```bash
git checkout -b your-branch-name
git add .
git commit -m "Your commit message here"
git push origin your-branch-name
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
