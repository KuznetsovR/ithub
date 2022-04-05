import React from 'react';
import './RotatingCube.scss'

export const RotatingCube = () =>{
  return (
    <div className="rotating-cube-wrapper">
      <div className="rotating-cube">
        <div className="rotating-cube-side rotating-cube-right">
          <div className="rotating-cube-side-text">ITJOURNEY</div>
        </div>
        <div className="rotating-cube-side rotating-cube-left">
          <div className="rotating-cube-side-text">ITHUB</div>
        </div>
        <div className="rotating-cube-side rotating-cube-top">
          <div className="rotating-cube-side-text">ThreeJS</div>
        </div>
        <div className="rotating-cube-side rotating-cube-bottom">
          <div className="rotating-cube-side-text">3D</div>
        </div>
        <div className="rotating-cube-side rotating-cube-front">
          <div className="rotating-cube-side-text">JavaScript</div>
        </div>
        <div className="rotating-cube-side rotating-cube-back">
          <div className="rotating-cube-side-text">Java</div>
        </div>
      </div>
    </div>
  )
}
