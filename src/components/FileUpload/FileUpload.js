import React from 'react';
import './FileUpload.scss';

export const FileUpload = (props) => {
  return <input type="file" className={'file-input'} onChange={(e) => props.onChange(e)} />;
};
