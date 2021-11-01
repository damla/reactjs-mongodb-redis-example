import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({
    initial: [],
    searched: [],
    filtered: [],
    sorted: [],
  });
  const [filters, setFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/products/all`
      );
      setProducts({
        initial: res.data,
        searched: [],
        filtered: [],
        sorted: [],
      });
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const values = {
    products,
    setProducts,
    loading,
    setLoading,
    filters,
    setFilters,
    filteredProducts,
    setFilteredProducts,
    searchQuery,
    setSearchQuery,
  };

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

// created custom hook
export const useProducts = () => useContext(ProductsContext);
