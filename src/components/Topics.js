import styles from '@/styles/Home.module.css';
import LotusIcon from './ui/LotusIcon';

export default function Topics() {
  const topics = [
    {
      icon: "🌳",
      title: "Mathematics Grove",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    },
    {
      icon: "🌊",
      title: "Science Stream",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    },
    {
      icon: "🌸",
      title: "Literature Meadow",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    },
    {
      icon: "🌎",
      title: "Geography Valley",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    }
  ];

  return (
    <section className={styles.topics}>
      <div className={styles.lotusCorner}>
        <LotusIcon width="100%" height="100%" color="#5c6f58" />
      </div>
      <div className="container">
        <h2 className={styles.sectionTitle}>Our Learning Gardens</h2>
        <div className={styles.topicsGrid}>
          {topics.map((topic, index) => (
            <div key={index} className={styles.topicCard}>
              <div className={styles.topicIcon}>{topic.icon}</div>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}