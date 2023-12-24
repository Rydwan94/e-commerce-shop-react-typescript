import { ProductCategoryImages } from "../../constants/Images";
import SingleProductCategory from "./SingleProductCategory";

const ProductCategory = () => {
  return (
    <div className="w-full flex flex-col items-center bg-lightBackgroundColor max-w-7xl mx-auto py-20 px-10 ">
      <h2 className="text-textColor text-bold text-2xl font-bold">Editor's Pick</h2>
      <p className="text-secondTextColor mt-5">Problems trying to resolve the conflict between </p>
      <div className="grid grid-cols-7 grid-rows-6 gap-4  mt-10 max-md:grid-cols-1 max-md:grid-rows-3 max-md:gap-0">
        {ProductCategoryImages.map(item => <SingleProductCategory key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default ProductCategory;
