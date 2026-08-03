import { site } from '../lib/content';

export default function BusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'LocalBusiness'],
    name: site.name,
    url: 'https://www.focaccia.bg',
    image: 'https://www.focaccia.bg/images/home/hero-main.webp',
    telephone: site.phoneHref,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. „Пирин“ 93',
      postalCode: '2770',
      addressLocality: 'Банско',
      addressCountry: 'BG',
    },
    servesCuisine: ['Italian', 'Sandwiches', 'Focaccia'],
    currenciesAccepted: 'EUR',
    sameAs: [site.facebookUrl, site.instagramUrl, site.tiktokUrl],
    hasMap: site.mapsUrl,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
