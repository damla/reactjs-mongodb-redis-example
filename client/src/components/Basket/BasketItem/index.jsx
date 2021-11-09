import styles from "./styles.module.scss";
import { ImageBox } from "../..";
import { useModal } from "../../../contexts/Modal/ModalContext";

export default function BasketItem({ product }) {
  const { activateModal } = useModal();
  const { imgUrl, name, _id } = product;
  // REFACTOR: product id cekmek yerine, direkt product alinip destructure edildi

  return (
    <div className={styles.Container}>
      <ImageBox basketImg={`${process.env.REACT_APP_IMAGE_URL}${imgUrl}.jpg`} />
      <div className={styles.Wrapper}>
        <span className={styles.ItemName}>{name}</span>
        <button
          type="button"
          className={styles.RemoveButton}
          onClick={() => activateModal(_id)}
        >
          Kaldır
        </button>
      </div>
    </div>
  );
}
