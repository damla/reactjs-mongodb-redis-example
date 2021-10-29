import PageInfo from "../../PageInfo";
import styles from "./styles.module.scss";

export default function SubHeader() {
  return (
    <div className={styles.Container}>
      <PageInfo />
      <PageInfo />
    </div>
  );
}
