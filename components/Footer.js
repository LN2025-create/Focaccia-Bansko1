import Image from 'next/image';
import Link from 'next/link';
import { site } from '../lib/content';
import styles from '../styles/Footer.module.css';

export default function Footer({ lang, text, href }) {
  const address = lang === 'en' ? site.addressEn : site.addressBg;

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.about}>
          <Image
            src="/images/focaccia-logo-v2.png"
            alt="Focaccia - Panini eccellenti"
            width={2439}
            height={940}
            className={styles.logoImage}
          />
          <p>{text.footer.description}</p>
        </div>
        <div>
          <h2>{text.footer.quickLinks}</h2>
          <nav className={styles.links}>
            <Link href={href('/')}>{text.nav.home}</Link>
            <Link href={href('/menu')}>{text.nav.menu}</Link>
            <Link href={href('/taste')}>{text.nav.taste}</Link>
            <Link href={href('/location')}>{text.nav.location}</Link>
            <Link href={href('/contacts')}>{text.nav.contacts}</Link>
          </nav>
        </div>
        <div>
          <h2>{text.footer.contact}</h2>
          <div className={styles.links}>
            <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer">{address}</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Focaccia Bansko. {text.footer.rights}</span>
        <a href={site.instagramUrl} target="_blank" rel="noreferrer">{site.instagramHandle}</a>
      </div>
    </footer>
  );
}
