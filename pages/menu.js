import Head from 'next/head';
import Layout from '../components/Layout';
import { useLanguage } from '../hooks/useLanguage';
import { site } from '../lib/content';
import styles from '../styles/Menu.module.css';

export default function Menu() {
  const { lang, text, changeLanguage, href } = useLanguage();
  const c = text.menu;

  return (
    <>
      <Head>
        <title>{lang === 'en' ? 'Menu | Focaccia Bansko' : 'Меню | Focaccia Bansko'}</title>
        <meta name="description" content={c.intro} />
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
          <div className="container">
            <div className={styles.menuGrid}>
              {c.categories.map((category, index) => (
                <article className={styles.category} key={category.title}>
                  <div className={styles.number}>{String(index + 1).padStart(2, '0')}</div>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                  <ul>
                    {category.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <div className={styles.cta}>
              <div>
                <h2>{c.ctaTitle}</h2>
                <p>{c.ctaText}</p>
              </div>
              <div className={styles.actions}>
                <a href={`tel:${site.phoneHref}`} className="button buttonPrimary">{c.call}</a>
                <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="button buttonSecondary">{c.instagram}</a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
