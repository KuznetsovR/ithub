import React from 'react';
import './app.scss';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { MainPage, AboutPage, CommissionPage } from '@pages/export.pages.js';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/commission" element={<CommissionPage />} />
      </Routes>
    </BrowserRouter>
  );
};
