import { useEffect, useRef } from "react";
import { useProducts } from "../../context/ProductsProvider";
import { IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { CartIconProps } from "../../interface/interfaces";

const CartIcon = ({
  isOpenCart,
  setIsOpenCart,
  setExpandSearcher,
}: CartIconProps) => {
  const { cart, removeFromCart } = useProducts();

  const cartInfoRef = useRef<HTMLInputElement | null>(null);

  const handleOpenCart = (): void => {
    setIsOpenCart(!isOpenCart);
    setExpandSearcher(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      isOpenCart &&
      cartInfoRef.current &&
      !cartInfoRef.current.contains(e.target as Node)
    ) {
      setIsOpenCart(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [isOpenCart]);

  return (
    <div className="relative">
      <div>
        <button onClick={handleOpenCart} className="cursor-pointer pt-1">
          <IoCartOutline size={30} color="white" />
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
            cart.map((product) => (
              <div
                className="flex flex-col justify-evenly items-start"
                key={product.id}
              >
                <div className="flex items-center">
                  <p>{product.name}</p>
                  <button className="pt-1" onClick={() => removeFromCart(product.id)}>
                    <IoCloseOutline  size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>You dont have any product in cart</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartIcon;
