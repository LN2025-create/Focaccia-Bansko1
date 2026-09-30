import { site } from '../lib/content';
import { useBusinessProfile } from '../hooks/useBusinessProfile';
import styles from '../styles/OpeningBadge.module.css';

function shortDate(date, lang) {
  if (!date) return '';
  const [year, month, day] = date.split('-').map(Number);
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'bg-BG', {
    timeZone: 'Europe/Sofia',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  }).format(new Date(Date.UTC(year, month - 1, day, 12)));
}

export default function OpeningBadge({ text, lang = 'bg' }) {
  const { data, loading } = useBusinessProfile();
  const hours = data?.hours;

  if (!data?.live || !hours) {
    const label = loading
      ? (lang === 'en' ? 'Checking opening hours…' : 'Проверка на работното време…')
      : (lang === 'en' ? 'Opening hours on Google' : 'Работно време в Google');

    return (
      <a className={`${styles.badge} ${styles.unknown}`} href={site.mapsUrl} target="_blank" rel="noreferrer">
        <span className={styles.dot} aria-hidden="true" />
        <span>{label}</span>
      </a>
    );
  }

  if (hours.status === 'temporarily_closed') {
    return (
      <div className={`${styles.badge} ${styles.closed}`}>
        <span className={styles.dot} aria-hidden="true" />
        <span>{lang === 'en' ? 'TEMPORARILY CLOSED' : 'ВРЕМЕННО ЗАТВОРЕНО'}</span>
      </div>
    );
  }

  if (hours.status === 'permanently_closed') {
    return (
      <div className={`${styles.badge} ${styles.closed}`}>
        <span className={styles.dot} aria-hidden="true" />
        <span>{lang === 'en' ? 'CLOSED' : 'ЗАТВОРЕНО'}</span>
      </div>
    );
  }

  if (hours.status === 'open') {
    const close = hours.currentPeriod?.close;
    const label = close
      ? `${text.open} · ${lang === 'en' ? 'until' : 'до'} ${close}`
      : text.open;
    return (
      <div className={`${styles.badge} ${styles.open}`}>
        <span className={styles.dot} aria-hidden="true" />
        <span>{label}</span>
      </div>
    );
  }

  const next = hours.nextOpen;
  const today = hours.today?.date;
  const datePart = next?.date && next.date !== today ? ` ${shortDate(next.date, lang)}` : '';
  const nextLabel = next
    ? `${text.closed} · ${lang === 'en' ? 'opens' : 'отваря'}${datePart} ${lang === 'en' ? 'at' : 'в'} ${next.time}`
    : text.closed;

  return (
    <div className={`${styles.badge} ${styles.closed}`}>
      <span className={styles.dot} aria-hidden="true" />
      <span>{nextLabel}</span>
    </div>
  );
}
