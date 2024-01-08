import { useCallback, useState } from "react"
import { useProducts } from "../../context/ProductsProvider"
import CartProduct from "../../components/Cart/CartProduct"

import RemoveProductModal from "../../modals/RemoveProductModal"
import CartSummary from "../../components/Cart/CartSummary"

const CartPage = () => {

  const {cart, removeFromCart} = useProducts()

  const [removeProductModal, setRemoveProductModal] = useState(false);

  const handleRemoveFromCart = useCallback((id: number) => {
    removeFromCart(id);
    setRemoveProductModal(true);
}, [removeFromCart, setRemoveProductModal]);


  return (
      <>
    <div className="flex bg-lightTextGray1 min-h-screen">
        <div className="w-full max-w-7xl mx-auto">
            {cart.map(item => <CartProduct key={item.id} {...item} handleRemoveFromCart={handleRemoveFromCart} />)}
        </div>
        {removeProductModal && (
        <RemoveProductModal
          removeProductModal={removeProductModal}
          setRemoveProductModal={setRemoveProductModal}
        />
      )}
    </div>
    <CartSummary />
    </>
  )
}

export default CartPage