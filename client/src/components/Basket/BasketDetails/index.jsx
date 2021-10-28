// import React, { useState } from "react";
// import cn from "classnames";
import styles from "./styles.module.scss";

export default function BasketDetails() {
  // const [items, setItems] = useState([{ name: "iPhone11", url: "image" }]);

  // const buttonClasses = cn(styles.Container, isOpen && styles.Open);
  // const countClasses = cn(styles.Count, count === 0 && styles.Hidden);

  return (
    <div className={styles.Container}>
      <div>item 1</div>
      <div>item 2</div>
      <div>item 3</div>
    </div>
  );
}
