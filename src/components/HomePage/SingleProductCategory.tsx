import { useNavigate } from 'react-router-dom'
import { ProductCategory } from '../../interface/interfaces'
import { useFilter } from '../../context/FilterProductsProvider'
import { useProducts } from '../../context/ProductsProvider'

import { products } from '../../constants/ProductsConstants'

const SingleProductCategory = ({classProp, src, buttonMessage}: ProductCategory) => {

  const {setCategoryFilter} = useFilter()
  const {setProductsList } = useProducts();
  const navigate = useNavigate()
  
  const viewCategory = () => {
    setCategoryFilter("All")
    navigate("/products")

    window.scrollTo({
      top: 100,
    });

    setProductsList(
      products.filter((product) => product.category === buttonMessage)
    );
 
  }




  return (
    <div onClick={viewCategory} className={classProp}>
        <img className='w-full h-full max-md:h-[250px] max-md:max-w-[100%]  object-cover rounded-xl hover:scale-125 transition-all duration-500'  src={src} alt={buttonMessage} />
        <p className='absolute bottom-7 left-7 rounded-md text-textColor font-bold bg-lightBackgroundColor p-3'>{buttonMessage}</p>
    </div>
  )
}

export default SingleProductCategory