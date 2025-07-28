import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Location() {
  return (
    <>
      <Head><title>Location • Focaccia Bansko</title></Head>
      <Header />
      <main style={{padding:'4rem 1rem', maxWidth:900, margin:'0 auto'}}>
        <h1>Локация</h1>
        <p>ул. Пирин 97, 2770 Банско</p>
        <p><a href="https://maps.app.goo.gl/NEHiqZyS1i7Xn6UJA?g_st=ipc" target="_blank" rel="noreferrer">Отвори в Google Maps</a></p>
        <iframe
          title="Focaccia Bansko Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.239... (replace with your embed)"
          width="100%"
          height="400"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </main>
      <Footer />
    </>
  );
}
