import React, { createContext, useState, useContext } from "react";
import { Product } from "../interface/interfaces";
import { products } from "../constants/ProductsConstants";

interface ProductsContextProps {
  cart: Product[];
  productsList: Product[];
  favouriteProducts: Product[]
  searchValue: string;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  addToFavourites: (productId: number) => void;
  searchProduct: () => void;
  setsearchValue: React.Dispatch<string>;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [productsList, setProductsList] = useState<Product[]>(products);
  const [favouriteProducts, setFavouriteProducts] = useState<Product[]>([])
  const [searchValue, setsearchValue] = useState<string>("");

  const addToCart = (cartProduct: Product) => {

    const productExist = cart.find((item) => item.id === cartProduct.id);

    if (!productExist) {
      setCart((prev) => [...prev, cartProduct]);
    } 
  };

  const removeFromCart = (productId: number) => {
    const newProducts = cart.filter((product) => product.id !== productId);
    setCart(newProducts);
  };

  const addToFavourites = (productId:number) => {
    const newDataofProducts = [...productsList]
    const favouritesProducts = newDataofProducts.filter(product => product.isFavourite)
    newDataofProducts.map(product => {
      if(product.id === productId){
        product.isFavourite = !product.isFavourite
        setProductsList(newDataofProducts)
        if(product.isFavourite){
          setFavouriteProducts([...favouritesProducts,product])
        }else if(!product.isFavourite){
          setFavouriteProducts(prev => prev.filter(product => product.isFavourite))
        }
      }
    })
  }

  const searchProduct = () => {
    const filteredProducts = products.filter(
      (product) => product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setProductsList(filteredProducts);
  };

  return (
    <ProductsContext.Provider
      value={{
        cart,
        productsList,
        favouriteProducts,
        searchValue,
        setsearchValue,
        addToCart,
        addToFavourites,
        removeFromCart,
        searchProduct
      }}
    >
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
