import React from 'react';
import './CoursesPage.scss';
import { Courses, Footer, Header, Phone } from '@components/export.components.js';

export const CoursesPage = () => {
  return (
    <>
      <Header />
      <main>
        <Phone />
        <div className="container">
          <Courses />
        </div>
      </main>
      <Footer />
    </>
  );
};
