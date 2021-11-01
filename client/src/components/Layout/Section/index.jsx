import { ProductTable } from "../..";
import styles from "./styles.module.scss";

export default function Section() {
  return (
    <section className={styles.Container}>
      <ProductTable />
    </section>
  );
}
