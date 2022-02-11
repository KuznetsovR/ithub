import React from 'react';
import './Courses.scss';

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
          <button type="button" name="button">
            Записаться
          </button>
        </div>
      </div>
    </div>
  );
};
