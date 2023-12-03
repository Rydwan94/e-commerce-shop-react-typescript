import React from "react";
import { Product } from "../../interface/interfaces";
import { useProducts } from "../../context/ProductsProvider";

const SingleProduct: React.FC<Product> = ({
  id,
  name,
  description,
  price,
  image,
  category
}) => {
  const { addToCart, cart } = useProducts();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      description,
      price,
      image,
      category
    });
  };

  const findProduct = cart.find(item => item.id === id)

  return (
    <figure className="max-w-fit max-h-max p-2" key={id}>
      <img src={image} alt={name} />
      <figcaption>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{price} pln</p>
      </figcaption>
      <button onClick={handleAddToCart}>{findProduct ? "Remove Product" : "Add product"}</button>
    </figure>
  );
};

export default SingleProduct;
