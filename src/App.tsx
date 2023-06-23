import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import OurProgress from "./components/OurProgress/OurProgress";
import CarouselImages from "./components/CarouselImages/CarouselImages";

function App() {
  return (
    <div>
      <HomePage />
      <OurProgress />
      <CarouselImages />
    </div>
  );
}

export default App;
