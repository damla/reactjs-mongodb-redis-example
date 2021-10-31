import styles from "./styles.module.scss";
import { SearchIcon } from "../../assets/";
import { useState } from "react";
import { useProducts } from "../../contexts/Products/ProductsContext";

export default function Search() {
  const [searchField, setSearchField] = useState({ query: "" });
  const { products, setProducts, setSearchQuery } = useProducts();

  const handleChange = (event) => {
    setSearchField({ query: event.target.value });
  };

  const search = () => {
    if (searchField.query.length > 150 || searchField.query.length <= 2) {
      console.error("Input is not valid.");
      return;
    } else {
      const searchedProducts = products.initial.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(searchField.query.toLowerCase()) ||
          product.name
            .toLowerCase()
            .replace(" ", "")
            .includes(searchField.query.toLowerCase())
      );
      setProducts({
        initial: products.initial,
        searched: searchedProducts,
        filtered: [],
        sorted: [],
      });
      setSearchQuery(searchField.query);
      setSearchField({ query: "" });
    }
  };

  return (
    <div className={styles.Container}>
      <span className={styles.LogoWrapper}>
        <img src={SearchIcon} height="17.5" alt="hb-logo" />
      </span>
      <input
        type="search"
        className={styles.SearchInput}
        placeholder="25 milyon'dan fazla ürün içerisinde ara"
        onChange={handleChange}
        onKeyPress={(event) => event.key === "Enter" && search()}
        value={searchField.query}
      />
    </div>
  );
}
