import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const FiltersContext = createContext();

// couldn't use seperate brand and color product ids endpoints because of time limitations
export const FiltersProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);
  const [loadingBrands, setLoadingBrands] = useState(true);

  const [colors, setColors] = useState([]);
  const [loadingColors, setLoadingColors] = useState(true);

  // fetch all Brands
  useEffect(() => {
    const fetchBrands = async () => {
      setLoadingBrands(true);
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/brands/all`
      );
      if (res) {
        setBrands(res.data);
      } else {
        console.error("Something wrong happened while fetching brands data.");
      }
      setLoadingBrands(false);
    };
    fetchBrands();
  }, []);

  // fetch all Colors
  useEffect(() => {
    const fetchColors = async () => {
      setLoadingColors(true);
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/colors/all`
      );
      if (res) {
        setColors(res.data);
      } else {
        console.error("Something wrong happened while fetching colors data.");
      }
      return setLoadingColors(false);
    };
    fetchColors();
  }, []);

  const values = { brands, loadingBrands, colors, loadingColors };

  return (
    <FiltersContext.Provider value={values}>{children}</FiltersContext.Provider>
  );
};

// created custom hook
export const useFilters = () => useContext(FiltersContext);
