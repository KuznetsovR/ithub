import React from 'react';
import './Specialties.scss';

export const Specialties = () => {
  return (
    <div className="d-flex container" id="cont1">
      <div className="specsText">Специальности:</div>
      <div className="specs">
        <div className="rectangleP1">
          <div className="text1">Веб-Разработчик</div>
        </div>
        <div className="rectangleP2">
          <div className="text2">Программист</div>
        </div>
        <div className="rectangleP3">
          <div className="text3">Системный админимтсратор</div>
        </div>
      </div>
    </div>
  );
};
