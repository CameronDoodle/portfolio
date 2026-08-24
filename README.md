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

1. Put stills in `public/covers/` (JPG/PNG/WebP). Audio goes in `public/audio/`.
2. Edit [`src/content/works.ts`](src/content/works.ts): `slug`, `title`, `year`, `role`, `disciplines`, cover path, problem / made / outcome, links.
3. To embed a reel, add a media item `{ type: "youtube", id: "VIDEO_ID", title: "…" }`.
4. Edit identity, email, and socials in [`src/content/site.ts`](src/content/site.ts).

Disciplines used as filters: Games, Art, Music, Hardware, Video. Mark `featured: true` and set `featuredOrder` for homepage pieces.

## Deploy for free (Vercel)

1. Push this repo to GitHub (already done if you are on this branch).
2. Sign in at [vercel.com](https://vercel.com) with GitHub (Hobby plan is free).
3. **Add New Project** → import the repo → Deploy. Leave the Next.js defaults.
4. You get an `https://….vercel.app` URL for applications. Optional: add a custom domain in the Vercel project settings.

No env vars are required.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui.
