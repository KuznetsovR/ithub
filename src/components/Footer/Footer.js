import React from 'react';
import './Footer.scss';
import logo from '../../assets/images/IThublogo.png';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-text">
          <img src={logo} className="logo-footer" alt="logoit" />
          <a href="" className="text-address">
            Екатеринбург, Чкалова 3
          </a>
          <a href="" className="text-copyright">
            © Copyright 2021 ITHub Ekat college
          </a>
        </div>
        <div className="footer-text">
          <Link to="/navigation" className="text-3d">ITJourney 3D</Link>
        </div>
        <div className="footer-text">
          <a href="" className="text-contacts">
            Контакты
          </a>
          <a href="" className="text-email">
            &#9993; priem.ekat@ithub.ru
          </a>
          <a href="" className="text-email text-phone">
            &#9742; +7 (343) 286 78 59
          </a>
        </div>
      </div>
    </footer>
  );
};
