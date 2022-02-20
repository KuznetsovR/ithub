import React from 'react';
import './Courses.scss';
import { HexaButton } from '../HexaButton/HexaButton';
import Slider from 'react-slick';

export const Courses = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 5000,
    // pauseOnHover: true,
    arrows: false,
  };
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
      <div className="open-day-slider-wrapper courses-photo-gallery">
        <p className="title-photo-gallery">Фотогаларея</p>
        <Slider {...settings}>
          <div className={'slide'}>
            <div className="img-container">
              <img
                className={'slide-img  courses-slide-img'}
                src="https://t1.unipage.net/src/c8849o.webp"
                alt=""
              />
              <img
                className={'slide-img  courses-slide-img'}
                src="https://t1.unipage.net/src/c8849o.webp"
                alt=""
              />
              <img
                className={'slide-img  courses-slide-img'}
                src="https://t1.unipage.net/src/c8849o.webp"
                alt=""
              />
            </div>
          </div>
          <div className={'slide'}>
            <div className="img-container">
              <img
                className={'slide-img courses-slide-img'}
                src="https://t1.unipage.net/src/co40ou.webp"
                alt=""
              />
              <img
                className={'slide-img courses-slide-img'}
                src="https://t1.unipage.net/src/c8849o.webp"
                alt=""
              />
              <img
                className={'slide-img courses-slide-img'}
                src="https://t1.unipage.net/src/c8849o.webp"
                alt=""
              />
            </div>
          </div>
          <div className={'slide'}>
            <div className="img-container">
              <img
                className={'slide-img courses-slide-img'}
                src="https://www.studylab.ru/upload/Institutions/image/big/28bdde35702ffcfbdcc4f9138a29be10.jpg"
                alt=""
              />
              <img
                className={'slide-img  courses-slide-img'}
                src="https://t1.unipage.net/src/c8849o.webp"
                alt=""
              />
              <img
                className={'slide-img courses-slide-img'}
                src="https://t1.unipage.net/src/c8849o.webp"
                alt=""
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
