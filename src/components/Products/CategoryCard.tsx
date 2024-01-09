import { products } from "../../constants/ProductsConstants";
import { useFilter } from "../../context/FilterProductsProvider";
import { useProducts } from "../../context/ProductsProvider";
import { CategoryCardProps } from "../../interface/interfaces";

const CategoryCard = ({ src, category }: CategoryCardProps) => {

    const {setCategoryFilter} = useFilter()
    const {setProductsList} = useProducts()

    const itemsCount = products.filter(product => product.category === category).length
    
    const showCategory = () => {
        setCategoryFilter(category)
        
        if(category === "All"){
            setProductsList(products.filter(product => product))
        }else setProductsList(products.filter(product => product.category === category) )   
    }


  return (
    <div onClick={showCategory}  className="relative overflow-hidden max-md:min-w-[70%] lg:w-[20%] cursor-pointer rounded-lg snap-always snap-center " >
      <img
        className="aspect-square object-cover  brightness-75 lg:hover:scale-125 transition-all"
        src={src}
        alt={`${category} image`}
      />
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lightTextColor text-xl font-bold  p-2">
        {category}
      </p>
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-7 text-lightTextColor text-xl">{category === "All" ? products.length : itemsCount} items</p>
    </div>
  );
};

export default CategoryCard;
