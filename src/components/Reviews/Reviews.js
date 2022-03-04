import React from 'react';
import './Reviews.scss';
import Slider from 'react-slick';

export const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1300,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <div className="reviews-container" id={'reviews'}>
      <h1 className="reviews-heading-text">Отзывы о студентах</h1>
      <div className="reviews-slider-wrapper">
        <Slider {...settings}>
          <div className={'slide'}>
            <div className="all-reviews-rectangles">
              <div className="student-photo" />
              <div className="reviews-text">
                <p>Иванов Иван</p>
                <p className="reviews-text-2">Компания “ ITbit ”</p>
                <p className="reviews-text-2">Здесь будет какой-то крутой озыв о студенте IThub Ekat</p>
              </div>
            </div>
          </div>
          <div className={'slide'}>
            <div className="all-reviews-rectangles">
              <div className="student-photo" />
              <div className="reviews-text">
                <p>Иванов Иван</p>
                <p className="reviews-text-2">Компания “ ITbit ”</p>
                <p className="reviews-text-2">Здесь будет какой-то крутой озыв о студенте IThub Ekat</p>
              </div>
            </div>
          </div>
          <div className={'slide'}>
            <div className="all-reviews-rectangles">
              <div className="student-photo" />
              <div className="reviews-text">
                <p>Иванов Иван</p>
                <p className="reviews-text-2">Компания “ ITbit ”</p>
                <p className="reviews-text-2">Здесь будет какой-то крутой озыв о студенте IThub Ekat</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
