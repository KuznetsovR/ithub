import React, { useState }from 'react';
import './OpenDay.scss';
import { HexaButton } from '@components/export.components.js';
import Slider from 'react-slick';
import { SchoolModal } from '../SchoolModal/SchoolModal';
import { OpenDayModal } from '../OpenDayModal/OpenDayModal';

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
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="open-day-component">
      <div className="open-day">
        <div className="open-day-content-wrapper">
          <h3>День открытых дверей</h3>
          <div className="open-day-desc">
            Приглашаем <span className="open-day-focus"> абитуриентов </span> и их
            <span className="open-day-focus"> родителей</span> посетить наш колледж
          </div>
          <div className="open-day-date">
            Состоится<span className="open-day-focus"> 6 июля</span>
          </div>
          <div className="invite-btn-wrapper">
            <HexaButton onClick={() => setModalOpen(true)}>Записаться</HexaButton>
            <OpenDayModal open={modalOpen} handleClose={setModalOpen} />
          </div>
        </div>
      </div>
      <div className="schools-events">
        <h3>Выезд представителей в школы</h3>
        <div className="open-day-slider-wrapper">
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
                <img
                  className={'slide-img'}
                  src="https://www.studylab.ru/upload/Institutions/image/big/28bdde35702ffcfbdcc4f9138a29be10.jpg"
                  alt=""
                />
              </div>
              <div className="event-description">05.04.2022</div>
            </div>
          </Slider>
        </div>
        <div className="invite-btn-wrapper">
          <HexaButton onClick={() => setModalOpen(true)}>Пригласить</HexaButton>
          <SchoolModal
          open={modalOpen}
          handleClose={setModalOpen}
        />
      </div>
    </div>
    </div>
  );
};
