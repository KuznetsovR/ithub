import React from 'react';
import './CommissionPage.scss';
import { Header, Commission1, Commission2, Footer } from '../../components/export.components.js';
export const CommissionPage = () => {

  return (
    <>
      <Header />
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
