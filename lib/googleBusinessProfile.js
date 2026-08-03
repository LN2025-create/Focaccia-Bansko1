const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_REVIEWS_BASE = 'https://mybusiness.googleapis.com/v4';
const GOOGLE_BUSINESS_INFO_BASE = 'https://mybusinessbusinessinformation.googleapis.com/v1';
const SOFIA_TIME_ZONE = 'Europe/Sofia';
const DAY_NAMES = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function normalizeResourceId(value, prefix) {
  return String(value || '').replace(new RegExp(`^${prefix}/`), '').trim();
}

async function getAccessToken() {
  const body = new URLSearchParams({
    client_id: requiredEnv('GBP_CLIENT_ID'),
    client_secret: requiredEnv('GBP_CLIENT_SECRET'),
    refresh_token: requiredEnv('GBP_REFRESH_TOKEN'),
    grant_type: 'refresh_token',
  });

  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Google OAuth token request failed (${response.status}): ${detail.slice(0, 300)}`);
  }

  const payload = await response.json();
  if (!payload.access_token) throw new Error('Google OAuth response did not include an access token.');
  return payload.access_token;
}

async function googleGet(url, accessToken) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'X-GOOG-API-FORMAT-VERSION': '2',
    },
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Google Business Profile request failed (${response.status}): ${detail.slice(0, 500)}`);
  }

  return response.json();
}

function sofiaParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: SOFIA_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);

  const value = (type) => Number(parts.find((part) => part.type === type)?.value || 0);
  return {
    year: value('year'),
    month: value('month'),
    day: value('day'),
    hour: value('hour'),
    minute: value('minute'),
  };
}

function dateKey(parts) {
  return `${parts.year}-${String(parts.month).padStart(2, '0')}-${String(parts.day).padStart(2, '0')}`;
}

function pseudoTimestamp(parts, time = { hours: 0, minutes: 0 }) {
  return Date.UTC(parts.year, parts.month - 1, parts.day, Number(time?.hours || 0), Number(time?.minutes || 0));
}

function addDays(parts, offset) {
  const date = new Date(Date.UTC(parts.year, parts.month - 1, parts.day + offset));
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  };
}

function dayName(parts) {
  return DAY_NAMES[new Date(Date.UTC(parts.year, parts.month - 1, parts.day)).getUTCDay()];
}

function timeLabel(time) {
  return `${String(Number(time?.hours || 0)).padStart(2, '0')}:${String(Number(time?.minutes || 0)).padStart(2, '0')}`;
}

function dateFromGoogle(value) {
  if (!value?.year || !value?.month || !value?.day) return null;
  return { year: Number(value.year), month: Number(value.month), day: Number(value.day) };
}

function buildRegularIntervalsForDate(dateParts, regularPeriods = []) {
  const weekday = dayName(dateParts);
  return regularPeriods
    .filter((period) => period.openDay === weekday)
    .map((period) => {
      const closeDate = period.closeDay === weekday ? dateParts : addDays(dateParts, 1);
      return {
        start: pseudoTimestamp(dateParts, period.openTime),
        end: pseudoTimestamp(closeDate, period.closeTime),
        open: timeLabel(period.openTime),
        close: timeLabel(period.closeTime),
        startDate: dateKey(dateParts),
        endDate: dateKey(closeDate),
        special: false,
      };
    })
    .filter((interval) => interval.end > interval.start);
}

function specialPeriodsStartingOn(dateParts, specialPeriods = []) {
  const key = dateKey(dateParts);
  return specialPeriods.filter((period) => {
    const startDate = dateFromGoogle(period.startDate);
    return startDate && dateKey(startDate) === key;
  });
}

function buildSpecialIntervalsForDate(dateParts, specialPeriods = []) {
  const periods = specialPeriodsStartingOn(dateParts, specialPeriods);
  if (!periods.length) return null;
  if (periods.some((period) => period.closed)) return [];

  return periods
    .map((period) => {
      const endDate = dateFromGoogle(period.endDate) || dateParts;
      return {
        start: pseudoTimestamp(dateParts, period.openTime),
        end: pseudoTimestamp(endDate, period.closeTime),
        open: timeLabel(period.openTime),
        close: timeLabel(period.closeTime),
        startDate: dateKey(dateParts),
        endDate: dateKey(endDate),
        special: true,
      };
    })
    .filter((interval) => interval.end > interval.start);
}

function intervalsForDate(dateParts, regularPeriods, specialPeriods) {
  const special = buildSpecialIntervalsForDate(dateParts, specialPeriods);
  if (special !== null) return special;
  return buildRegularIntervalsForDate(dateParts, regularPeriods);
}

function normalizeWeeklyHours(regularPeriods = []) {
  return DAY_NAMES.slice(1).concat(DAY_NAMES[0]).map((day) => ({
    day,
    periods: regularPeriods
      .filter((period) => period.openDay === day)
      .map((period) => ({
        open: timeLabel(period.openTime),
        close: timeLabel(period.closeTime),
        closeDay: period.closeDay,
      })),
  }));
}

function buildHoursState(location, now = new Date()) {
  const regularPeriods = location?.regularHours?.periods || [];
  const specialPeriods = location?.specialHours?.specialHourPeriods || [];
  if (!regularPeriods.length && !specialPeriods.length) return null;
  const current = sofiaParts(now);
  const currentPseudo = pseudoTimestamp(current, { hours: current.hour, minutes: current.minute });
  const intervals = [];

  for (let offset = -1; offset <= 14; offset += 1) {
    const date = addDays(current, offset);
    intervals.push(...intervalsForDate(date, regularPeriods, specialPeriods));
  }

  intervals.sort((a, b) => a.start - b.start);
  const currentInterval = intervals.find((interval) => currentPseudo >= interval.start && currentPseudo < interval.end);
  const nextInterval = intervals.find((interval) => interval.start > currentPseudo);
  const todayIntervals = intervalsForDate(current, regularPeriods, specialPeriods);
  const todaySpecial = buildSpecialIntervalsForDate(current, specialPeriods) !== null;

  return {
    status: currentInterval ? 'open' : 'closed',
    today: {
      date: dateKey(current),
      special: todaySpecial,
      periods: todayIntervals.map(({ open, close, endDate }) => ({ open, close, endDate })),
      closed: todayIntervals.length === 0,
    },
    currentPeriod: currentInterval
      ? { close: currentInterval.close, endDate: currentInterval.endDate, special: currentInterval.special }
      : null,
    nextOpen: nextInterval
      ? { date: nextInterval.startDate, time: nextInterval.open, special: nextInterval.special }
      : null,
    weekly: normalizeWeeklyHours(regularPeriods),
    timeZone: SOFIA_TIME_ZONE,
  };
}

export function hasBusinessProfileConfig() {
  return Boolean(
    process.env.GBP_CLIENT_ID
      && process.env.GBP_CLIENT_SECRET
      && process.env.GBP_REFRESH_TOKEN
      && process.env.GBP_ACCOUNT_ID
      && process.env.GBP_LOCATION_ID,
  );
}

export async function fetchBusinessProfileData() {
  const accountId = normalizeResourceId(requiredEnv('GBP_ACCOUNT_ID'), 'accounts');
  const locationId = normalizeResourceId(requiredEnv('GBP_LOCATION_ID'), 'locations');
  const accessToken = await getAccessToken();

  const reviewsUrl = `${GOOGLE_REVIEWS_BASE}/accounts/${encodeURIComponent(accountId)}/locations/${encodeURIComponent(locationId)}/reviews?pageSize=1`;
  const readMask = encodeURIComponent('regularHours,specialHours,title,websiteUri,phoneNumbers');
  const locationUrl = `${GOOGLE_BUSINESS_INFO_BASE}/locations/${encodeURIComponent(locationId)}?readMask=${readMask}`;

  const [reviewsResult, locationResult] = await Promise.allSettled([
    googleGet(reviewsUrl, accessToken),
    googleGet(locationUrl, accessToken),
  ]);

  if (reviewsResult.status === 'rejected' && locationResult.status === 'rejected') {
    throw new Error(`Reviews and location requests failed: ${reviewsResult.reason}; ${locationResult.reason}`);
  }

  const reviews = reviewsResult.status === 'fulfilled' ? reviewsResult.value : null;
  const location = locationResult.status === 'fulfilled' ? locationResult.value : null;
  const rating = Number(reviews?.averageRating);
  const count = Number(reviews?.totalReviewCount);
  const ratingData = Number.isFinite(rating) && Number.isFinite(count)
    ? { value: rating, count }
    : null;
  const hoursData = location ? buildHoursState(location) : null;

  return {
    live: Boolean(ratingData || hoursData),
    source: 'google-business-profile',
    updatedAt: new Date().toISOString(),
    rating: ratingData,
    hours: hoursData,
  };
}

export const __testables = {
  buildHoursState,
  sofiaParts,
  timeLabel,
};
