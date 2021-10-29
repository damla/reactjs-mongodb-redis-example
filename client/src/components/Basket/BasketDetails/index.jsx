// import React, { useState } from "react";
// import cn from "classnames";
import styles from "./styles.module.scss";
import BasketItem from "../BasketItem";

export default function BasketDetails() {
  // const [items, setItems] = useState([{ name: "iPhone11", url: "image" }]);
  // const buttonClasses = cn(styles.Container, isOpen && styles.Open);

  return (
    <div className={styles.Container}>
      <BasketItem />
      <BasketItem />
      <BasketItem />
    </div>
  );
}
