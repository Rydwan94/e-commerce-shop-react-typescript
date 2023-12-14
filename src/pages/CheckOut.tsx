

import CheckOutForm from '../components/CheckOut/CheckOutForm'
import { useProducts } from '../context/ProductsProvider'

const CheckOut = () => {

    const {cart} = useProducts()
  if(cart.length) { 
  return (
    <div>
        <CheckOutForm/>
    </div>
  )
  } else return <div>You dont have any products in Cart</div>
}

export default CheckOut