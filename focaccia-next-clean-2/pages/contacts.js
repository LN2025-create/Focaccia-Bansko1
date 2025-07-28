import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contacts() {
  return (
    <>
      <Head><title>Contacts • Focaccia Bansko</title></Head>
      <Header />
      <main style={{padding:'4rem 1rem', maxWidth:900, margin:'0 auto'}}>
        <h1>Контакти</h1>
        <ul>
          <li>Телефон: <a href="tel:+359XXXXXXXXX">+359 XX XXX XXXX</a></li>
          <li>Instagram: <a href="https://www.instagram.com/focaccia_bansko" target="_blank" rel="noreferrer">@focaccia_bansko</a></li>
          <li>Работно време: 09:00 – 22:00</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
