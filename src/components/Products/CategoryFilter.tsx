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
    } else if (categoryFilter === "") {
      return null;
    } else {
      setProductsList(
        products.filter((product) => product.category === categoryFilter)
      );
    }
  };

  return (
    <>
      <div className="my-11 bg-lightGray2 lg:p-16 max-md:p-5 md:p-5 animate-fade-up ">
        <div className="flex lg:justify-center space-x-4 snap-x snap-mandatory overflow-x-scroll md:no-scrollbar ">
          {categoryCards.map((item, i) => (
            <CategoryCard key={i} {...item} />
          ))}
        </div>
      </div>
      <div className="flex justify-evenly max-md:flex-col-reverse items-center">
        <p className="text-textColor max-md:mt-8">
          Showing all {productsList.length} results
        </p>
        <div>
          <select
            className="p-3 text-secondTextColor bg-[#F9F9F9] rounded-lg  focus:outline-none"
            onChange={handleOnChangeCategory}
          >
            <option hidden value="">
              Select an option
            </option>
            <option value="All">All Products</option>
            <option value="Electronics">Electronics</option>
            <option value="Appliances">Appliances</option>
            <option value="Clothes">Clothes</option>
            <option value="Toys">Toys</option>
          </select>
          <button
            className="p-2 bg-primary text-lightTextColor rounded-lg ml-3 hover:bg-hoverColor transition-all"
            onClick={handleShowFilteredProducts}
          >
            Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
