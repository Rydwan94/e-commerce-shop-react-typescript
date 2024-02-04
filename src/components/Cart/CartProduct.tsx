import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import { useProducts } from "../../context/ProductsProvider";
import { CartProductProps } from "../../interface/interfaces";

const CartProduct: React.FC<CartProductProps> = ({
  id,
  name,
  image,
  stock,
  orderedQuantity,
  handleRemoveFromCart,
}) => {
  const { setCart } = useProducts();

  const handleRiseQuantity = () => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              orderedQuantity: item.orderedQuantity + 1,
              price: item.price + item.price / item.orderedQuantity,
            }
          : item
      )
    );
  };

  const handleReduceQuantity = () => {
    setCart((prevProductList) =>
      prevProductList.map((item) =>
        item.id === id
          ? {
              ...item,
              orderedQuantity: item.orderedQuantity - 1,
              price: item.price - item.price / item.orderedQuantity,
            }
          : item
      )
    );
  };
  
  return (
      <div className="flex items-center justify-between  border-b p-4">
        <img
          className="max-w-[10%] aspect-square object-cover rounded-lg"
          src={image}
          alt={`${image} picture`}
        />
        <p>{name}</p>
        <div className="flex items-center">
          <button
            disabled={orderedQuantity === 1}
            onClick={handleReduceQuantity}
            className="p-2 bg-white rounded-full hover:shadow-lg transition-shadow"
          >
            <FiMinus />
          </button>
          <span className=" px-9">{orderedQuantity}</span>
          <button
            disabled={orderedQuantity === stock}
            onClick={handleRiseQuantity}
            className="p-2 bg-white rounded-full hover:shadow-lg transition-shadow"
          >
            <FiPlus />
          </button>
          <button
            className=" ml-5 p-2 bg-white rounded-full hover:shadow-lg transition-shadow"
            onClick={() => handleRemoveFromCart(id)}
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
  );
};

export default CartProduct;
