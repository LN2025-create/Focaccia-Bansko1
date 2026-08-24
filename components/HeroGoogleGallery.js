import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useBusinessMedia } from '../hooks/useBusinessMedia';
import styles from '../styles/HeroGoogleGallery.module.css';

const SLIDE_INTERVAL = 4500;
const SWIPE_THRESHOLD = 42;

function wrapIndex(index, length) {
  if (!length) return 0;
  return ((index % length) + length) % length;
}

export default function HeroGoogleGallery({ lang = 'bg' }) {
  const { data, loading } = useBusinessMedia();
  const items = useMemo(() => (Array.isArray(data?.items) ? data.items : []), [data]);
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);
  const previousFocusRef = useRef(null);
  const touchStartX = useRef(null);

  const goTo = useCallback((offset) => {
    setCurrent((value) => wrapIndex(value + offset, items.length));
  }, [items.length]);

  const next = useCallback(() => goTo(1), [goTo]);
  const previous = useCallback(() => goTo(-1), [goTo]);

  useEffect(() => {
    if (current >= items.length && items.length) setCurrent(0);
  }, [current, items.length]);

  useEffect(() => {
    if (items.length <= 1 || open) return undefined;
    const timer = window.setInterval(next, SLIDE_INTERVAL);
    return () => window.clearInterval(timer);
  }, [items.length, next, open]);

  useEffect(() => {
    if (!items.length) return undefined;

    const preload = (index) => {
      const item = items[wrapIndex(index, items.length)];
      if (!item?.imageUrl) return;
      const image = new window.Image();
      image.src = item.imageUrl;
    };

    preload(current + 1);
    preload(current - 1);
    return undefined;
  }, [current, items]);

  useEffect(() => {
    if (!open) return undefined;

    previousFocusRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') previous();
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus?.();
    };
  }, [next, open, previous]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches?.[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current == null) return;
    const endX = event.changedTouches?.[0]?.clientX;
    if (typeof endX !== 'number') return;

    const delta = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) next();
    else previous();
  };

  const title = lang === 'en' ? 'Focaccia in photos' : 'Focaccia в снимки';
  const openLabel = lang === 'en' ? 'Open gallery' : 'Отвори галерията';
  const loadingLabel = lang === 'en' ? 'Loading current photos…' : 'Зареждам актуални снимки…';
  const emptyLabel = lang === 'en'
    ? 'Current Google profile photos will appear here.'
    : 'Тук ще се появяват актуалните снимки от Google профила.';
  const photoWord = lang === 'en' ? 'photos' : 'снимки';
  const swipeHint = lang === 'en' ? 'Swipe or use the arrows' : 'Суап или използвай стрелките';

  if (!items.length) {
    return (
      <div className={`${styles.card} ${styles.placeholder}`} aria-live="polite">
        <strong>{title}</strong>
        <span>{loading ? loadingLabel : emptyLabel}</span>
      </div>
    );
  }

  const safeIndex = wrapIndex(current, items.length);
  const item = items[safeIndex];
  const itemAlt = lang === 'en'
    ? `Focaccia Bansko photo ${safeIndex + 1} of ${items.length}`
    : `Снимка ${safeIndex + 1} от ${items.length} на Focaccia Bansko`;

  return (
    <>
      <button type="button" className={styles.card} onClick={() => setOpen(true)} aria-label={openLabel}>
        <img
          key={item.id}
          src={item.thumbnailUrl || item.imageUrl}
          alt={itemAlt}
          className={styles.previewImage}
        />
        <span className={styles.previewShade} aria-hidden="true" />
        <span className={styles.caption}>
          <strong>{title}</strong>
          <span>{items.length} {photoWord} · {openLabel}</span>
        </span>
        <span className={styles.progress} aria-hidden="true">
          <span style={{ width: `${((safeIndex + 1) / items.length) * 100}%` }} />
        </span>
      </button>

      {open && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setOpen(false)}
        >
          <div
            className={styles.modalInner}
            onClick={(event) => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className={styles.modalStage}>
              <img
                key={item.id}
                src={item.imageUrl}
                alt={itemAlt}
                className={styles.modalImage}
              />
            </div>

            {items.length > 1 && (
              <>
                <button
                  type="button"
                  className={`${styles.navButton} ${styles.previous}`}
                  onClick={previous}
                  aria-label={lang === 'en' ? 'Previous photo' : 'Предишна снимка'}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className={`${styles.navButton} ${styles.next}`}
                  onClick={next}
                  aria-label={lang === 'en' ? 'Next photo' : 'Следваща снимка'}
                >
                  ›
                </button>
              </>
            )}

            <button
              ref={closeRef}
              type="button"
              className={styles.closeButton}
              onClick={() => setOpen(false)}
              aria-label={lang === 'en' ? 'Close gallery' : 'Затвори галерията'}
            >
              ×
            </button>

            <div className={styles.modalFooter}>
              <strong>{safeIndex + 1} / {items.length}</strong>
              <span>{swipeHint}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
