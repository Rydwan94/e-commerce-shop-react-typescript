// NavLinks.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Navigation_Routes } from "../../Router/Routes/NavRoutes";

import { Menu } from "../../interface/interfaces";
import Icons from "./Icons";

const NavLinks: React.FC<Menu> = ({ isOpenMenu, handleMenu, setMenuAsClosed }) => {
  
  return (
    <nav className="flex max-lg:flex-col lg:flex-row-reverse items-center w-full">
      <Icons isOpenMenu={isOpenMenu} handleMenu={handleMenu} />
      <ul
        className={`lg:flex lg:flex-row lg:justify-center lg:items-center max-lg:flex max-lg:flex-col max-lg:text-center w-full h-0 transition-all duration-500 transition- max-lg:overflow-hidden text-secondTextColor ${
          isOpenMenu
            && " max-lg:h-[150px] lg:h-auto"
        
        }`}
      >
        {Navigation_Routes.map((link) => (
          <li key={link.path} className="max-lg:mt-5 lg:mx-2">
            <NavLink
            onClick={setMenuAsClosed}
              to={link.path}
              className="hover:text-lightTextColor hover:bg-secondTextColor transition-all p-2 rounded-2xl"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
