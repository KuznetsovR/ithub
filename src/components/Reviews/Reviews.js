import React from 'react';
import './Reviews.scss';

export const Reviews = () => {
  return (
    <div className="reviews-container">
      <div className="reviews-heading-text">Отзывы о студентах</div>
      <div className="all-reviews-rectangles">
        <div className="reviews-rectangle rec-bg1"></div>
        <div className="reviews-text">
          <p>Иванов Иван</p>
          <p className="reviews-text-2">Компания “ ITbit ”</p>
          <p className="reviews-text-2">Здесь будет какой-то крутой озыв о студенте IThub Ekat</p>
        </div>
      </div>
    </div>
  );
};
