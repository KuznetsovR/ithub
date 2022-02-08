import React from 'react';
import './OpenDay.scss';
import { HexaButton } from '../HexaButton/HexaButton';
import Slider from 'react-slick';

export const OpenDay = () => {
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
    <div className="open-day-component">
      <div className="open-day">
        <h2>День открытых дверей</h2>
        <div className="open-day-desc">Приглашаем абитуриентов и их родителей посетить наш колледж</div>
        <div className="open-day-date">Состоится 6 июля</div>
        <HexaButton>Записаться</HexaButton>
      </div>
      <div className="schools-events">
        <h2>Выезд представителей в школы</h2>
        <div className="slider-wrapper">
          <Slider {...settings}>
            <div className={'slide'}>
              <div className="img-container">
                <img className={'slide-img'} src="https://t1.unipage.net/src/c8849o.webp" alt="" />
              </div>
              <div className="event-description">22.04.2022</div>
            </div>
            <div className={'slide'}>
              <div className="img-container">
                <img className={'slide-img'} src="https://t1.unipage.net/src/co40ou.webp" alt="" />
              </div>
              <div className="event-description">05.04.2022</div>
            </div>
            <div className={'slide'}>
              <div className="img-container">
                <img className={'slide-img'} src="https://www.studylab.ru/upload/Institutions/image/big/28bdde35702ffcfbdcc4f9138a29be10.jpg" alt="" />
              </div>
              <div className="event-description">05.04.2022</div>
            </div>
          </Slider>
        </div>
        <div className="invite-btn-wrapper">
          <HexaButton>Пригласить</HexaButton>
        </div>
      </div>
    </div>
  );
};
