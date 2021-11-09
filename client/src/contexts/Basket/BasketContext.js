import {
  createContext,
  useState,
  useContext,
  useLayoutEffect,
  useCallback,
} from "react";
import { useProducts } from "../Products/ProductsContext";

const BasketContext = createContext();
// galiba butun contextleri ayirmam gerekiyor
export const BasketProvider = ({ children }) => {
  const { products } = useProducts();
  const [count, setCount] = useState(0);

  const getItems = useCallback(() => {
    // varolan keyler bizim product listimizdeki idlere ait ise
    // eylem almak icin kontrol saglandi
    let filteredProducts;
    const keys = Object.keys(localStorage);

    filteredProducts = keys
      .map((key) => {
        return products.initial.find((p) => p._id === key);
      })
      .filter((element) => element);

    return filteredProducts;
  }, [products.initial]);

  // paint oncesi degeri cekebilmek icin useLayoutEffect kullanildi
  useLayoutEffect(() => {
    setCount(getItems().length);
  }, [getItems]);

  // add id - value pair
  const addItem = (item) => {
    localStorage.setItem(item._id, JSON.stringify(item));
    setCount((c) => c + 1);
  };

  // remove item by using id value
  const removeItem = (id) => {
    localStorage.removeItem(id);
    setCount((c) => c - 1);
  };

  const values = {
    addItem,
    getItems,
    removeItem,
    count,
    setCount,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
