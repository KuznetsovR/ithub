import React, { useState } from 'react';
import './FileUpload.scss';

export const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);


  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
      <input type="file" className={'file-input'} onChange={(e) => onFileChange(e)} />
  );
};
