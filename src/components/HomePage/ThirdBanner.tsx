import { useNavigate } from 'react-router-dom'
import jeans from '../../assets/Images/HomePage/jeans.png'
import { useProducts } from '../../context/ProductsProvider'
import { products } from '../../constants/ProductsConstants'

const ThirdBanner = () => {

  const {setProductsList} = useProducts()
    const navigate = useNavigate()

    const viewProduct = () => {
      setProductsList(products)
        navigate(`/products/${12}`)
    }

  return (
    <div className='flex justify-evenly items-center w-screen lg:flex-row-reverse max-lg:flex-col pt-20 '>
    <div className='flex flex-col justify-center items-center text-lightTextColor px-5'>
        <h3 className='text-2xl text-mutedTextColor text-center'>Summer 2024</h3>
        <h2 className='text-5xl text-center text-textColor my-11'>Trendy Jeans</h2>
        <p className='text-center text-mutedColor'>We know how large objects will act, We know how are objects will act, We know</p>
        <div className='mt-10'>
            <strong className='text-mutedColor'>39.99 pln</strong>
            <button onClick={viewProduct} className='p-3 bg-primary rounded-xl ml-4 animate-pulse'>Check offer</button>
        </div>
    </div>
    <img className='max-w-full rounded-3xl shadow-xl mt-12 max-md:w-[60%]' src={jeans} alt="jeans" />
</div>
  )
}

export default ThirdBanner