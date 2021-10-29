// import React, { useState } from "react";
// import cn from "classnames";
import styles from "./styles.module.scss";
import { ImageBox } from "../..";

export default function BasketItem() {
  // const [items, setItems] = useState([{ name: "iPhone11", url: "image" }]);

  return (
    <div className={styles.Container}>
      <ImageBox
        src={`${process.env.REACT_APP_IMAGE_URL}s/32/224-332/10352817012786.jpg`}
        basketImg
      />
      <div className={styles.Wrapper}>
        <span className={styles.ItemName}>
          iPhone 11 Kırmızı Kılıflı Garantili Telefon
        </span>
        <button type="button" className={styles.RemoveButton}>
          Kaldır
        </button>
      </div>
    </div>
  );
}
// TODO: SCROLLU TRANSPARENT YAP
