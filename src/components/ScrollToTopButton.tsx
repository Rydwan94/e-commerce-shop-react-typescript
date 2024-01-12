import  { useState, useEffect } from 'react';

import { IoIosArrowUp } from 'react-icons/io';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  console.log(isVisible)

  useEffect(() => {
    const handleScroll = () => {
    
      const scrollY = window.scrollY || window.pageYOffset;

      setIsVisible(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]); 

  
  return isVisible ? (
    <div className="fixed top-3/4 left-0 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-primary rounded-r-3xl animate-jump-in text-lightTextColor" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <IoIosArrowUp size={30} />
    </div>
  ) : null;
};

export default ScrollToTopButton;
