import React,{ useEffect } from 'react';
import './CoursesPage.scss';
import { Courses, Footer, Header, Phone } from '@components/export.components.js';

export const CoursesPage = () => {
  useEffect(() => {
    if(!window.location.hash) window.scrollTo(1, 0)
  }, []);
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

