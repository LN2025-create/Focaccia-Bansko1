export const OPEN_HOUR = 10;
export const CLOSE_HOUR = 22;

function banskoHour(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Sofia',
    hour: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now);

  return Number(parts.find((part) => part.type === 'hour')?.value ?? 0);
}

export function isOpenInBansko(now = new Date()) {
  const hour = banskoHour(now);
  return hour >= OPEN_HOUR && hour < CLOSE_HOUR;
}
