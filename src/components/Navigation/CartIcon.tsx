import { useEffect, useRef } from "react";
import { useProducts } from "../../context/ProductsProvider";
import { IoCartOutline } from "react-icons/io5";
import { CartIconProps } from "../../interface/interfaces";
import { useNavigate } from "react-router-dom";

const CartIcon = ({
  isOpenCart,
  setIsOpenCart,
  setExpandSearcher,
}: CartIconProps) => {
  const { cart, currentPrice, setCurrentPrice, addToCart } = useProducts();

  const cartInfoRef = useRef<HTMLInputElement | null>(null);

  const Navigate = useNavigate();

  useEffect(() => {
    const cartSummary = cart.reduce((initalValue, currentProduct) => {
      return (
        initalValue +
        (currentProduct.price / currentProduct.orderedQuantity) *
          currentProduct.orderedQuantity
      );
    }, 0);

    setCurrentPrice(cartSummary);
  }, [addToCart]);

  const handleOpenCart = (): void => {
    setIsOpenCart(!isOpenCart);
    setExpandSearcher(false);

    if (cart.length === 0) {
      setTimeout(() => {
        setIsOpenCart(false);
      }, 1000);
    }

    console.log(isOpenCart);
  };

  const handleGoToCart = () => {
    Navigate("/cart");
    setIsOpenCart(false);

    setTimeout(() => {
      window.scroll({
        top: 0,
      });
    }, 100);
  };

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
        {isOpenCart && (
          <div
            ref={cartInfoRef}
            className={`absolute top-[52px] right-0 min-w-max bg-white text-black p-3 shadow-lg animate-jump-in`}
          >
            {cart.length > 0 ? (
              <div>
                {cart.map((product) => (
                  <div
                    className="flex flex-col justify-evenly items-start border-b"
                    key={product.id}
                  >
                    <div className="flex justify-between items-center min-w-full py-2">
                      <p>{product.name}</p>
                      <div className="ml-4">
                        <p className="text-textColor">
                          Qunatity:{" "}
                          <span className="font-bold">
                            {product.orderedQuantity}
                          </span>
                        </p>
                        <p>Price: {product.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col-reverse items-center pt-4">
                  <button
                    onClick={handleGoToCart}
                    className="bg-primary text-white rounded-md p-1 mt-2 hover:bg-hoverColor transition-alll"
                  >
                    Go to cart
                  </button>
                  <p>
                    Sum :{" "}
                    <span className="font-bold">{currentPrice.toFixed(2)}</span>
                  </p>
                </div>
              </div>
            ) : (
              <p>You dont have any product in cart</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartIcon;
