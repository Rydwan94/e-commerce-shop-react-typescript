
import BannerProductImg from '../../assets/Images/HomePage/SecondBannerProduct.png'
import { products } from '../../constants/ProductsConstants'
import { useProducts } from '../../context/ProductsProvider'
import SingleProduct from '../Products/SingleProduct'

const SecondBanner = () => {

    // const {addToCart} = useProducts()

    // const handleAddProduct = () => {
    //     const findProduct = products.filter(product => product.id === 9)
    //     const product = findProduct.map(product => addToCart({pro}) />)
        
    // }   

  return (
    <div className='flex justify-evenly w-full h-[700px] bg-secondary'>
        <div className='flex flex-col justify-center items-center text-lightTextColor'>
            <h3 className='text-2xl'>Summer 2024</h3>
            <h2 className='text-5xl my-11'>Vita Classic Product</h2>
            <p>We know how large objects will act, We know how are objects will act, We know</p>
            <div className='mt-10'>
                <strong>19.99 pln</strong>
                <button  className='p-3 bg-succesColor rounded-xl ml-4'>Add to cart</button>
            </div>
        </div>
        <img className='transform rotate-12' src={BannerProductImg} alt="t-shirt" />
    </div>
  )
}

export default SecondBanner