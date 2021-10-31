// import { usePagination } from "../../../contexts/Pagination/PaginationContext";
import styles from "./styles.module.scss";

export default function Pagination({
  totalProducts,
  productsPerPage,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.Container}>
      <button className={styles.Button}>&#60;</button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={styles.Button}
        >
          {number}
        </button>
      ))}
      <button className={styles.Button}>&#62;</button>
    </div>
  );
}
