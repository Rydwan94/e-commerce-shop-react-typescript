import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Product } from "../../interface/interfaces";
import { useProducts } from "../../context/ProductsProvider";
import { FaHeart, FaRegHeart, FaEye, FaShoppingCart } from "react-icons/fa"; // Importuj ikony

import CartCheckout from "../../modals/CartCheckout";

const SingleProduct: React.FC<Product> = ({
  id,
  name,
  description,
  price,
  image,
  category,
  isFavourite,
  isBestseller,
  stock,
  orderedQuantity
}) => {
  const { addToCart, addToFavourites, cart } = useProducts();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const navigate = useNavigate()

  const viewProductDetails = () => {
    navigate(`/products/${id}`)
  }
 
  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      description,
      price,
      image,
      category,
      isFavourite,
      isBestseller,
      stock,
      orderedQuantity
    });

    setIsModalOpen(true);
  };

  const handleAddToFavourites = () => addToFavourites(id);

  const findProduct = cart.find((item) => item.id === id);


  return (
    <>
      <figure className="group w-[80%] lg:w-[90%] bg-lightGray1 shadow-lg rounded-xl">
        <div className="relative overflow-hidden rounded-xl">
          {isBestseller && <div className=" absolute top-3 left-2 p-3 bg-dangerColor text-lightTextColor rounded-2xl">Bestseller</div>}
          <img className="aspect-square object-cover" src={image} alt={name} />
          <div className="flex justify-center items-center gap-3 h-0 w-full group-hover:h-[70px]  absolute bottom-0 left-0 bg-black opacity-50 overflow-hidden transition-all duration-500">
            <button onClick={viewProductDetails} className="p-3 rounded-full bg-lightBackgroundColor text-textColor my-3">
              <FaEye size={25} />
            </button>
            <button onClick={handleAddToCart} className="p-3 rounded-full bg-lightBackgroundColor text-textColor my-3">
              <FaShoppingCart  size={25} />
            </button>
          </div>
        </div>
        <figcaption className="flex flex-col justify-between h-[250px] p-4">
          <h2 className="text-textColor pt-2">{name}</h2>
          <p className="text-secondTextColor pt-2">{description}</p>
          <p className="text-secondaryTextColor pt-2">{price} pln</p>
          <div className="flex items-center justify-between pt-2">
            <button className="border-2 border-primary p-2 text-primary rounded-full" onClick={handleAddToCart}>
              {findProduct ? (
                <Link to={`/products/${id}`}>Details</Link>
              ) : (
                "Add product"
              )}
            </button>
            <button onClick={handleAddToFavourites}>
              {isFavourite ? (
                <FaHeart color="red" size={20} />
              ) : (
                <FaRegHeart color="gray" size={20} />
              )}
            </button>
          </div>
        </figcaption>
      </figure>
      <CartCheckout isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} id={id} />
    </>
  );
};

export default SingleProduct;
