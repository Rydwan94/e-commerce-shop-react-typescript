import { NavLink} from "react-router-dom";
import { DocumentsNavigation_Routes } from "../../Router/Routes/DocumentsRoutes";

const DocumentsNav = () => {
  return (
    <div className="flex justify-center items-center w-full bg-lightGray1 h-24 animate-fade-right ">
      {DocumentsNavigation_Routes.map((item) => (
        <NavLink className="text-2xl ml-6 max-md:text-lg p-1 rounded-md hover:bg-hoverColor hover:text-lightTextColor transition-all " key={item.path} to={`/documents${item.path}`}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default DocumentsNav;
