import React, { Fragment } from "react";
import styles from "./styles.module.scss";
import BasketItem from "../BasketItem";
import { useBasket } from "../../../contexts/Basket/BasketContext";

export default function BasketDetails() {
  const { getItems } = useBasket();

  let products = getItems();
  // REFACTOR: getItems fonksiyonu kullanilarak butun urunler cekildi, boylece
  // kontrol asamasi context icerisinde yapildi

  return (
    <div className={styles.Container}>
      {products.map((product, i) => {
        if (product) return <BasketItem key={i} product={product} />;
        return <Fragment />;
      })}
    </div>
  );
}
