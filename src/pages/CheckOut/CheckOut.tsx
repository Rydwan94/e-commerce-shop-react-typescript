

import { useState } from 'react'
import CheckOutForm from '../../components/CheckOut/CheckOutForm'
import { useProducts } from '../../context/ProductsProvider'
import CheckOutDetilas from './CheckOutDetilas'
import EmptyCart from './EmptyCart'

const CheckOut = () => {

    const {cart} = useProducts()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const [finalPrice, setFinalPrice] = useState<number>(totalPrice)

  console.log(finalPrice)
  if(cart.length) { 
  return (
    <>
    <div className='flex justify-evenly items-center max-lg:flex-col-reverse gap-4 p-20 max-lg:p-0 w-full min-h-screen'>
        <CheckOutForm totalPrice={totalPrice} finalPrice={finalPrice} setFinalPrice={setFinalPrice}/>
        <CheckOutDetilas finalPrice={finalPrice}/>
    </div>
    </>
  )
  } else return <EmptyCart />
}

export default CheckOut