

import CheckOutForm from '../../components/CheckOut/CheckOutForm'
import { useProducts } from '../../context/ProductsProvider'
import CheckOutDetilas from './CheckOutDetilas'
import EmptyCart from './EmptyCart'

const CheckOut = () => {

    const {cart} = useProducts()
  if(cart.length) { 
  return (
    <div className='flex items-center w-full min-h-screen'>
        <CheckOutForm/>
        <CheckOutDetilas/>
    </div>
  )
  } else return <EmptyCart />
}

export default CheckOut