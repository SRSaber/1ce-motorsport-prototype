"use client";

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import styles from './Footer.module.css';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        <div className={styles.brandSection}>
          <img 
            src="/images/logo.jpg" 
            alt="1ce Motorsport Full Logo" 
            className={`${styles.footerLogo} ${theme === 'dark' ? styles.logoInvert : ''}`} 
          />
          <p className={styles.tagline}>Cool Runnings. Fast Racing.</p>
        </div>

        <div className={styles.linksSection}>
          <h4>QUICK LINKS</h4>
          <nav>
            <Link href="/shop">Store</Link>
            <Link href="/team">Race Team</Link>
            <Link href="/coaching">Coaching</Link>
            <Link href="/news">Team News</Link>
          </nav>
        </div>

        <div className={styles.contactSection}>
          <h4>CONTACT US</h4>
          <p>info@1cemotorsport.com</p>
          <p>+27 123 456 789</p>
          <div className={styles.socials}>
            <a href="https://instagram.com/ice.motorsport" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>

      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} 1CE Motorsport (PTY) Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
