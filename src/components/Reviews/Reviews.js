import React from 'react';
import './Reviews.scss';
import Slider from 'react-slick';

export const Reviews = () => {
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
  return (
    <div className="reviews-container" id={'reviews'}>
      <h1 className="reviews-heading-text">Отзывы о наших студентах</h1>
      <div className="reviews-slider-wrapper">
        <Slider {...settings}>
          <div className={'slide'}>
            <div className="all-reviews-rectangles">
              <div className="student-photo student-photo-1" />
              <div className="reviews-text">
                <p>Иван (1 курс)</p>
                <p className="reviews-text-2">Иван инициативный, любознательный. Хорошо владеет имеющимися умениями, с интересом и удовольствием осваивает новые практические сферы и прикладные инструменты. Умеет организовать собственную работу и процесс освоения новых навыков</p>
                <p className="reviews-text-3">[ Директор регионального центра цифровой трансформации образования, ГАОУ ДПО ИРО Свердловской области Стариченко Е.Б. ]</p>
              </div>
            </div>
          </div>
          <div className={'slide'}>
            <div className="all-reviews-rectangles">
              <div className="student-photo student-photo-2" />
              <div className="reviews-text">
                <p>Ярослав (2 курс)</p>
                <p className="reviews-text-2">Ярослав очень быстро освоился в платформе. У него достаточно хороший багаж знаний. Задачи решает быстро. Смотрит чуть дальше. чем ожидалось, судя по вопросам, которые он задает и его рассуждениям.  Даже предложил несколько полезных изменений.</p>
                <p className="reviews-text-3">[ Иваницкий А.М, директор компании Тандем ]</p>
              </div>
            </div>
          </div>
          <div className={'slide'}>
            <div className="all-reviews-rectangles">
              <div className="student-photo student-photo-3" />
              <div className="reviews-text">
                <p>Павел (3 курс)</p>
                <p className="reviews-text-2">У Павла удивительное сочетание рабочих и персональных качеств. Ответственный, нацеленный на результат, заряженный. Хорошая логика и критическое мышление</p>
                <p className="reviews-text-3">[ Ярослав Минуллин, компания Енерсофт ]</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
