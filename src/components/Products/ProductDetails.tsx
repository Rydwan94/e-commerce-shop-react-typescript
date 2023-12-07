import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductsProvider";



const ProductDetails: React.FC = () => {

    const {id} = useParams();
    const productId = parseInt(id || '', 10)

    const {productsList} = useProducts();

    const product = productsList.find(p => p.id === productId)

    if(!product){
        return <div>Product not found</div>
    }

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-md mt-8">
      <img src={product.image} alt={product.name} className="mb-4 rounded-lg" />
      <h2 className="text-2xl font-semibold">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-lg font-bold text-blue-600">{product.price} PLN</p>
      {/* Tutaj możesz dodać więcej szczegółów produktu, jeśli są dostępne */}
    </div>
  )
}

export default ProductDetails