import { NavLink } from "react-router-dom"
import { ProductDetails_Routes } from "../../Router/Routes/ProductDetailsRoutes"
const ProductDetailsNav = ({id} : {id:number} ) => {
    
  return (
    <div className="text-center py-16 border-b">
        {ProductDetails_Routes.map(item => (
            <NavLink className="text-lg text-secondTextColor p-2 rounded-lg even:ml-6" key={item.path} to={`/products/${id}/${item.path}`} >{item.label}</NavLink>
        ))}
    </div>
  )
}

export default ProductDetailsNav