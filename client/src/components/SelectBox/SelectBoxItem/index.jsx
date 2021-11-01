import styles from "./styles.module.scss";
import { useState } from "react";
import cn from "classnames";
import { useSort } from "../../../contexts/Sort/SortContext";

export default function SelectBoxItem({ selection, sortingType }) {
  const [isChecked, setChecked] = useState(false);
  const { sort, selectedSortType, setSelectedSortType } = useSort();

  const handleCheck = () => {
    setChecked(!isChecked);
    setSelectedSortType(sortingType);
    sort();
  };

  return (
    <div className={styles.Container} onClick={handleCheck}>
      <div
        className={cn(
          styles.Check,
          sortingType === selectedSortType ? styles.Checked : undefined
        )}
      >
        &#10003;
      </div>
      <span>{selection}</span>
    </div>
  );
}
