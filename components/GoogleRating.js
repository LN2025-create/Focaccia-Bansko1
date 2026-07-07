import { useEffect, useState } from 'react';
import { site } from '../lib/content';
import styles from '../styles/GoogleRating.module.css';

const fallback = { rating: 4.9, count: 240, url: site.mapsUrl };

export default function GoogleRating({ text }) {
  const [data, setData] = useState(fallback);

  useEffect(() => {
    let active = true;
    fetch('/api/google-rating')
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error('Rating unavailable'))))
      .then((result) => {
        if (active && Number.isFinite(result.rating) && Number.isFinite(result.count)) {
          setData({ rating: result.rating, count: result.count, url: result.url || site.mapsUrl });
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const rounded = Math.max(0, Math.min(5, Math.round(data.rating)));

  return (
    <a className={styles.rating} href={data.url} target="_blank" rel="noreferrer" aria-label={`Google ${data.rating} from ${data.count} reviews`}>
      <span className={styles.google}>Google</span>
      <strong>{data.rating.toFixed(1)}</strong>
      <span className={styles.stars} aria-hidden="true">
        {'★'.repeat(rounded)}{'☆'.repeat(5 - rounded)}
      </span>
      <span className={styles.count}>{data.count}+ {text.reviews}</span>
    </a>
  );
}
