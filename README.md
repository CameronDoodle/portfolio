# Cameron Grey — Game Studio Portfolio

A light, high-contrast portfolio for studio applications: white and grey base (with a dark-mode toggle), pixel type, thick outlines, and a six-color accent set (`#01befe` `#ffdd00` `#ff7d00` `#ff006d` `#adff02` `#8f00ff`). Game work leads; art, music, hardware, and video sit in the same archive.

The featured projects in this repo are **sample placeholders** so the site is visually complete. Replace them with real work before you send the URL.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43123](http://localhost:43123).

## Swap in your work

Photos live in a folder per project. The folder name must match the `slug` in [`src/content/works.ts`](src/content/works.ts).

```
public/work/split-keyboard/cover.jpg
public/work/split-keyboard/01-pcb.jpg
public/work/split-keyboard/02-case.jpg
```

1. Drop images into `public/work/<slug>/` (JPG/PNG/WebP). Name the card/hero `cover` (any of those extensions). Everything else in that folder is a supporting photo on the case-study page, sorted by filename — prefix with `01-`, `02-` to control order. A single image in the folder is treated as the cover even if it is not named `cover`.
2. You do not need to list those photos in `works.ts`. Edit that file for title, year, role, disciplines, copy, and links.
3. Audio goes in `public/audio/`. To embed a reel, add `{ type: "youtube", id: "VIDEO_ID", title: "…" }` to that project's `media`.
4. Edit identity, email, and socials in [`src/content/site.ts`](src/content/site.ts).

Disciplines used as filters: Games, Art, Music, Hardware, Video. Mark `featured: true` and set `featuredOrder` for homepage pieces.

## Deploy for free (GitHub + Vercel)

This Cursor workspace is **not** on GitHub yet. Create a GitHub repo, push `main`, then import it in Vercel.

### 1. Create a GitHub repository

1. Open [github.com/new](https://github.com/new).
2. Name it something like `portfolio`.
3. Leave it **empty**: no README, no .gitignore, no license.
4. Create the repository and copy the HTTPS URL (`https://github.com/YOUR_USER/portfolio.git`).

### 2. Push this project

In the project folder (Cursor terminal or your machine):

```bash
git remote add github https://github.com/YOUR_USER/portfolio.git
git push -u github main
```

If GitHub asks you to sign in, use the browser prompt or a personal access token. After this, `main` on GitHub is the site source.

### 3. Host on Vercel (Hobby is free)

1. Open [vercel.com/new](https://vercel.com/new) while signed in with GitHub.
2. **Import** the `portfolio` repo.
3. Leave Framework Preset as **Next.js**. Do not add environment variables.
4. Click **Deploy**. Wait for the build to finish.
5. Open the `https://….vercel.app` URL. That is the link for applications.

Later pushes to `github` `main` redeploy automatically. A custom domain is optional under the Vercel project’s **Settings → Domains**.

No env vars are required.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui.
