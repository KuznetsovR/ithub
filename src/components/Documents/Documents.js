import React, { useState } from 'react';
import './Documents.scss';
import document1 from '@assets/images/document_1.jpg';
import document2 from '@assets/images/document_2.webp';
import document3 from '@assets/images/document_3.webp';
import document4 from '@assets/images/document_4.webp';
import Slider from 'react-slick';
import { DocumentModal } from '../DocumentModal/DocumentModal';

export const Documents = () => {
  const [openModal, setOpenModal] = useState('');

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
  console.log(openModal);
  return (
    <div className="container-document" id={'documents'}>

      <DocumentModal open={openModal === 'doc1'} handleClose={setOpenModal}>
        <img src={document1} className="document-photo" alt="documents" />
      </DocumentModal>
      <DocumentModal open={openModal === 'doc2'} handleClose={setOpenModal}>
        <img src={document2} className="document-photo" alt="documents" />
      </DocumentModal>
      <DocumentModal open={openModal === 'doc3'} handleClose={setOpenModal}>
        <img src={document3} className="document-photo" alt="documents" />
      </DocumentModal>
      <DocumentModal open={openModal === 'doc4'} handleClose={setOpenModal}>
        <img src={document4} className="document-photo" alt="documents" />
      </DocumentModal>


      <h1 className="text-title"> Сведения об образовательной организации </h1>
      <div className="content">
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
              <div className="document-photo-container" onClick={() => setOpenModal('doc1')}>
                <img src={document1} className="document-photo" alt="documents" />
              </div>
            </div>
            <div className={'slide'}>
              <div className="document-photo-container" onClick={() => setOpenModal('doc2')}>
                <img src={document2} className="document-photo" alt="documents" />
              </div>
            </div>
            <div className={'slide'}>
              <div className="document-photo-container" onClick={() => setOpenModal('doc3')}>
                <img src={document3} className="document-photo" alt="documents" />
              </div>
            </div>
            <div className={'slide'}>
              <div className="document-photo-container" onClick={() => setOpenModal('doc4')}>
                <img src={document4} className="document-photo" alt="documents" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
