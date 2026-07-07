import { useEffect, useState } from 'react';
import { isOpenInBansko } from '../lib/openingHours';
import styles from '../styles/OpeningBadge.module.css';

export default function OpeningBadge({ text }) {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const update = () => setOpen(isOpenInBansko());
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const shownOpen = open !== false;

  return (
    <div className={`${styles.badge} ${shownOpen ? styles.open : styles.closed}`}>
      <span className={styles.dot} aria-hidden="true" />
      <span>{shownOpen ? text.open : `${text.closed} · ${text.opensAt}`}</span>
    </div>
  );
}
