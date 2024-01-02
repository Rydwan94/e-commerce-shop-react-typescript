import { Routes, Route } from "react-router-dom"
import ProductDescription from "../../components/ProductDetails/ProductDescription"
import ProductOpinions from "../../components/ProductDetails/ProductOpinions"

const ProductDetailsPages = () => {
  return (
    <Routes>
      <Route path='/description' element={<ProductDescription />}/>
      <Route path='/opinions' element={<ProductOpinions />} />    
    </Routes>
  )
}

export default ProductDetailsPages