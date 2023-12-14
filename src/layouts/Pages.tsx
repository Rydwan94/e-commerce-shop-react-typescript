import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import FavouriteProducts from "../pages/FavouriteProducts";
import ProductDetails from "../components/Products/ProductDetails";
import CartPage from "../pages/CartPage";
import ErrorPage from "../pages/ErrorPage";
import Documents from "../components/Documents/Documents";
import CheckOutForm from "../pages/CheckOut";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/favourites" element={<FavouriteProducts />} />
        <Route path="/checkout" element={<CheckOutForm/>}/>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/documents/*" element={<Documents />} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
    </>
  );
};

export default Pages;
