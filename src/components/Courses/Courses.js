import React from 'react';
import './Courses.scss';
import { HexaButton } from '@components/HexaButton/HexaButton';

export const Courses = () => {
  return (
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
  );
};
