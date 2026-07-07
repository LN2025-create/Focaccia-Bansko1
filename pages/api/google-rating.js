const FALLBACK = {
  rating: 4.9,
  count: 240,
  url: 'https://www.google.com/maps/search/?api=1&query=Focaccia%20Bansko%2C%2093%20Pirin%20St%2C%20Bansko',
  live: false,
};

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return res.status(200).json(FALLBACK);
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri',
      },
    });

    if (!response.ok) throw new Error(`Google Places returned ${response.status}`);
    const place = await response.json();

    return res.status(200).json({
      rating: Number(place.rating) || FALLBACK.rating,
      count: Number(place.userRatingCount) || FALLBACK.count,
      url: place.googleMapsUri || FALLBACK.url,
      live: true,
    });
  } catch (error) {
    console.error('Google rating update failed:', error);
    return res.status(200).json(FALLBACK);
  }
}
