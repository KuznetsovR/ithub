import React from 'react';
import './Specialties.scss';

export const Specialties = () => {
  return (
    <div className="specialities-container">
      <div className="specialities-heading-text">Специальности:</div>
      <div className="all-specialities-rectangles">
        <div className="specialities-rectangle rec-bg1">
          <div className="rec-text-default rec-text-size1">Веб-Разработчик</div>
        </div>
        <div className="specialities-rectangle rec-bg2">
          <div className="rec-text-default rec-text-size1">Программист</div>
        </div>
        <div className="specialities-rectangle rec-bg3">
          <div className="rec-text-default rec-text-size2">Системный администратор</div>
        </div>
      </div>
    </div>
  );
};
