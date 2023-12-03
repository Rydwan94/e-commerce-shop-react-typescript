import { Menu } from "../../interface/interfaces";

const Hamburger = ({ isOpenMenu, handleMenu }: Menu) => {
  return (
    <button onClick={handleMenu} className="lg:hidden">
      <div
        className={`w-6 h-1 bg-black transition-all transform ${
          isOpenMenu ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"
        }`}
      ></div>
      <div
        className={`w-6 h-1 my-1 bg-black transition-all  ${
          isOpenMenu ? "opacity-0" : "opacity-1"
        }`}
      ></div>
      <div
        className={`w-6 h-1 bg-black transition-all transform ${
          isOpenMenu ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"
        }`}
      ></div>
    </button>
  );
};

export default Hamburger;
