import { createContext, useContext, useState } from "react";
import { FilterProductsProps, Product } from "../interface/interfaces";
import { products } from "../constants/ProductsConstants";

const FilterContext = createContext<FilterProductsProps | undefined>(undefined);

const FilterProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [bestsellers, setBestsellers] = useState<Product[]>(products.filter(product => product.isBestseller));

  

  return (
    <FilterContext.Provider
      value={{ categoryFilter, setCategoryFilter, bestsellers, setBestsellers }}
    >
      {children}
    </FilterContext.Provider>
  );
};



export const useFilter = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used within FilterProvider");
  }
  return context;
};

export default FilterProductsProvider;
