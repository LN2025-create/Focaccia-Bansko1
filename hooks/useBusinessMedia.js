import { useCallback, useEffect, useState } from 'react';

const REFRESH_INTERVAL = 30 * 60 * 1000;
const FOCUS_DEBOUNCE = 15 * 1000;

let cachedData = null;
let cachedAt = 0;
let pendingRequest = null;

async function requestMedia() {
  if (!pendingRequest) {
    pendingRequest = fetch('/api/business-media', { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) throw new Error('Business media unavailable');
        return response.json();
      })
      .then((data) => {
        cachedData = data;
        cachedAt = Date.now();
        return data;
      })
      .finally(() => {
        pendingRequest = null;
      });
  }

  return pendingRequest;
}

export function useBusinessMedia() {
  const [data, setData] = useState(cachedData);
  const [loading, setLoading] = useState(!cachedData);

  const refresh = useCallback((force = false) => {
    if (!force && cachedData && Date.now() - cachedAt < FOCUS_DEBOUNCE) {
      setData(cachedData);
      setLoading(false);
      return Promise.resolve(cachedData);
    }

    setLoading((value) => value || !cachedData);
    return requestMedia()
      .then((result) => setData(result))
      .catch(() => setData(cachedData))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const load = (force = false) => {
      refresh(force).catch(() => {});
    };

    load(true);
    const intervalId = window.setInterval(() => load(true), REFRESH_INTERVAL);
    const onFocus = () => load(true);
    const onVisibility = () => {
      if (document.visibilityState === 'visible') load(true);
    };

    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [refresh]);

  return { data, loading, refresh };
}
