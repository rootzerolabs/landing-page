# How to revert the redesign

The site was redesigned from a React/Vite app to a static LawnchAI page.
This file is the runbook to roll it back.

## Key refs
- **Old React site (full backup):** branch `rootzerolabs-landing-page`
- **Redesign commit:** `389b6bf` (feat: redesign landing page from LawnchAI design)
- **Last main commit before redesign:** `ffb07ff` (AWS removal) / `dbc650f` (React site)

## Option A — restore the old React site to main (recommended)
Brings the whole React app back as a new commit. Keeps history.

```bash
git checkout main
git restore --source=rootzerolabs-landing-page -- .
git checkout rootzerolabs-landing-page -- .       # if restore misses deletions
git status                                          # confirm React files are back
git commit -m "revert: restore React landing page"
```

If files from the redesign linger (`assets/`, new `index.html`), the cleanest reset:

```bash
git checkout main
git rm -r assets REVERT.md
git checkout rootzerolabs-landing-page -- .
git commit -m "revert: restore React landing page"
npm install && npm run dev   # verify it runs
```

## Option B — revert just the redesign commit
Faster, but only undoes that one commit (the AWS-removal stays undone).

```bash
git checkout main
git revert 389b6bf
```

## Option C — hard reset main to before the redesign (destructive, local only)
Only if nothing after `389b6bf` matters and it hasn't been relied on downstream.

```bash
git checkout main
git reset --hard ffb07ff     # or dbc650f to also bring back AWS deploy
```

## After reverting
- The old site builds with Vite: `npm install && npm run build` → `dist/`.
- Redeploy to Vercel: `vercel --prod` (Vite preset auto-detected).
