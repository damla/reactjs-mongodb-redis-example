import styles from "./styles.module.scss";
import { ProductTable, ProductRow } from "../..";

export default function Section() {
  return (
    <section className={styles.container}>
      <ProductTable>
        <ProductRow />
        <ProductRow />
        <ProductRow />
      </ProductTable>
    </section>
  );
}
