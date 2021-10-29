import styles from "./styles.module.scss";

export default function Pagination() {
  return (
    <div className={styles.Container}>
      <button className={styles.Button}>&#60;</button>
      <button className={styles.Button}>1</button>
      <button className={styles.Button}>2</button>
      <button className={styles.Button}>3</button>
      <button className={styles.Button}>&#62;</button>
    </div>
  );
}
