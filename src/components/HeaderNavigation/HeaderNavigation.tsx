import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BurgerIcon from "../../assets/icons/burger";
import "../HeaderNavigation/styles.css";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";
import MenuModal from "../../modals/MenuModal/MenuModal";

const HeaderNavigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const LogOut = () => {
    dispatch(removeUser());
  };

  const openModal = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  console.log(isOpen);

  return (
    <>
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
          <Link to={"/RegistrationScreen"} className="textNavigation">
            Регистрация
          </Link>
          <Link to={"LoginPage"} className="textNavigation" onClick={LogOut}>
            LogOut
          </Link>
        </div>
        <BurgerIcon className="burgerButton" onClick={openModal} />
      </div>
      {isOpen && <MenuModal isOpen={isOpen} closeModal={closeModal} />}
    </>
  );
};

export default HeaderNavigation;
