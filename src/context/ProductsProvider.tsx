import React, { createContext, useState, useContext, useEffect } from "react";
import { Product } from "../interface/interfaces";
import { products } from "../constants/ProductsConstants";
import { useFilter } from "./FilterProductsProvider";

interface ProductsContextProps {
  currentPrice: number;
  setCurrentPrice:React.Dispatch<React.SetStateAction<number>>
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  productsList: Product[];
  setProductsList: React.Dispatch<React.SetStateAction<Product[]>>;
  favouriteProducts: Product[];
  searchValue: string;
  setsearchValue: React.Dispatch<string>;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  addToFavourites: (productId: number) => void;
  searchProduct: () => void;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

const CART_STORAGE_KEY = "cart";
const FAVOURITES_STORAGE_KEY = "favourites";

const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { setBestsellers } = useFilter();

  const [currentPrice, setCurrentPrice] = useState<number>(0)

  const [cart, setCart] = useState<Product[]>(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [productsList, setProductsList] = useState<Product[]>(() => {
    const initialProductsList = localStorage.getItem("productsList");
    return initialProductsList ? JSON.parse(initialProductsList) : products;
  });
  const [favouriteProducts, setFavouriteProducts] = useState<Product[]>(() => {
    const storedFavourites = localStorage.getItem(FAVOURITES_STORAGE_KEY);
    return storedFavourites ? JSON.parse(storedFavourites) : [];
  });
  const [searchValue, setsearchValue] = useState<string>("");

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(
      FAVOURITES_STORAGE_KEY,
      JSON.stringify(favouriteProducts)
    );
  }, [favouriteProducts]);

  useEffect(() => {
    localStorage.setItem("productsList", JSON.stringify(productsList));
  }, [productsList]);

  const addToCart = (cartProduct: Product) => {
    const productExist = cart.find((item) => item.id === cartProduct.id);
   
    if (!productExist) {
      setCart((prev) => [...prev, cartProduct]);
    }
  };

  const removeFromCart = (productId: number) => {
    const currentProduct = cart.find(product => product.id === productId)
    
    if(currentProduct){
      const newProducts = cart.filter((product) => product.id !== productId);
    setCart(newProducts);

    setCurrentPrice(prevPrice => prevPrice - (currentProduct?.price + currentProduct?.orderedQuantity))
    }

  };

  const addToFavourites = (productId: number) => {
    const newDataofProducts = [...productsList];
    const favouritesProducts = newDataofProducts.filter(
      (product) => product.isFavourite
    );
    newDataofProducts.map((product) => {
      if (product.id === productId) {
        product.isFavourite = !product.isFavourite;
        setProductsList(newDataofProducts);
        setBestsellers(
          newDataofProducts.filter((product) => product.isBestseller)
        );
        if (product.isFavourite) {
          setFavouriteProducts([...favouritesProducts, product]);
        } else if (!product.isFavourite) {
          setFavouriteProducts((prev) =>
            prev.filter((product) => product.isFavourite)
          );
        }
      }
    });
  };

  const searchProduct = () => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setProductsList(filteredProducts);
  };

  return (
    <ProductsContext.Provider
      value={{
        currentPrice,
        setCurrentPrice,
        cart,
        setCart,
        productsList,
        setProductsList,
        favouriteProducts,
        searchValue,
        setsearchValue,
        addToCart,
        addToFavourites,
        removeFromCart,
        searchProduct,
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
