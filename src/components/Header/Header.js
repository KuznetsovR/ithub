import React from 'react';
import './Header.scss';
import logo from '../../assets/images/IThublogo.png';

export const Header = () => {
  return (
    <header>
        <img src={logo} className="logoheader" alt="logoit" />
        <nav className="menu">
          <div className="triangles-container">
            <div className="triangle-row">
              <div className="triangle start-color" />
              <div className="triangle color3" />
            </div>
            <div className="triangle-row reversed" style={{ marginLeft: '30px' }}>
              <div className="triangle color2" />
              <div className="triangle color4" />
            </div>
            <div className="triangle-row reversed" style={{ marginTop: '60px' }}>
              <div className="triangle start-color" />
              <div className="triangle color3" />
            </div>
            <div className="triangle-row" style={{ margin: '60px 0 0 30px' }}>
              <div className="triangle color2" />
              <div className="triangle color4" />
            </div>
          </div>
          <ul>
            <li>
              <a href="#">Приёмная комиссия </a>
            </li>
            <li>
              <a href="#">Специальности</a>
            </li>
            <li>
              <a href="#">Курсы</a>
            </li>
          </ul>
        </nav>
    </header>
  );
};
