import React from 'react';
import './Header.scss';
import logo from '../../images/IThublogo.png' 

export const Header = () => {
  return (
      <header>
         <img src={logo} className="logoheader" alt="logoit"/>
      <div className="rectangle2">
      </div>
      <div className="rectangle">
      <nav className="menu">
  <ul>
    <li><a href="#">Приёмная комиссия </a></li>
    <li><a href="#">Специальности</a></li>
    <li><a href="#">Курсы</a></li>
  </ul>
</nav>      
         </div>
       </header>
  );
};
