import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../styles/Header.module.css';

const routes = [
  ['/', 'home'],
  ['/menu', 'menu'],
  ['/location', 'location'],
  ['/contacts', 'contacts'],
];

export default function Header({ lang, text, changeLanguage, href }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);


  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={href('/')} className={styles.brand} aria-label="Focaccia Bansko – Home">
          <span className={styles.brandMark} aria-hidden="true">F</span>
          <span className={styles.brandText}>
            <strong>Focaccia</strong>
            <small>Bansko</small>
          </span>
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label="Menu"
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
              className={router.pathname === path ? styles.active : ''}
              onClick={() => setOpen(false)}
            >
              {text.nav[key]}
            </Link>
          ))}
          <div className={styles.language} role="group" aria-label="Language">
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
