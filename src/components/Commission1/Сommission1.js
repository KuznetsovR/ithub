import React from 'react';
import './Сommission1.scss';
import { Link } from 'react-router-dom';
import document1 from '@assets/images/document_1.jpg';
import document2 from '@assets/images/document_2.jpg';
import document3 from '@assets/images/document_3.jpg';
import document4 from '@assets/images/document_4.jpg';

export const Commission1 = () => {
  return (
    <div className="commission-case">
      <div className="text-comission-head">Как подать документы?</div>
      <div className="comission-row">
        <div className="comission-column-1">
          <div className="comission-line" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
        <div className="comission-column-2">
          <div className="commission-text-column">Скачать файл с документами</div>
          <div className="commission-text-column">Заполнить докуметы</div>
          <div className="commission-text-column">Прикрепить файлы к форме</div>
        </div>
        <div className="comission-column-3">
          <div className="commission-links">
            <Link to={document1} target="_blank" download>Скачать документ 1</Link>
            <Link to={document2} target="_blank" download>Скачать документ 2</Link>
            <Link to={document3} target="_blank" download>Скачать документ 3</Link>
            <Link to={document4} target="_blank" download>Скачать документ 4</Link>
          </div>
        </div>
      </div>
      <div className="mobile-commission-links">
        <Link to={document1} target="_blank" download>Скачать документ 1</Link>
        <Link to={document2} target="_blank" download>Скачать документ 2</Link>
        <Link to={document3} target="_blank" download>Скачать документ 3</Link>
        <Link to={document4} target="_blank" download>Скачать документ 4</Link>
      </div>
    </div>
  );
};
