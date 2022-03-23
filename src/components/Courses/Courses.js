import React, { useState } from 'react';
import './Courses.scss';
import { HexaButton } from '../HexaButton/HexaButton';
import Slider from 'react-slick';
import courses1 from '../../assets/images/courses1.png';
import courses2 from '../../assets/images/courses2.png';
import courses3 from '../../assets/images/courses3.png';
import { CoursesModal } from '../CoursesModal/CoursesModal';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Courses = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 5000,
    arrows: false,
  };
  const [modalOpen, setModalOpen] = useState(false);
  const isTablet = useMediaQuery('(max-width: 1000px)');
  const isPhone = useMediaQuery('(max-width: 500px)');
  if (isTablet) {
    settings.slidesToShow = 2;
    if (isPhone) {
      settings.slidesToShow = 1;
    }
  }
  return (
    <div>
    <div className="block-preparatory-courses">
        {/* <div className="preparatory-courses-square-container">
          <div className="preparatory-courses-square">
            <div className="title-preparatory-courses">Подготовительные курсы</div>
          </div>
        </div>

        <div className="preparatory-courses-description">
          <div className="title-courses-description">
            Здесь будет какое-то описание подготовительных курсов
          </div>

          <div className={'courses-description-link'}>
            <div className="courses-link">Ссылка на заявления</div>
            <HexaButton onClick={() => setModalOpen(true)}>Записаться</HexaButton>
            <CoursesModal open={modalOpen} handleClose={setModalOpen} />
          </div>
        </div> */
        }
        <div className="preparatory-courses-square-container">
          <div className="preparatory-courses-square">
            <div className="title-preparatory-courses">О колледже</div>
          </div>
        </div>
        <div className="preparatory-courses-description">
          <div className="title-courses">Время</div>
        <div className="title-courses-description">
         Учимся 10 месяцев в году. У нас две экзаменационные сессии: зимняя в декабре, летняя в июне. В июле и августе отдыхаем.

        </div>
        <div className="title-courses"> Место</div>
        <div className="title-courses-description">Улица Чкалова, 3 (3 этаж)</div>
        <div className="title-courses">Процесс</div>
        <div className="title-courses-description">Занятия начинаются в 9:00. Одна пара длится полтора часа. В день 3-4 пары. Вечер будет свободен для проектов, отдыха и общения!
</div>
        </div> 
        </div>
      <div className="courses-photo-gallery">
        <h1 className="title-photo-gallery">Фотогаларея</h1>
        <Slider {...settings}>
          <div className={'slide'}>
            <div className="courses-img-container">
              <img src={courses1} alt="" className="courses-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="courses-img-container">
              <img src={courses2} alt="" className="courses-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="courses-img-container">
              <img src={courses3} alt="" className="courses-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="courses-img-container">
              <img src={courses3} alt="" className="courses-slide-img" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
