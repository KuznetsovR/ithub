import React from 'react';
import './AboutPage.scss';
import { About, Footer, Header, Phone } from '@components/export.components.js';

export const AboutPage = () => {
  return (
    <>
      <Header />
      <main>
        <Phone />
        <div className="container">
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
};
