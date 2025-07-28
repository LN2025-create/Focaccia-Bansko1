export const OPEN_HOUR = 9;
export const CLOSE_HOUR = 22;

export function isOpen(now = new Date()) {
  const hour = now.getHours();
  return hour >= OPEN_HOUR && hour < CLOSE_HOUR;
}

export function nextOpenTime() {
  return `${String(OPEN_HOUR).padStart(2,'0')}:00`;
}
