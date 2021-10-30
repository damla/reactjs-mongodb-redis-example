import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch all products
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/products/all`
      );
      setProducts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const values = {
    products,
    setProducts,
    loading,
    setLoading,
    filteredProducts,
    setFilteredProducts,
  };

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

// creayed custom hook
export const useProducts = () => useContext(ProductsContext);
