import React from 'react';
import './MainPage.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Phone } from '../../components/Phone/Phone';
import { Reviews } from '../../components/Reviews/Reviews';
import { Specialties } from '../../components/Specialties/Specialties';
import { Documents } from '../../components/Documents/Documents';
import { YandexMap } from '../../components/YandexMap/YandexMap';
import { Admissions } from '../../components/Admissions/Admissions';
import { OpenDay } from '../../components/OpenDay/OpenDay';

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
