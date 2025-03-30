import styles from '@/styles/Home.module.css';
import LotusIcon from './ui/LotusIcon';

export default function Header() {
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
          <ul className={styles.navLinks}>
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