import ImageBox from "../../ImageBox";
import styles from "./styles.module.scss";

export default function ProductItem() {
  return (
    <div className={styles.Container}>
      <ImageBox productImg />
      <div className={styles.Content}>
        <div className={styles.Name}>
          Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...
        </div>
        <div className={styles.Variant}>
          <label>Marka:&nbsp;</label>
          <span className={styles.Name}>Apple</span>
        </div>
        <div className={styles.Variant}>
          <label>Renk:&nbsp;</label>
          <span className={styles.Name}>Siyah</span>
        </div>
        <span className={styles.Price}>90,85 TL</span>
        <div className={styles.DiscountContainer}>
          <span className={styles.DiscountedPrice}>124,00 TL</span>
          <span className={styles.Discount}>12%</span>
        </div>
      </div>
    </div>
  );
}
