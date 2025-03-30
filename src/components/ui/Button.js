import styles from '@/styles/Home.module.css';

export default function Button({ href, text, onClick }) {
  return (
    <a href={href} className={styles.btn} onClick={onClick}>
      {text}
    </a>
  );
}