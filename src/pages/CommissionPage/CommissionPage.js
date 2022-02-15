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
<<<<<<< HEAD
=======
    return (
        <div>
            Страница priemnoi комиссии тут
>>>>>>> 55c659dea74c825db6e9274a8b06d14f52d115f8
        </div>
      </main>
      <Footer />
    </>
  );
};
