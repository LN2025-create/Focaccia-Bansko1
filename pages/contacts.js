import Head from 'next/head';
import Layout from '../components/Layout';
import { useLanguage } from '../hooks/useLanguage';
import { site } from '../lib/content';
import styles from '../styles/Contacts.module.css';

export default function Contacts() {
  const { lang, text, changeLanguage, href } = useLanguage();
  const c = text.contacts;
  const address = lang === 'en' ? site.addressEn : site.addressBg;

  const rows = [
    { label: c.phone, value: site.phoneDisplay, href: `tel:${site.phoneHref}` },
    { label: c.email, value: site.email, href: `mailto:${site.email}` },
    { label: c.instagram, value: site.instagramHandle, href: site.instagramUrl, external: true },
    { label: c.hours, value: site.hours },
    { label: c.address, value: address, href: site.mapsUrl, external: true },
  ];

  return (
    <>
      <Head>
        <title>{lang === 'en' ? 'Contacts | Focaccia Bansko' : 'Контакти | Focaccia Bansko'}</title>
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
          <div className={`container ${styles.grid}`}>
            <div className={styles.list}>
              {rows.map((row) => (
                <div className={styles.row} key={row.label}>
                  <span>{row.label}</span>
                  {row.href ? (
                    <a href={row.href} target={row.external ? '_blank' : undefined} rel={row.external ? 'noreferrer' : undefined}>{row.value}</a>
                  ) : <strong>{row.value}</strong>}
                </div>
              ))}
            </div>
            <aside className={styles.card}>
              <div className={styles.cardLogo}>F</div>
              <h2>Focaccia Bansko</h2>
              <p>{address}</p>
              <div className={styles.actions}>
                <a href={`tel:${site.phoneHref}`} className="button buttonPrimary">{c.call}</a>
                <a href={`mailto:${site.email}`} className="button buttonSecondary">{c.write}</a>
              </div>
            </aside>
          </div>
        </section>
      </Layout>
    </>
  );
}
