import React, { useState } from 'react';
import './Сommission2.scss';
import { HexaButton } from '../HexaButton/HexaButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { purple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import { FileUpload } from '../FileUpload/FileUpload';
import axios from 'axios';
import { API_PATH } from '../../constants/API_PATH';

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
  const [state, setState] = useState({
    childName: '',
    parentName: '',
    phone: '',
    email: '',
    passportPhoto: null,
    schoolRecordsPhoto: null,
    application: null,
    personalDataAccess: false,
  });

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData()
      formData.append('childName', state.childName)
      formData.append('parentName', state.parentName)
      formData.append('phone', state.phone)
      formData.append('email', state.email)
      formData.append('personalDataAccess', state.personalDataAccess)
      formData.append('files', state.passportPhoto, state.passportPhoto?.name)
      formData.append('files', state.schoolRecordsPhoto, state.schoolRecordsPhoto?.name)
      formData.append('files', state.application, state.application?.name)
      await axios.post(API_PATH + '/commission', formData);
      // setState({
      //   childName: '',
      //   parentName: '',
      //   phone: '',
      //   email: '',
      //   passportPhoto: null,
      //   schoolRecordsPhoto: null,
      //   application: null,
      //   personalDataAccess: false,
      // });
      // Do smth to show user the success
    } catch (e) {
      // Do smth to show user the error
      console.error(e);
    }
    console.log(state);
  };

  return (
    <div className="shape-case">
      <div className="text-shape-head"> Подать документы</div>
      <div className="shape-rectangle">
        <form onSubmit={sendForm} >
          <div className="share-flex-column">
            <TextField
              id="outlined-basic"
              sx={inputOptions}
              label="ФИО ребёнка"
              color="secondary"
              variant="outlined"
              autoComplete={'off'}
              onChange={(e) => setState({ ...state, childName: e.target.value })}
            />
          </div>
          <div className="share-flex-column">
            <TextField
              id="outlined-basic"
              sx={inputOptions}
              label="ФИО родителя"
              color="secondary"
              variant="outlined"
              autoComplete={'off'}
              onChange={(e) => setState({ ...state, parentName: e.target.value })}
            />
          </div>
          <div className="share-flex-row">
            <TextField
              id="outlined-basic"
              sx={inputOptions}
              label="Телефон"
              color="secondary"
              variant="outlined"
              autoComplete={'off'}
              onChange={(e) => setState({ ...state, phone: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              sx={inputOptions}
              label="Почта"
              color="secondary"
              variant="outlined"
              autoComplete={'off'}
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>

          <div className="files-to-upload">
            <div className="file-name">Фото паспорта</div>
            <FileUpload setState={(e) => setState({ ...state, passportPhoto: e.target.files[0] })} />
            <div className="file-name">Фото аттестата</div>
            <FileUpload setState={(e) => setState({ ...state, schoolRecordsPhoto: e.target.files[0] })} />
            <div className="file-name">Заявление</div>
            <FileUpload setState={(e) => setState({ ...state, application: e.target.files[0] })} />
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
                  onChange={(e) => setState({ ...state, personalDataAccess: e.target.checked })}
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
