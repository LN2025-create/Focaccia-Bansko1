export default function FeatureIcon({ name }) {
  const common = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };


  if (name === 'oven') {
    return <svg {...common}><path d="M4 9h16v10H4z"/><path d="M6 9V5h12v4"/><path d="M8 14c.8-1.8 2-2.8 4-3.4 2 .6 3.2 1.6 4 3.4"/><path d="M8 19v2M16 19v2"/></svg>;
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
