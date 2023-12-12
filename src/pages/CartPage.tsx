import { useProducts } from "../context/ProductsProvider";

import {IoCloseOutline } from "react-icons/io5";

const CartPage = () => {
  const { cart, removeFromCart } = useProducts();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 text-center">{item.image}</td>
              <td className="py-2 px-4 text-center">{item.name}</td>
              <td className="py-2 px-4 text-center">{item.price}</td>
              <td onClick={() => removeFromCart(item.id)} className="py-2 px-4 flex justify-center"><IoCloseOutline size={25} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center font-bold text-xl">
        Total Price: {totalPrice.toFixed(2)} PLN
      </div>
    </div>
  );
};

export default CartPage;
