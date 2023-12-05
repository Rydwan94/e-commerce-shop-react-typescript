
import {useEffect, useRef} from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { useProducts } from '../../context/ProductsProvider';
import { ProductSearchIconProps } from '../../interface/interfaces';



const ProductSearchIcon = ({expandSearcher, setExpandSearcher, setIsOpenCart}: ProductSearchIconProps) => {

    const {searchValue, setsearchValue, searchProduct} = useProducts()
    

    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        inputRef.current?.focus()
    },[expandSearcher])
    

    const handleExpandSearcher = () => {
        setExpandSearcher(!expandSearcher)
        setIsOpenCart(false)
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setsearchValue(e.target.value);
    }
    

    const handleSearchProduct = () => searchProduct()

  return (
   <div className='relative'>
     <div className="cursor-pointer" onClick={handleExpandSearcher}>
    <IoSearchOutline size={27} color="white" />
  </div>
  {
        
            <div className={`flex absolute top-[52px] right-[100px]  p-2 shadow-2xl bg-white transition-all ${expandSearcher ? "animate-jump-in" : "animate-jump-out"}`}>
                <input ref={inputRef} type="text" placeholder='search product....' value={searchValue} onChange={handleInput} />
                <button onClick={handleSearchProduct} className='cursor-pointer'><IoSearchOutline size={24} color="black" /></button>
            </div>
        
    }
   </div>
  )
}

export default ProductSearchIcon