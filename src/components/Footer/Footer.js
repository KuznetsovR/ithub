import React from 'react';
import './Footer.scss';
import logo from '../../assets/images/IThublogo.png';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footertext">
          {' '}
          <img src={logo} className="logofooter" alt="logoit" />
          <a href="" className="textaddress">
            {' '}
            Екатеринбург, Чкалова 3
          </a>
          <a href="" className="textcopyright">
            © Copyright 2021 ITHub Ekat college
          </a>
        </div>
        <div className="footertext">
          {' '}
          <a href="" className="text3d">
            {' '}
            ITJourney 3D
          </a>{' '}
        </div>
        <div className="footertext">
          {' '}
          <a href="" className="textcontacts">
            {' '}
            Контакты
          </a>
          <a href="" className="textemail">
            {' '}
            &#9993; priem.ekat@ithub.ru{' '}
          </a>
          <a href="" className="textemail textphone">
            {' '}
            &#9742; +7 (343) 286 78 59
          </a>
        </div>
      </div>
    </footer>
  );
};
