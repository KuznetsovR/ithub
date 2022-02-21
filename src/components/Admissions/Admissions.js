import React from 'react';
import './Admissions.scss';
import logo from '@assets/images/IThublogo.png';

export const Admissions = () => {
  return (
    <div className="block-admissions">
      <div className="it-hub">
        <img src={logo} alt="logoit" className="it-hub-logo" />
        <div className="it-hub-square-1 admissions-square"></div>
        <div className="it-hub-square-2 admissions-square"></div>
      </div>
      <div className="admissions">
        <p className="title-admissions">
          Поступление <span className="title-year-admissions">2022</span>
        </p>
        <div className="admission-square-1 admissions-square"></div>
        <div className="admission-square-2 admissions-square"></div>
        <div className="admission-square-3 admissions-square"></div>
      </div>
    </div>
  );
};
