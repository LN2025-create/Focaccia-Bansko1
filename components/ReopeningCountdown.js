import { useEffect, useState } from 'react';
import styles from '../styles/ReopeningCountdown.module.css';

// Date-only announcement. Do not assume a reopening hour until it is confirmed.
// Calendar-day arithmetic is based on Bansko local time, including DST changes.
const REOPENING = { year: 2026, month: 12, day: 3 };
const TARGET_DAY_UTC = Date.UTC(REOPENING.year, REOPENING.month - 1, REOPENING.day);

function daysUntilReopening() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Sofia', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const localDayUtc = Date.UTC(Number(values.year), Number(values.month) - 1, Number(values.day));
  return Math.round((TARGET_DAY_UTC - localDayUtc) / 86400000);
}

export default function ReopeningCountdown({ lang }) {
  const [days, setDays] = useState(null);

  useEffect(() => {
    const refresh = () => setDays(daysUntilReopening());
    refresh();
    const interval = window.setInterval(refresh, 60000);
    const onVisibility = () => { if (!document.hidden) refresh(); };
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  // Automatically remove the dated announcement after reopening day.
  if (days !== null && days < 0) return null;

  const isEnglish = lang === 'en';
  const dayWord = isEnglish ? (days === 1 ? 'DAY' : 'DAYS') : (days === 1 ? 'ДЕН' : 'ДНИ');
  const countLabel = isEnglish ? 'UNTIL REOPENING' : 'ДО ОТВАРЯНЕТО';
  const todayLabel = isEnglish ? 'REOPENING DAY' : 'ДЕНЯТ НА ОТВАРЯНЕТО';

  return (
    <div className={`${styles.banner} reopening-banner`} aria-label={isEnglish ? 'Reopening countdown' : 'Обратно броене до отварянето'}>
      <div className={styles.countdown} aria-live="off">
        {days === 0 ? (
          <span className={styles.today}>{todayLabel}</span>
        ) : (
          <>
            <span className={styles.countNumber}>{days === null ? '—' : days}</span>
            <span className={styles.countUnit}>{dayWord}</span>
            <span className={styles.countDescription}>{countLabel}</span>
          </>
        )}
      </div>
      <p className={styles.announcement}>
        {isEnglish ? 'WE REOPEN ON ' : 'ОТВАРЯМЕ НА '}
        <time dateTime="2026-12-03">03.12</time>
      </p>
    </div>
  );
}
