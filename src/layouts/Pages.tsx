import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products/Products";
import FavouriteProducts from "../pages/Products/FavouriteProducts";
import ProductDetails from "../components/Products/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import Documents from "../components/Documents/Documents";
import CheckOutForm from "../pages/CheckOut/CheckOut";
import OrderConfirmation from "../pages/CheckOut/OrderConfirmation";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/favourites" element={<FavouriteProducts />} />
        <Route path="/checkout" element={<CheckOutForm/>}/>
        <Route path="/delivery-confirmation" element={<OrderConfirmation />} />
        <Route path="/documents/*" element={<Documents />} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
    </>
  );
};

export default Pages;
