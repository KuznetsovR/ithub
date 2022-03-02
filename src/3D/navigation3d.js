import React, { useEffect, useRef } from 'react';
import Experience from './threejs/javascript/Experience';
import './navigation3d.scss';
import { Link } from 'react-router-dom';

export const Navigation3d = () => {
  const threeRef = useRef();
  useEffect(() => {
    if (threeRef.current) {
      new Experience(threeRef.current);
    }
  });
  return (
    <>
      <canvas ref={threeRef} />
      <div className="go-back-btn-wrapper">
        <Link className={'go-back-btn'} to={'/'}>
          Вернуться на главную
        </Link>
      </div>
      <div>Start screen</div>
    </>
  );
};
