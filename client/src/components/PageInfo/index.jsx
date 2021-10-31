import styles from "./styles.module.scss";
import { useProducts } from "../../contexts/Products/ProductsContext";

export default function PageInfo() {
  const { searchQuery, products } = useProducts();

  console.log("searched data", products.searched);
  return (
    <div className={styles.Container}>
      <h1 className={styles.PageTitle}>Arama Sonuçları</h1>
      <div className={styles.SearchContainer}>
        <label className={styles.SearchLabel}>Aranan Kelime:</label>
        <span className={styles.searchText}>{searchQuery}</span>
      </div>
    </div>
  );
}
