import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../styles/Header.module.css';

const routes = [
  ['/', 'home'],
  ['/menu', 'menu'],
  ['/taste', 'taste'],
  ['/location', 'location'],
  ['/contacts', 'contacts'],
];

export default function Header({ lang, text, changeLanguage, href }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const homeLabel = lang === 'en' ? 'Focaccia Bansko - Home' : 'Focaccia Bansko - Начало';
  const menuLabel = lang === 'en' ? 'Menu' : 'Меню';
  const languageLabel = lang === 'en' ? 'Language' : 'Език';

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={href('/')} className={styles.brand} aria-label={homeLabel}>
          <Image
            src="/images/focaccia-logo-v2.png"
            alt="Focaccia - Panini eccellenti"
            width={2439}
            height={940}
            priority
            className={styles.brandLogo}
          />
        </Link>

        <a
          href="https://restaurantguru.com/Focaccia-Bansko"
          target="_blank"
          rel="noreferrer"
          className={styles.restaurantGuruAward}
          aria-label={lang === 'en' ? 'Recommended on Restaurant Guru 2026' : 'Препоръчано от Restaurant Guru 2026'}
        >
          <Image
            src="/images/restaurant-guru-award-2026.png"
            alt=""
            width={858}
            height={903}
            className={styles.restaurantGuruIcon}
          />
          <span className={styles.restaurantGuruCopy}>
            <strong>RECOMMENDED</strong>
            <small>ON RESTAURANT GURU</small>
            <b>2026</b>
          </span>
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={menuLabel}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="main-navigation" className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {routes.map(([path, key]) => (
            <Link
              key={path}
              href={href(path)}
              className={(path === '/' ? router.pathname === '/' : router.pathname.startsWith(path)) ? styles.active : ''}
              onClick={() => setOpen(false)}
            >
              {text.nav[key]}
            </Link>
          ))}
          <div className={styles.language} role="group" aria-label={languageLabel}>
            <button
              type="button"
              onClick={() => { changeLanguage('bg'); setOpen(false); }}
              className={lang === 'bg' ? styles.languageActive : ''}
              aria-pressed={lang === 'bg'}
            >
              BG
            </button>
            <span>/</span>
            <button
              type="button"
              onClick={() => { changeLanguage('en'); setOpen(false); }}
              className={lang === 'en' ? styles.languageActive : ''}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
