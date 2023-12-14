import { Link } from "react-router-dom";
import { DocumentsNavigation_Routes } from "../../Router/Routes/DocumentsRoutes";

const DocumentsNav = () => {
  return (
    <div className="flex justify-center items-center">
      {DocumentsNavigation_Routes.map((item) => (
        <Link className="text-2xl ml-6 mt-5" key={item.path} to={`/documents${item.path}`}>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default DocumentsNav;
