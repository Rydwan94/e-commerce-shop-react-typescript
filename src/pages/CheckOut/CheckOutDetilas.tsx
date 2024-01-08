import { useProducts } from "../../context/ProductsProvider";

const CheckOutDetilas = (finalPrice: { finalPrice: number }) => {
  const { cart } = useProducts();

  return (
    <div className="self-start basis-1/2 max-lg:w-full p-3 bg-lightGray1 rounded-lg max-md:text-xs">
      <h3>Your Order</h3>
      <div>
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b px-2 py-4"
          >
            <div className="flex items-center gap-2 ">
              <div className=" overflow-hidden rounded-xl h-[100px] w-[200px] max-md:w-[70px]">
                <img
                  className="object-bottom"
                  src={item.image}
                  alt={`${item.name} picture`}
                />
              </div>
              <p>
                Name: <span className="font-bold">{item.name}</span>
              </p>
            </div>
            <div className="flex flex-col items-center min-w-fit">
              <p>
                Order quantity:{" "}
                <span className="font-bold">{item.orderedQuantity}</span>
              </p>
              <p>
                <span className="font-bold">{item.price.toFixed(2)} PLN</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="py-5 text-center">
        <p className="text-xl">Summary: <span className="font-bold text-dangerTextColor">{finalPrice.finalPrice.toFixed(2)}</span></p>
      </div>
    </div>
  );
};

export default CheckOutDetilas;
