import { site } from '../lib/content';
import { useBusinessProfile } from '../hooks/useBusinessProfile';
import styles from '../styles/BusinessHours.module.css';

function formatDate(date, lang) {
  if (!date) return '';
  const [year, month, day] = date.split('-').map(Number);
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'bg-BG', {
    timeZone: 'Europe/Sofia',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date(Date.UTC(year, month - 1, day, 12)));
}

function todayHours(hours, lang) {
  if (!hours?.today) return '';
  if (hours.today.closed) return lang === 'en' ? 'Closed today' : 'Затворено днес';
  const periods = hours.today.periods.map((period) => `${period.open}–${period.close}`).join(', ');
  const prefix = hours.today.special
    ? (lang === 'en' ? 'Special hours today' : 'Специално работно време днес')
    : (lang === 'en' ? 'Today' : 'Днес');
  return `${prefix}: ${periods}`;
}

export default function BusinessHours({ lang = 'bg', compact = false }) {
  const { data, loading } = useBusinessProfile();
  const hours = data?.hours;

  if (!data?.live || !hours) {
    return (
      <a className={`${styles.hours} ${compact ? styles.compact : ''}`} href={site.mapsUrl} target="_blank" rel="noreferrer">
        <strong>{loading ? (lang === 'en' ? 'Checking opening hours…' : 'Проверка на работното време…') : (lang === 'en' ? 'Check current opening hours' : 'Провери актуалното работно време')}</strong>
        <span>{lang === 'en' ? 'Directly on Google' : 'Директно в Google'}</span>
      </a>
    );
  }

  const isOpen = hours.status === 'open';
  const next = hours.nextOpen;
  const nextText = !isOpen && next
    ? `${lang === 'en' ? 'Next opening' : 'Следващо отваряне'}: ${formatDate(next.date, lang)}, ${next.time}`
    : todayHours(hours, lang);

  return (
    <div className={`${styles.hours} ${compact ? styles.compact : ''}`}>
      <strong className={isOpen ? styles.open : styles.closed}>{isOpen ? (lang === 'en' ? 'Open now' : 'Отворено сега') : (lang === 'en' ? 'Closed now' : 'Затворено сега')}</strong>
      <span>{nextText}</span>
      <a href={site.mapsUrl} target="_blank" rel="noreferrer">{lang === 'en' ? 'Verified by Google' : 'Потвърдено от Google'}</a>
    </div>
  );
}
