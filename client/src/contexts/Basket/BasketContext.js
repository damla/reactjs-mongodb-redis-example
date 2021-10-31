import { createContext, useState, useContext } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  // initiliazed with static data
  const [isOpen, setIsOpen] = useState("");

  const values = {
    isOpen,
    setIsOpen,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

// creayed custom hook
export const useBasket = () => useContext(BasketContext);
