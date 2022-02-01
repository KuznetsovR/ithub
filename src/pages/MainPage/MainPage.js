import React from 'react';
import './MainPage.scss';
import { HexaButton } from '../../components/HexaButton/HexaButton';
import { Header } from '../../components/Header/Header';

export const MainPage = () => {
  return (
    <main>
      <Header />
      <HexaButton onClick={() => console.log(123)}>123</HexaButton>
    </main>
  );
};