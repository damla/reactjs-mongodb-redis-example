import { createContext, useState, useContext } from "react";
import { useBasket } from "../Basket/BasketContext";
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const { removeItem } = useBasket();
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState("");

  const activateModal = (productId) => {
    setProductId(productId);
    setShowModal(true);
  };
  const yes = () => {
    removeItem(productId);
    setShowModal(false);
  };

  const no = () => setShowModal(false);

  const values = {
    yes,
    no,
    showModal,
    setShowModal,
    activateModal,
  };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
