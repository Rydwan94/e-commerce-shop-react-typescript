import { Product } from "../../interface/interfaces";

const ProductDescription = ({product}:{product:Product}) => {

  const {longDescription, name} = product

  return (
    <div className="flex flex-col items-center mt-6 lg:max-w-7xl mx-auto max-lg:px-8">
      <h3 className="text-xl font-bold mb-4">{name} description</h3>
      <p className="text-secondTextColor">{longDescription}</p>
    </div>
  );
};

export default ProductDescription;
