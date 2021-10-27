import styles from "./styles.module.scss";

export default function Sidebar({ children }) {
  return <aside className={styles.container}>sidebar {children}</aside>;
}
