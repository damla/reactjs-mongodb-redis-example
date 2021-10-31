import { useState } from "react";
import ImageBox from "../../ImageBox";
import styles from "./styles.module.scss";
import cn from "classnames";
import AddButton from "../../AddButton";
import { calculateDiscountedPrice } from "../../../utils/helpers";

export default function ProductItem({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  const {
    _id,
    name,
    brand,
    color,
    price: { base, discountAmount },
    createDate,
    imgUrl,
  } = product;

  console.log(product);
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
          <ImageBox
            productImg={`${process.env.REACT_APP_IMAGE_URL}${imgUrl}.jpg`}
          />
          <div className={styles.Content}>
            <div className={styles.Name}>{name}</div>
            <div>
              <div className={styles.Variant}>
                <label>Marka:&nbsp;</label>
                <span className={styles.Name}>{brand}</span>
              </div>
              <div className={styles.Variant}>
                <label>Renk:&nbsp;</label>
                <span className={styles.Name}>{color}</span>
              </div>
            </div>
            <span className={styles.Price}>
              {calculateDiscountedPrice(base, discountAmount)}&nbsp;TL
            </span>
            <div className={styles.DiscountContainer}>
              <span className={styles.DiscountedPrice}>{base}&nbsp;TL</span>
              <span className={styles.Discount}>{discountAmount}%</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <ImageBox
            productImg={`${process.env.REACT_APP_IMAGE_URL}${product.imgUrl}.jpg`}
            isHovered
          />
          <div className={cn(styles.Content, styles.Hover)}>
            <div className={styles.Name}>{name}</div>
            <AddButton />
          </div>
        </>
      )}
    </div>
  );
}
