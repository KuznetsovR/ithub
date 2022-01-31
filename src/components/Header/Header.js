import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
      <header>
         <img src="./img/itlogo.png" class="logoheader" alt="logo"> </img>
      <div class="rectangle2"></div>
      
      <div class="rectangle">
        <div class="navig">
        <a class="martex">Приёмная комиссия </a>
        <a class="martex">Специальности</a>
        <a class="">Курсы</a>
        </div>
        
      </div>
       </header>
  );
};
