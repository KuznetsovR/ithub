import React from 'react';
import './Courses.scss';
import { Courses } from '../../components/Courses/Courses';

export const CoursesPage = () => {
  return (
    <>
      <Header />
      <main>
        <Phone />
        <div className="container"></div>
      </main>
      <Footer />
    </>
  );
};
