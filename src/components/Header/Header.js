import React from 'react';
import './Header.scss';
import logo from '@assets/images/IThublogo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
            <Link to="/commission">Приёмная комиссия </Link>
          </li>
          <li>
            <HashLink smooth to="/#specialities">Специальности</HashLink>
          </li>
          <li>
            <Link to="/courses">Курсы</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
