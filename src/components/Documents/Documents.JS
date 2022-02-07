import React from 'react';
import './Documents.scss';
import document from '../../assets/images/document.PNG';

export const Documents = () => {
  return (
          <div className="container-document">
        <p className="text-title"> Сведения об образовательной организации </p>
        <div className="grid">
	<div className="text-conditions"><p>Обучение проходит по Федеральному Государственному Образовательному Стандарту (ФГОС) 09.02.07.</p>
        <p>Действуем на основании образовательной лицензии №040965 от «8» сентября 2020 г. Специальности прошли государственную аккредитацию (Свид. № от 004965). </p>
        <p>Выпускники получают дипломы государственного образца.</p>
        <p>Действует отсрочка от армии.</p></div>
	<div> <img src={document} className="document-photo" alt="documents" /></div>
</div>

          </div>
  ); };