import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import FavouriteProducts from "../pages/FavouriteProducts";
import DocumentsRoute from "./Documents";
import ProductDetails from "../components/Products/ProductDetails";
import CartPage from "../pages/CartPage";
import ErrorPage from "../pages/ErrorPage";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/favourites" element={<FavouriteProducts />} />
        <Route path="/documents/*" element={<DocumentsRoute />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
    </>
  );
};

export default Pages;
