import styles from '@/styles/Home.module.css';
import Image from 'next/image';

export default function Features() {
  const features = [
    {
      title: "Playful Learning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: "/images/playful learning.png"
    },
    {
      title: "Nature-Inspired Education",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: "/images/nature inspired.png"
    },
    {
      title: "Holistic Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: "/images/holistic development.png"
    }
  ];

  return (
    <section className={`${styles.features} ${styles.natureElements}`}>
      <div className={styles.leaf}>🍃</div>
      <div className={styles.leaf}>🌿</div>
      <div className={styles.leaf}>🍂</div>
      <div className={styles.leaf}>🌱</div>
      <div className="container">
        <h2 className={styles.sectionTitle}>Why Choose SarojVidyalaya?</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureImg}>
                <Image src={feature.image} alt={feature.title} width={400} height={200} />
              </div>
              <div className={styles.featureContent}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}