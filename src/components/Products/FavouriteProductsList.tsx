import { useProducts } from "../../context/ProductsProvider";
import { useNavigate } from "react-router-dom";


import SingleProduct from "./SingleProduct";


const FavouriteProductsList = () => {
  const { favouriteProducts } = useProducts();
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/products')
  }

  if (favouriteProducts.length) {
    return (
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {favouriteProducts.map((product) => (
          <SingleProduct key={product.id} {...product} />
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen animate-jump-in ">
      <h2 className="text-3xl">You dont have any favourite products</h2>
      <button onClick={handleNavigate} className="bg-primary text-white p-2 rounded-lg mt-5">Go to products</button>
    </div>
  );
};

export default FavouriteProductsList;
