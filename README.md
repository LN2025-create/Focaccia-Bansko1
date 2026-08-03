# Focaccia Bansko

> **Before editing:** read [`PROJECT_STATE.json`](./PROJECT_STATE.json), [`PROJECT_HISTORY.md`](./PROJECT_HISTORY.md) and [`CHANGELOG.md`](./CHANGELOG.md). The active application is the Next.js project in the repository root. An obsolete nested project copy was removed on 2026-07-13 so only one application remains.

Next.js website for Focaccia Bansko. Current repository release: **1.2.4**.

## Local development

```bash
npm install
npm run dev
```

## Google Business Profile synchronization

Version 1.2.4 reads the current Google rating, exact review count, regular opening hours and special/holiday hours from the approved Google Business Profile APIs. The integration is server-side and uses OAuth 2.0; secrets must never be exposed in browser code or committed to Git.

After Google approves the Cloud project, add these variables in Vercel:

- `GBP_CLIENT_ID`
- `GBP_CLIENT_SECRET`
- `GBP_REFRESH_TOKEN`
- `GBP_ACCOUNT_ID`
- `GBP_LOCATION_ID`

The site requests `accounts.locations.reviews.list` for `averageRating` and `totalReviewCount`, and Business Information `locations.get` for `regularHours` and `specialHours`. Browser widgets refresh on every visit, every 30 minutes and whenever the tab becomes active. The server may reuse a successful response for five minutes to protect quota.

When live access is unavailable, the site does not display a fixed review count and does not claim that the shop is open or closed. It links visitors directly to Google instead.

## Business details

- Address: ул. „Пирин“ 93, 2770 Банско
- Phone: +359 897 822 441
- Instagram: @focaccia_bansko_panini
- Email: info@focaccia.bg (forwarded to focacciaexpert@abv.bg through ImprovMX)
- Opening hours: synchronized from Google Business Profile, including special and holiday hours


## Brand assets

- Logo version 1 is used as the main visual on the home page.
- Logo version 2 is used in the header and footer.
- The location page includes the supplied landmark diagram and an interactive Google map.
- The menu page presents the current menu in Bulgarian and English as a web experience. The visible PDF-menu feature must not be reintroduced unless explicitly requested.
## Visual theme

The site uses a warm Italian-inspired palette: cream, olive green, terracotta, graphite and muted gold.


## Version 1.1 structure

- The main focaccia story remains the first item in “Пътят на вкуса”.
- Product stories are product-led and arranged vertically.
- The interactive Italy map is at the bottom and filters stories by the selected region.
- Market-position copy is shown only when a supported exact claim exists.
- Home-page feature cards use the “Салумерия” title and the 01 / 02 / 03 strip ends with “Кафе, вино и кроасан”.

## Version 1.2.0 final map and QA

- The Italy section uses the owner-supplied simple silhouette and labelled region buttons.
- The silhouette does not contain guessed region shapes, numbered markers or decorative hotspots.
- Selecting a region filters the connected product stories and exposes an accessible selected state.
- Stage 4 completed desktop/mobile visual review, BG/EN route checks, asset checks, lint and production build.
