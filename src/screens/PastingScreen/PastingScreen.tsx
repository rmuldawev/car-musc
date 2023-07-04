import React from "react";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoginForm from "../../components/LoginForm/LoginForm";

const PastingScreen = () => {
  return (
    <div>
      <HeaderNavigation />
    </div>
  );
};

export default PastingScreen;
