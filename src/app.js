import React from 'react';
import './app.scss';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { MainPage, AboutPage, CommissionPage } from '@pages/export.pages.js';
import { CoursesPage } from './pages/CoursesPage/CoursesPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/commission" element={<CommissionPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </BrowserRouter>
  );
};
