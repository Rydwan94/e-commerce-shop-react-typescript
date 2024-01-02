import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartCheckoutProps } from "../interface/interfaces";

import { useProducts } from "../context/ProductsProvider";

const CartCheckout = ({
  isModalOpen,
  setIsModalOpen,
  id,
}: CartCheckoutProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { productsList } = useProducts();
  const Navigate = useNavigate();
  const location = useLocation();

  const filteredProduct = productsList.find((product) => product.id === id);

  useEffect(() => {
    if (isModalOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else dialogRef.current?.close();
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleGoToDetails = () => {
    if (location.pathname.startsWith("/")) {
      Navigate(`/products/${filteredProduct?.id}`);
    } else if (location.pathname.startsWith("/products")) {
      Navigate(`/${filteredProduct?.id}`);
    }
    setIsModalOpen(false);
  };

  const handleGoToCart = () => {
    Navigate("/cart");
  };

  return (
    <dialog
      ref={dialogRef}
      className={`fixed max-md:max-w-[50%] rounded-md shadow-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[30%] p-4 animate-fade-in-down`}
    >
      {filteredProduct && (
        <>
          <div className="flex flex-col items-center mb-4">
            <img src={filteredProduct.image} alt="brand" className="mb-2" />
            <h2 className="text-lg font-bold mt-2">{filteredProduct.name}</h2>
            <p className="text-gray-600 mt-2">{filteredProduct.description}</p>
            <p className="text-lg font-bold mt-2">
              ${filteredProduct.price.toFixed(2)}
            </p>
          </div>
          <div className="flex flex-col justify-evenly">
            <button
              onClick={handleCloseModal}
              className="bg-primary text-white p-2 rounded-md hover:bg-hoverColor focus:outline-none"
            >
              Close
            </button>
            <button
              onClick={handleGoToDetails}
              className="bg-primary text-white p-2 mt-3 rounded-md hover:bg-hoverColor focus:outline-none"
            >
              Check details
            </button>
            <button
              onClick={handleGoToCart}
              className="bg-primary text-white p-2 mt-3 rounded-md hover:bg-hoverColor focus:outline-none"
            >
              Check cart
            </button>
          </div>
        </>
      )}
    </dialog>
  );
};

export default CartCheckout;
