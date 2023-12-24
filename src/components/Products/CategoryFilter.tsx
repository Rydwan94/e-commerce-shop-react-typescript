import { products } from "../../constants/ProductsConstants";
import { useFilter } from "../../context/FilterProductsProvider";
import { useProducts } from "../../context/ProductsProvider";

const CategoryFilter = () => {
  const { categoryFilter, setCategoryFilter } = useFilter();
  const { productsList, setProductsList } = useProducts();

  const handleOnChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
  };

  const handleShowFilteredProducts = () => {
    if (categoryFilter === "All") {
      setProductsList(products);
    } else  {
      setProductsList(
        products.filter((product) => product.category === categoryFilter)
      );
    }
  };

  console.log(categoryFilter)

  return (
    <div className="flex justify-evenly">
      <p>Showing all {productsList.length} results</p>
      <div>
        <select onChange={handleOnChangeCategory}>
          <option value="All">All Products</option>
          <option value="Electronics">Electronics</option>
          <option value="Appliances">Appliances</option>
          <option value="Clothes">Clothes</option>
        </select>
        <button onClick={handleShowFilteredProducts}>Filter</button>
      </div>
    </div>
  );
};

export default CategoryFilter;
