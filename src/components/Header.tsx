"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { useCart } from './CartContext';
import styles from './Header.module.css';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { cartCount, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink} onClick={() => setIsMenuOpen(false)}>
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

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <Link href="/shop" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>STORE</Link>
        <Link href="/team" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>RACE TEAM</Link>
        <Link href="/coaching" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>COACHING</Link>
        <Link href="/news" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>NEWS</Link>
        <Link href="/about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>ABOUT US</Link>
      </nav>

      <div className={styles.actions}>
        <button onClick={() => setIsCartOpen(true)} className={styles.cartToggle} aria-label="Open Cart">
          🛒 {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
        </button>
        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <button className={styles.burgerBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
