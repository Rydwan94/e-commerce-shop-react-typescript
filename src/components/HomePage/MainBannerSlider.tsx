import React from "react";
import Slider from "react-slick";
import { mainBanerImages } from "../../constants/Images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

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

  return (
    <Slider {...settings} className="relative">
      {mainBanerImages.map((imagePath, index) => (
        <div key={index} className="relative z-0">
          <img
            className="w-full object-cover"
            src={imagePath}
            alt={`Banner ${index + 1}`}
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-third1 text-white shadow-lg p-1 rounded-lg animate-fade-in-down">
            Buy Now!
          </button>
        </div>
      ))}
    </Slider>
  );
};

export default MainBannerSlider;
