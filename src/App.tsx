import React from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainScreen from "./screens/MainScreen/MainScreen";
import PastingScreen from "./screens/PastingScreen/PastingScreen";
import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import LoginPage from "./screens/LoginPage/LiginPage";
import Profile from "./screens/Profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="pageTwo" element={<PastingScreen />} />
          <Route path="RegistrationScreen" element={<RegistrationScreen />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
