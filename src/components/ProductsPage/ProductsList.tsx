import React from "react";
import SingleProduct from "./SingleProduct";
import { useProducts } from "../../context/ProductsProvider";

const ProductsList: React.FC = () => {

  const {productsList} = useProducts()
  if(productsList.length){

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {productsList.map((product) => (
        <SingleProduct key={product.id} {...product} />
      ))}
    </div>
    
  );
} else return <h1>We dont have this product</h1>;
}
export default ProductsList;