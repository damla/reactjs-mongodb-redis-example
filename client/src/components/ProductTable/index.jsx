import React from "react";
import { Pagination } from "..";
import { ProductRow, ProductItem } from "..";
// import { usePagination } from "../../contexts/Pagination/PaginationContext";
import styles from "./styles.module.scss";

export default function ProductTable() {
  // const {
  //   pageProducts,
  //   fetchProducts,
  //   paginate,
  //   loading,
  //   tableProducts,
  //   currentPageNo,
  // } = usePagination();

  // useEffect(() => {
  //   fetchProducts(loading, tableProducts, currentPageNo);
  //   console.log(pageProducts);
  //   console.log(currentPageNo);
  // }, [loading, tableProducts, currentPageNo]);

  // if (pageProducts <= 0) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className={styles.Container}>
      <div className={styles.Table}>
        <ProductRow>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ProductRow>
        <ProductRow>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ProductRow>
        <ProductRow>
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ProductRow>
      </div>
      <Pagination />
    </div>
  );
}
