import React from 'react';
import './Сommission1.scss';

export const Сommission1 = () => {
  return (
    <div className="commission-case">
      <div className="text-comission-head">Как подать документы?</div>
  <div className="comission-row">
    <div className="comission-column-1">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    </div>
    <div className="comission-column-2">
      <div className="commission-text-column">Скачать файл с документами</div>
      <div className="commission-text-column">Заполнить  докуметы</div>
      <div className="commission-text-column">Прикрепить файлы к форме</div>
    </div>
    <div className="comission-column-3">
    <div className="commission-text-link">Ссылка для скачивания</div>
    <div className="commission-text-link">Ссылка для скачивания</div>
    <div className="commission-text-link">Ссылка для скачивания</div>
    </div>
    </div>
    </div>
  );
};