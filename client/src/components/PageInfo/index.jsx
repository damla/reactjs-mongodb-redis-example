import styles from "./styles.module.scss";

export default function PageInfo() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.PageTitle}>iPhone iOS cep telefonu</h1>
      <div className={styles.SearchContainer}>
        <label className={styles.SearchLabel}>Aranan Kelime:&nbsp;</label>
        <span className={styles.searchText}>iPhone 11</span>
      </div>
    </div>
  );
}
