import { Link } from "react-router-dom";
import { DocumentsNavigation_Routes } from "../constants/NavConstants";

const DocumentsList = () => {
  return (
    <div className="flex justify-center items-center">
      {DocumentsNavigation_Routes.map((item) => (
        <Link key={item.path} to={item.path}>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default DocumentsList;
