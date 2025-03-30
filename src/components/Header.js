"use client";

import { useState } from 'react';
import styles from '@/styles/Home.module.css';
import LotusIcon from './ui/LotusIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <LotusIcon width={30} height={30} color="#f3e5ab" />
            </div>
            Saroj<span>Vidyalaya</span>
          </div>
          <div className={styles.hamburger} onClick={toggleMenu}>
            &#9776; {/* Hamburger icon */}
          </div>
          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Learning</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}