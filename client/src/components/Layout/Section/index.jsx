import styles from "./styles.module.scss";
import { ProductTable, ProductRow, ProductItem } from "../..";

export default function Section() {
  return (
    <section className={styles.Container}>
      <ProductTable>
        <ProductRow>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ProductRow>
        <ProductRow>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ProductRow>
        <ProductRow>
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ProductRow>
      </ProductTable>
    </section>
  );
}
