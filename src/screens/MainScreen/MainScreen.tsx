import React from "react";
import HomePage from "../../components/HomePage/HomePage";
import OurProgress from "../../components/OurProgress/OurProgress";
import CarouselImages from "../../components/CarouselImages/CarouselImages";
import Advantage from "../../components/Advantage/Advantage";
import Services from "../../components/Services/Services";
import OurWorks from "../../components/OurWorks/OurWorks";

import "../MainScreen/styles.css";
import MenuModal from "../../modals/MenuModal/MenuModal";

const MainScreen = () => {
  return (
    <div className="mainScreenStyle">
      <HomePage />
      <OurProgress />
      <CarouselImages />
      <Advantage />
      <Services />
      <OurWorks />
    </div>
  );
};

export default MainScreen;
