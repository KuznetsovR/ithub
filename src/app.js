import React from 'react';
import './app.scss';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { Navigation3d } from './3D/navigation3d';
import { MainPage, CoursesPage, CommissionPage } from '@pages/export.pages.js';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/commission" element={<CommissionPage />} />
        <Route path="/navigation" element={<Navigation3d />} />
      </Routes>
    </BrowserRouter>
  );
};
