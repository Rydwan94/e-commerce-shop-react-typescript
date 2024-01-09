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
  if (filteredProduct) {
    if (location.pathname.startsWith("/")) {
      Navigate(`/products/${filteredProduct.id}/description`);
    } else if (location.pathname.startsWith("/products")) {
      Navigate(`/${filteredProduct.id}/description`);
    }
    setIsModalOpen(false);
    
    setTimeout(() => {
      window.scroll({
        top: 0,
      });
    },50)
  }
};

const handleGoToCart = () => {
  Navigate("/cart");
  setTimeout(() => {
    window.scroll({
      top: 0,
    });
  },50)
};

  return (
    <dialog
      ref={dialogRef}
      className={`fixed max-md:max-w-[70%] rounded-xl shadow-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[30%] animate-fade-in-down`}
    >
      {filteredProduct && (
        <>
          <div className="flex flex-col items-center mb-4">
            <div className="w-full">
              <img
                src={filteredProduct.image}
                alt="brand"
                className="mb-2 object-cover aspect-square w-full"
              />
            </div>
            <h2 className="text-lg font-bold mt-2">{filteredProduct.name}</h2>
            <p className="text-gray-600 mt-2 text-center">{filteredProduct.description}</p>
            <p className="text-lg font-bold mt-2">
              ${filteredProduct.price.toFixed(2)}
            </p>
          </div>
          <div className="flex flex-col justify-evenly p-3">
            <button
              onClick={handleCloseModal}
              className="bg-primary text-white p-2 rounded-md hover:bg-hoverColor focus:outline-none"
            >
              Close
            </button>
            {location.pathname.startsWith(
              `/products/${filteredProduct?.id}`
            ) ? null : (
              <button
                onClick={handleGoToDetails}
                className="bg-primary text-white p-2 mt-3 rounded-md hover:bg-hoverColor focus:outline-none"
              >
                Check details
              </button>
            )}
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
