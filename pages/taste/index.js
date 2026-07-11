import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useLanguage } from '../../hooks/useLanguage';
import { tasteCopy } from '../../lib/tasteData';
import styles from '../../styles/Taste.module.css';

export default function TasteLanding() {
  const { lang, text, changeLanguage, href } = useLanguage();
  const c = tasteCopy[lang].landing;

  return (
    <>
      <Head>
        <title>{lang === 'en' ? 'The Journey of Taste | Focaccia Bansko' : 'Пътят на вкуса | Focaccia Bansko'}</title>
        <meta name="description" content={c.intro} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout lang={lang} text={text} changeLanguage={changeLanguage} href={href}>
        <section className={styles.landingHero}>
          <div className="container narrow">
            <p className="sectionEyebrow">{c.eyebrow}</p>
            <h1>{c.title}</h1>
            <p>{c.intro}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Link href={href('/taste/focaccia')} className={styles.featuredCard}>
              <div className={styles.featuredImage}>
                <Image
                  src="/images/taste/dough-poster.jpg"
                  alt={c.featuredTitle}
                  fill
                  priority
                  sizes="(max-width: 850px) 100vw, 55vw"
                />
              </div>
              <div className={styles.featuredCopy}>
                <p className="sectionEyebrow">{c.featuredEyebrow}</p>
                <h2>{c.featuredTitle}</h2>
                <p>{c.featuredText}</p>
                <span>{c.read} →</span>
              </div>
            </Link>

            <div className={styles.nextPanel}>
              <div>
                <p className="sectionEyebrow">Caputo · Mazza · Sabelli · Ignalat</p>
                <h2>{c.journeyTitle}</h2>
              </div>
              <p>{c.journeyText}</p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
