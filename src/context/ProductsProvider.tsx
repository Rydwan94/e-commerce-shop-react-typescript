import React, { createContext, useState, useContext } from "react";
import { Product } from "../interface/interfaces";
import { products } from "../constants/ProductsConstants";

interface ProductsContextProps {
  cart: Product[];
  products: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    // setCart((prev) => [...prev, product]);

    const productExist = cart.find(item => item.id === product.id)

    if(!productExist){
      setCart((prev) => [...prev, product]);
    }else return setCart(cart.filter(item => item.id !== product.id))
  };

  const removeFromCart = (productId: number) => {
    const newProducts = cart.filter((product) => product.id !== productId);
    setCart(newProducts);
  };

  return (
    <ProductsContext.Provider value={{cart, products, addToCart, removeFromCart }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};

export default ProductsProvider;
