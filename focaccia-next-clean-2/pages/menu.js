import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Menu() {
  return (
    <>
      <Head><title>Menu • Focaccia Bansko</title></Head>
      <Header />
      <main style={{padding:'4rem 1rem', maxWidth:900, margin:'0 auto'}}>
        <h1>Меню</h1>
        <p>Тук ще сложим дигиталното меню (BG/EN) със снимки.</p>
      </main>
      <Footer />
    </>
  );
}
