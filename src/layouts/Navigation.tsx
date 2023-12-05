import React, { useState } from "react";
import NavLinks from "../components/Navigation/NavLinks";
import Brand from "../components/Navigation/Brand";

const Navigation: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="relative flex justify-between items-center w-full p-3">
      <Brand />

      <NavLinks isOpenMenu={isOpenMenu} handleMenu={handleMenu} />
    </div>
  );
};

export default Navigation;
