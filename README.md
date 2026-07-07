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
