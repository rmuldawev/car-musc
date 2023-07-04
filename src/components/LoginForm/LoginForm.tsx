import React, { FC, useState } from "react";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import "../LoginForm/styles.css";
import { Link } from "react-router-dom";
import FourDots from "../../assets/icons/fourDots";

interface LoginFormProps {
  title: string;
  onClick: (email: string, password: string) => void;
  navigationPath: string;
  linkText: string;
}

const LoginForm: FC<LoginFormProps> = ({
  title,
  onClick,
  navigationPath,
  linkText,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="main">
      <div className="registerBox">
        <h1 className="registerTitle">{title}</h1>
        <p className="loginText">Логин</p>
        <input
          className="inputField"
          type="email"
          placeholder="Почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="loginText">Пароль</p>
        <input
          placeholder="Пароль"
          className="inputField"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to={navigationPath} className="singUpText">
          {linkText}
        </Link>
        <div>
          <button className="btn" onClick={() => onClick(email, password)}>
            {title}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
