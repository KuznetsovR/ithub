import React from 'react';
import './Сommission1.scss';
import { HexaButton } from '../HexaButton/HexaButton';

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
          <div className="commission-btn-wrapper">
            <HexaButton>Скачать документы</HexaButton>
          </div>
        </div>
      </div>
      <div className="mobile-button">
        <HexaButton>Скачать документы</HexaButton>
      </div>
    </div>
  );
};
