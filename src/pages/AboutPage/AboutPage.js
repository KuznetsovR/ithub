import React from 'react';
import './AboutPage.scss';
import { Courses, Footer, Header, Phone } from '@components/export.components.js';

export const AboutPage = () => {
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
