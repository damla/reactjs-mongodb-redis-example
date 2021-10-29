import React, { useState } from "react";
import styles from "./styles.module.scss";

export default function AddButton() {
  const [isActive, setIsActive] = useState(true);

  const handleActive = () => {
    setIsActive(false);
  };

  return isActive ? (
    <button
      className={isActive && styles.ActiveButton}
      onClick={() => handleActive()}
    >
      Sepete Ekle
    </button>
  ) : (
    <button className={!isActive && styles.DeactiveButton}>
      Bu ürünü sepete ekleyemezsiniz.
    </button>
  );
}
