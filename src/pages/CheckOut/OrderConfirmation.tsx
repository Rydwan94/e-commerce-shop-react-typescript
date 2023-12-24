import { useNavigate } from "react-router-dom"




const OrderConfirmation = () => {

    const navigate = useNavigate()

const handleGoToProducts = () => {
    navigate('/products')
}

  return (
    <div className="flex flex-col justify-center items-center">
        <p>Thank You for order confirmation. The devliery is going to you</p>
        <button onClick={handleGoToProducts} className="bg-yellow-500 p-2 mt-5">Go to products</button>
    </div>
  )
}

export default OrderConfirmation