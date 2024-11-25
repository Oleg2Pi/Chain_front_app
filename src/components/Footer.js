import React from "react";
import { Link } from "react-router-dom";
import layer from "../assets/icons/layers.png";
import message from "../assets/icons/message.png";
import pen from "../assets/icons/pen.png";
import profile from "../assets/icons/profile.png";

import '../styles/homePage/navigation.css';
import '../styles/homePage/main.css';

const Footer = () => {
  return (
    <main>
      <footer>
        <nav className="destination">
          <Link to="/">
            <img className="icon" src={layer} alt="" />
            <div className="label">Главная</div>
          </Link>
          <Link to="#">
            <img className="icon" src={message} alt="" />
            <div className="label">Обсуждения</div>
          </Link>
          <Link to="#">
            <i className="fa-solid fa-plus" style={{ color: "#1739d9" }}></i>
          </Link>
          <Link to="#">
            <img className="icon" src={pen} alt="" />
            <div className="label">Академия</div>
          </Link>
          <Link to="/profile">
            <img className="icon" src={profile} alt="" />
            <div className="label">Профиль</div>
          </Link>
        </nav>
      </footer>
    </main>
  );
};

export default Footer;
