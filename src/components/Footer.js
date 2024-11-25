import React from 'react';
import { Link } from 'react-router-dom';
import layer from '../assets/icons/layers.png';
import message from '../assets/icons/message.png';
import pen from '../assets/icons/pen.png';
import profile from '../assets/icons/profile.png';

const Footer = () => {
  return (
    <footer>
      <nav class="destination">
        <Link to="/">
        <img class="icon" src={layer} alt=""/>
        <div class="label">Главная</div>
        </Link>
        <Link to="#">
          <img class="icon" src={message} alt=""/>
          <div class="label">Обсуждения</div>
        </Link>
        <Link to="#">
          <i class="fa-solid fa-plus" style={{ color: '#1739d9' }}></i>
        </Link>
        <Link to="#">
          <img class="icon" src={pen} alt=""/>
          <div class="label">Академия</div>
        </Link>
        <Link to="/profile">
          <img class="icon" src={profile} alt=""/>
          <div class="label">Профиль</div>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
