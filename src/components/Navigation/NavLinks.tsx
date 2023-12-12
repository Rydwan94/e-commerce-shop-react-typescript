// NavLinks.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Navigation_Routes } from "../../Router/Routes/NavRoutes";

import { Menu } from "../../interface/interfaces";
import Icons from "./Icons";

const NavLinks: React.FC<Menu> = ({ isOpenMenu, handleMenu }) => {
  return (
    <nav className="flex max-lg:flex-col lg:flex-row-reverse items-center w-full">
      <Icons isOpenMenu={isOpenMenu} handleMenu={handleMenu} />
      <ul
        className={`lg:flex lg:flex-row lg:justify-center lg:items-center max-lg:flex max-lg:flex-col max-lg:text-center w-full h-0 transition-all ${
          isOpenMenu
            ? "h-auto max-lg:overflow-visible "
            : "max-lg:overflow-hidden"
        }`}
      >
        {Navigation_Routes.map((link) => (
          <li key={link.path} className="max-lg:even:mt-2 lg:mx-2">
            <NavLink
              to={link.path}
              className="text-gray-800 hover:text-blue-500"
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
