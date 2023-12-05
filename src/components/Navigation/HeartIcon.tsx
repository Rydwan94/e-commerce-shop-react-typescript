import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useProducts } from "../../context/ProductsProvider";
import { useNavigate } from "react-router-dom";

const HeartIcon = () => {
  const { favouriteProducts } = useProducts();
  const navigate = useNavigate();

  const handleNavigateToFavourites = () => {
    navigate("/favourites");
  };

  return (
    <div className="relative pt-1">
      <button onClick={handleNavigateToFavourites}>
        {favouriteProducts.length > 0 ? (
          <FaHeart color="red" size="23" />
        ) : (
          <FaRegHeart color="white" size="23" />
        )}
      </button>
      {favouriteProducts.length > 0 ? (
        <div className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full px-1 animate-pulse">
          {favouriteProducts.length}
        </div>
      ): null}
    </div>
  );
};

export default HeartIcon;
