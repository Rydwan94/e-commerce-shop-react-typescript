import {useState} from "react";
import { Link } from "react-router-dom";
import { Product } from "../../interface/interfaces";
import { useProducts } from "../../context/ProductsProvider";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Importuj ikony serca
import CartCheckout from "../../modals/CartCheckout";

const SingleProduct: React.FC<Product> = ({
  id,
  name,
  description,
  price,
  image,
  category,
  isFavourite,
}) => {
  const { addToCart, addToFavourites, cart } = useProducts();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      description,
      price,
      image,
      category,
      isFavourite,
    });

    setIsModalOpen(!isModalOpen)

  };

  const handleAddToFavourites = () => addToFavourites(id);

  const findProduct = cart.find((item) => item.id === id);

  return (
    <>
    <figure className="max-w-fit max-h-max p-2" key={id}>
      <img src={image} alt={name} />
      <figcaption>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{price} pln</p>
      </figcaption>
      <div className="flex items-center justify-between">
        <button onClick={handleAddToCart}>
          {findProduct ? (
            <Link to={`/products/${id}`}>Details</Link>
          ) : (
            "Add product"
          )}
        </button>
        <button onClick={handleAddToFavourites}>
          {isFavourite ? (
            <FaHeart color="red" size={20} /> // Ikona serca, gdy produkt jest ulubiony
          ) : (
            <FaRegHeart color="gray" size={20} /> // Ikona pustego serca, gdy produkt nie jest ulubiony
          )}
        </button>
      </div>
    </figure>
    <CartCheckout isModalOpen={isModalOpen} id={id}/>
    </>
  );
};

export default SingleProduct;
