import React from 'react';
import './CoursesPage.scss';
import { Link } from 'react-router-dom';
import { RotatingCube } from '../../components/RotatingCube/RotatingCube';

export const CoursesPage = () => {
  return (
    <div className={'courses-page'}>
      <RotatingCube />
      <div className={'courses-page-under-construction'}>Under construction</div>
      <Link to={'/main'} className={'courses-page-go-back-link'}>
        Вернуться
      </Link>
    </div>
  );
};
