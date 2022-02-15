import React from 'react';
import './CommissionPage.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Сommission1 } from '../../components/Сommission1/Сommission1';
import { Сommission2 } from '../../components/Commission2/Сommission2';
export const CommissionPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Сommission1 />
          <Сommission2 />
        </div>
      </main>
      <Footer />
    </>
  );
};
