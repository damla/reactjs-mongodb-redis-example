import React, { useState } from "react";
import { BasketItem, Pagination } from "..";
import { ProductRow, ProductItem } from "..";
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
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  let rows = [];
  for (let i = 0; i < rowCount; i++) {
    let indexOfLastProduct = i + 1 * productsPerRow;
    let indexOfFirstProduct = indexOfLastProduct - productsPerRow;

    let rowData = currentProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    rows.push(rowData);
  }
  console.log(rows);

  return (
    <div className={styles.Container}>
      <div className={styles.Table}>
        {rows.map((items, i) => {
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
        paginate={paginate}
        productsPerPage={productsPerPage}
        totalProducts={products.length}
      />
    </div>
  );
}
