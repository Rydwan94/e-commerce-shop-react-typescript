import CartProduct from "../../components/Cart/CartProduct"
import { useProducts } from "../../context/ProductsProvider"


const CartPage = () => {

  const {cart} = useProducts()

  return (
    <div className="flex bg-lightTextGray1">
        <div className="w-full max-w-7xl mx-auto">
            {cart.map(item => <CartProduct key={item.id} {...item} />)}
        </div>
    </div>
  )
}

export default CartPage