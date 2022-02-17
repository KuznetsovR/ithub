import React from 'react';
import './Courses.scss';
import { HexaButton } from '../HexaButton/HexaButton';
import courses1 from '../../assets/images/courses1.jpg';
import courses2 from '../../assets/images/courses2.jpg';
import courses3 from '../../assets/images/courses3.jpg';
import courses4 from '../../assets/images/courses4.jpg';
import courses5 from '../../assets/images/courses5.jpg';

export const Courses = () => {
  return (
    <div>
      <div className="block-preparatory-courses">
        <div className="preparatory-courses-square">
          <p className="title-preparatory-courses">Подготовительные курсы</p>
          <div className="courses-square" />
          <div className="courses-square-2 courses-square" />
          <div className="courses-square-3 courses-square" />
        </div>

        <div className="preparatory-courses-description">
          <div>
            <p className="title-courses-description">Здесь будет какое-то описание подготовительных курсов</p>
          </div>
          <div>
            <p>
              <a href="#" className="courses-link">
                Ссылка на заявления
              </a>
            </p>
            <HexaButton>Записаться</HexaButton>
          </div>
        </div>
      </div>
      <div className="preparatory-courses-img">
        <img src={courses1} className="courese-big-img" alt="" />
        <img src={courses2} className="courese-img" alt="" />
        <img src={courses3} className="courese-img" alt="" />
        <img src={courses4} className="courese-img" alt="" />
        <img src={courses5} className="courese-img" alt="" />
      </div>
    </div>
  );
};
