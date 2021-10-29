import PageInfo from "../../PageInfo";
import SelectBox from "../../SelectBox";

import styles from "./styles.module.scss";

export default function SubHeader() {
  return (
    <div className={styles.Container}>
      <PageInfo />
      <SelectBox />
    </div>
  );
}
