import { useParams } from "react-router-dom";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useProducts } from "../../context/ProductsProvider";


const ProductDetails: React.FC = () => {
  const { productsList, cart, setProductsList, addToCart, removeFromCart, currentPrice, setCurrentPrice } = useProducts();
  
  

  const { id } = useParams();
  const productId = parseInt(id || "", 10);

  const product = productsList.find((p) => p.id === productId);

  const productExistInCart = cart.find((item) => item.id === product?.id);


  console.log(productExistInCart);

  const handleRiseQuantity = () => {
    setProductsList((prevProductsList) =>
      prevProductsList.map((item) =>
        item.id === product?.id
          ? {
              ...item,
              orderedQuantity: item.orderedQuantity + 1,
              price: item.price + item.price / item.orderedQuantity,
            }
          : item
      )
    );

    setCurrentPrice(product?.price + product?.price / product?.orderedQuantity)
  };

  const handleReduceQuantity = () => {
    setProductsList((prevProductList) =>
    prevProductList.map((item) =>
    item.id === product?.id
    ? {
      ...item,
      orderedQuantity: item.orderedQuantity - 1,
      price: item.price - item.price / item.orderedQuantity,
    }
    : item
    )
    )
    setCurrentPrice(product?.price - product?.price / product?.orderedQuantity)
  };
  
  console.log(currentPrice)
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full mt-8">
      <div className="w-full bg-lightGray1">
        <div className="flex justify-between max-w-7xl mx-auto p-11">
          <img
            src={product.image}
            alt={product.name}
            className="w-[50%] rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <p className="text-lg font-bold text-primaryTextColor">
                {product.price.toFixed(2)} PLN
              </p>
              <p>
                Availability :{" "}
                <span className="text-primaryTextColor">{product.stock}</span>
              </p>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center">
                <button
                  disabled={product.orderedQuantity === 1}
                  onClick={handleReduceQuantity}
                  className="bg-lightBackgroundColor rounded-full p-2 hover:shadow-lg transition-shadow"
                >
                  <FiChevronLeft />
                </button>
                <span className="mx-4">{product.orderedQuantity}</span>
                <button
                  disabled={product.orderedQuantity === product.stock}
                  onClick={handleRiseQuantity}
                  className="bg-lightBackgroundColor rounded-full p-2 hover:shadow-lg transition-shadow"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
            {productExistInCart ? (
              <button onClick={() => removeFromCart(product.id) }>Remove</button>
            ) : (
              <button onClick={() => addToCart(product)} className="self-start">
                Dodaj do koszyka
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
