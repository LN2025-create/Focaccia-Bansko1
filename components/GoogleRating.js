import { site } from '../lib/content';
import { useBusinessProfile } from '../hooks/useBusinessProfile';
import styles from '../styles/GoogleRating.module.css';

export default function GoogleRating({ text, lang = 'bg', className = '' }) {
  const { data, loading } = useBusinessProfile();
  const rating = data?.rating;
  const live = Boolean(data?.live && rating && Number.isFinite(rating.value) && Number.isFinite(rating.count));

  if (!live) {
    const label = lang === 'en' ? 'View the current rating on Google' : 'Виж актуалната оценка в Google';
    return (
      <a className={`${styles.rating} ${styles.unavailable} ${className}`.trim()} href={site.mapsUrl} target="_blank" rel="noreferrer" aria-label={label}>
        <span className={styles.google}>Google</span>
        <span className={styles.currentLabel}>{loading ? (lang === 'en' ? 'Checking…' : 'Проверка…') : label}</span>
      </a>
    );
  }

  const rounded = Math.max(0, Math.min(5, Math.round(rating.value)));
  const ariaLabel = lang === 'en'
    ? `Google rating ${rating.value.toFixed(1)} from ${rating.count} reviews`
    : `Google рейтинг ${rating.value.toFixed(1)} от ${rating.count} отзива`;

  return (
    <a className={`${styles.rating} ${className}`.trim()} href={data.url || site.mapsUrl} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
      <span className={styles.google}>Google</span>
      <strong>{rating.value.toFixed(1)}</strong>
      <span className={styles.stars} aria-hidden="true">
        {'★'.repeat(rounded)}{'☆'.repeat(5 - rounded)}
      </span>
      <span className={styles.count}>{rating.count} {text.reviews}</span>
    </a>
  );
}
