import { useState } from "react";
import ImageBox from "../../ImageBox";
import styles from "./styles.module.scss";
import cn from "classnames";
import AddButton from "../../AddButton";

export default function ProductItem() {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className={cn(styles.Container, isHovered ? styles.Stroke : undefined)}
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
    >
      {!isHovered ? (
        <>
          <ImageBox productImg />
          <div className={styles.Content}>
            <div className={styles.Name}>iPhone 11 Kırmızı Kılıf</div>
            <div>
              <div className={styles.Variant}>
                <label>Marka:&nbsp;</label>
                <span className={styles.Name}>Apple</span>
              </div>
              <div className={styles.Variant}>
                <label>Renk:&nbsp;</label>
                <span className={styles.Name}>Siyah</span>
              </div>
            </div>
            <span className={styles.Price}>90,85 TL</span>
            <div className={styles.DiscountContainer}>
              <span className={styles.DiscountedPrice}>124,00 TL</span>
              <span className={styles.Discount}>12%</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <ImageBox productImg isHovered />
          <div className={cn(styles.Content, styles.Hover)}>
            <div className={styles.Name}>iPhone 11 Kırmızı Kılıf</div>
            <AddButton />
          </div>
        </>
      )}
    </div>
  );
}
