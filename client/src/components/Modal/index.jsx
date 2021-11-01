import styles from "./styles.module.scss";
import { useModal } from "../../contexts/Modal/ModalContext";

export default function Modal() {
  const { yes, no } = useModal();
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <h3>Ürünü silmek istediğinize emin misiniz?</h3>
      </div>
      <div className={styles.Body}>
        <p className={styles.Content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentiall....
        </p>
      </div>
      <div className={styles.Footer}>
        <button className={styles.Yes} onClick={yes}>
          EVET
        </button>
        <button className={styles.No} onClick={no}>
          HAYIR
        </button>
      </div>
    </div>
  );
}
