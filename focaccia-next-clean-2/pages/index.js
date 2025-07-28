import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OpeningBadge from '../components/OpeningBadge';
import GoogleRating from '../components/GoogleRating';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Focaccia Bansko</title>
        <meta name="description" content="Най-добрата фокача в Банско!" />
      </Head>
      <Header />
      <main className={styles.hero} role="main">
        <div className={styles.overlay}>
          <OpeningBadge />
          <h1 className={styles.title}>Добре дошли във Focaccia Bansko</h1>
          <p className={styles.subtitle}>Най-добрата фокача в Банско!</p>
          <div className={styles.ratingBox}>
            <GoogleRating score={4.9} count={72} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
