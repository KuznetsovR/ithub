import React from 'react';
import './Courses.scss';

export const Courses = () => {
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
            <div className="title-preparatory-courses">Курсы</div>
          </div>
        </div>
        <div className="preparatory-courses-description">
          <div className="title-courses">В разработке...</div>
        </div>
      </div>
      <div className="plug"> </div>
    </div>
  );
};
