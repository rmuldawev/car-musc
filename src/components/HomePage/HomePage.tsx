import React from "react";
import "./styles.css";
import BurgerIcon from "../../assets/icons/burger";
import FourDots from "../../assets/icons/fourDots";
import Rectangle from "../../assets/icons/rectangle";
import { Link } from "react-router-dom";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";

const HomePage = () => {
  return (
    <div className="afisha">
      <div className="carMusc container">
        <HeaderNavigation />
        <h1 className="textLogo">CAR MUSC</h1>
        <div className="fourDots">
          <FourDots />
        </div>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci
          urna amet penatibus.
        </p>
        <div className="rectangle">
          <Rectangle />
          <p className="servicesText">Наши услуги</p>
        </div>
      </div>
      <div className="addressContainer">
        <div className="textContainer">
          <p className="addressText">АДРЕС:</p>
          <div className="address1">
            <p className="address">ЕСКАЛИЕВА 179</p>
          </div>
        </div>
        <div className="phoneContainer">
          <p className="addressText">ТЕЛЕФОН:</p>
          <p className="address">8 (812) 123-45-67</p>
          <p className="address">8-911-123-45-67</p>
        </div>
        <div className="textContainer">
          <p className="addressText">РЕЖИМ РАБОТЫ:</p>
          <p className="address">пн-пт : 10:00 - 20:00</p>
          <p className="address">сб-вск : 12:00 - 20:00</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
