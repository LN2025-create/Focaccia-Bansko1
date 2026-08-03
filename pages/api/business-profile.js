import { site } from '../../lib/content';
import { fetchBusinessProfileData, hasBusinessProfileConfig } from '../../lib/googleBusinessProfile';

const UNAVAILABLE = {
  live: false,
  configured: false,
  source: 'google-business-profile',
  url: site.mapsUrl,
  rating: null,
  hours: null,
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Browser widgets request this route on each visit and whenever the tab becomes active.
  // Vercel may reuse a successful Google response for five minutes to protect the API quota.
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=60');

  if (!hasBusinessProfileConfig()) {
    return res.status(200).json(UNAVAILABLE);
  }

  try {
    const data = await fetchBusinessProfileData();
    return res.status(200).json({ ...data, configured: true, url: site.mapsUrl });
  } catch (error) {
    console.error('Google Business Profile synchronization failed:', error);
    return res.status(200).json({ ...UNAVAILABLE, configured: true });
  }
}
