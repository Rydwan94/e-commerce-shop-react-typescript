import { categoryCards } from "../../constants/CategoryCard";
import { products } from "../../constants/ProductsConstants";
import { useFilter } from "../../context/FilterProductsProvider";
import { useProducts } from "../../context/ProductsProvider";
import CategoryCard from "./CategoryCard";

const CategoryFilter = () => {
  const { categoryFilter, setCategoryFilter } = useFilter();
  const { productsList, setProductsList } = useProducts();


  const handleOnChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
  };

  const handleShowFilteredProducts = () => {
    if (categoryFilter === "All") {
      setProductsList(products);
    } else {
      setProductsList(
        products.filter((product) => product.category === categoryFilter)
      );
    }
  };

  console.log(categoryFilter);

  return (
    <>
      <div className=" my-11 bg-lightGray2 py-16">
        <div className="flex items-center max-md:flex-col gap-5 max-w-7xl mx-auto px-9">
          {categoryCards.map((item, i) => (
            <CategoryCard key={i} {...item} />
          ))}
        </div>
      </div>
      <div className="flex justify-evenly">
        <p className="text-textColor">Showing all {productsList.length} results</p>
        <div>
          <select className="p-3 text-secondTextColor bg-[#F9F9F9] rounded-lg  focus:outline-none" onChange={handleOnChangeCategory}>
            <option value="All">All Products</option>
            <option value="Electronics">Electronics</option>
            <option value="Appliances">Appliances</option>
            <option value="Clothes">Clothes</option>
          </select>
          <button className="p-2 bg-primary text-lightTextColor rounded-lg ml-3" onClick={handleShowFilteredProducts}>Filter</button>
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
