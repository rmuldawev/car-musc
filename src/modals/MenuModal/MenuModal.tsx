import React, { FC, useState } from "react";
import Modal from "react-modal";
import "../MenuModal/styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { removeUser } from "../../store/slices/userSlice";

interface MenuModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const MenuModal: FC<MenuModalProps> = ({ isOpen, closeModal }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const LogOut = () => {
    dispatch(removeUser());
    navigate("/LoginPage");
  };

  const customStyles = {
    content: {
      top: "10px",
      left: "10px",
      right: "auto",
      bottom: "auto",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="modal__content">
        <Link to={"/"} className="modalButtons">
          Главная
        </Link>
        <Link to={"/pageTwo"} className="modalButtons">
          Оклейка автомобилей
        </Link>
        <a className="modalButtons" onClick={closeModal}>
          Детейлинг автомобилей
        </a>
        <a className="modalButtons">Галерея работ</a>
        <Link to={"/LoginPage"} className="modalButtons">
          Вход
        </Link>
        <Link to={"/RegistrationScreen"} className="modalButtons">
          Регистрация
        </Link>
        <Link to={"LoginPage"} className="modalButtons" onClick={LogOut}>
          LogOut
        </Link>
        <Link className="modalButtons" to={"Profile"}>
          Профиль
        </Link>
      </div>
    </Modal>
  );
};

export default MenuModal;
