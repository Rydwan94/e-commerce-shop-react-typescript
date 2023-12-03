import { useState } from "react";
import CartIcon from "../components/Navigation/CartIcon";
import NavLinks from "../components/Navigation/NavLinks";
import Brand from "../components/Navigation/Brand";





const Navigation: React.FC = () => {
  
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <div className="flex flex-row-reverse justify-between items-center p-3">
      <div className="flex justify-between items-center w-full">
      <CartIcon/>
      <NavLinks isOpenMenu={isOpenMenu} handleMenu={handleMenu}/>
      </div>
      <Brand/> 
    </div>
  );
};

export default Navigation;
