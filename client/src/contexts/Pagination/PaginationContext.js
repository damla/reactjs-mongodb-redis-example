import { createContext, useContext, useState } from "react";

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [page, setPage] = useState(1); // default page number

  const values = {};

  return (
    <PaginationContext.Provider value={values}>
      {children}
    </PaginationContext.Provider>
  );
};

// created custom hook
export const usePagination = () => useContext(PaginationContext);
