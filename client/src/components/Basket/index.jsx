import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { BasketDetails } from "..";
// import { useBasket } from "../../contexts/Basket/BasketContext";

export default function Basket() {
  const [isOpen, setIsOpen] = useState(false);
  const [count] = useState(4);
  const clickRef = useRef(null);

  const openCart = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        clickRef.current &&
        !clickRef.current.contains(event.target) &&
        isOpen === true
      ) {
        setIsOpen(!isOpen);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, clickRef, setIsOpen]);

  const buttonClasses = cn(styles.Button, isOpen && styles.Open);
  const countClasses = cn(styles.Count, count === 0 && styles.Hidden);

  return (
    <div ref={clickRef} className={styles.Container}>
      <button onClick={() => openCart()} className={buttonClasses}>
        <span className={countClasses}>{count}</span>
        Sepetim
      </button>
      {isOpen && <BasketDetails />}
    </div>
  );
}
