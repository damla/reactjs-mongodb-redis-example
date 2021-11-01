import { createContext, useState, useContext } from "react";
import { useProducts } from "../Products/ProductsContext";
import { calculateDiscountedPrice } from "../../utils/helpers";
const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [selectedSortType, setSelectedSortType] = useState("");
  const { products, setProducts } = useProducts();

  let sortedData = [];

  const sort = () => {
    switch (selectedSortType) {
      case "lessToMore":
        if (products.filtered.length > 0) {
          sortedData = products.filtered.sort(
            (a, b) =>
              calculateDiscountedPrice(a.price.base, a.price.discountAmount) -
              calculateDiscountedPrice(b.price.base, b.price.discountAmount)
          );
        } else {
          sortedData = products.initial.sort(
            (a, b) =>
              calculateDiscountedPrice(a.price.base, a.price.discountAmount) -
              calculateDiscountedPrice(b.price.base, b.price.discountAmount)
          );
        }
        break;
      case "moreToLess":
        if (products.filtered.length > 0) {
          sortedData = products.filtered.sort(
            (a, b) =>
              calculateDiscountedPrice(b.price.base, b.price.discountAmount) -
              calculateDiscountedPrice(a.price.base, a.price.discountAmount)
          );
        } else {
          sortedData = products.initial.sort(
            (a, b) =>
              calculateDiscountedPrice(b.price.base, b.price.discountAmount) -
              calculateDiscountedPrice(a.price.base, a.price.discountAmount)
          );
        }
        break;
      case "aToZ":
        if (products.filtered.length > 0) {
          sortedData = products.filtered.sort((a, b) => {
            if (b.name > a.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
        } else {
          sortedData = products.initial.sort((a, b) => {
            if (b.name > a.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
        }
        break;
      case "zToA":
        if (products.filtered.length > 0) {
          sortedData = products.filtered.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          });
        } else {
          sortedData = products.initial.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          });
        }
        break;
      default:
        break;
    }

    setProducts({
      initial: products.initial,
      searched: [],
      filtered: products.filtered,
      sorted: sortedData,
    });
  };

  const values = { sort, selectedSortType, setSelectedSortType };

  return <SortContext.Provider value={values}>{children}</SortContext.Provider>;
};

export const useSort = () => useContext(SortContext);
