import React from "react";
import "../../components/Services/styles.css";
import FourDots from "../../assets/icons/fourDots";
import Rectangle from "../../assets/icons/rectangle";
import Plenka from "../../assets/icons/Plenka";
import ColorIcon from "../../assets/icons/ColorIcon";
import DesingIcon from "../../assets/icons/DesingIcon";
import SalonIcon from "../../assets/icons/SalonIcon";

const Services = () => {
  return (
    <div className="servicesMainContainer">
      <div className="ourServices">
        <p className="ourServivesTextTitle">НАШИ УСЛУГИ</p>
        <FourDots />
        <div className="twoRectangles">
          <div className="redRectangle">
            <p className="rectangleTextTitle">ОКЛЕЙКА</p>
          </div>
          <div className="BlackRectangle">
            <p className="rectangleTextTitle">ДЕТЕЙЛИНГ</p>
          </div>
        </div>
      </div>
      <div className="serviceBoxes">
        <div className="fourBox">
          <div className="plenkaIcon">
            <Plenka />
          </div>
          <p className="boxesTitle">ЗАЩИТНЫЕ ПЛЁНКИ</p>
          <p className="boxesText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            ultrices pellentesque vulputate sit. Ut feugiat.
          </p>
          <div className="detailsButton">
            <Rectangle />
            <p className="detailsText">ПОДРОБНЕЕ</p>
          </div>
        </div>
        <div className="fourBox">
          <ColorIcon />
          <p className="boxesTitle">ЦВЕТНЫЕ ПЛЕНКИ</p>
          <p className="boxesText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            ultrices pellentesque vulputate sit. Ut feugiat.
          </p>
          <div className="detailsButton">
            <Rectangle />
            <p className="detailsText">ПОДРОБНЕЕ</p>
          </div>
        </div>
        <div className="fourBox">
          <div className="designIcon">
            <DesingIcon />
          </div>
          <p className="boxesTitle">ДИЗАЙН</p>
          <p className="boxesText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            ultrices pellentesque vulputate sit. Ut feugiat.
          </p>
          <div className="detailsButton">
            <Rectangle />
            <p className="detailsText">ПОДРОБНЕЕ</p>
          </div>
        </div>
        <div className="fourBox">
          <SalonIcon />
          <p className="boxesTitle">ОКЛЕЙКА САЛОНА</p>
          <p className="boxesText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            ultrices pellentesque vulputate sit. Ut feugiat.
          </p>
          <div className="detailsButton">
            <Rectangle />
            <p className="detailsText">ПОДРОБНЕЕ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
