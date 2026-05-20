# Makerspace

Every tool you wanted in a garage and couldn't justify, in one shared building — wood shop, metal shop, print room, electronics bench, sewing room. One membership. 24/7 for the keyed-in.

This repo is the marketing landing page. Next.js 16 App Router + Tailwind v4 + a server-action membership signup form.

## Develop

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Deploy

The site is set up for Vercel out of the box. Either:

- Push to GitHub and connect via the Vercel dashboard, or
- `vercel deploy` from the project root.

## Structure

- `app/page.tsx` — landing page (hero, four pillars, philosophy, gallery, CTA)
- `app/shops/page.tsx` — equipment catalog + membership tiers + class schedule
- `app/inquire-form.tsx` — client component for the membership signup form
- `app/actions.ts` — server action handling the signup (set `INQUIRY_WEBHOOK_URL` to deliver)
- `app/globals.css` — brand tokens and bespoke component styles
- `app/layout.tsx` — fonts (Anton / DM Sans / JetBrains Mono) and metadata
- `public/photo-*` — hero, interior, garage, and storefront photography

## Brand

| Token | Hex |
|---|---|
| pool | `#1b6ba0` |
| pool-light | `#4a9dc9` |
| chrome | `#f2c744` |
| beige | `#e8d9bc` |
| teal | `#0c3a4f` |
| cream | `#faf3e3` |
| ink | `#0a0a0a` |

Display type: **Anton**. Body: **DM Sans**. Meta strip: **JetBrains Mono**.

The CSS variable names (`--pool`, `--pool-light`) are inherited from the original Swim Up codebase — they're just steel-blue tokens here, not pool-specific.

## To do

- Wire `inquireMembership` server action to a real email or storage backend.
- Replace the inherited pool / lounge photography with shop floor, bench, and print-room photography.
- Confirm the final equipment list and tier pricing before launch — current numbers are illustrative.
- Add a real favicon and `apple-touch-icon.png`.
- Add a sitemap and `robots.txt` once the public URL is decided.
