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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "10px",
    prevArrow: <IconPrevImage />,
    nextArrow: <IconNextImage />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="sliderContainer">
      <Slider {...settings} className="carousel">
        <div>
          <img
            className="imageStyle"
            src={require("../../assets/images/ImagesCarousel/Image1.png")}
            alt="slide-1"
          />
        </div>
        <div>
          <img
            className="imageStyle"
            src={require("../../assets/images/ImagesCarousel/Image2.png")}
            alt="slide-2"
          />
        </div>
        <div>
          <img
            className="imageStyle"
            src={require("../../assets/images/ImagesCarousel/Image3.png")}
            alt="slide-3"
          />
        </div>
        <div>
          <img
            className="imageStyle"
            src={require("../../assets/images/ImagesCarousel/Image1.png")}
            // style={{ width: "345px", height: "345px" }}
            alt="slide-4"
          />
        </div>
        <div>
          <img
            className="imageStyle"
            src={require("../../assets/images/ImagesCarousel/Image2.png")}
            // style={{ width: "345px", height: "345px" }}
            alt="slide-4"
          />
        </div>
        <div>
          <img
            className="imageStyle"
            src={require("../../assets/images/ImagesCarousel/Image3.png")}
            // style={{ width: "345px", height: "345px" }}
            alt="slide-4"
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselImages;
