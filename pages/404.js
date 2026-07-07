import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useLanguage } from '../hooks/useLanguage';

export default function NotFound() {
  const { lang, text, changeLanguage, href } = useLanguage();
  return (
    <>
      <Head><title>404 | Focaccia Bansko</title></Head>
      <Layout lang={lang} text={text} changeLanguage={changeLanguage} href={href}>
        <section className="notFound">
          <span>404</span>
          <h1>{text.notFound.title}</h1>
          <Link href={href('/')} className="button buttonPrimary">{text.notFound.home}</Link>
        </section>
      </Layout>
    </>
  );
}
