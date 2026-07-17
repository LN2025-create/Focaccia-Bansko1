import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import OpeningBadge from '../components/OpeningBadge';
import GoogleRating from '../components/GoogleRating';
import FeatureIcon from '../components/FeatureIcon';
import { useLanguage } from '../hooks/useLanguage';
import { site } from '../lib/content';
import styles from '../styles/Home.module.css';

function VeganIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.7 4.3C13.2 4.5 8.4 6.7 6 10.2c-2.3 3.4-1.5 7.1.6 9.2 2.5-4.3 5.9-7.5 10.1-9.8-3.5 2.7-6.2 6-8.1 9.9 3.6.6 7.2-.7 9.2-3.8 2-3 2.6-7.2 1.9-11.4Z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  const { lang, text, changeLanguage, href } = useLanguage();
  const c = text.home;
  const introParagraphs = Array.isArray(c.intro) ? c.intro : [c.intro];
  const metaDescription = introParagraphs.join(' ');

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
        <section className={styles.hero} data-version="1.1.6">
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <OpeningBadge text={text.open} />
              <p className={styles.eyebrow}>{c.eyebrow}</p>
              <h1>
                <span>{c.title}</span>
                <em>{c.titleAccent}</em>
              </h1>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroCollage}>
                <Image
                  src="/images/home/hero-sandwich-collage.webp"
                  alt={lang === 'en'
                    ? 'Carolina Reaper, Vegano, Mortadella, Gran Magro and Birra & Crudo focaccia sandwiches'
                    : 'Сандвичи Carolina Reaper, Vegano, Mortadella, Gran Magro и Birra & Crudo'}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 1180px"
                />
                <div className={styles.collageCaption}>
                  <span>{lang === 'en' ? 'Five signatures. One focaccia.' : 'Пет различни вкуса. Една фокача.'}</span>
                  <div className={styles.collageVeganMark}><VeganIcon /><strong>{c.veganFriendly}</strong></div>
                </div>
              </div>
            </div>

            <div className={styles.heroDetails}>
              <div className={styles.intro}>{introParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <div className={styles.veganBadge}><VeganIcon /><span>{c.veganFriendly}</span></div>
              <div className={styles.actions}>
                <Link href={href('/menu')} className="button buttonPrimary">{c.menuCta}</Link>
                <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="button buttonSecondary">{c.directionsCta}</a>
              </div>
              <GoogleRating text={text.rating} />
            </div>
          </div>

          <div className={styles.quickFacts}>
            {c.quickFacts.map((fact, index) => (
              <div key={fact.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div className={styles.quickFactIcon}><FeatureIcon name={fact.icon} /></div>
                <p><strong>{fact.title}</strong><small>{fact.text}</small></p>
              </div>
            ))}
          </div>
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
                <article className={`${styles.featureCard} ${styles[`feature_${card.icon}`] || ''}`} key={card.title}>
                  <div className={styles.icon}><FeatureIcon name={card.icon} /></div>
                  <div className={styles.featureCopy}>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </article>
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
