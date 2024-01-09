import { ProductCategoryImages } from "../../constants/Images";
import SingleProductCategory from "./SingleProductCategory";

const ProductCategory = () => {
  return (
    <div className="flex flex-col items-center bg-lightBackgroundColor max-w-7xl mx-auto py-20 px-10 max-md:px-0 ">
      <h2 className="text-textColor text-bold text-2xl font-bold">
        Editor's Pick
      </h2>
      <p className="text-secondTextColor mt-5">
        Problems trying to resolve the conflict between{" "}
      </p>
      <div className="grid grid-cols-7 grid-rows-6 gap-4  mt-10 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:overflow-x-scroll   max-md:p-4 max-md:bg-lightGray2">
        {ProductCategoryImages.map((item) => (
          <SingleProductCategory key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
