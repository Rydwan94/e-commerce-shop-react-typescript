import  { useState } from "react";
import { useProducts } from "../../context/ProductsProvider";
import { IoCartOutline } from "react-icons/io5";



const CartIcon = () => {
    const { cart } = useProducts();
    const [isOpenCart, setIsOpenCart] = useState<boolean>(false);

    const handleOpenCart = (): void => {
      setIsOpenCart(!isOpenCart);
    };


  return (
    <div className="relative flex self-start">
        <div>
          <button
            onClick={handleOpenCart}
            className="rounded-full cursor-pointer"
          >
            <IoCartOutline size={30} color="white" />
          </button>
          {cart.length > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 animate-pulse">
              {cart.length}
            </div>
          )}
          {isOpenCart && cart.length > 0 ? (
            <div className="absolute top-10 right-0 bg-white text-black p-2 shadow-lg animate-jump-in">
              {/* Tutaj umieść zawartość koszyka */}
              {cart.map((product) => (
                <div
                  className="flex flex-col justify-evenly items-start"
                  key={product.id}
                >
                  <p>{product.name}</p>
                  <button></button>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`${
                isOpenCart
                  ? "absolute top-10 right-0 w-[100px] bg-white text-black p-2 shadow-lg animate-jump-in"
                  : "hidden"
              }`}
            >
              <p>You don't have any products in the cart</p>
            </div>
          )}
        </div>
      </div>
  )
}

export default CartIcon