import { useEffect, useRef } from "react";
import { SubscribeConfirmationProps } from "../interface/interfaces";
import brand from "../assets/Images/Brand/brand.png";

const SubscribeConfirmation = ({
  isModalOpen,
  setIsModalOpen,
}: SubscribeConfirmationProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isModalOpen) {
      modalRef.current?.showModal();
    } else modalRef.current?.close();
  }, [isModalOpen]);

  const handleOnClick = () => {
    setIsModalOpen(false);
    console.log(isModalOpen);
  };

  return (
    <dialog
      className=" bg-white rounded-md shadow-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 animate-fade-in-down"
      ref={modalRef}
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-lg font-bold mb-4">Thank you for subscribing!</p>
        <img src={brand} alt="brand" className="mb-4" />
        <p className="text-sm text-gray-600 mb-4">
          You will now stay up-to-date with the latest information and offers.
        </p>
        <button
          onClick={handleOnClick}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-hoverColor focus:outline-none"
        >
          OK
        </button>
      </div>
    </dialog>
  );
};

export default SubscribeConfirmation;
