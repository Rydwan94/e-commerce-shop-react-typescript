

import { useNavigate } from 'react-router-dom'

const EmptyCart = () => {

    const navigate = useNavigate()

    const handleGoToProducts = () => {
        navigate('/products')
    }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen w-full'>
        <p>You Dont have any products in cart</p>
        <button onClick={handleGoToProducts} className='mt-5 rounded-2xl bg-yellow-200 p-2'>Go to products</button>
    </div>
  )
}

export default EmptyCart