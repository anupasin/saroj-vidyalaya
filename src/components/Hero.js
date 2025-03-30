import styles from '@/styles/Home.module.css';
import LotusIcon from './ui/LotusIcon';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLotus}>
        <LotusIcon width="100%" height="100%" color="white" />
      </div>
      <div className={`${styles.heroContent} container`}>
        <h1>Where Learning Blooms Naturally</h1>
        <p>Discover our playful approach to education that nurtures curiosity and makes even the most challenging subjects engaging for young minds.</p>
        <Button href="#" text="Explore Our Approach" />
      </div>
    </section>
  );
}