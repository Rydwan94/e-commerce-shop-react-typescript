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
  orderedQuantity,
  opinions,
}) => {
  const { addToCart, addToFavourites, cart } = useProducts();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const viewProductDetails = () => {
    navigate(`/products/${id}/description`);

    window.scroll({ top: 0 });
  };

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
      orderedQuantity,
      opinions,
    });

    setIsModalOpen(true);
  };

  const handleAddToFavourites = () => addToFavourites(id);

  const findProduct = cart.find((item) => item.id === id);

  const handleScrollToTop = () => {
    window.scroll({ top: 0 });
  };

  return (
    <>
      <figure className="group w-[80%] lg:w-[90%] max-md:min-w-[60%] bg-lightGray1 shadow-lg rounded-xl hover:shadow-2xl transition-all">
        <div className="relative rounded-xl">
          {isBestseller && (
            <div className=" absolute top-3 left-2 p-3 bg-dangerColor text-lightTextColor rounded-2xl">
              Bestseller
            </div>
          )}
          <img
            className="aspect-square object-cover rounded-t-xl max-md:w-full max-md:max-h-80"
            src={image}
            alt={name}
          />
          <div className="flex justify-center items-center gap-3 h-0 w-full group-hover:h-[70px]  absolute bottom-0 left-0 bg-lightGray1 overflow-hidden rounded-t-full transition-all duration-500">
            <button
              onClick={viewProductDetails}
              className="p-3 rounded-full bg-lightGray1 text-textColor my-3 hover:bg-lightBackgroundColor hover:shadow-lg transition-all"
            >
              <FaEye size={25} />
            </button>
            <button
              onClick={handleAddToCart}
              className="p-3 rounded-full bg-lightGray1 text-textColor my-3 hover:bg-lightBackgroundColor hover:shadow-lg transition-all"
            >
              <FaShoppingCart size={25} />
            </button>
          </div>
        </div>
        <figcaption className="flex flex-col justify-between h-[250px] p-4">
          <h2 className="text-textColor pt-2">{name}</h2>
          <p className="text-secondTextColor pt-2">{description}</p>
          <p className="text-secondaryTextColor pt-2">{price} pln</p>
          <div className="flex items-center justify-between pt-2">
            {findProduct ? (
              <Link to={`/products/${id}/description`}>
                <button
                  onClick={handleScrollToTop}
                  className="border-2 border-primary p-2 text-primary rounded-full"
                >
                  {" "}
                  Details
                </button>
              </Link>
            ) : (
              <button
                className="bg-primary p-2 text-lightTextColor rounded-full"
                onClick={handleAddToCart}
              >
                {" "}
                Add product
              </button>
            )}

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
      <CartCheckout
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        id={id}
      />
    </>
  );
};

export default SingleProduct;
