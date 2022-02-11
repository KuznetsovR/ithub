import React from 'react';
import './CoursesPage.scss'
import { Courses } from '../../components/Courses/Courses';
import { Header } from '../../components/Header/Header';
import { Phone } from '../../components/Phone/Phone';
import { Footer } from '../../components/Footer/Footer';

export const CoursesPage = () => {
  return (
    <>
      <Header />
      <main>
        <Phone />
        <div className="container">
          <Courses></Courses>
        </div>
      </main>
      <Footer />
    </>
  );
};
