import React, { useEffect, useRef } from 'react';
import Experience from './threejs/javascript/Experience';
import './navigation3d.scss'

export const Navigation3d = () => {
  const threeRef = useRef();
  const three = useRef();
  useEffect(() => {
    if (!three.current && threeRef.current) {
      three.current = new Experience(threeRef.current)
    }
  });
  return <canvas ref={threeRef} />;
};
