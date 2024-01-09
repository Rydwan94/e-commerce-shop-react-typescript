import { Link } from "react-router-dom";
import brand from "../../assets/Images/Brand/brand.png";

const Brand = () => {
  return (
    <div className="absolute top-12 -translate-y-1/2 ">
      <Link to='/'>
        <img className="max-md:w-3/4" src={brand} alt="brand" />
      </Link>
    </div>
  );
};

export default Brand;
