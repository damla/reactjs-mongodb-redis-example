import styles from "./styles.module.scss";
import { useProducts } from "../../contexts/Products/ProductsContext";
import React, { useState } from "react";
import cn from "classnames";

export default function Link({ filterName, color, brand }) {
  const [isClicked, setClicked] = useState(false);
  const { products } = useProducts();

  const handleClick = () => {
    setClicked(!isClicked);

    if (color) {
      let index = products.filtered.colorKeys.findIndex(
        (c) => c === color.name
      );
      if (index < 0) {
        products.filtered.colorKeys.push(color.name);
      } else {
        products.filtered.colorKeys.splice(index, 1);
      }
    }
    if (brand) {
      const index = products.filtered.brandKeys.findIndex(
        (b) => b === brand.name
      );
      if (index < 0) {
        products.filtered.brandKeys.push(brand.name);
      } else {
        products.filtered.brandKeys.splice(index, 1);
      }
    }

    if (
      products.initial.length > 0 &&
      products.searched.length <= 0 &&
      products.sorted.length <= 0
    ) {
      let filteredProducts = products.initial.filter(function (item) {
        for (var key of products.filtered.brandKeys) {
          if (item.brand === undefined || item.brand !== key) {
            return false;
          }
        }
        for (var key2 of products.filtered.colorKeys) {
          if (item.color === undefined || item.color !== key2) {
            return false;
          }
        }
        return true;
      });
      console.log("filtreli", filteredProducts);
    }

    // setProducts({
    //   initial: products.initial,
    //   searched: searchedProducts,
    //   filtered: { brandKeys: [], colorKeys: [], data: [] },
    //   sorted: [],
    // });
  };

  return (
    <li
      onClick={handleClick}
      className={cn(styles.Container, isClicked ? styles.Active : undefined)}
    >
      {filterName}
    </li>
  );
}
