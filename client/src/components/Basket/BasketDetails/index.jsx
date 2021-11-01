// import cn from "classnames";
import styles from "./styles.module.scss";
import BasketItem from "../BasketItem";

export default function BasketDetails() {
  let productIds = Object.keys(localStorage);

  return (
    <div className={styles.Container}>
      {productIds.map((id, i) => {
        return <BasketItem key={i} productId={id} />;
      })}
    </div>
  );
}
