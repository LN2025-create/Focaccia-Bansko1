import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import OpeningBadge from '../components/OpeningBadge';
import GoogleRating from '../components/GoogleRating';
import FeatureIcon from '../components/FeatureIcon';
import { useLanguage } from '../hooks/useLanguage';
import { site } from '../lib/content';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { lang, text, changeLanguage, href } = useLanguage();
  const c = text.home;
  const introParagraphs = Array.isArray(c.intro) ? c.intro : [c.intro];
  const metaDescription = introParagraphs.join(' ');

  return (
    <>
      <Head>
        <title>{lang === 'en' ? 'Focaccia Bansko | Fresh focaccia & panini' : 'Focaccia Bansko | Прясна фокача и панини'}</title>
        <meta name="description" content={metaDescription} />
        <meta name="theme-color" content="#20201e" />
        <meta property="og:title" content="Focaccia Bansko" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="restaurant" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout lang={lang} text={text} changeLanguage={changeLanguage} href={href}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <OpeningBadge text={text.open} />
              <p className={styles.eyebrow}>{c.eyebrow}</p>
              <h1><span>{c.title}</span><em>{c.titleAccent}</em></h1>
            </div>
            <div className={styles.heroVisual}>
              <div
                className={styles.imageFrame}
                role="img"
                aria-label={lang === 'en' ? 'A selection of Focaccia Bansko sandwiches' : 'Селекция от сандвичите на Focaccia Bansko'}
              />
            </div>
            <div className={styles.heroDetails}>
              <div className={styles.intro}>{introParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
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
