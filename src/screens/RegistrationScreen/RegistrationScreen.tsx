import React, { useState } from "react";
import "../RegistrationScreen/styles.css";

import LoginForm from "../../components/LoginForm/LoginForm";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { Link } from "react-router-dom";

const RegistrationScreen = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  const logInNav = () => {
    return <Link to={"/LoginPage"}>Вход</Link>;
  };
  return (
    <div className="registerContainer">
      <HeaderNavigation />
      <LoginForm
        title="Регистрация"
        onClick={handleRegister}
        linkText="Уже есть аккаунт? Войти"
        navigationPath="/LoginPage"
      />
    </div>
  );
};

export default RegistrationScreen;
