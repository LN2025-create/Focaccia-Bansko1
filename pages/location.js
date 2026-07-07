import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { useLanguage } from '../hooks/useLanguage';
import { site } from '../lib/content';
import styles from '../styles/Location.module.css';

export default function Location() {
  const { lang, text, changeLanguage, href } = useLanguage();
  const c = text.location;
  const address = lang === 'en' ? site.addressEn : site.addressBg;

  return (
    <>
      <Head>
        <title>{lang === 'en' ? 'Location | Focaccia Bansko' : 'Локация | Focaccia Bansko'}</title>
        <meta name="description" content={`${c.intro} ${address}`} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout lang={lang} text={text} changeLanguage={changeLanguage} href={href}>
        <section className="pageHero">
          <div className="container narrow">
            <p className="sectionEyebrow">{c.eyebrow}</p>
            <h1>{c.title}</h1>
            <p>{c.intro}</p>
          </div>
        </section>
        <section className="section sectionTight">
          <div className={`container ${styles.grid}`}>
            <div className={styles.details}>
              <div className={styles.detail}>
                <span>{c.addressLabel}</span>
                <strong>{address}</strong>
              </div>
              <div className={styles.detail}>
                <span>{c.hoursLabel}</span>
                <strong>{site.hours}</strong>
              </div>
              <div className={styles.detail}>
                <span>{c.phoneLabel}</span>
                <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
              </div>
              <a className="button buttonPrimary" href={site.mapsUrl} target="_blank" rel="noreferrer">{c.directions}</a>
            </div>

            <div className={styles.mapColumn}>
              <figure className={styles.planWrap}>
                <Image
                  src="/images/focaccia-location-map.png"
                  alt={c.planAlt}
                  width={1197}
                  height={1086}
                  className={styles.planImage}
                  priority
                />
                <figcaption>
                  <strong>{c.planTitle}</strong>
                  <span>{c.planText}</span>
                </figcaption>
              </figure>

              <div className={styles.mapWrap}>
                <iframe
                  title="Focaccia Bansko map"
                  src={site.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
