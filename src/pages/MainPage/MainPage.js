import React from 'react';
import './MainPage.scss';
import {
  Header,
  Footer,
  Phone,
  Reviews,
  Specialties,
  Documents,
  YandexMap,
  Admissions,
  OpenDay,
 
} from '@components/export.components.js';

export const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <Phone />
        <div className="container">
          <Admissions />
          <OpenDay />
          <Specialties />
          <Reviews />
          <Documents />
          <YandexMap /> 
         
        </div>
      </main>
      <Footer />
    </>
  );
};
