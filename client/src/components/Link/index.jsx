import styles from "./styles.module.scss";
import { useProducts } from "../../contexts/Products/ProductsContext";
import React, { useState } from "react";
import cn from "classnames";

export default function Link({ filterName, color, brand }) {
  const [isClicked, setClicked] = useState(false);
  const { products, filters, setFilters } = useProducts();

  const handleClick = () => {
    setClicked(!isClicked);

    let filterList = filters;

    if (color) {
      filterList.push({ color: color.name });
      // let index = products.filtered.colorKeys.findIndex(
      //   (c) => c === color.name
      // );
      // if (index < 0) {
      //   products.filtered.colorKeys.push(color.name);
      // } else {
      //   products.filtered.colorKeys.splice(index, 1);
      // }
    }
    if (brand) {
      filterList.push({ brand: brand.name });
      // const index = products.filtered.brandKeys.findIndex(
      //   (b) => b === brand.name
      // );
      // if (index < 0) {
      //   products.filtered.brandKeys.push(brand.name);
      // } else {
      //   products.filtered.brandKeys.splice(index, 1);
      // }
    }
    setFilters(filterList);
    
    if (
      products.initial.length > 0 &&
      products.searched.length <= 0 &&
      products.sorted.length <= 0
    ) {
      let filterOnBrand = products.initial.filter(function (item) {
        let count = 0;
        for (let i = 0; i < filters.length; i++) {
          if (filters[i].brand) {
            count++;
            for (var key in filters[i]) {
              if (item[key] === filters[i][key]) {
                return true;
              }
            }
          }
        }
        if (count === 0) return true;
        return false;
      });

      let filtered = filterOnBrand.filter(function (item) {
        for (let i = 0; i < filters.length; i++) {
          if (filters[i].color) {
            for (var key in filters[i]) {
              if (item[key] === filters[i][key]) {
                return true;
              }
            }
          }
        }
        return false;
      });
      console.log(filtered);
      console.log("filtreler", filters);
      // let filteredProducts = products.initial.filter(function (item) {
      //   for (var key of products.filtered.brandKeys) {
      //     if (item.brand === undefined || item.brand !== key) {
      //       return false;
      //     }
      //   }
      //   for (var key2 of products.filtered.colorKeys) {
      //     if (item.color === undefined || item.color !== key2) {
      //       return false;
      //     }
      //   }
      //   return true;
      // });
      // console.log("filtreli", filteredProducts);
    }
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
