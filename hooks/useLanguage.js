import { useRouter } from 'next/router';
import { copy } from '../lib/content';

export function useLanguage() {
  const router = useRouter();
  const lang = router.query.lang === 'en' ? 'en' : 'bg';

  const changeLanguage = (next) => {
    const safe = next === 'en' ? 'en' : 'bg';
    const query = { ...router.query };

    if (safe === 'en') query.lang = 'en';
    else delete query.lang;

    router.push({ pathname: router.pathname, query }, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  const href = (url) => {
    const [pathname, anchor] = url.split('#');

    if (lang === 'en') {
      return {
        pathname,
        query: { lang: 'en' },
        ...(anchor ? { hash: `#${anchor}` } : {}),
      };
    }

    return anchor ? `${pathname}#${anchor}` : pathname;
  };

  return { lang, text: copy[lang], changeLanguage, href };
}
