import React, { useEffect, useRef } from "react";
import { useProducts } from "../context/ProductsProvider";
import { useNavigate } from "react-router-dom";
import brand from "../assets/Images/Brand/brand.png";

const CartCheckout = ({ isModalOpen, id }: { isModalOpen: boolean; id: number }) => {
  const { productsList } = useProducts();
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const Navigate = useNavigate();

  const filteredProduct = productsList.find((product) => product.id === id);

  useEffect(() => {
    if (isModalOpen && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    dialogRef.current?.close();
  };

  const handleGoToCart = () => {
    Navigate("/checkout");
    dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className={`fixed rounded-md shadow-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[30%] p-4 animate-fade-in-down`}
    >
      {filteredProduct && (
        <>
          <div className="flex flex-col items-center mb-4">
            <img src={filteredProduct.image} alt="brand" className="mb-2" />
            <h2 className="text-lg font-bold mt-2">{filteredProduct.name}</h2>
            <p className="text-gray-600 mt-2">{filteredProduct.description}</p>
            <p className="text-lg font-bold mt-2">${filteredProduct.price.toFixed(2)}</p>
          </div>
          <div className="flex justify-evenly">
            <button
              onClick={handleCloseModal}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-hoverColor focus:outline-none"
            >
              Close
            </button>
            <button
              onClick={handleGoToCart}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-hoverColor focus:outline-none"
            >
              Go to Cart
            </button>
          </div>
        </>
      )}
    </dialog>
  );
};

export default CartCheckout;
