import { useMemo, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useLanguage } from '../../hooks/useLanguage';
import { tasteCopy } from '../../lib/tasteData';
import { tasteArticles } from '../../lib/tasteArticles';
import { getTasteProductMeta, tasteRegions } from '../../lib/tasteProductMeta';
import styles from '../../styles/Taste.module.css';

export default function TasteLanding() {
  const { lang, text, changeLanguage, href } = useLanguage();
  const c = tasteCopy[lang].landing;
  const [selectedRegion, setSelectedRegion] = useState(null);

  const labels = lang === 'en' ? {
    all: 'All product stories', read: 'Read the story', productIn: 'At Focaccia Bansko',
    mapEyebrow: 'The regions we work with', mapTitle: 'Explore our Italy',
    mapText: 'Only the Italian regions connected to products we use are marked. Select a region to see its product stories.',
    choose: 'Choose a region', showAll: 'Clear selection', from: 'Products from', ending: 'The journey ends in Bansko',
    endingText: 'Ingredients from different Italian regions meet in one focaccia, prepared and baked on site every day.',
  } : {
    all: 'Всички продуктови истории', read: 'Прочетете историята', productIn: 'Във Focaccia Bansko',
    mapEyebrow: 'Регионите, с които работим', mapTitle: 'Разгледайте нашата Италия',
    mapText: 'Отбелязани са само италианските региони, свързани с продуктите, които използваме. Изберете регион, за да видите неговите истории.',
    choose: 'Изберете регион', showAll: 'Изчисти избора', from: 'Продукти от', ending: 'Пътят завършва в Банско',
    endingText: 'Съставки от различни италиански региони се срещат в една фокача, приготвена и изпечена на място всеки ден.',
  };

  const regionEntries = useMemo(() => Object.entries(tasteRegions).filter(([regionId]) =>
    tasteArticles.some((article) => getTasteProductMeta(article.slug)?.regionId === regionId)
  ), []);

  const selectedArticles = selectedRegion
    ? tasteArticles.filter((article) => getTasteProductMeta(article.slug)?.regionId === selectedRegion)
    : [];

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

            <div className={styles.storiesHeading}>
              <p className="sectionEyebrow">{labels.all}</p>
              <h2>{c.journeyTitle}</h2>
              <p>{c.journeyText}</p>
            </div>

            <div className={styles.storyList}>
              {tasteArticles.map((article) => {
                const meta = getTasteProductMeta(article.slug);
                const a = meta?.[lang];
                if (!meta || !a) return null;
                const region = tasteRegions[meta.regionId]?.[lang];
                return (
                  <Link
                    href={href(`/taste/${article.slug}`)}
                    className={styles.productStory}
                    key={article.slug}
                  >
                    <div className={styles.productStoryImage}>
                      <Image
                        src={meta.heroImage || article.image}
                        alt={a.title}
                        fill
                        sizes="(max-width: 800px) 100vw, 48vw"
                        className={article.slug === 'mazza' ? styles.mazzaImage : undefined}
                      />
                    </div>
                    <div className={styles.productStoryCopy}>
                      <p className={styles.productKicker}>{region?.name} · {meta.producer}</p>
                      <h3>{a.title}</h3>
                      <p className={styles.productSubtitle}>{a.subtitle}</p>
                      <div className={styles.menuUse}>
                        <span>{labels.productIn}</span>
                        <strong>{a.cardNote}</strong>
                      </div>
                      <b>{labels.read} →</b>
                    </div>
                  </Link>
                );
              })}
            </div>

            <section className={styles.mapSection}>
              <div className={styles.mapIntro}>
                <p className="sectionEyebrow">{labels.mapEyebrow}</p>
                <h2>{labels.mapTitle}</h2>
                <p>{labels.mapText}</p>
              </div>

              <div className={styles.mapLayout}>
                <div className={styles.mapVisual} aria-label={labels.mapTitle}>
                  <Image src="/images/taste/italy-silhouette.svg" alt={labels.mapTitle} fill sizes="(max-width: 820px) 100vw, 42vw" />
                  {regionEntries.map(([regionId, region]) => {
                    const active = selectedRegion === regionId;
                    return (
                      <button
                        type="button"
                        key={regionId}
                        className={`${styles.regionPoint} ${styles[`region_${regionId}`] || ''} ${active ? styles.regionPointActive : ''}`}
                        style={{ left: `${region.x}%`, top: `${region.y}%` }}
                        onClick={() => setSelectedRegion(regionId)}
                        aria-pressed={active}
                        aria-label={region[lang].name}
                      >
                        <span>{region[lang].name}</span>
                      </button>
                    );
                  })}
                </div>

                <div className={styles.regionPanel}>
                  <p>{labels.choose}</p>
                  <div className={styles.regionButtons}>
                    {regionEntries.map(([regionId, region]) => (
                      <button
                        type="button"
                        key={regionId}
                        className={selectedRegion === regionId ? styles.regionButtonActive : undefined}
                        onClick={() => setSelectedRegion(regionId)}
                      >
                        {region[lang].name}
                      </button>
                    ))}
                  </div>

                  {selectedRegion && (
                    <button type="button" className={styles.clearRegion} onClick={() => setSelectedRegion(null)}>
                      {labels.showAll}
                    </button>
                  )}

                  <div className={styles.regionResults} aria-live="polite">
                    {!selectedRegion ? (
                      <p className={styles.regionPrompt}>{labels.mapText}</p>
                    ) : (
                      <>
                        <h3>{labels.from} {tasteRegions[selectedRegion][lang].name}</h3>
                        <p>{tasteRegions[selectedRegion][lang].text}</p>
                        <div className={styles.filteredStories}>
                          {selectedArticles.map((article) => {
                            const meta = getTasteProductMeta(article.slug);
                            const a = meta[lang];
                            return (
                              <Link href={href(`/taste/${article.slug}`)} key={article.slug}>
                                <div><Image src={meta.heroImage || article.image} alt={a.title} fill sizes="110px" /></div>
                                <span><strong>{a.title}</strong><small>{a.cardNote}</small></span>
                              </Link>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>

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
