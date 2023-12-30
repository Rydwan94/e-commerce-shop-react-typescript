import FooterLinks from "../components/Footer/FooterLinks";
import SocialIcons from "../components/Footer/SocialIcons";

const Footer = () => {
  return (
    <div className="flex flex-col max-md:flex-col ">
      <div className="w-full bg-lightGray2 py-14">
        <SocialIcons />
      </div>
      <div className="w-full bg-lightBackgroundColor">
        <FooterLinks />
      </div>
      <div className='text-center max-md:flex-col py-4 bg-lightGray2 w-full'>
      <p>Copyright © 2023 Rydwan94. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
