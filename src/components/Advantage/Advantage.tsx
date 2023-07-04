import React from "react";
import "../../components/Advantage/styles.css";
import MaterialsIcon from "../../assets/icons/MaterialsIcon";
import FourDots from "../../assets/icons/fourDots";
import MastersIcon from "../../assets/icons/MastersIcon";
import GarantIcon from "../../assets/icons/GarantIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextImageIcon from "../../assets/icons/NextImageIcon";
import PrevImageIcon from "../../assets/icons/PrevImageIcon";

const Advantage = () => {
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
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="anvantageContainer">
      <div>
        <div className="materials">
          <MaterialsIcon />
          <p className="materialsText">МАТЕРИАЛЫ ОТ ЛУЧШИХ КОМПАНИЙ</p>
        </div>
        <p className="text1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium,
          rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet
          nisl vestibulum risus. Quis pretium
        </p>
        <div className="fourDots">
          <FourDots />
        </div>
        <div className="materials">
          <MastersIcon />
          <p className="materialsText">ОПЫТНЫЕ МАСТЕРА</p>
        </div>
        <p className="text1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et donec
          elementum egestas vitae ullamcorper. Amet volutpat ornare pharetra
          amet adipiscing orci, lectus aenean ultricies. Erat viverra eget
          blandit ornare. Molestie ipsum commodo faucibus rhoncus
        </p>
        <div className="fourDots">
          <FourDots />
        </div>
        <div className="materials">
          <GarantIcon />
          <p className="materialsText">ГАРАНТИЯ НА ВСЕ ВИДЫ РАБОТ</p>
        </div>
        <p className="text1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          volutpat.
        </p>
      </div>
      <div className="advantageImageContainer">
        <Slider {...settings} className="advantageCarousel">
          <div style={{ maxWidth: "500px" }}>
            <img
              className="sliderImageStyle"
              src={require("../../assets/images/BMW.png")}
            />
          </div>
        </Slider>
        <div className="prevNextIcons">
          <PrevImageIcon />
          <p className="prevNextText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque auctor nibh feugiat est. Consectetur lectus.
          </p>
          <NextImageIcon />
        </div>
      </div>
    </div>
  );
};

export default Advantage;
