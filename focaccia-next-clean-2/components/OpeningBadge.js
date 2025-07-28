'use client';
import { useEffect, useState } from 'react';
import { isOpen, nextOpenTime } from '../lib/openingHours';
import styles from '../styles/OpeningBadge.module.css';

export default function OpeningBadge() {
  const [open, setOpen] = useState(isOpen());
  useEffect(() => {
    const t = setInterval(() => setOpen(isOpen()), 60_000);
    return () => clearInterval(t);
  }, []);
  if (open) {
    return <div className={styles.open}>ОТВОРЕНО</div>;
  }
  return <div className={styles.closed}>ЗАТВОРЕНО • ще отвори в {nextOpenTime()}</div>;
}
