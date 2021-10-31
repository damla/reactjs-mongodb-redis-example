import { ProductTable } from "../..";
import styles from "./styles.module.scss";

export default function Section() {
  // const {
  //   loading,
  //   tableProducts, // initial product data passed on init
  // } = usePagination();

  // let row1 = tableProducts.slice(0, 4);
  // let row2 = tableProducts.slice(4, 8);
  // let row3 = tableProducts.slice(8, 12);

  return (
    <section className={styles.Container}>
      <ProductTable />
    </section>
  );
}
