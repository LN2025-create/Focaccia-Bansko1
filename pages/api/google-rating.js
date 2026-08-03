import { site } from '../../lib/content';
import { fetchBusinessProfileData, hasBusinessProfileConfig } from '../../lib/googleBusinessProfile';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=60');

  if (!hasBusinessProfileConfig()) {
    return res.status(200).json({ rating: null, count: null, url: site.mapsUrl, live: false });
  }

  try {
    const data = await fetchBusinessProfileData();
    return res.status(200).json({
      rating: data.rating?.value ?? null,
      count: data.rating?.count ?? null,
      url: site.mapsUrl,
      live: Boolean(data.rating),
      updatedAt: data.updatedAt,
    });
  } catch (error) {
    console.error('Google rating synchronization failed:', error);
    return res.status(200).json({ rating: null, count: null, url: site.mapsUrl, live: false });
  }
}
