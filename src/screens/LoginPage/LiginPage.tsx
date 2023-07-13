import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";
import { useAppDispatch } from "../../hooks/redux-hooks";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log("user", user);
        alert("Welcome");
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/Profile");
      })
      .catch(() => alert("Invalid User"));
  };

  return (
    <div className="registerContainer">
      <HeaderNavigation />
      <LoginForm
        title="Вход"
        onClick={handleLogin}
        linkText="Зарегистрироваться"
        navigationPath="/RegistrationScreen"
      />
    </div>
  );
};

export default LoginPage;
