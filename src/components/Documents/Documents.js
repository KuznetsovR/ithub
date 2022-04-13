import React, { useRef, useState } from 'react';
import './Documents.scss';
import document1 from '@assets/images/document_1.jpg';
import document2 from '@assets/images/document_2.webp';
import document3 from '@assets/images/document_3.webp';
import document4 from '@assets/images/document_4.webp';
import Slider from 'react-slick';
import { DocumentModal } from '../DocumentModal/DocumentModal';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
    lazyLoad: true,
  };
  const slider = useRef(null);
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const arrowStyles = {
    fontSize: '20px',
  };
  return (
    <div className="container-document" id={'documents'}>
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
          <p>Предоставляется отсрочка от армии.</p>
        </div>
        <div className="documents-slider-wrapper">
          <DocumentModal open={openModal === 'doc1'} handleClose={setOpenModal} documentRef={document1} />
          <DocumentModal open={openModal === 'doc2'} handleClose={setOpenModal} documentRef={document2} />
          <DocumentModal open={openModal === 'doc3'} handleClose={setOpenModal} documentRef={document3} />
          <DocumentModal open={openModal === 'doc4'} handleClose={setOpenModal} documentRef={document4} />
          <KeyboardArrowLeftIcon
            sx={arrowStyles}
            className={'documents-arrow-icon-left'}
            onClick={previous}
          />
          <KeyboardArrowRightIcon sx={arrowStyles} className={'documents-arrow-icon-right'} onClick={next} />
          <Slider {...settings} ref={slider}>
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
