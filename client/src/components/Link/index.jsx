import styles from "./styles.module.scss";

export default function Link({ filterName }) {
  return <li className={styles.Container}>{filterName}</li>;
}
