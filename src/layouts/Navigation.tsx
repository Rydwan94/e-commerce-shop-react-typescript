import React, { useCallback, useState } from "react";
import NavLinks from "../components/Navigation/NavLinks";
import Brand from "../components/Navigation/Brand";
import { useProducts } from "../context/ProductsProvider";
import { products } from "../constants/ProductsConstants";

const Navigation: React.FC = () => {

  const {setProductsList} = useProducts()

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleMenu = useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
  },[isOpenMenu])

  const setMenuAsClosed = useCallback(() => {
    setIsOpenMenu(false)

    setProductsList(products)
  }, [isOpenMenu])

  return (
    <div className="relative flex justify-between items-center z-30 w-full px-3 py-7">
      <Brand />

      <NavLinks isOpenMenu={isOpenMenu} handleMenu={handleMenu} setMenuAsClosed={setMenuAsClosed} />
    </div>
  );
};

export default Navigation;
