import styles from '../styles/SocialRail.module.css';

const socialLinks = [
  {
    name: 'Facebook', className: 'facebook', href: 'https://www.facebook.com/profile.php?id=61565865192556',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.3 8.4V6.8c0-.8.5-1 1-1h2.5V2.1L14.4 2c-3.4 0-5.3 2-5.3 5.6v.8H6v4.2h3.1V22h4.7v-9.4h3.5l.6-4.2h-3.6Z" /></svg>,
  },
  {
    name: 'Instagram', className: 'instagram', href: 'https://www.instagram.com/focaccia_bansko_panini',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 2h9.8A5.1 5.1 0 0 1 22 7.1v9.8a5.1 5.1 0 0 1-5.1 5.1H7.1A5.1 5.1 0 0 1 2 16.9V7.1A5.1 5.1 0 0 1 7.1 2Zm-.2 2A2.9 2.9 0 0 0 4 6.9v10.2A2.9 2.9 0 0 0 6.9 20h10.2a2.9 2.9 0 0 0 2.9-2.9V6.9A2.9 2.9 0 0 0 17.1 4H6.9Zm10.6 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>,
  },
  {
    name: 'TikTok', className: 'tiktok', href: 'https://www.tiktok.com/@focaccia.bansko',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.1 2h3.3c.2 1.7 1.2 3.1 2.8 3.9v3.3a9 9 0 0 1-2.8-.7v7.1a6.4 6.4 0 1 1-6.4-6.4c.4 0 .8 0 1.2.1v3.4a3.2 3.2 0 1 0 2 3V2Z" /></svg>,
  },
];

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.googleIcon}>
      <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.5-.2-2.2H12v4.2h5.4a4.6 4.6 0 0 1-2 3v2.7h3.3c1.9-1.8 2.9-4.4 2.9-7.7Z" />
      <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.7c-.9.6-2.1 1-3.4 1-2.6 0-4.8-1.8-5.6-4.2H3v2.8A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.4 13.7a6 6 0 0 1 0-3.4V7.5H3a10 10 0 0 0 0 9l3.4-2.8Z" />
      <path fill="#EA4335" d="M12 6.1c1.5 0 2.8.5 3.8 1.5l2.9-2.8A9.7 9.7 0 0 0 12 2a10 10 0 0 0-9 5.5l3.4 2.8A6 6 0 0 1 12 6.1Z" />
    </svg>
  );
}

export default function SocialRail() {
  return (
    <>
      <aside className={styles.rail} aria-label="Focaccia Bansko social media">
        {socialLinks.map((item) => (
          <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.name} title={item.name} className={styles[item.className]}>
            {item.icon}<span>{item.name}</span>
          </a>
        ))}
      </aside>
      <a
        className={styles.googleReview}
        href="https://g.page/r/CW54B7v5AtugEAE/review"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Остави отзив в Google"
        title="Остави отзив в Google"
      >
        <GoogleIcon />
        <span>Остави отзив в Google</span>
      </a>
    </>
  );
}
