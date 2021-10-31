import React, { useState } from "react";
import styles from "./styles.module.scss";

export default function AddButton() {
  const [isActive, setIsActive] = useState(true);

  const handleActive = () => {
    setIsActive(false);
  };

  return isActive ? (
    <button
      className={isActive ? styles.ActiveButton : undefined}
      onClick={() => handleActive()}
    >
      Sepete Ekle
    </button>
  ) : (
    <button className={!isActive ? styles.DeactiveButton : undefined}>
      Bu ürünü sepete ekleyemezsiniz.
    </button>
  );
}
