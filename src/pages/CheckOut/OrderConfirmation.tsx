import { useNavigate } from "react-router-dom"
import brand from '../../assets/Images/Brand/brand.png'



const OrderConfirmation = () => {

    const navigate = useNavigate()

const handleGoToProducts = () => {
    navigate('/products')
}

  return (
    <div className="flex flex-col justify-center items-center px-11 min-h-screen animate-jump-in animate-duration-1000">
        <p className="text-2xl mb-6 text-center">Thank You for order confirmation. The devliery is going to you</p>
        <img src={brand} alt="brand image" />
        <button onClick={handleGoToProducts} className="bg-primary text-white rounded-full p-2 mt-5">Go to products</button>
    </div>
  )
}

export default OrderConfirmation