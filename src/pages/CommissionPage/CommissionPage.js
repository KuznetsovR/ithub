import React from 'react';
import './CommissionPage.scss';
import { Header, Commission1, Commission2, Footer } from '../../components/export.components.js';
import { Phone } from '../../components/Phone/Phone';
export const CommissionPage = () => {

  return (
    <>
      <Header />
      <main>
        <Phone />
        <div className="container">
          <Commission1 />
          <Commission2 />
        </div>
      </main>
      <Footer />
    </>
  );
};
