# Focaccia Bansko

> **Before editing:** read [`PROJECT_STATE.json`](./PROJECT_STATE.json), [`PROJECT_HISTORY.md`](./PROJECT_HISTORY.md) and [`CHANGELOG.md`](./CHANGELOG.md). The active application is the Next.js project in the repository root. An obsolete nested project copy was removed on 2026-07-13 so only one application remains.

Next.js website for Focaccia Bansko. Current repository release: **1.1.0**.

## Local development

```bash
npm install
npm run dev
```

## Google rating auto-update

The site works without additional configuration and uses a safe fallback rating. To refresh the rating from Google once every 24 hours, add these environment variables in Vercel:

- `GOOGLE_PLACES_API_KEY`
- `GOOGLE_PLACE_ID`

The API key must have Places API (New) enabled. The server route requests only `rating`, `userRatingCount` and `googleMapsUri` and caches the response for 24 hours.

## Business details

- Address: ул. „Пирин“ 93, 2770 Банско
- Phone: +359 897 822 441
- Instagram: @focaccia_bansko_panini
- Email: focacciaexpert@abv.bg
- Opening hours: 10:00–22:00


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
