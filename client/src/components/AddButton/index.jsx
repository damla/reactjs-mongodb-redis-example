import React from "react";
import { useBasket } from "../../contexts/Basket/BasketContext";
import styles from "./styles.module.scss";

export default function AddButton({ product }) {
  const { addItem } = useBasket();

  const checkBasket = () => !Object.keys(localStorage).includes(product._id);

  return checkBasket() ? (
    <button
      data-testid="add-btn"
      className={styles.ActiveButton}
      onClick={() => {
        addItem(product);
      }}
    >
      Sepete Ekle
    </button>
  ) : (
    <button data-testid="disabled-add-btn" className={styles.DeactiveButton}>
      Bu ürünü sepete ekleyemezsiniz.
    </button>
  );
}
