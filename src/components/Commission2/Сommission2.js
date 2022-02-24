import React, { useState } from 'react';
import './Сommission2.scss';
import { HexaButton } from '../HexaButton/HexaButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { purple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import { FileUpload } from '../FileUpload/FileUpload';

export const Commission2 = () => {
  const inputOptions = {
    '& > :not(style)': { m: 0, flexGrow: '1' },
    '.MuiInputLabel-root': { color: 'white' },
    '.MuiInputBase-root': { color: 'white' },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#a71dd8',
      },
    },
  };
  const [schoolRecordsPhoto, setSchoolRecordsPhoto] = useState(null);

  const [passportPhoto, setPassportPhoto] = useState(null);

  const [application, setApplication] = useState(null);
  const [childName, setChildName] = useState('');
  const [phone, setPhone] = useState('');
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [personalDataAccess, setPersonalDataAccess] = useState(false);

  const formValues = {
    childName,
    parentName,
    phone,
    email,
    passportPhoto,
    schoolRecordsPhoto,
    application,
    personalDataAccess,
  };

  const sendForm = (e) => {
    e.preventDefault()
    console.log(formValues);
  };

  return (
    <div className="shape-case">
      <div className="text-shape-head"> Подать документы</div>
      <div className="shape-rectangle">
        <form onSubmit={sendForm}>
          <div className="share-flex-column">
            <TextField
              id="outlined-basic"
              sx={inputOptions}
              label="ФИО ребёнка"
              color="secondary"
              variant="outlined"
              onChange={(e)=> setChildName(e.target.value)}
            />
          </div>
          <div className="share-flex-column">
            <TextField
              id="outlined-basic"
              sx={inputOptions}
              label="ФИО родителя"
              color="secondary"
              variant="outlined"
              onChange={(e)=> setParentName(e.target.value)}
            />
          </div>
          <div className="share-flex-row">
            <TextField
              id="outlined-basic"
              sx={inputOptions}
              label="Телефон"
              color="secondary"
              variant="outlined"
              onChange={(e)=> setPhone(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              sx={inputOptions}
              label="Почта"
              color="secondary"
              variant="outlined"
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>

          <div className="files-to-upload">
            <div className="file-name">Фото паспорта</div>
            <FileUpload setState={(e) => setPassportPhoto(e.target.files[0])}/>
            <div className="file-name">Фото аттестата</div>
            <FileUpload setState={(e) => setSchoolRecordsPhoto(e.target.files[0])} />
            <div className="file-name">Заявление</div>
            <FileUpload setState={(e) => setApplication(e.target.files[0])}/>
          </div>

          <div className="share-checkbox">
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: purple[50],
                    '&.Mui-checked': {
                      color: 'rgb(167,29,216)',
                    },
                  }}
                  onChange={(e) => setPersonalDataAccess(e.target.checked)}
                />
              }
              label="Я даю согласие на обработку персональных данных"
              sx={{
                color: purple[50],
              }}
            />
          </div>
          <div className="share-btn-wrapper">
            <HexaButton>Отправить</HexaButton>
          </div>
        </form>
      </div>
    </div>
  );
};
