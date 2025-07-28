import styles from '../styles/GoogleRating.module.css';

export default function GoogleRating({ score = 4.9, count = 72 }) {
  return (
    <div className={styles.rating}>
      <span className={styles.label}>Google</span>
      <span className={styles.score}>{score.toFixed(1)}</span>
      <span className={styles.stars}>★★★★★</span>
      <span className={styles.count}>({count})</span>
    </div>
  );
}
