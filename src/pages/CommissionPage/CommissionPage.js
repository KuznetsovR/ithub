import React from 'react';
import './CommissionPage.scss';
import { Header, Commission1, Commission2, Footer, Phone } from '../../components/export.components.js';
export const CommissionPage = () => {

  return (
    <>
      <Header />
          <Phone />
      <main>
        <div className="container">
          <Commission1 />
          <Commission2 />
        </div>
      </main>
      <Footer />
    </>
  );
};
