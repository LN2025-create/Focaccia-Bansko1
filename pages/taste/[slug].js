import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useLanguage } from '../../hooks/useLanguage';
import { getTasteArticle, tasteArticles } from '../../lib/tasteArticles';
import styles from '../../styles/TasteStory.module.css';

function Paragraphs({ items }) {
  return items.map((item) => <p key={item}>{item}</p>);
}

export default function TasteStory({ slug }) {
  const { lang, text, changeLanguage, href } = useLanguage();
  const article = getTasteArticle(slug);
  if (!article) return null;
  const c = article[lang];
  const region = lang === 'en' ? article.regionEn : article.region;
  const related = tasteArticles.filter((item) => item.category === article.category && item.slug !== article.slug).slice(0, 3);
  const labels = lang === 'en' ? {
    journey: 'The Journey of Taste', facts: 'Key facts', market: 'Market position', sources: 'Verified sources',
    menu: 'Explore the menu', back: 'Back to The Journey of Taste', related: 'Continue the journey', read: 'Read the story',
  } : {
    journey: 'Пътят на вкуса', facts: 'Основни факти', market: 'Пазарна позиция', sources: 'Проверени източници',
    menu: 'Разгледайте менюто', back: 'Към „Пътят на вкуса“', related: 'Продължете пътя', read: 'Прочетете историята',
  };

  return (
    <>
      <Head>
        <title>{c.title} | Focaccia Bansko</title>
        <meta name="description" content={`${c.subtitle}. ${c.intro[0]}`} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout lang={lang} text={text} changeLanguage={changeLanguage} href={href}>
        <article className={styles.article}>
          <header className={styles.hero}>
            <Image src={article.image} alt={c.title} fill priority sizes="100vw" className={styles.heroImage} />
            <div className={styles.heroShade} />
            <div className={styles.heroCopy}>
              <p>{labels.journey} · {region}</p>
              <h1>{c.title}</h1>
              <span>{c.subtitle}</span>
            </div>
          </header>

          <div className={styles.body}>
            <blockquote>{c.quote}</blockquote>

            <section className={styles.intro}>
              <Paragraphs items={c.intro} />
            </section>

            <section className={styles.split}>
              <div>
                <p className="sectionEyebrow">{region}</p>
                <h2>{c.productTitle}</h2>
              </div>
              <div><Paragraphs items={c.product} /></div>
            </section>

            <section className={styles.why}>
              <p className="sectionEyebrow">Focaccia Bansko</p>
              <h2>{c.whyTitle}</h2>
              <p>{c.why}</p>
            </section>

            <section className={styles.factsWrap}>
              <div className={styles.facts}>
                <p className="sectionEyebrow">{labels.facts}</p>
                {c.facts.map(([key, value]) => (
                  <div className={styles.factRow} key={key}>
                    <span>{key}</span><strong>{value}</strong>
                  </div>
                ))}
              </div>
              <aside className={styles.market}>
                <p className="sectionEyebrow">{labels.market}</p>
                <p>{c.market}</p>
              </aside>
            </section>

            <section className={styles.cta}>
              <div>
                <p className="sectionEyebrow">{labels.journey}</p>
                <h2>{c.cta}</h2>
              </div>
              <Link href={href('/menu')} className="button buttonPrimary">{labels.menu}</Link>
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
                    const rc = item[lang];
                    return (
                      <Link href={href(`/taste/${item.slug}`)} className={styles.relatedCard} key={item.slug}>
                        <div><Image src={item.image} alt={rc.title} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
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
