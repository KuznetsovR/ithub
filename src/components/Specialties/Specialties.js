import React from 'react';
import './Specialties.scss';

export const Specialties = () => {
  return (
    <div className="d-flex container" id="cont1">
      <div className="specsText">
        <h2>Специальности:</h2>
      </div>
      <div className="specs">
        {/* <div className="Content1">
          <div className="rectangleP1" />
          <div className="picture1" />
          <div className="textOnPic1" />
          <h3 className="text1">Веб-Разработчик</h3>
        </div> */}
        <div className="rectangleP2">
          <div className="text2">Веб-Разработчик</div>
        </div>
        {/* <div className="Content3">
          <div className="rectangleP3" />
          <div className="picture3" />
          <div className="textOnPic3" />
          <h3 className="text2">Веб-Разработчик</h3>
        </div> */}
      </div>
    </div>
  );
};