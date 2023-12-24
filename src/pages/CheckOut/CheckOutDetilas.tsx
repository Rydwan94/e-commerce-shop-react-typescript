import { useProducts } from "../../context/ProductsProvider";

const CheckOutDetilas = () => {
  const { cart } = useProducts();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="self-center">
      <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 text-center">{item.image}</td>
              <td className="py-2 px-4 text-center">{item.name}</td>
              <td className="py-2 px-4 text-center">{item.price}</td>
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

export default CheckOutDetilas;
