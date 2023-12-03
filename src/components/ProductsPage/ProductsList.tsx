import React from "react";
import { products } from "../../constants/ProductsConstants";
import SingleProduct from "./SingleProduct";

const ProductsList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <SingleProduct key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
