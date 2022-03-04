import React from 'react';
import './Admissions.scss';
import logo from '@assets/images/IThublogo.png';

export const Admissions = () => {
  return (
    <div className="block-admissions">
      <div className="it-hub">
        <img src={logo} alt="logoit" className="it-hub-logo" />
      </div>
      <div className="admissions">
        <p className="title-admissions">
          Поступление <span className="title-year-admissions">2022</span>
        </p>
      </div>
    </div>
  );
};
