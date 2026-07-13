import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useLanguage } from '../../hooks/useLanguage';
import { getTasteArticle, tasteArticles } from '../../lib/tasteArticles';
import { getTasteProductMeta, tasteRegions } from '../../lib/tasteProductMeta';
import styles from '../../styles/TasteStory.module.css';

function Paragraphs({ items }) {
  return items.map((item) => <p key={item}>{item}</p>);
}

export default function TasteStory({ slug }) {
  const { lang, text, changeLanguage, href } = useLanguage();
  const article = getTasteArticle(slug);
  const meta = getTasteProductMeta(slug);
  if (!article || !meta) return null;

  const c = article[lang];
  const m = meta[lang];
  const region = tasteRegions[meta.regionId]?.[lang];
  const related = tasteArticles
    .filter((item) => getTasteProductMeta(item.slug)?.regionId === meta.regionId && item.slug !== article.slug)
    .slice(0, 3);
  const longTitle = m.title.length > 28;

  const labels = lang === 'en' ? {
    journey: 'The Journey of Taste', product: 'The product', producer: 'The producer', facts: 'Key facts',
    market: 'Verified market position', region: 'The region', sources: 'Verified sources', menu: 'Explore the menu',
    back: 'Back to The Journey of Taste', related: 'More from this region', read: 'Read the story',
    atFocaccia: 'At Focaccia Bansko', why: 'Why we chose it',
  } : {
    journey: 'Пътят на вкуса', product: 'Продуктът', producer: 'Производителят', facts: 'Основни факти',
    market: 'Проверена пазарна позиция', region: 'Регионът', sources: 'Проверени източници', menu: 'Разгледайте менюто',
    back: 'Към „Пътят на вкуса“', related: 'Още от този регион', read: 'Прочетете историята',
    atFocaccia: 'Във Focaccia Bansko', why: 'Защо го избрахме',
  };

  return (
    <>
      <Head>
        <title>{m.title} | Focaccia Bansko</title>
        <meta name="description" content={`${m.subtitle}. ${m.cardNote}`} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout lang={lang} text={text} changeLanguage={changeLanguage} href={href}>
        <article className={styles.article}>
          <header className={styles.hero}>
            <div className={styles.heroInner}>
              <div className={styles.coverFrame}>
                <Image
                  src={meta.heroImage || article.image}
                  alt={m.title}
                  fill
                  priority
                  sizes="(max-width: 820px) 100vw, 1120px"
                  className={`${styles.heroImage} ${slug === 'mazza' ? styles.mazzaHeroImage : ''}`}
                />
              </div>
              <div className={styles.heroCopy}>
                <p>{labels.journey} · {region?.name}</p>
                <h1 className={longTitle ? styles.longTitle : undefined}>{m.title}</h1>
                <span>{m.subtitle}</span>
              </div>
            </div>
          </header>

          <div className={styles.body}>
            <section className={styles.availability}>
              <div>
                <p className="sectionEyebrow">{labels.atFocaccia}</p>
                <h2>{m.cardNote}</h2>
              </div>
              <Link href={href('/menu')} className={styles.inlineLink}>{labels.menu} →</Link>
            </section>

            <blockquote>{c.quote}</blockquote>

            <section className={styles.split}>
              <div>
                <p className="sectionEyebrow">{labels.product}</p>
                <h2>{m.processTitle}</h2>
              </div>
              <div>
                <Paragraphs items={m.process} />
                <Paragraphs items={c.product} />
              </div>
            </section>

            <section className={styles.producerSection}>
              <div>
                <p className="sectionEyebrow">{labels.producer}</p>
                <h2>{m.producerTitle}</h2>
              </div>
              <div><Paragraphs items={c.intro} /></div>
            </section>

            <section className={styles.why}>
              <p className="sectionEyebrow">Focaccia Bansko</p>
              <h2>{c.whyTitle || labels.why}</h2>
              <p>{c.why}</p>
            </section>

            <section className={`${styles.factsWrap} ${!meta.marketVerified ? styles.factsOnly : ''}`}>
              <div className={styles.facts}>
                <p className="sectionEyebrow">{labels.facts}</p>
                {c.facts.map(([key, value]) => (
                  <div className={styles.factRow} key={key}>
                    <span>{key}</span><strong>{value}</strong>
                  </div>
                ))}
              </div>
              {meta.marketVerified && (
                <aside className={styles.market}>
                  <p className="sectionEyebrow">{labels.market}</p>
                  <p>{c.market}</p>
                </aside>
              )}
            </section>

            <section className={styles.regionSection}>
              <div>
                <p className="sectionEyebrow">{labels.region}</p>
                <h2>{region?.name} · {region?.city}</h2>
                <p>{region?.text}</p>
              </div>
            </section>

            <section className={styles.culinaryGrid}>
              <div>
                <p className="sectionEyebrow">{m.usesTitle}</p>
                <h2>{m.usesTitle}</h2>
                <p>{m.uses}</p>
              </div>
              <div>
                <p className="sectionEyebrow">{m.pairingTitle}</p>
                <h2>{m.pairingTitle}</h2>
                <p>{m.pairing}</p>
              </div>
            </section>

            <section className={styles.cta}>
              <div className={styles.ctaImage}>
                <Image src={meta.sandwichImage} alt={m.cardNote} fill sizes="(max-width: 780px) 100vw, 42vw" />
              </div>
              <div className={styles.ctaCopy}>
                <p className="sectionEyebrow">{labels.atFocaccia}</p>
                <h2>{m.title}</h2>
                <p>{m.sandwichCopy}</p>
                <Link href={href('/menu')} className="button buttonPrimary">{labels.menu}</Link>
              </div>
            </section>

            <section className={styles.sources}>
              <p className="sectionEyebrow">{labels.sources}</p>
              <div>
                {article.sources.map(([name, url]) => (
                  <a href={url} target="_blank" rel="noreferrer" key={url}>{name} ↗</a>
                ))}
              </div>
            </section>

            {related.length > 0 && (
              <section className={styles.related}>
                <h2>{labels.related}</h2>
                <div className={styles.relatedGrid}>
                  {related.map((item) => {
                    const relatedMeta = getTasteProductMeta(item.slug);
                    const rc = relatedMeta[lang];
                    return (
                      <Link href={href(`/taste/${item.slug}`)} className={styles.relatedCard} key={item.slug}>
                        <div><Image src={relatedMeta.heroImage || item.image} alt={rc.title} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
                        <strong>{rc.title}</strong><span>{labels.read} →</span>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

            <Link href={href('/taste')} className={styles.back}>← {labels.back}</Link>
          </div>
        </article>
      </Layout>
    </>
  );
}

export function getStaticPaths() {
  return { paths: tasteArticles.map((item) => ({ params: { slug: item.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
