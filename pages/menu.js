import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { useLanguage } from '../hooks/useLanguage';
import { site } from '../lib/content';
import { sandwiches, drinkGroups } from '../lib/menuData';
import styles from '../styles/Menu.module.css';

function localName(item, lang) {
  if (item.name) return item.name;
  return lang === 'en' ? item.enName : item.bgName;
}

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
            <div className={styles.heroActions}>
              <a href="#sandwiches" className="button buttonPrimary">{c.sandwichesLink}</a>
              <a href="#drinks" className="button buttonSecondary">{c.drinksLink}</a>
            </div>
          </div>
        </section>

        <section id="sandwiches" className="section sectionTight">
          <div className="container">
            <div className={styles.sectionHeading}>
              <div>
                <p className="sectionEyebrow">{c.freshBread}</p>
                <h2>{c.sandwichesTitle}</h2>
              </div>
              <p>{c.priceNote}</p>
            </div>

            <div className={styles.sandwichGrid}>
              {sandwiches.map((item) => (
                <article className={styles.sandwichCard} key={item.name}>
                  <div className={styles.sandwichImage}>
                    <Image
                      src={item.image}
                      alt={`${item.name} - Focaccia Bansko`}
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                  </div>
                  <div className={styles.sandwichBody}>
                    <div className={styles.cardTop}>
                      <div>
                        <h3>{item.name}{item.spicy ? <span className={styles.spicy} title={c.spicy}> 🌶</span> : null}</h3>
                        <span className={styles.weight}>{item.weight}</span>
                      </div>
                      <strong className={styles.price}>{item.price}</strong>
                    </div>
                    <p>{item[lang]}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className={styles.foodNote}>{c.foodNote}</p>
          </div>
        </section>

        <section id="drinks" className={`${styles.drinksSection} section`}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <div>
                <p className="sectionEyebrow">{c.italianSelection}</p>
                <h2>{c.drinksTitle}</h2>
              </div>
              <p>{c.priceNote}</p>
            </div>

            <div className={styles.drinkGrid}>
              {drinkGroups.map((group) => (
                <article className={styles.drinkGroup} key={group.enTitle}>
                  <h3>{lang === 'en' ? group.enTitle : group.bgTitle}</h3>
                  <div className={styles.drinkRows}>
                    {group.items.map((item, index) => (
                      <div className={styles.drinkRow} key={`${localName(item, lang)}-${item.volume}-${index}`}>
                        <div>
                          <strong>{localName(item, lang)}</strong>
                          <span>{item.volume}</span>
                        </div>
                        <b>{item.price}</b>
                      </div>
                    ))}
                  </div>
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
