import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useLanguage } from '../../hooks/useLanguage';
import { tasteCopy } from '../../lib/tasteData';
import { tasteArticles, tasteCategories } from '../../lib/tasteArticles';
import styles from '../../styles/Taste.module.css';

const mapPoints = [
  { slug: 'igor-gorgonzola', label: 'Novara', x: 46, y: 17 },
  { slug: 'agriform-provolone', label: 'Verona', x: 57, y: 24 },
  { slug: 'coati-napoli', label: 'Valpolicella', x: 52, y: 21 },
  { slug: 'caffe-corsini', label: 'Arezzo', x: 54, y: 42 },
  { slug: 'sabelli-burrata', label: 'Ascoli', x: 66, y: 48 },
  { slug: 'trevalli-tartufo', label: 'Macerata', x: 64, y: 43 },
  { slug: 'casa-modena', label: 'Modena', x: 50, y: 33 },
  { slug: 'parmigiano-reggiano', label: 'Emilia', x: 47, y: 36 },
  { slug: 'caputo', label: 'Napoli', x: 65, y: 68 },
  { slug: 'ignalat-stracciatella', label: 'Puglia', x: 80, y: 69 },
  { slug: 'mazza', label: 'Brescia', x: 48, y: 22 },
  { slug: 'mangiafuoco', label: 'Mantova', x: 49, y: 28 },
];

export default function TasteLanding() {
  const { lang, text, changeLanguage, href } = useLanguage();
  const c = tasteCopy[lang].landing;
  const labels = lang === 'en' ? {
    mapEyebrow: 'From Italy to Bansko', mapTitle: 'Follow the regions behind the flavour', mapText: 'Select a point or explore the stories below.',
    all: 'All stories', read: 'Read the story', region: 'Origin', ending: 'The journey ends in Bansko',
    endingText: 'Ingredients from different Italian regions meet in one focaccia, prepared and baked on site every day.',
  } : {
    mapEyebrow: 'От Италия до Банско', mapTitle: 'Проследете регионите зад вкуса', mapText: 'Изберете точка или разгледайте историите по-долу.',
    all: 'Всички истории', read: 'Прочетете историята', region: 'Произход', ending: 'Пътят завършва в Банско',
    endingText: 'Съставки от различни италиански региони се срещат в една фокача, приготвена и изпечена на място всеки ден.',
  };

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
                <Image src="/images/taste/dough-poster.jpg" alt={c.featuredTitle} fill priority sizes="(max-width: 850px) 100vw, 55vw" />
              </div>
              <div className={styles.featuredCopy}>
                <p className="sectionEyebrow">{c.featuredEyebrow}</p>
                <h2>{c.featuredTitle}</h2>
                <p>{c.featuredText}</p>
                <span>{c.read} →</span>
              </div>
            </Link>

            <section className={styles.mapSection}>
              <div className={styles.mapCopy}>
                <p className="sectionEyebrow">{labels.mapEyebrow}</p>
                <h2>{labels.mapTitle}</h2>
                <p>{labels.mapText}</p>
                <div className={styles.mapLegend}>
                  {mapPoints.map((point) => {
                    const article = tasteArticles.find((item) => item.slug === point.slug);
                    if (!article) return null;
                    return <Link key={point.slug} href={href(`/taste/${point.slug}`)}><span />{article[lang].title.split(' — ')[0]}</Link>;
                  })}
                </div>
              </div>
              <div className={styles.mapVisual}>
                <Image src="/images/taste/italy-journey-map.png" alt={labels.mapTitle} fill sizes="(max-width: 850px) 100vw, 45vw" />
                {mapPoints.map((point) => (
                  <Link key={point.slug} href={href(`/taste/${point.slug}`)} className={styles.mapPoint} style={{ left: `${point.x}%`, top: `${point.y}%` }} aria-label={point.label}>
                    <span /> <b>{point.label}</b>
                  </Link>
                ))}
              </div>
            </section>

            <div className={styles.storiesHeading}>
              <p className="sectionEyebrow">{labels.all}</p>
              <h2>{c.journeyTitle}</h2>
              <p>{c.journeyText}</p>
            </div>

            {Object.entries(tasteCategories).map(([category, categoryLabel]) => {
              const items = tasteArticles.filter((item) => item.category === category);
              return (
                <section className={styles.category} key={category}>
                  <h3>{categoryLabel[lang]}</h3>
                  <div className={styles.storyGrid}>
                    {items.map((article) => {
                      const a = article[lang];
                      return (
                        <Link href={href(`/taste/${article.slug}`)} className={styles.storyCard} key={article.slug}>
                          <div className={styles.storyImage}>
                            <Image src={article.image} alt={a.title} fill sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 33vw" />
                          </div>
                          <div className={styles.storyBody}>
                            <span>{labels.region}: {lang === 'en' ? article.regionEn : article.region}</span>
                            <h4>{a.title}</h4>
                            <p>{a.subtitle}</p>
                            <b>{labels.read} →</b>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              );
            })}

            <section className={styles.ending}>
              <div>
                <p className="sectionEyebrow">Focaccia Bansko</p>
                <h2>{labels.ending}</h2>
                <p>{labels.endingText}</p>
              </div>
              <Link href={href('/menu')} className="button buttonPrimary">{lang === 'en' ? 'Explore the menu' : 'Разгледайте менюто'}</Link>
            </section>
          </div>
        </section>
      </Layout>
    </>
  );
}
