import React from 'react';
import './Courses.scss';
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
        </div> */}
        <div className="preparatory-courses-square-container">
          <div className="preparatory-courses-square">
            <div className="title-preparatory-courses">О колледже</div>
          </div>
        </div>
        <div className="preparatory-courses-description">
          <div className="title-courses">О колледже</div>
          <div className="title-courses-description">
            Колледж входит в{' '}
            <a href="https://ithub.ru/" target="_blank" rel="noreferrer" className={'link-to-moscow'}>
              Академию информационных технологий IThub
            </a>
            , где можно получить востребованные IT-профессии на базе 9, 10 и 11 классов. IThub —
            образовательная система нового поколения, основанная на передовых цифровых технологиях. Наша сила
            — в интенсивной программе обучения и практикоориентированности.
          </div>
          <div className="title-courses">Учебный год</div>
          <div className="title-courses-description">
            Учимся 10 месяцев в году. У нас две экзаменационные сессии: зимняя в декабре, летняя в июне. В
            июле и августе отдыхаем.
          </div>
          <div className="title-courses"> Место</div>
          <div className="title-courses-description">Екатеринбург, улица Чкалова, 3 (3 этаж)</div>
          <div className="title-courses">Образовательный процесс</div>
          <div className="title-courses-description">
            Занятия начинаются в 9:00. Одна пара длится полтора часа. В день 3-4 пары. Вечер будет свободен
            для проектов, отдыха и общения!
          </div>
        </div>
      </div>
      <div className="courses-photo-gallery">
        <h1 className="title-photo-gallery">Фотогаларея</h1>
        <Slider {...settings}>
          <div className={'slide'}>
            <div className="courses-img-container">
              <img src={photo4} alt="" className="courses-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="courses-img-container">
              <img src={photo1} alt="" className="courses-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="courses-img-container">
              <img src={photo3} alt="" className="courses-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="courses-img-container">
              <img src={photo2} alt="" className="courses-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="courses-img-container">
              <img src={photo5} alt="" className="courses-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="courses-img-container">
              <img src={photo6} alt="" className="courses-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="courses-img-container">
              <img src={photo7} alt="" className="courses-slide-img" />
            </div>
          </div>
          <div className={'slide'}>
            <div className="courses-img-container">
              <img src={photo8} alt="" className="courses-slide-img" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
