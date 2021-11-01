import { createContext, useState, useContext } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [count, setCount] = useState(localStorage.length);

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
    removeItem,
    count,
    setCount,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
