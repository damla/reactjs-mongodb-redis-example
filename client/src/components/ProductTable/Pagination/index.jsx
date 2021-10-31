import styles from "./styles.module.scss";
import cn from "classnames";
// current = number
export default function Pagination({
  totalProducts,
  productsPerPage,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];
  const current = currentPage;

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.Container}>
      <button
        className={styles.Button}
        onClick={() => paginate(current === 1 ? current : current - 1)}
      >
        &#60;
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={cn(
            styles.Button,
            currentPage === number ? styles.Stroke : undefined
          )}
        >
          {number}
        </button>
      ))}
      <button
        className={styles.Button}
        onClick={() =>
          paginate(current === pageNumbers.length ? current : current + 1)
        }
      >
        &#62;
      </button>
    </div>
  );
}
