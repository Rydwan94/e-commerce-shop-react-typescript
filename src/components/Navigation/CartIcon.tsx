import { useRef } from "react";
import { useProducts } from "../../context/ProductsProvider";
import { IoCartOutline } from "react-icons/io5";
import { CartIconProps } from "../../interface/interfaces";
import { useNavigate } from "react-router-dom";

const CartIcon = ({
  isOpenCart,
  setIsOpenCart,
  setExpandSearcher,
}: CartIconProps) => {
  const { cart } = useProducts();

  const cartInfoRef = useRef<HTMLInputElement | null>(null);

  const Navigate = useNavigate();

  const handleOpenCart = (): void => {
    setIsOpenCart(!isOpenCart);
    setExpandSearcher(false);
  };

  const handleGoToCart = () => {
    Navigate("/cart");
    setIsOpenCart(false);
  };

  const cartSummary = cart.reduce((initalValue, currentProduct)=> {
    return initalValue + currentProduct.price * currentProduct.orderedQuantity
  }, 0) 

  return (
    <div className="relative">
      <div>
        <button onClick={handleOpenCart} className="cursor-pointer pt-1">
          <IoCartOutline size={30} />
        </button>
        {cart.length > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 animate-pulse">
            {cart.length}
          </div>
        )}

        <div
          ref={cartInfoRef}
          className={`absolute top-[52px] right-0 min-w-max bg-white text-black p-3 shadow-lg ${
            isOpenCart ? "animate-fade-down" : "animate-jump-out"
          }`}
        >
          {cart.length > 0 ? (
            <div>
              {cart.map((product) => (
                <div
                  className="flex flex-col justify-evenly items-start border-b"
                  key={product.id}
                >
                  <div className="flex justify-between items-center min-w-full">
                    <p>{product.name}</p>
                    <div className="ml-4">
                      <p className="text-textColor">
                        Qunatity:{" "}
                        <span className="font-bold">
                          {product.orderedQuantity}
                        </span>
                      </p>
                      <p>Price: {product.price.toFixed(2) / product.orderedQuantity}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center">
              <button
                onClick={handleGoToCart}
                className="bg-black text-white rounded-md p-1 mt-2"
              >
                Go to cart
              </button>
              <p>Sum : {cartSummary.toFixed(2)}</p>
              </div>
            </div>
          ) : (
            <p>You dont have any product in cart</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartIcon;
