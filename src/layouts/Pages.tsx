
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Products from '../pages/Products'
import FavouriteProducts from '../pages/FavouriteProducts'

const Pages = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/favourites' element={<FavouriteProducts />}/>
    </Routes>
    </>
  )
}

export default Pages