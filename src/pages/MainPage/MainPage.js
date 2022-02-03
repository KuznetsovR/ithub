import React from 'react';
import './MainPage.scss';
import { HexaButton } from '../../components/HexaButton/HexaButton';
import { Header } from '../../components/Header/Header';
import { Phone } from '../../components/Phone/Phone';
import Slider from 'react-slick';

export const MainPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <main>
      <Header />
      <Phone />
      <HexaButton onClick={() => console.log(123)}>123</HexaButton>
      <div className="slider-wrapper">
        <Slider {...settings}>
          <div className={'slide'}>
            <div className={'slide-img-wrapper'}>
              <img src="https://getbootstrap.com/docs/5.1/assets/img/bootstrap-icons.png" alt="" />
            </div>
            div
            some text
          </div>
          <div className={'slide'}>
            <div className={'slide-img-wrapper'}>
              <img src="https://getbootstrap.com/docs/5.1/assets/img/bootstrap-icons.png" alt="" />
            </div>
            some text
          </div>
          <div className={'slide'}>
            <div className={'slide-img-wrapper'}>
              <img src="https://getbootstrap.com/docs/5.1/assets/img/bootstrap-icons.png" alt="" />
            </div>
            some text
          </div>
        </Slider>
      </div>
    </main>
  );
};
