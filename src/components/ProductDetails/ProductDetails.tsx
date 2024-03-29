import { useNavigate, useParams } from "react-router-dom";

import { FiPlus, FiMinus } from "react-icons/fi";
import { useProducts } from "../../context/ProductsProvider";
import ProductDetailsPages from "../../pages/ProductDetails/ProductDetailsPages";
import ProductDetailsNav from "./ProductDetailsNav";
import CartCheckout from "../../modals/CartCheckout";
import { useState } from "react";
import { Product } from "../../interface/interfaces";
import RemoveProductModal from "../../modals/RemoveProductModal";

const ProductDetails: React.FC = () => {
  const { productsList, cart, setProductsList, addToCart, removeFromCart } =
    useProducts();

  const [openModalFromDetails, setOpenModalFromDetails] = useState(false);

  const [removeProductModal, setRemoveProductModal] = useState(false);

  const { id } = useParams();
  const productId = parseInt(id || "", 10);

  const Navigate = useNavigate();

  const product = productsList.find((p) => p.id === productId);

  const productExistInCart = cart.find((item) => item.id === product?.id);

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
    );
  };

  const removeProductFromCart = (id: number) => {
    removeFromCart(id);

    setRemoveProductModal(true);
  };

  const handleGoToCart = () => {
    Navigate("/cart");
    window.scroll({ top: 0 });
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);

    setOpenModalFromDetails(true);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full mt-8">
      <div className="w-full bg-lightGray1">
        <div className="flex justify-between max-md:flex-col max-md:items-center max-w-7xl mx-auto p-11">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-[30%] max-md:w-[50%] md:w-[40%] rounded-lg md:mr-7"
          />
          <div className="flex flex-col justify-between max-md:items-center max-md:mt-7">
            <div className="max-md:flex max-md:flex-col max-md:items-center">
              <h2 className="text-2xl font-semibold ">{product.name}</h2>
              <p className="text-lg font-bold text-primaryTextColor max-md:mt-5 ">
                {product.price?.toFixed(2)} PLN
              </p>
              <p className="max-md:mt-2 ">
                Availability :{" "}
                <span className="text-primaryTextColor">{product.stock}</span>
              </p>
              <p className="text-gray-600 mb-4 max-md:text-center max-md:mt-5 ">
                {product.description}
              </p>
              {
                productExistInCart ? null : (
                  <div className="flex items-center ">
                <button
                  disabled={product.orderedQuantity === 1}
                  onClick={handleReduceQuantity}
                  className="bg-lightBackgroundColor rounded-full p-2 hover:shadow-lg transition-shadow"
                >
                  <FiMinus />
                </button>
                <span className="mx-4">{product.orderedQuantity}</span>
                <button
                  disabled={
                    product.orderedQuantity === product.stock ||
                    productExistInCart !== undefined
                  }
                  onClick={handleRiseQuantity}
                  className="bg-lightBackgroundColor rounded-full p-2 hover:shadow-lg transition-shadow"
                >
                  <FiPlus />
                </button>
              </div>
                )
              }
            </div>
            <div className="flex items-center max-md:mt-5 md:mt-5 ">
              {productExistInCart ? (
                <button
                  className="bg-dangerColor p-3 text-white rounded-lg hover:bg-red-700 transition-all "
                  onClick={() => removeProductFromCart(product.id)}
                >
                  Remove from cart
                </button>
              ) : (
                <button
                  className="bg-primary p-3 text-white rounded-lg hover:bg-hoverColor transition-all "
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
              )}
              <button
                disabled={cart.length === 0}
                onClick={handleGoToCart}
                className={`bg-primary p-3 text-white ml-7 rounded-lg transition-all ${
                  cart.length > 0 && "hover:bg-hoverColor"
                }`}
              >
                Go to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProductDetailsNav id={productId} />

      <ProductDetailsPages productId={productId} product={product} />

      <CartCheckout
        isModalOpen={openModalFromDetails}
        setIsModalOpen={setOpenModalFromDetails}
        id={product.id}
      />
      {removeProductModal && (
        <RemoveProductModal
          removeProductModal={removeProductModal}
          setRemoveProductModal={setRemoveProductModal}
        />
      )}
    </div>
  );
};

export default ProductDetails;
