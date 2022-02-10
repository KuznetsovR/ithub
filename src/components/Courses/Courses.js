import React from 'react';
import './Courses.scss';

export const Courses = () => {
  return (
    <header className="courses-header">
    <div className="logo-ithub-ekat">
      <p className="ithub">IThub <span className="ekat">Ekat</p>
    </div>
    <ul className="courses-list">
      <li><a href="#" className="heder-link">Приёмная комиссия</a></li>
      <li><a href="#" className="heder-link">Специальности</a></li>
      <li><a href="#" className="heder-link">Курсы</a></li>
    </ul>
  </header>

  <div className="block-preparatory-courses">
    <div className="preparatory-courses-square">
      <p className="title-preparatory-courses">Подготовительные курсы</p>
      <div className="courses-square"></div>
      <div className="courses-square-2 courses-square"></div>
      <div className="courses-square-3 courses-square"></div>
    </div>

    <div className="preparatory-courses-description">
      <div>
        <p className="title-courses-description">Здесь будет какое-то описание подготовительных курсов</p>
      </div>
      <div>
        <p><a href="#" className="courses-link">Ссылка на заявления</a></p>
        <button type="button" name="button">Записаться</button>
      </div>
    </div>
  </div>

  <footer classNamelass="courses-footer">
    <div className="footer-contacts">
      <p className="contacts">Контакты</p>
      <p>priem.ekat@ithub.ru</p>
      <p>+7 (343) 286 78 59</p>
    </div>
    <div className="footer-3D-website">
      <p>3D Сайт</p>
    </div>
    <div> <img src={logo} alt="logoit" className="it-hub-logo" /></div>
  </footer>
  );
};
