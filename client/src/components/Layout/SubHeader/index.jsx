import styles from "./styles.module.scss";

export default function SubHeader({ children }) {
  return <div className={styles.container}>subheader {children}</div>;
}
