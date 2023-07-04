import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BurgerIcon from "../../assets/icons/burger";
import "../HeaderNavigation/styles.css";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";

const HeaderNavigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogOut = () => {
    dispatch(removeUser());
    navigate("/LoginPage");
  };

  return (
    <div className="navigation">
      <div className="route">
        <Link to={"/"} className="textNavigation">
          Главная
        </Link>
        <Link to={"/pageTwo"} className="textNavigation">
          Оклейка автомобилей
        </Link>
        <a className="textNavigation">Детейлинг автомобилей</a>
        <a className="textNavigation">Галерея работ</a>
        <Link to={"/LoginPage"} className="textNavigation">
          Вход
        </Link>
        <Link to={"LoginPage"} className="textNavigation" onClick={LogOut}>
          LogOut
        </Link>
      </div>
      <Link to={"/RegistrationScreen"}>
        <BurgerIcon />
      </Link>
    </div>
  );
};

export default HeaderNavigation;
