import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import OpeningBadge from '../components/OpeningBadge';
import GoogleRating from '../components/GoogleRating';
import BusinessHours from '../components/BusinessHours';
import FeatureIcon from '../components/FeatureIcon';
import HeroGoogleGallery from '../components/HeroGoogleGallery';
import { useLanguage } from '../hooks/useLanguage';
import { site } from '../lib/content';
import styles from '../styles/Home.module.css';

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6.5h16M4 12h16M4 17.5h10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="10" r="2.2" fill="currentColor" />
    </svg>
  );
}

function SignatureIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.8l1.55 4.7 4.7 1.55-4.7 1.55L12 15.3l-1.55-4.7-4.7-1.55 4.7-1.55L12 2.8Zm6 11.7.85 2.55 2.55.85-2.55.85L18 21.3l-.85-2.55-2.55-.85 2.55-.85L18 14.5Z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  const { lang, text, changeLanguage, href } = useLanguage();
  const c = text.home;
  const introParagraphs = Array.isArray(c.intro) ? c.intro : [c.intro];
  const metaDescription = introParagraphs.join(' ');
  const titleLabel = `${c.title} ${c.titleAccent}`;
  const openLabel = lang === 'en' ? 'Open page' : 'Отвори страницата';

  return (
    <>
      <Head>
        <title>{lang === 'en' ? 'Focaccia Bansko | Fresh focaccia sandwiches' : 'Focaccia Bansko | Сандвичи с прясна фокача'}</title>
        <meta name="description" content={metaDescription} />
        <meta name="theme-color" content="#20201e" />
        <meta property="og:title" content="Focaccia Bansko" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="restaurant" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout lang={lang} text={text} changeLanguage={changeLanguage} href={href}>
        <section className={styles.hero} data-version="1.2.7">
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroMain}>
              <div className={styles.heroTextColumn}>
                <div className={styles.heroTopActions}>
                  <OpeningBadge text={text.open} lang={lang} />
                  <Link href={href('/menu')} className={styles.heroPillAction}>
                    <MenuIcon />
                    <span>{c.menuCta}</span>
                  </Link>
                  <a href={site.mapsUrl} target="_blank" rel="noreferrer" className={styles.heroPillAction}>
                    <PinIcon />
                    <span>{c.directionsCta}</span>
                  </a>
                </div>

                <div className={styles.heroCopy}>
                  <p className={styles.eyebrow}>{c.eyebrow}</p>
                  <h1 aria-label={titleLabel}>
                    <span>{c.title}</span>
                    <em>{c.titleAccent}</em>
                  </h1>
                  <Link href={href('/menu')} className={styles.signatureBadge}>
                    <SignatureIcon />
                    <span>{c.signatureLabel}</span>
                  </Link>
                </div>

                <div className={styles.heroDetails}>
                  <div className={styles.intro}>
                    {introParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  <div className={styles.heroGallerySlot}>
                    <HeroGoogleGallery lang={lang} />
                  </div>
                  <GoogleRating text={text.rating} lang={lang} />
                </div>
              </div>

              <figure className={styles.heroVisual}>
                <div className={styles.heroImageFrame}>
                  <Image
                    src="/images/home/hero-main.webp"
                    alt={lang === 'en' ? 'Artisanal focaccia sandwich from Focaccia Bansko' : 'Авторски сандвич с прясно изпечена фокача от Focaccia Bansko'}
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 45vw"
                    className={styles.heroImage}
                  />
                </div>
              </figure>
            </div>
          </div>

          <nav className={styles.quickFacts} aria-label={lang === 'en' ? 'Quick links' : 'Бързи връзки'}>
            {c.quickFacts.map((fact, index) => (
              <Link
                href={href(fact.path)}
                className={styles.quickFactLink}
                key={fact.title}
                aria-label={`${fact.title} — ${openLabel}`}
              >
                <span className={styles.quickFactNumber}>{String(index + 1).padStart(2, '0')}</span>
                <div className={styles.quickFactIcon}><FeatureIcon name={fact.icon} /></div>
                <p><strong>{fact.title}</strong><small>{fact.text}</small></p>
                <span className={styles.quickFactArrow} aria-hidden="true">→</span>
              </Link>
            ))}
          </nav>
        </section>

        <section className="section">
          <div className="container">
            <p className="sectionEyebrow">{c.sectionEyebrow}</p>
            <div className={styles.sectionHeading}>
              <h2>{c.sectionTitle}</h2>
              <p>{c.sectionText}</p>
            </div>
            <div className={styles.featureGrid}>
              {c.cards.map((card) => (
                <Link
                  href={href(card.path)}
                  className={`${styles.featureCard} ${styles[`feature_${card.icon}`] || ''}`}
                  key={card.title}
                  aria-label={`${card.title} — ${openLabel}`}
                >
                  <div className={styles.icon}><FeatureIcon name={card.icon} /></div>
                  <div className={styles.featureCopy}>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                  <span className={styles.cardArrow} aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.visit}>
          <div className="container">
            <div className={styles.visitCard}>
              <div>
                <p className="sectionEyebrow">Focaccia Bansko</p>
                <h2>{c.visitTitle}</h2>
                <p>{c.visitText}</p>
                <BusinessHours lang={lang} compact />
              </div>
              <div className={styles.visitActions}>
                <a href={`tel:${site.phoneHref}`} className="button buttonPrimary">{c.call}</a>
                <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="button buttonSecondary">{c.directionsCta}</a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
