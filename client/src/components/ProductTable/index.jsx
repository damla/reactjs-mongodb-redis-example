import { Pagination } from "..";
import styles from "./styles.module.scss";
import { useProducts } from "../../contexts/Products/ProductsContext";

export default function ProductTable({ children }) {
  const { products, loading } = useProducts();
  if (!loading) console.log(products[0].name);

  return (
    <div className={styles.Container}>
      <div className={styles.Table}>{children}</div>
      <Pagination />
    </div>
  );
}
