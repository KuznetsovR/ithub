import React,{ useEffect } from 'react';
import './CommissionPage.scss';
import { Header, Commission1, Commission2, Footer, Phone } from '../../components/export.components.js';
export const CommissionPage = () => {
  useEffect(() => {
    if(!window.location.hash) window.scrollTo(1, 0)
  }, []);
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
