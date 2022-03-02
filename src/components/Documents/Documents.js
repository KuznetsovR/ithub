import React from 'react';
import './Documents.scss';
// import document from '@assets/images/document.PNG';
import document1 from '@assets/images/document_1.jpg';
import document2 from '@assets/images/document_2.jpg';
import document3 from '@assets/images/document_3.jpg';
import document4 from '@assets/images/document_4.jpg';
import Slider from 'react-slick';

export const Documents = () => {
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
    <div className="container-document" id={'documents'}>
      <p className="text-title"> Сведения об образовательной организации </p>
      <div className="grid">
        <div className="text-conditions">
          <div>
            Обучение проходит по Федеральному Государственному Образовательному Стандарту (ФГОС) 09.02.07.
          </div>
          <p>
            Действуем на основании образовательной лицензии №040965 от «8» сентября 2020 г. Специальности
            прошли государственную аккредитацию (Свид. № от 004965).
          </p>
          <p>Выпускники получают дипломы государственного образца.</p>
          <p>Действует отсрочка от армии.</p>
        </div>
        <div className="documents-slider-wrapper">
          <Slider {...settings}>
            <div className={'slide'}>
              <img src={document1} className="document-photo" alt="documents" />
            </div>
            <div className={'slide'}>
              <img src={document2} className="document-photo" alt="documents" />
            </div>
            <div className={'slide'}>
              <img src={document3} className="document-photo" alt="documents" />
            </div>
            <div className={'slide'}>
              <img src={document4} className="document-photo" alt="documents" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
