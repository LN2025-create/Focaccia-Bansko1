import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <div className={styles.logo}>Focaccia</div>
        <Link href="/location">Location</Link>
        <Link href="/contacts">Contacts</Link>
      </nav>
    </header>
  );
}
