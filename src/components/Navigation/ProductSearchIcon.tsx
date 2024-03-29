import { useEffect, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useProducts } from "../../context/ProductsProvider";
import { ProductSearchIconProps } from "../../interface/interfaces";
import { useNavigate } from "react-router-dom";

const ProductSearchIcon = ({
  expandSearcher,
  setExpandSearcher,
  setIsOpenCart,
}: ProductSearchIconProps) => {
  const { searchValue, setsearchValue, searchProduct } = useProducts();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [expandSearcher]);

  const Navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, [expandSearcher]);

  const handleExpandSearcher = () => {
    setExpandSearcher(!expandSearcher);
    setIsOpenCart(false);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearchValue(e.target.value);
  };

  const handleSearchProduct = () => {
    Navigate("/products");
    searchProduct();
  };

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={handleExpandSearcher}>
        <IoSearchOutline size={27} />
      </div>
      {expandSearcher && (
        <div
          className={`flex absolute top-[170%] right-[10%] p-2 shadow-2xl bg-white transition-all animate-jump-in 
          `}
        >
          <input
            className="focus:border-sky-100 text-textColor"
            ref={inputRef}
            type="text"
            placeholder="search product...."
            value={searchValue}
            onChange={handleInput}
          />
          <button onClick={handleSearchProduct} className="cursor-pointer ml-1">
            <IoSearchOutline size={24} color="black" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductSearchIcon;
