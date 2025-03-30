import styles from '@/styles/Home.module.css';
import LotusIcon from './ui/LotusIcon';

export default function LotusPhilosophy() {
  return (
    <section className={styles.lotusPhilosophy}>
      <div className="container">
        <div className={styles.lotusBox}>
          <LotusIcon className={styles.lotusIcon} width={120} height={120} color="#7aa07d" />
          <p className={styles.lotusQuote}>"Like the lotus, we believe in maintaining grace and beauty even while surrounded by challenges. Our education nurtures children to grow strong and bright, rising above difficulties."</p>
          <p>The lotus symbolizes our philosophy at SarojVidyalaya: purity of mind, resilience in adversity, and the beautiful blossoming of knowledge.</p>
        </div>
      </div>
    </section>
  );
}