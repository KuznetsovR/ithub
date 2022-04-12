import React, { useState } from 'react';
import './FileUpload.scss';

export const FileUpload = (props) => {
  const [selectedDocument, changeSelectedDocument] = useState('')
  const handleFileInput = (e) => {
    changeSelectedDocument(e.target.files[0].name)
    props.onChange(e)
  }
  return (
    <div className={'file-upload'}>
      <label htmlFor={props.id}>{selectedDocument?selectedDocument: 'Выбрать документ'}</label>
      <input type="file" className={'file-input'} onChange={(e) => handleFileInput(e)} id={props.id} />
    </div>
  );
};
