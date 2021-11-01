import styles from "./styles.module.scss";
import { ImageBox } from "../..";
import { useModal } from "../../../contexts/Modal/ModalContext";

export default function BasketItem({ productId }) {
  const { activateModal } = useModal();

  let product = JSON.parse(localStorage.getItem(productId));

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
          onClick={() => activateModal(productId)}
        >
          Kaldır
        </button>
      </div>
    </div>
  );
}
