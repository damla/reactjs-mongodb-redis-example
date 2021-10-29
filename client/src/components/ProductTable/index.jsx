import styles from "./styles.module.scss";

export default function ProductTable({ children }) {
  return (
    <div className={styles.Container}>
      <div className={styles.Table}>{children}</div>
      <div>Pagination</div>
    </div>
  );
}
