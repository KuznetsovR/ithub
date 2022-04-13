import React, { useState } from 'react';
import './OpenDay.scss';
import { HexaButton } from '@components/export.components.js';
import Slider from 'react-slick';
import { OpenDayModal } from '../OpenDayModal/OpenDayModal';
import photo5 from '../../assets/images/ithub.webp';

export const OpenDay = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 5000,
    arrows: false,
  };
  const availableDates = ['23.04.2022, 14:00'];
  const [modalOpen, setModalOpen] = useState(null);
  return (
    <div className="open-day-component">
      <div className="open-day">
        <div className="open-day-content-wrapper">
          <h3>День открытых дверей</h3>
          <div className="open-day-desc">
            Приглашаем <span className="open-day-focus"> абитуриентов </span> и их
            <span className="open-day-focus"> родителей</span> посетить наш колледж
            <div className="open-day-dates">
              <ul className="open-day-dates-list">
                {availableDates.map((el, index) => {
                  return <li key={index}>{el}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="assign-btn-wrapper">
            <HexaButton onClick={() => setModalOpen('openDay')}>Записаться</HexaButton>
            <OpenDayModal
              open={modalOpen === 'openDay'}
              availableDates={availableDates}
              handleClose={setModalOpen}
            />
          </div>
        </div>
      </div>
      <div className="schools-events">
        <h3>Мы ждём вас!</h3>
        <div className="open-day-slider-wrapper">
          {/*<Slider {...settings}>*/}
          {/*  <div className={'slide'}>*/}
          <div className="img-container">
            <img className={'slide-img'} src={photo5} alt="" />
          </div>
          {/*</div>*/}
          {/* <div className={'slide'}>
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
            </div> */}
          {/*</Slider>*/}
        </div>
        {/* <div className="invite-btn-wrapper">
          <HexaButton onClick={() => setModalOpen('schoolModal')}>Пригласить</HexaButton>
          <SchoolModal open={modalOpen === 'schoolModal'} handleClose={setModalOpen} />
        </div> */}
      </div>
    </div>
  );
};
