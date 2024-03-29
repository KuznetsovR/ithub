import React, { useRef } from 'react';
import './Reviews.scss';
import Slider from 'react-slick';
import IvanPhoto from '../../assets/images/ivan.webp';
import YaroslavPhoto from '../../assets/images/yaroslav.webp';
import DefaultPhoto from '../../assets/images/ph.webp';
import SergeiPhoto from '../../assets/images/sergei.webp';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 750,
    autoplaySpeed: 5000,
    arrows: false,
  };
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
    <div className="reviews-container" id={'reviews'}>
      <h1 className="reviews-heading-text">Отзывы о наших студентах</h1>
      <div className="reviews-slider-wrapper">
        <KeyboardArrowLeftIcon sx={arrowStyles} className={'reviews-arrow-icon-left'} onClick={previous} />
        <KeyboardArrowRightIcon sx={arrowStyles} className={'reviews-arrow-icon-right'} onClick={next} />
        <Slider {...settings} ref={slider}>
          <div className={'slide'}>
            <div className="all-reviews-rectangles">
              <div className="student-photo-wrapper">
                <img src={IvanPhoto} alt="Ivan" className={'student-photo'} />
              </div>
              <div className="reviews-text">
                <p>Иван (1 курс)</p>
                <p className="reviews-text-description">
                  Иван инициативный, любознательный. Хорошо владеет имеющимися умениями, с интересом и
                  удовольствием осваивает новые практические сферы и прикладные инструменты. Умеет
                  организовать собственную работу и процесс освоения новых навыков
                </p>
                <p className="reviews-text-author">
                  [ Директор регионального центра цифровой трансформации образования, ГАОУ ДПО ИРО
                  Свердловской области Стариченко Е.Б. ]
                </p>
              </div>
            </div>
          </div>
          <div className={'slide'}>
            <div className="all-reviews-rectangles">
              <div className="student-photo-wrapper">
                <img src={YaroslavPhoto} alt="Yaroslav" className={'student-photo'} />
              </div>
              <div className="reviews-text">
                <p>Ярослав (2 курс)</p>
                <p className="reviews-text-description">
                  Ярослав очень быстро освоился в платформе. У него достаточно хороший багаж знаний. Задачи
                  решает быстро. Смотрит чуть дальше. чем ожидалось, судя по вопросам, которые он задает и его
                  рассуждениям. Даже предложил несколько полезных изменений.
                </p>
                <p className="reviews-text-author">[ Иваницкий А.М, директор компании Тандем ]</p>
              </div>
            </div>
          </div>
          <div className={'slide'}>
            <div className="all-reviews-rectangles">
              <div className="student-photo-wrapper">
                <img src={SergeiPhoto} alt="Sergei" className={'student-photo'} />
              </div>
              <div className="reviews-text">
                <p>Сергей (3 курс)</p>
                <p className="reviews-text-description">
                  Сергей - в целом, доставляет результат и это главное. Креативен, хорош в поддержке команды.
                  Всегда (!) находит решение.
                </p>
                <p className="reviews-text-author">[ Ярослав Минуллин, компания Енерсофт ]</p>
              </div>
            </div>
          </div>
          <div className={'slide'}>
            <div className="all-reviews-rectangles">
              <div className="student-photo-wrapper">
                <img src={DefaultPhoto} alt="Pavel" className={'student-photo'} />
              </div>
              <div className="reviews-text">
                <p>Павел (3 курс)</p>
                <p className="reviews-text-description">
                  У Павла удивительное сочетание рабочих и персональных качеств. Ответственный, нацеленный на
                  результат, заряженный. Хорошая логика и критическое мышление.
                </p>
                <p className="reviews-text-author">[ Ярослав Минуллин, компания Енерсофт ]</p>
              </div>
            </div>
          </div>
          <div className={'slide'}>
            <div className="all-reviews-rectangles">
              <div className="student-photo-wrapper">
                <img src={DefaultPhoto} alt="Kirill" className={'student-photo'} />
              </div>
              <div className="reviews-text">
                <p>Кирилл (3 курс)</p>
                <p className="reviews-text-description">
                  Кирилл - отличный командный игрок. Очень неплохое знание React, общая эрудированность. Может
                  работать за рамками своей компетенции. Иногда утирал носы MID’ам из аутстаффинга.
                </p>
                <p className="reviews-text-author">[ Ярослав Минуллин, компания Енерсофт ]</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
