import styles from "./styles.module.scss";
import { useState } from "react";
import cn from "classnames";

export default function SelectBoxItem({ selection }) {
  const [isChecked, setChecked] = useState(false);

  const handleCheck = () => setChecked(!isChecked);

  const checkClasses = cn(styles.Check, isChecked && styles.Checked);

  return (
    <div className={styles.Container} onClick={() => handleCheck()}>
      <div className={checkClasses}>&#10003;</div>
      <span>{selection}</span>
    </div>
  );
}
