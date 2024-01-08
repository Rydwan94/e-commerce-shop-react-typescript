import { useEffect, useRef, useState } from "react";
import {ModalDataProps } from "../interface/interfaces";

const SentDataModal = ({ dataIsSent, setDataIsSent }: ModalDataProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [modalTime, setModalTime] = useState<number>(100);

  console.log(modalTime);

  useEffect(() => {
    if (dataIsSent) {
      modalRef.current?.showModal();

      setTimeout(() => {
        modalRef.current?.close();
        setDataIsSent(false);
      }, 3000);

      const intervalId = setInterval(() => {
        // Dodaj sprawdzenie, czy modalTime nie osiągnęło wartości 0
        if (modalTime > 0) {
          setModalTime((prev) => prev - 1);
        }
      }, 30);

      // Zresetuj modalTime po zakończeniu interwału
      return () => {
        clearInterval(intervalId);
        setModalTime(100);
      };
    } else {
      modalRef.current?.close();
    }
  }, [dataIsSent, setDataIsSent]);

  const handleCloseModal = () => {
    setDataIsSent(false);
  };

  return (
    <dialog
      ref={modalRef}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translata-y-1/2 p-3 min-w-fit min-h-fit animate-fade-in-down"
    >
      <p>Your delivery has been sent</p>
      <button onClick={handleCloseModal}>Ok</button>
      <div
        style={{ width: `${modalTime}%` }}
        className="h-2 mt-5 bg-green-400"
      ></div>
    </dialog>
  );
};

export default SentDataModal;
