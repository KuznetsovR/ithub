import React from 'react';
import './MainPage.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Phone } from '../../components/Phone/Phone';
import Slider from 'react-slick';
import { SpecialityModal } from '../../components/SpecialityModal/SpecialityModal';
import { Documents } from '../../components/Documents/Documents.JS';

export const MainPage = () => {
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
    <main>
      <Header />

      <Phone />

      <SpecialityModal>
        <div>asdjkfnoewiuipdinowevbieghejpfmwvni</div>
      </SpecialityModal>

      <div className="slider-wrapper">
        <Slider {...settings}>
          <div className={'slide'}>
            <img
              className={'slide-img'}
              src="https://getbootstrap.com/docs/5.1/assets/img/bootstrap-icons.png"
              alt=""
            />
            <div className="description">some text</div>
          </div>
          <div className={'slide'}>
            <img
              className={'slide-img'}
              src="https://getbootstrap.com/docs/5.1/assets/img/bootstrap-icons.png"
              alt=""
            />
            <div className="description">some text</div>
          </div>
          <div className={'slide'}>
            <img
              className={'slide-img'}
              src="https://getbootstrap.com/docs/5.1/assets/img/bootstrap-icons.png"
              alt=""
            />
            <div className="description">some text</div>
          </div>
        </Slider>
      </div>
      <Documents />
      <Footer />
    </main>
  );
};
