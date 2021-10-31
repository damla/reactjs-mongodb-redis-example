// import cn from "classnames";
import styles from "./styles.module.scss";
import cn from "classnames";

export default function ImageBox({ basketImg, productImg, isHovered }) {
  const basketItemClasses = cn(styles.Container, styles.BasketItemImg);
  const productItemClasses = cn(
    styles.Container,
    styles.ProductItemImg,
    isHovered ? styles.Hovered : undefined
  );
  return (
    <>
      {basketImg && (
        <div className={basketItemClasses}>
          <img
            src={`${process.env.REACT_APP_IMAGE_URL}s/32/224-332/10352817012786.jpg`}
            width="40"
            height="59.23"
            alt="basket-item"
          />
        </div>
      )}

      {productImg && (
        <div className={productItemClasses}>
          <img src={productImg} width="224" height="332" alt="product" />
        </div>
      )}
    </>
  );
}
