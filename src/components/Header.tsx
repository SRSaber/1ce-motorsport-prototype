"use client";

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { useCart } from './CartContext';
import styles from './Header.module.css';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <img 
            src="/images/logo-cube.jpg" 
            alt="1ce Motorsport Logo" 
            className={`${styles.logo} ${theme === 'dark' ? styles.logoInvert : ''}`} 
          />
          <img 
            src="/images/logo-text.jpg" 
            alt="1ce Motorsport" 
            className={`${styles.logoText} ${theme === 'dark' ? styles.logoInvert : ''}`} 
          />
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link href="/shop" className={styles.navLink}>STORE</Link>
        <Link href="/team" className={styles.navLink}>RACE TEAM</Link>
        <Link href="/coaching" className={styles.navLink}>COACHING</Link>
        <Link href="/news" className={styles.navLink}>NEWS</Link>
      </nav>

      <div className={styles.actions}>
        <button onClick={() => setIsCartOpen(true)} className={styles.cartToggle} aria-label="Open Cart">
          🛒 {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
        </button>
        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}
