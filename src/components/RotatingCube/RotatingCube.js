import React from 'react';
import './RotatingCube.scss';
import logo from '@assets/images/IThublogo.png';

export const RotatingCube = () => {
  return (
    <div className="rotating-cube-wrapper">
      <div className="rotating-cube">
        <div className="rotating-cube-side rotating-cube-right">
          <div className="rotating-cube-side-text">IT JOURNEY</div>
        </div>
        <div className="rotating-cube-side rotating-cube-left">
          <div className="rotating-cube-side-text">ITHUB</div>
        </div>
        <div className="rotating-cube-side rotating-cube-top">
          <div className="rotating-cube-side-text">ThreeJS</div>
        </div>
        <div className="rotating-cube-side rotating-cube-bottom">
          <div className="rotating-cube-side-text">Ekat</div>
        </div>
        <div className="rotating-cube-side rotating-cube-front">
          <div className="rotating-cube-side-text">
            <img src={logo} className="rotating-cube-logo" alt="ithub-logo" />
          </div>
        </div>
        <div className="rotating-cube-side rotating-cube-back">
          <div className="rotating-cube-side-text">Java</div>
        </div>
      </div>
    </div>
  );
};
