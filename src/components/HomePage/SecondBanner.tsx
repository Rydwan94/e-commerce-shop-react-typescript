
import { useNavigate } from 'react-router-dom'
import BannerProductImg from '../../assets/Images/HomePage/SecondBannerProduct.png'
import { useProducts } from '../../context/ProductsProvider'
import { products } from '../../constants/ProductsConstants'


const SecondBanner = () => {

    const {setProductsList} = useProducts()
    const navigate = useNavigate()

    const handleViewProduct = () => {
        setProductsList(products)
        navigate(`/products/${11}/description`)
        setTimeout(() => {
          window.scroll({
            top: 0,
          });
        },50)
    }   

  return (
    <div className='flex justify-evenly items-center min-w-full bg-secondary max-md:flex-col py-20'>
        <div className='flex flex-col justify-center items-center text-lightTextColor px-5'>
            <h3 className='text-2xl text-center'>Summer 2024</h3>
            <h2 className='text-5xl text-center my-11'>Vita Classic Product</h2>
            <p className='text-center'>We know how large objects will act, We know how are objects will act, We know</p>
            <div className='mt-10'>
                <strong>19.99 pln</strong>
                <button onClick={handleViewProduct} className='p-3 bg-succesColor rounded-xl ml-4 animate-pulse'>Check offer</button>
            </div>
        </div>
        <img className='max-w-full max-md:w-[60%] lg:w-[30%]' src={BannerProductImg} alt="t-shirt" />
    </div>
  )
}

export default SecondBanner