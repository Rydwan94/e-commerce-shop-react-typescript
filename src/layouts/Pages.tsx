
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Products from '../pages/Products'
import FavouriteProducts from '../pages/FavouriteProducts'
import DocumentsRoute from '../routes/DocumentsRoute'
import ProductDetails from '../components/Products/ProductDetails'

const Pages = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='/favourites' element={<FavouriteProducts />}/>
        <Route path='/documents/*' element={<DocumentsRoute />} />
    </Routes>
    </>
  )
}

export default Pages