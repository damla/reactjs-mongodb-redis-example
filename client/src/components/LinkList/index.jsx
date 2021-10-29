import styles from "./styles.module.scss";

export default function LinkList({ filterTitle, children }) {
  return (
    <>
      <h3 className={styles.Title}>{filterTitle}</h3>
      <ul className={styles.Container}>{children}</ul>
    </>
  );
}
