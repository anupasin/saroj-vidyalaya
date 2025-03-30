import styles from '@/styles/Home.module.css';
import Button from './ui/Button';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.cloud}></div>
      <div className={styles.cloud}></div>
      <div className="container">
        <h2>Ready to Nurture Curious Minds?</h2>
        <p>Join our community of parents and educators who are transforming how children experience learning through play and nature.</p>
        <Button href="#" text="Begin Your Journey" />
      </div>
    </section>
  );
}