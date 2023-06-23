import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CarouselImages/styles.css";
import Slider from "react-slick";
import PrevImageIcon from "../../assets/icons/PrevImageIcon";
import NextImageIcon from "../../assets/icons/NextImageIcon";

const CarouselImages = () => {
  const customSlider = useRef();

  const slickNext = () => {};

  const IconNextImage = ({ onClick }: any) => {
    return (
      <button className="nextSlickStyle" onClick={onClick}>
        <NextImageIcon />
      </button>
    );
  };

  const IconPrevImage = ({ onClick }: any) => {
    return (
      <button className="prevSlickStyle" onClick={onClick}>
        <PrevImageIcon />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <IconPrevImage />,
    nextArrow: <IconNextImage />,
  };

  return (
    <Slider {...settings} className="carousel">
      <div style={{ maxWidth: "400px" }}>
        <img
          src={require("../../assets/images/ImagesCarousel/Image1.png")}
          style={{ width: "345px", height: "345px" }}
          alt="slide-1"
        />
      </div>
      <div>
        <img
          src={require("../../assets/images/ImagesCarousel/Image2.png")}
          style={{ width: "345px", height: "345px" }}
          alt="slide-2"
        />
      </div>
      <div>
        <img
          src={require("../../assets/images/ImagesCarousel/Image3.png")}
          style={{ width: "345px", height: "345px" }}
          alt="slide-3"
        />
      </div>
      <div>
        <img
          src={require("../../assets/images/ImagesCarousel/Image1.png")}
          style={{ width: "345px", height: "345px" }}
          alt="slide-4"
        />
      </div>
      <div>
        <img
          src={require("../../assets/images/ImagesCarousel/Image2.png")}
          style={{ width: "345px", height: "345px" }}
          alt="slide-4"
        />
      </div>
      <div>
        <img
          src={require("../../assets/images/ImagesCarousel/Image3.png")}
          style={{ width: "345px", height: "345px" }}
          alt="slide-4"
        />
      </div>
    </Slider>
  );
};

export default CarouselImages;
