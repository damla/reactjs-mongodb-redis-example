import styles from "./styles.module.scss";

export default function Section({ children }) {
  return <section className={styles.container}>section {children}</section>;
}
