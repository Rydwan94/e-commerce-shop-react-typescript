import { Routes, Route } from "react-router-dom"
import ProductDescription from "../../components/ProductDetails/ProductDescription"
import ProductOpinions from "../../components/ProductDetails/ProductOpinions"
import { Product } from "../../interface/interfaces"

const ProductDetailsPages = ({productId, product}: {productId :number, product:Product}) => {



  return (
    <Routes>
      <Route path='/description' element={<ProductDescription product={product}  />}/>
      <Route path='/opinions' element={<ProductOpinions productId={productId} product={product} />} />    
    </Routes>
  )
}

export default ProductDetailsPages