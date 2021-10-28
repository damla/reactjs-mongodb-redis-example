import React, { useState } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { BasketDetails } from "..";

export default function Basket() {
  const [isOpen, setIsOpen] = useState(false);
  const [count] = useState(4);

  const openCart = () => {
    setIsOpen(!isOpen);
  };

  const buttonClasses = cn(styles.Button, isOpen && styles.Open);
  const countClasses = cn(styles.Count, count === 0 && styles.Hidden);

  return (
    <div className={styles.Container}>
      <button onClick={() => openCart()} className={buttonClasses}>
        <span className={countClasses}>{count}</span>
        Sepetim
      </button>
      {isOpen && <BasketDetails />}
    </div>
  );
}

// button
// carttaki eleman sayisi gosteren imlec
// basket detail
// icerisindeki elemanlar
