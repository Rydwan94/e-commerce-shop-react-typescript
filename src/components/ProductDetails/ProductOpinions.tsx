import { FiTrash2 } from "react-icons/fi";
import { useProducts } from "../../context/ProductsProvider";
import { Product } from "../../interface/interfaces";
import OpinionForm from "./OpinionForm";

const ProductOpinions = ({
  productId,
  product,
}: {
  productId: number;
  product: Product;
}) => {
  const { opinions } = product;

  const { productsList, setProductsList } = useProducts();

  const handleDeleteOpinion = (id:number) => {
    const newOpinions = opinions.filter((opinion) => opinion.id !== id);
  
    setProductsList((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === productId
          ? { ...prevProduct, opinions: newOpinions }
          : prevProduct
      )
    );
  };
  

  const productOpinions = opinions.map((opinion) => (
    <div key={opinion.id} className="flex items-start border-b p-4 max-md:mb-10">
    <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
      
    </div>
    <div className="flex flex-col flex-grow">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{opinion.name}</h3>
        <button
          className="text-red-500 hover:text-red-700 focus:outline-none"
          onClick={() => handleDeleteOpinion(opinion.id)}
        >
          <FiTrash2 />
        </button>
      </div>
      <p className="text-gray-500">{opinion.email}</p>
      <p className="mt-2">{opinion.opinionText}</p>
    </div>
  </div>
  ));
  return (
    <div className="flex justify-center max-md:flex-col p-10 ">
      <div className="basis-1/2 lg:px-10">
        {opinions.length ? productOpinions : <h2 className="text-center  max-md:mb-10">There is no opinions</h2>}
      </div>
      <OpinionForm
        productId={productId}
        productsList={productsList}
        setProductsList={setProductsList}
      />
    </div>
  );
};

export default ProductOpinions;
