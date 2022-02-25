import React from 'react';
import './FileUpload.scss';

export const FileUpload = ({ setState }) => {
  return <input type="file" className={'file-input'} onChange={(e) => setState(e)} />;
};
