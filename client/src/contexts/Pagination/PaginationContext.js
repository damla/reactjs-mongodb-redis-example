import { createContext, useContext } from "react";
// import { useProducts } from "../Products/ProductsContext";

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  // initial state will be all products
  // const { products } = useProducts();

  // const [tableProducts, setTableProducts] = useState([]);
  // const [loading, setLoading] = useState(false);

  // // core states related to pagination
  // const [currentPageNo, setCurrentPageNo] = useState(2);
  // const [pageProducts, setPageProducts] = useState([]);

  // // to set current page number
  // const paginate = (pageNumber) => setCurrentPageNo(pageNumber);

  // useEffect(() => {
  //   // sadece component on mountta gozukecek
  //   const fetchInitialProducts = async () => {
  //     setLoading(true);

  //     const res = await products;
  //     setTableProducts(res);

  //     setLoading(false);
  //   };

  //   fetchInitialProducts();
  // }, [products]);

  // const fetchProducts = (loading, tableProducts, currentPageNo) => {
  //   if (!loading && tableProducts.length > 0) {
  //     const indexOfLastProduct = currentPageNo * 12;
  //     const indexOfFirstProduct = indexOfLastProduct - 12;

  //     setPageProducts(
  //       tableProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  //     );
  //   }
  // };

  const values = {
    // fetchProducts,
    // paginate,
    // pageProducts,
    // loading,
    // tableProducts,
    // currentPageNo,
  };

  return (
    <PaginationContext.Provider value={values}>
      {children}
    </PaginationContext.Provider>
  );
};

// created custom hook
export const usePagination = () => useContext(PaginationContext);
