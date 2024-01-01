
import { useFilter } from "../../context/FilterProductsProvider";
import SingleProduct from "../Products/SingleProduct";

const Bestsellers = () => {
    
    const {bestsellers} = useFilter()

    console.log(bestsellers)

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto py-20 px-10 ">
      
        <h3 className="text-secondTextColor text-xl">Featured Products</h3>
        <h2 className="text-textColor text-bold text-2xl mt-5 font-bold text-center uppercase">
          Bestsellers products
        </h2>
        <p className="text-secondTextColor mt-5 text-center">
          Problems trying to resolve the conflict between
        </p>
     
      <div className="grid place-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full gap-16 mt-10">
        {bestsellers.map(product => <SingleProduct key={product.id} {...product} />)}
      </div>
    </div>
  );
};

export default Bestsellers;
