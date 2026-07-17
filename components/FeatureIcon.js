export default function FeatureIcon({ name }) {
  const common = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };


  if (name === 'oven') {
    return <svg {...common}><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M6 6V4h12v2"/><circle cx="8" cy="11" r="1"/><circle cx="12" cy="10" r="1"/><circle cx="16" cy="12" r="1"/><path d="M6 15c3-2 9-2 12 0"/></svg>;
  }

  if (name === 'sandwich') {
    return <svg {...common}><path d="M4 10c.5-3 3.2-5 8-5s7.5 2 8 5H4Z"/><path d="M5 10v2l2 1 2-1 3 2 3-2 2 1 2-1v-2"/><path d="M5 14h14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3Z"/></svg>;
  }
  if (name === 'glass') {
    return <svg {...common}><path d="M7 3h10l-1 7a4 4 0 0 1-8 0L7 3Z"/><path d="M12 14v7"/><path d="M9 21h6"/></svg>;
  }
  if (name === 'coffee') {
    return <svg {...common}><path d="M5 8h11v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8Z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 3c0 1 1 1 1 2s-1 1-1 2"/><path d="M12 3c0 1 1 1 1 2s-1 1-1 2"/></svg>;
  }
  return <svg {...common}><path d="M5 8h14v11H5z"/><path d="M7 8V5h10v3"/><path d="M8 12h8"/><path d="M9 15h6"/></svg>;
}
