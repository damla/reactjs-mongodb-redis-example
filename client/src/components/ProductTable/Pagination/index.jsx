// import { usePagination } from "../../../contexts/Pagination/PaginationContext";
import styles from "./styles.module.scss";

export default function Pagination() {
  // const { tableProducts, productsPerPage, setCurrentPageNo } = usePagination();

  // for (let i = 1; i <= Math.ceil(tableProducts / productsPerPage); i++) {
  //   setCurrentPageNo(i);
  // }

  return (
    <div className={styles.Container}>
      <button className={styles.Button}>&#60;</button>
      <button className={styles.Button}>1</button>
      <button className={styles.Button}>2</button>
      <button className={styles.Button}>3</button>
      <button className={styles.Button}>&#62;</button>
    </div>
  );
}
