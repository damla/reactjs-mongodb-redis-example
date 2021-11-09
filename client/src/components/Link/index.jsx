import styles from "./styles.module.scss";
import { useProducts } from "../../contexts/Products/ProductsContext";
import React, { useState } from "react";
import cn from "classnames";
import { useSort } from "../../contexts/Sort/SortContext";

export default function Link({ filterName, color, brand, sortingType }) {
  const [isClicked, setClicked] = useState(false);
  const { products, filters, setFilters, setProducts } = useProducts();
  const { sort, selectedSortType, setSelectedSortType } = useSort();

  const handleFilter = () => {
    setClicked(!isClicked);
    let filterList = filters;

    if (color) {
      const index = filterList.findIndex((f) => f.color === color.name);
      if (index < 0) {
        filterList.push({ color: color.name });
      } else {
        // zaten var ise eklememesi icin
        filterList.splice(index, 1);
      }
    }
    if (brand) {
      const index = filterList.findIndex((f) => f.brand === brand.name);
      if (index < 0) {
        filterList.push({ brand: brand.name });
      } else {
        filterList.splice(index, 1);
      }
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
        let count = 0;
        for (let i = 0; i < filters.length; i++) {
          if (filters[i].color) {
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

      if (filtered.length <= 0) {
        setProducts({
          initial: products.initial,
          searched: [],
          filtered: [],
          sorted: [],
        });
      }

      setProducts({
        initial: products.initial,
        searched: [],
        filtered: filtered,
        sorted: [],
      });
    }
  };
  // sorted uzerine filtreleme calismiyor

  // let selectedColor = [];
  // let selectedBrand = [];

  // const handleFilter = () => {
  //   setClicked(!isClicked);

  //   if (color && !filters.color.includes((c) => c.name === color.name))
  //     selectedColor.push(color.name);

  //   if (brand && !filters.brand.includes((b) => b.name === brand.name))
  //     selectedBrand.push(brand.name);

  //   setFilters([{ color: selectedColor }, { brand: selectedBrand }]);
  //   console.log(filters);
  // };

  return (
    <>
      {sortingType ? (
        <li
          onClick={() => {
            setSelectedSortType(sortingType);
            sort(sortingType);
          }}
          className={cn(
            styles.Container,
            sortingType === selectedSortType ? styles.Active : undefined
          )}
        >
          {filterName}
        </li>
      ) : (
        <li
          onClick={handleFilter}
          className={cn(
            styles.Container,
            isClicked ? styles.Active : undefined
          )}
        >
          {filterName}
        </li>
      )}
    </>
  );
}
