# Focaccia Bansko

Next.js website for Focaccia Bansko.

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
- The menu page includes the 2026 menu in Bulgarian and English, with a compressed PDF download.
