import styles from '../styles/SocialRail.module.css';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61565865192556',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.3 8.4V6.8c0-.8.5-1 1-1h2.5V2.1L14.4 2c-3.4 0-5.3 2-5.3 5.6v.8H6v4.2h3.1V22h4.7v-9.4h3.5l.6-4.2h-3.6Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/focaccia_bansko_panini',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.1 2h9.8A5.1 5.1 0 0 1 22 7.1v9.8a5.1 5.1 0 0 1-5.1 5.1H7.1A5.1 5.1 0 0 1 2 16.9V7.1A5.1 5.1 0 0 1 7.1 2Zm-.2 2A2.9 2.9 0 0 0 4 6.9v10.2A2.9 2.9 0 0 0 6.9 20h10.2a2.9 2.9 0 0 0 2.9-2.9V6.9A2.9 2.9 0 0 0 17.1 4H6.9Zm10.6 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@focaccia.bansko',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.1 2h3.3c.2 1.7 1.2 3.1 2.8 3.9v3.3a9 9 0 0 1-2.8-.7v7.1a6.4 6.4 0 1 1-6.4-6.4c.4 0 .8 0 1.2.1v3.4a3.2 3.2 0 1 0 2 3V2Z" />
      </svg>
    ),
  },
];

export default function SocialRail() {
  return (
    <aside className={styles.rail} aria-label="Focaccia Bansko social media">
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          title={item.name}
        >
          {item.icon}
          <span>{item.name}</span>
        </a>
      ))}
    </aside>
  );
}
