import React from 'react';
import './app.scss';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { MainPage, AboutPage, CommissionPage } from '@pages/export.pages.js';

const RedirectPage = () => {
  window.location.href = 'https://ithub.ru';
  return null;
};

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to={'/main'}>asd</Link>
            </div>
          }
        />
        <Route path="/main" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/commission" element={<CommissionPage />} />
        <Route path="/moscow" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
};
