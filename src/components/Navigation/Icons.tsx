import { useState } from "react";
import CartIcon from "./CartIcon";
import Hamburger from "./Hamburger";
import { Menu } from "../../interface/interfaces";
import ProductSearchIcon from "./ProductSearchIcon";
import HeartIcon from "./HeartIcon";

const Icons = ({ isOpenMenu, handleMenu }: Menu) => {
  const [expandSearcher, setExpandSearcher] = useState<boolean>(false);
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);

  return (
    <div className="flex items-center self-end gap-4 text-primary max-lg:text-secondTextColor">
      <HeartIcon />
      <ProductSearchIcon
        expandSearcher={expandSearcher}
        setExpandSearcher={setExpandSearcher}
        setIsOpenCart={setIsOpenCart}
      />
      <CartIcon
        isOpenCart={isOpenCart}
        setIsOpenCart={setIsOpenCart}
        setExpandSearcher={setExpandSearcher}
      />
      <Hamburger isOpenMenu={isOpenMenu} handleMenu={handleMenu} />
    </div>
  );
};

export default Icons;
