import React,{ useEffect } from 'react';
import './AboutPage.scss';
import { About, Footer, Header, Phone } from '@components/export.components.js';

export const AboutPage = () => {
  useEffect(() => {
    if(!window.location.hash) window.scrollTo(1, 0)
  }, []);
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
