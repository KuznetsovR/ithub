import React from 'react';
import './Reviews.scss';
import Slider from 'react-slick';
import studentOnePhoto from '../../assets/images/web_dev.png';

export const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1300,
    autoplaySpeed: 5000,
    // pauseOnHover: true,
    arrows: false,
  };
  return (
    <div className="reviews-container">
      <div className="reviews-heading-text">Отзывы о студентах</div>
      <div className="reviews-slider-wrapper">
        <Slider {...settings}>
          <div className={'slide'}>
            <div className="all-reviews-rectangles">
              <div className="student-photo-wrapper">
                <img src={studentOnePhoto} alt="student-photo" />
              </div>
              <div className="reviews-text">
                <p>Иванов Иван</p>
                <p className="reviews-text-2">Компания “ ITbit ”</p>
                <p className="reviews-text-2">Здесь будет какой-то крутой озыв о студенте IThub Ekat</p>
              </div>
            </div>
          </div>
          <div className={'slide'}>
            <div className="all-reviews-rectangles">
              <div className="student-photo-wrapper">
                <img src={studentOnePhoto} alt="student-photo" />
              </div>
              <div className="reviews-text">
                <p>Иванов Иван</p>
                <p className="reviews-text-2">Компания “ ITbit ”</p>
                <p className="reviews-text-2">Здесь будет какой-то крутой озыв о студенте IThub Ekat</p>
              </div>
            </div>
          </div>
          <div className={'slide'}>
            <div className="all-reviews-rectangles">
              <div className="student-photo-wrapper">
                <img src={studentOnePhoto} alt="student-photo" />
              </div>
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
