# rally-web

Rally Fan Support Platform — web app (Next.js 14 App Router), split from the
[Alexhemmy/Rally](https://github.com/Alexhemmy/Rally) monorepo, redesigned with the
**Ink & Frost** UI to match the redesigned mobile app.

## Design system
- Palette: deep ink background (`#070b14`), sky-blue primary `#0EA5E9`,
  cyan→violet gradient `#22D3EE → #7C5CFC`
- Glass cards (`backdrop-filter` + soft shadows), pill buttons, pill nav
- Everything is styled from `app/globals.css` class tokens (`.btn`, `.card`, …)
  so every page re-skins automatically.

## Setup
```bash
npm install
NEXT_PUBLIC_API_URL=http://localhost:4000 npm run dev
```

Point `NEXT_PUBLIC_API_URL` at the backend ([rally-backend](https://github.com/Alexhemmy/rally-backend)).

## Routes
40+ pages: Explore, Feed, Rankings, City lanes, Giveaways (+detail), Rivalries,
Live, Store, Merch, Predictions, Fan Clubs (subscriptions), Fan Gifts,
Collections, Wallet, Dashboard (+earnings/payouts/verify), Favorites (`/f/[handle]`),
fans (`/u/[handle]`), auth (login/register/forgot), security (2FA, API keys), and
info pages (about/faq/terms/privacy/support/how-to-use).
