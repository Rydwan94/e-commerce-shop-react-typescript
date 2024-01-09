import { NavLink} from "react-router-dom";
import { DocumentsNavigation_Routes } from "../../Router/Routes/DocumentsRoutes";

const DocumentsNav = () => {
  return (
    <div className="flex justify-center items-center w-full bg-secondTextColor h-24">
      {DocumentsNavigation_Routes.map((item) => (
        <NavLink className="text-2xl ml-6 max-md:text-lg " key={item.path} to={`/documents${item.path}`}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default DocumentsNav;
