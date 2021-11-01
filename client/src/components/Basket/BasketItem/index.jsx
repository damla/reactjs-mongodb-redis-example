import styles from "./styles.module.scss";
import { ImageBox } from "../..";
import { useBasket } from "../../../contexts/Basket/BasketContext";

export default function BasketItem({ productId }) {
  const { removeItem } = useBasket();
  let product = JSON.parse(localStorage.getItem(productId));
  console.log("product", product);
  return (
    <div className={styles.Container}>
      <ImageBox
        basketImg={`${process.env.REACT_APP_IMAGE_URL}${product.imgUrl}.jpg`}
      />
      <div className={styles.Wrapper}>
        <span className={styles.ItemName}>{product.name}</span>
        <button
          type="button"
          className={styles.RemoveButton}
          onClick={() => removeItem(productId)}
        >
          Kaldır
        </button>
      </div>
    </div>
  );
}
