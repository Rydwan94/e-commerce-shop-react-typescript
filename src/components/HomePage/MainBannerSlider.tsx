import Slider from "react-slick";
import { mainBanerImages } from "../../constants/Produc tsCategoryImages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { useNavigate } from "react-router-dom";

const MainBannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const Navigate = useNavigate()

  const viewOffer = () => {
    Navigate('/products')
  }

  return (
    <Slider {...settings} className="relative">
      {mainBanerImages.map((imagePath, index) => (
        <div key={index} className="relative z-0">
          <img
            className="w-full object-cover"
            src={imagePath}
            alt={`Banner ${index + 1}`}
          />
          <button onClick={viewOffer} className="absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-lightBackground text-4xl md:text-xl max-md:text-base max-md:left-16 text-textColor shadow-lg p-1 rounded-lg animate-bounce cursor-pointer">
            Buy Now!
          </button>
        </div>
      ))}
    </Slider>
  );
};

export default MainBannerSlider;
