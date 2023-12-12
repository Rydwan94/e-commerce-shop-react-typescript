import React, { useEffect, useRef } from "react";
import { useProducts } from "../context/ProductsProvider";
import { useNavigate } from "react-router-dom";

const CartCheckout = ({ isModalOpen, id }: { isModalOpen: boolean; id: number }) => {
  const { productsList } = useProducts();

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const filteredProduct = productsList.filter((product) => product.id === id);

  const Navigate = useNavigate();

  useEffect(() => {
    if (isModalOpen && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    dialogRef.current?.close();
  };

  const handleGoToCart = () => {
    Navigate("/cart");
    dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-max p-4 animate-fade-in-down`}
    >
      {filteredProduct.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
      <div className="mt-4">
        <button
          onClick={handleCloseModal}
          className="bg-black text-white rounded-md p-1"
        >
          Close
        </button>
        <button
          onClick={handleGoToCart}
          className="bg-black text-white rounded-md ml-3 p-1"
        >
          Go to Cart
        </button>
      </div>
    </dialog>
  );
};

export default CartCheckout;
