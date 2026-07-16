import Header from './Header';
import Footer from './Footer';
import SocialRail from './SocialRail';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, lang, text, changeLanguage, href, mainClassName = '' }) {
  return (
    <div className={styles.siteShell}>
      <Header lang={lang} text={text} changeLanguage={changeLanguage} href={href} />
      <SocialRail />
      <main className={`${styles.main} ${mainClassName}`.trim()}>{children}</main>
      <Footer lang={lang} text={text} href={href} />
    </div>
  );
}
