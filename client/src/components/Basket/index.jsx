import React, { useState } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export default function Basket() {
  const [isOpen, setIsOpen] = useState(false);
  const [count] = useState(0);

  const openCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={() => openCart()}
      className={cn(styles.Container, isOpen && styles.Open)}
    >
      <span className={cn(styles.Count, count === 0 && styles.Hidden)}>
        {count}
      </span>
      Sepetim
    </button>
  );
}

// button
// carttaki eleman sayisi gosteren imlec
// basket detail
// icerisindeki elemanlar
