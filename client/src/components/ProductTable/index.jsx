import React, { useState } from "react";
import { ProductRow, ProductItem, Pagination } from "..";
import { useProducts } from "../../contexts/Products/ProductsContext";
// import { usePagination } from "../../contexts/Pagination/PaginationContext";
import styles from "./styles.module.scss";

export default function ProductTable() {
  const { products, loading } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [productsPerRow] = useState(4);
  const [rowCount] = useState(productsPerPage / productsPerRow);

  if (loading) return <div>Loading...</div>;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  let data = products.initial;

  if (products.searched.length > 0) {
    data = products.searched;
  } else if (products.filtered.length > 0) {
    data = products.filtered;
  }
  // else if (products.sorted){ // true false kontrolu lazim
  //   data = products.sorted;
  // }

  let currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  let rows = [];
  for (let i = 1; i <= rowCount; i++) {
    let indexOfLastProduct = i * productsPerRow;
    let indexOfFirstProduct = indexOfLastProduct - productsPerRow;

    let rowData = currentProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    rows.push(rowData);
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Table}>
        {rows.map((items, i) => {
          if (items.length === 0) return <></>;
          return (
            <ProductRow key={i}>
              {items.map((item, i) => {
                return <ProductItem key={i} product={item} />;
              })}
            </ProductRow>
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        paginate={paginate}
        productsPerPage={productsPerPage}
        totalProducts={data.length}
      />
    </div>
  );
}
