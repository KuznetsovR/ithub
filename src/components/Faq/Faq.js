import React from 'react';
import './Faq.scss';
import { FaqAccordion } from '../FaqAccordion/FaqAccordion';
export const Faq = () => {
  return (
    <div className="container-faq">
      <h1 className="text-title-faq"> FAQ </h1>
      <div className="content-faq">
        <FaqAccordion />
      </div>
    </div>
  );
};
