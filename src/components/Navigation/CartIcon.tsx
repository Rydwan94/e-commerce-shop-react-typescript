import { useProducts } from "../../context/ProductsProvider";
import { IoCartOutline } from "react-icons/io5";
import { CartIconProps } from "../../interface/interfaces";

const CartIcon = ({isOpenCart, setIsOpenCart, setExpandSearcher} :CartIconProps) => {
  const { cart } = useProducts();

  const handleOpenCart = (): void => {
    setIsOpenCart(!isOpenCart);
    setExpandSearcher(false)
  };

  return (
    <div className="relative">
      <div>
        <button
          onClick={handleOpenCart}
          className="cursor-pointer pt-1"
        >
          <IoCartOutline size={30} color="white" />
        </button>
        {cart.length > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 animate-pulse">
            {cart.length}
          </div>
        )}
       
          <div className={`absolute top-[52px] right-0 bg-white text-black p-2 shadow-lg ${isOpenCart ? "animate-fade-down" : "animate-jump-out"}`}>
            
            {cart.length > 0 ? cart.map((product) => (
              <div
                className="flex flex-col justify-evenly items-start"
                key={product.id}
              >
                <p>{product.name}</p>
                <button></button>
              </div>
            )): <p>You dont have any product in cart</p>}
          </div>
       
      </div>
    </div>
  );
};

export default CartIcon;
