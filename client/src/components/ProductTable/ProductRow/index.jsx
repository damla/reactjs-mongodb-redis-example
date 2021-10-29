import styles from "./styles.module.scss";

export default function ProductRow({ children }) {
  return <div className={styles.Row}>{children}</div>;
}
