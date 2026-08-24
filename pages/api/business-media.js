import { fetchBusinessProfileMedia, hasBusinessProfileConfig } from '../../lib/googleBusinessProfile';

const UNAVAILABLE = {
  live: false,
  configured: false,
  source: 'google-business-profile',
  updatedAt: null,
  total: 0,
  items: [],
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=60');

  if (!hasBusinessProfileConfig()) {
    return res.status(200).json(UNAVAILABLE);
  }

  try {
    const data = await fetchBusinessProfileMedia();
    return res.status(200).json({ ...data, configured: true });
  } catch (error) {
    console.error('Google Business Profile media synchronization failed:', error);
    return res.status(200).json({ ...UNAVAILABLE, configured: true });
  }
}
