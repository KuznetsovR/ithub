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
import { Faq } from '../../components/Faq/Faq';

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
          <Faq />
        </div>
      </main>
      <Footer />
    </>
  );
};
