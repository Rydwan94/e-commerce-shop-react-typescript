import { NavLink } from "react-router-dom";
import { Navigation_Routes } from "../../constants/NavConstants";
import Hamburger from "./Hamburger";
import { Menu } from "../../interface/interfaces";

const NavLinks = ({ isOpenMenu, handleMenu }: Menu) => {
  return (
    <nav className="flex flex-col w-full">
      <Hamburger isOpenMenu={isOpenMenu} handleMenu={handleMenu} />
      <ul
        className={`lg:flex lg:flex-row lg:justify-start lg:items-center max-lg:flex max-lg:flex-col w-full h-0 transition-all ${
          isOpenMenu ? "h-auto max-lg:overflow-visible " : "max-lg:overflow-hidden"
        }`}
      >
        {Navigation_Routes.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className="max-lg:mt-2 lg:mx-2"
          >
            {link.label}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
