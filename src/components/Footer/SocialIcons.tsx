// SocialIcons.jsx


import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex max-md:flex-col items-center justify-between max-w-[70%] mx-auto">
    <h2 className="text-textColor font-bold text-center text-4xl">Social Links</h2>
    <div className="flex max-md:mt-10">
      <a className="text-primary hover:scale-110 transition-all" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={35} />
      </a>
      <a className="text-primary hover:scale-110 transition-all ml-4" href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <FaGithub size={35} />
      </a>
      <a className="text-primary hover:scale-110 transition-all ml-4" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={35} />
      </a>
      </div>    
    </div>
  );
};

export default SocialIcons;
