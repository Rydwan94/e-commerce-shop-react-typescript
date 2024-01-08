import { useEffect, useRef } from "react";
import { RemoveProductModalProps } from "../interface/interfaces";

const RemoveProductModal = ({
    removeProductModal,
    setRemoveProductModal,
}: RemoveProductModalProps) => {

    const dialogRef = useRef<HTMLDivElement | null>(null);
    

  useEffect(() => {
    const interval = setInterval(() => {
        setRemoveProductModal(false);
    }, 2000);

    return () => clearInterval(interval);
  }, [removeProductModal]);

  console.log(removeProductModal)

  return (
    <div ref={dialogRef} className="fixed left-0 top-1/2 animate-fade-left shadow-lg bg-dangerColor text-white rounded-r-lg p-2 max-md:text-sm">
      Product has been removed
    </div>
  );
};

export default RemoveProductModal;
