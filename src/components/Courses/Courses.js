import React from 'react';
import './Courses.scss';
import { HexaButton } from '../HexaButton/HexaButton';
import Slider from 'react-slick';
import courses1 from '../../assets/images/courses1.png';
import courses2 from '../../assets/images/courses2.png';
import courses3 from '../../assets/images/courses3.png';
import { CoursesModal } from '../CoursesModal/CoursesModal';

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
            <HexaButton onClick={() => setModalOpen(true)}>Записаться</HexaButton>
            <OpenDayModal open={modalOpen} handleClose={setModalOpen} />
          </div>
        </div>
      </div>
      <div className="courses-photo-gallery">
        <p className="title-photo-gallery">Фотогаларея</p>
        <Slider {...settings}>
          <div className={'slide'}>
            <div className="courses-img-container">
              <img src={courses1} alt="" className="courses-slide-img" />
              <img src={courses2} alt="" className="courses-slide-img" />
              <img src={courses3} alt="" className="courses-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="courses-img-container">
              <img src={courses1} alt="" className="courses-slide-img" />
              <img src={courses2} alt="" className="courses-slide-img" />
              <img src={courses3} alt="" className="courses-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="courses-img-container">
              <img src={courses1} alt="" className="courses-slide-img" />
              <img src={courses2} alt="" className="courses-slide-img" />
              <img src={courses3} alt="" className="courses-slide-img" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
