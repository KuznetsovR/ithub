import React from 'react';
import './Phone.scss';

export const Phone = () => {
  return (
    <div className="phone-service-support">
      Появились вопросы? Позвоните нам!{' '}
      <a className="number" href={'tel:+73432867859'}>
        +7 (343) 286 78 59
      </a>
    </div>
  );
};
