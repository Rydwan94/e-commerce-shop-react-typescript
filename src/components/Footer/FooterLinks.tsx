import { Link } from "react-router-dom";
import { footerConstants } from "../../constants/Footer";
import FooterForm from "./FooterForm";

const FooterLinks = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="flex max-md:flex-col-reverse items-center justify-between max-w-[70%] mx-auto py-10">
      <div className="flex max-md:mt-9">
        {footerConstants.map((item) => (
          <Link
            onClick={scrollToTop}
            className="even:ml-3 last:ml-3 text-secondTextColor"
            key={item.path}
            to={item.path}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <FooterForm />
    </div>
  );
};

export default FooterLinks;
