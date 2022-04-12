import React, { useRef } from 'react';
import './About.scss';
import Slider from 'react-slick';
import photo1 from '../../assets/images/krit.webp';
import photo2 from '../../assets/images/it-hub.webp';
import photo3 from '../../assets/images/23feb.webp';
import photo4 from '../../assets/images/photo-1.webp';
import photo5 from '../../assets/images/a2.webp';
import photo6 from '../../assets/images/teatr.webp';
import photo7 from '../../assets/images/myzei.webp';
import photo8 from '../../assets/images/myzei-2.webp';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 5000,
    arrows: false,
  };
  const isTablet = useMediaQuery('(max-width: 1000px)');
  const isPhone = useMediaQuery('(max-width: 500px)');
  if (isTablet) {
    settings.slidesToShow = 2;
    if (isPhone) {
      settings.slidesToShow = 1;
    }
  }
  const slider = useRef(null);
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const arrowStyles = {
    fontSize: '40px',
  };
  return (
    <div>
      <div className="block-preparatory-about">
        <div className="preparatory-about-square-container">
          <div className="preparatory-about-square">
            <div className="title-preparatory-about">О колледже</div>
          </div>
        </div>
        <div className="preparatory-about-description">
          <div className="title-about">О колледже</div>
          <div className="title-about-description">
            Колледж входит в{' '}
            <a href="https://ithub.ru/" target="_blank" rel="noreferrer" className={'link-to-moscow'}>
              Академию информационных технологий IThub
            </a>
            , где можно получить востребованные IT-профессии на базе 9, 10 и 11 классов. IThub —
            образовательная система нового поколения, основанная на передовых цифровых технологиях. Наша сила
            — в интенсивной программе обучения и практикоориентированности.
          </div>
          <div className="title-about">Учебный год</div>
          <div className="title-about-description">
            Учимся 10 месяцев в году. У нас две экзаменационные сессии: зимняя в декабре, летняя в июне. В
            июле и августе отдыхаем.
          </div>
          <div className="title-about"> Место</div>
          <div className="title-about-description">Екатеринбург, улица Чкалова, 3 (3 этаж)</div>
          <div className="title-about">Образовательный процесс</div>
          <div className="title-about-description">
            Занятия начинаются в 9:00. Одна пара длится полтора часа. В день 3-4 пары. Вечер будет свободен
            для проектов, отдыха и общения!
          </div>
        </div>
      </div>
      <div className="about-photo-gallery">
        <h1 className="title-photo-gallery">Фотогаларея</h1>
        <KeyboardArrowLeftIcon sx={arrowStyles} className={'about-arrow-icon-left'} onClick={previous} />
        <KeyboardArrowRightIcon sx={arrowStyles} className={'about-arrow-icon-right'} onClick={next} />
        <Slider {...settings} ref={slider}>
          <div className={'slide'}>
            <div className="about-img-container">
              <img src={photo4} alt="" className="about-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="about-img-container">
              <img src={photo1} alt="" className="about-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="about-img-container">
              <img src={photo3} alt="" className="about-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="about-img-container">
              <img src={photo2} alt="" className="about-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="about-img-container">
              <img src={photo5} alt="" className="about-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="about-img-container">
              <img src={photo6} alt="" className="about-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="about-img-container">
              <img src={photo7} alt="" className="about-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="about-img-container">
              <img src={photo8} alt="" className="about-slide-img" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
