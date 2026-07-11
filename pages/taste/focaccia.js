import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import AutoplayVideo from '../../components/AutoplayVideo';
import { useLanguage } from '../../hooks/useLanguage';
import { tasteCopy } from '../../lib/tasteData';
import styles from '../../styles/TasteArticle.module.css';

function Paragraphs({ items }) {
  return items.map((item) => <p key={item}>{item}</p>);
}

export default function FocacciaStory() {
  const { lang, text, changeLanguage, href } = useLanguage();
  const c = tasteCopy[lang].article;

  return (
    <>
      <Head>
        <title>{`${c.title} | Focaccia Bansko`}</title>
        <meta name="description" content={c.doughCaption} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout lang={lang} text={text} changeLanguage={changeLanguage} href={href}>
        <article className={styles.article}>
          <section className={styles.videoHero}>
            <AutoplayVideo
              className={styles.heroVideo}
              src="/videos/dough-breathing.mp4"
              poster="/images/taste/dough-poster.jpg"
              ariaLabel={c.title}
              priority
            />
            <div className={styles.heroShade} />
            <div className={styles.heroTitle}>
              <p>{c.eyebrow}</p>
              <h1>{c.title}</h1>
              <span>{c.heroLine}</span>
            </div>
          </section>

          <div className={styles.articleBody}>
            <blockquote>{c.quote}</blockquote>
            <p className={styles.lead}>{c.doughCaption}</p>

            <section className={styles.textSection}>
              <h2>{c.moreTitle}</h2>
              <Paragraphs items={c.moreParagraphs} />
            </section>

            <section className={styles.twoColumnText}>
              <div>
                <p className="sectionEyebrow">Caputo</p>
                <h2>{c.flourTitle}</h2>
              </div>
              <div><Paragraphs items={c.flourParagraphs} /></div>
            </section>

            <section className={styles.textSection}>
              <h2>{c.timeTitle}</h2>
              <Paragraphs items={c.timeParagraphs} />
            </section>

            <section className={styles.mediaSplit}>
              <div className={styles.portraitVideoWrap}>
                <AutoplayVideo
                  className={styles.portraitVideo}
                  src="/videos/olive-oil.mp4"
                  poster="/images/taste/oil-poster.jpg"
                  ariaLabel={c.oilTitle}
                />
              </div>
              <div className={styles.mediaCopy}>
                <p className="sectionEyebrow">Mazza Extra Vergine</p>
                <h2>{c.oilTitle}</h2>
                <Paragraphs items={c.oilParagraphs} />
              </div>
            </section>

            <section className={styles.textSection}>
              <h2>{c.handTitle}</h2>
              <Paragraphs items={c.handParagraphs} />
            </section>

            <section className={styles.resultSection}>
              <AutoplayVideo
                className={styles.resultVideo}
                src="/videos/focaccia-crumb.mp4"
                poster="/images/taste/crumb-poster.jpg"
                ariaLabel={c.resultTitle}
              />
              <div>
                <p className="sectionEyebrow">Focaccia Bansko</p>
                <h2>{c.resultTitle}</h2>
                <p>{c.resultText}</p>
              </div>
            </section>

            <section className={styles.philosophy}>
              <p className="sectionEyebrow">{c.philosophyTitle}</p>
              <blockquote>{c.philosophy}</blockquote>
            </section>

            <section className={styles.articleCta}>
              <div>
                <p className="sectionEyebrow">{c.ctaEyebrow}</p>
                <h2>{c.ctaTitle}</h2>
                <p>{c.ctaText}</p>
              </div>
              <Link href={href('/menu')} className="button buttonPrimary">{c.ctaButton}</Link>
            </section>

            <Link href={href('/taste')} className={styles.backLink}>← {c.back}</Link>
          </div>
        </article>
      </Layout>
    </>
  );
}
