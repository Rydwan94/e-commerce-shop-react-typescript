
import { useFilter } from "../../context/FilterProductsProvider";
import SingleProduct from "../Products/SingleProduct";

const Bestsellers = () => {
    
    const {bestsellers} = useFilter()

    console.log(bestsellers)

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto py-20 px-10 max-md:px-0 ">
      
        <h3 className="text-secondTextColor text-xl">Featured Products</h3>
        <h2 className="text-textColor text-bold text-2xl mt-5 font-bold text-center uppercase">
          Bestsellers products
        </h2>
        <p className="text-secondTextColor mt-5 text-center">
          Problems trying to resolve the conflict between
        </p>
     
      <div className="grid place-items-center w-full gap-16 mt-10 lg:grid-cols-3 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:overflow-x-scroll max-md:p-5 max-md:gap-9 ">
        {bestsellers.map(product => <SingleProduct key={product.id} {...product} />)}
      </div>
    </div>
  );
};

export default Bestsellers;
