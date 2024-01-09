import { useProducts } from "../../context/ProductsProvider";
import { Link, useNavigate } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

const CartSummary = () => {
  const { cart, currentPrice } = useProducts();

  const Navigate = useNavigate()

  const handleGoToPayment = () => {
    Navigate("/checkout")

    setTimeout(() => {
      window.scroll({
        top: 0,
      });
    },50)
  }
  return (
    <div className="sticky bottom-0 flex justify-between items-center p-12 bg-lightBackgroundColor min-w-full border-b max-md:text-sm">
      <Link
        to="/products"
        className="flex items-center gap-2"
      >
        <FaArrowLeft />
        Continue shopping
      </Link>
      <div className="flex flex-col gap-1">
        <p>
          Summary: <span className="font-bold">{currentPrice.toFixed(2)}</span>
        </p>
        <p>
          Total products:
          <span>{cart.reduce((total, item) => total + item.orderedQuantity, 0)}</span>
        </p>
        <button disabled={cart.length === 0} onClick={handleGoToPayment} className={`p-2 bg-primary text-white transition-all rounded-md ${cart.length === 0 ? "bg-mutedColor" : "hover:bg-hoverColor"}`}>
           Payment
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
