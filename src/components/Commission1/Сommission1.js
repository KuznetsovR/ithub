import React from 'react';
import './Сommission1.scss';
import { Link } from 'react-router-dom';
import document1 from '@assets/files/docsToDownload/ApplicationExample.rtf';
import document2 from '@assets/files/docsToDownload/DogovorSPO.docx';
import document3 from '@assets/files/docsToDownload/DogovorSPO18.docx';

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
            <Link to={document1} target="_blank" download>Скачать образец заявления</Link>
            <Link to={document2} target="_blank" download>Скачать договор СПО</Link>
            <Link to={document3} target="_blank" download>Скачать договор СПО 18+</Link>
          </div>
        </div>
      </div>
      <div className="mobile-commission-links">
        <Link to={document1} target="_blank" download>Скачать образец заявления</Link>
        <Link to={document2} target="_blank" download>Скачать договор СПО</Link>
        <Link to={document3} target="_blank" download>Скачать договор СПО 18+</Link>
      </div>
    </div>
  );
};
