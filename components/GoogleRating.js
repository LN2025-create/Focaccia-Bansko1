import { useEffect, useState } from 'react';
import { site } from '../lib/content';
import styles from '../styles/GoogleRating.module.css';

const fallback = { rating: 4.9, count: 240, url: site.mapsUrl, live: false };
const REFRESH_INTERVAL = 30 * 60 * 1000;

export default function GoogleRating({ text, lang = 'bg' }) {
  const [data, setData] = useState(fallback);

  useEffect(() => {
    let active = true;

    const loadRating = () => {
      fetch('/api/google-rating', { cache: 'no-store' })
        .then((response) => (response.ok ? response.json() : Promise.reject(new Error('Rating unavailable'))))
        .then((result) => {
          if (active && Number.isFinite(result.rating) && Number.isFinite(result.count)) {
            setData({
              rating: result.rating,
              count: result.count,
              url: result.url || site.mapsUrl,
              live: Boolean(result.live),
            });
          }
        })
        .catch(() => {});
    };

    loadRating();
    const intervalId = window.setInterval(loadRating, REFRESH_INTERVAL);

    return () => {
      active = false;
      window.clearInterval(intervalId);
    };
  }, []);

  const rounded = Math.max(0, Math.min(5, Math.round(data.rating)));
  const ariaLabel = lang === 'en'
    ? `Google rating ${data.rating} from ${data.count} reviews`
    : `Google рейтинг ${data.rating} от ${data.count} отзива`;
  const countLabel = `${data.count}${data.live ? '' : '+'} ${text.reviews}`;

  return (
    <a className={styles.rating} href={data.url} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
      <span className={styles.google}>Google</span>
      <strong>{data.rating.toFixed(1)}</strong>
      <span className={styles.stars} aria-hidden="true">
        {'★'.repeat(rounded)}{'☆'.repeat(5 - rounded)}
      </span>
      <span className={styles.count}>{countLabel}</span>
    </a>
  );
}
