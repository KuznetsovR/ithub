import React from 'react';
import './MainPage.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Phone } from '../../components/Phone/Phone';
import { Documents } from '../../components/Documents/Documents';
import { YandexMap } from '../../components/YandexMap/YandexMap';
import { OpenDay } from '../../components/OpenDay/OpenDay';

export const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <Phone />
        <div className="container">
          <OpenDay />
          < Documents />
          <YandexMap />
        </div>
      </main>
      <Footer />
    </>
  );
};
