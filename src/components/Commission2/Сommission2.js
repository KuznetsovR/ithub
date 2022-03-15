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
import { validateName } from '../../validators/name-validator';
import { validatePhone } from '../../validators/phone-validator';
import { validateEmail } from '../../validators/email-validator';
import { validateFiles } from '../../validators/file-validator';

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
    childNameTouched: false,
    parentName: '',
    parentNameTouched: false,
    phone: '',
    phoneTouched: false,
    email: '',
    emailTouched: false,
    passportPhoto: null,
    schoolRecordsPhoto: null,
    application: null,
    personalDataAccess: false,
  });

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('childName', state.childName);
      formData.append('parentName', state.parentName);
      formData.append('phone', state.phone);
      formData.append('email', state.email);
      formData.append('personalDataAccess', state.personalDataAccess);
      formData.append('files', state.passportPhoto, state.passportPhoto?.name);
      formData.append('files', state.schoolRecordsPhoto, state.schoolRecordsPhoto?.name);
      formData.append('files', state.application, state.application?.name);
      await axios.post(API_PATH + '/commission', formData);
      setState({
        childName: '',
        parentName: '',
        phone: '',
        email: '',
        passportPhoto: null,
        schoolRecordsPhoto: null,
        application: null,
        personalDataAccess: false,
      });
      // Do smth to show user the success
    } catch (e) {
      // Do smth to show user the error
      console.error(e);
    }
    console.log(state);
  };

  const setAllTouched = () => {
    console.log(123);

    setState({
      ...state,
      childNameTouched: true,
      parentNameTouched: true,
      phoneTouched: true,
      emailTouched: true,
      passportPhoto: undefined,
      schoolRecordsPhoto: undefined,
      application: undefined,
    });
  };

  return (
    <div className="shape-case">
      <div className="text-shape-head"> Подать документы</div>
      <div className="shape-rectangle">
        <form onSubmit={sendForm}>
          <div className="share-flex-column">
            <TextField
              error={!validateName(state.childName) && state.childNameTouched}
              id="outlined-basic"
              sx={inputOptions}
              label="ФИО ребёнка"
              color="secondary"
              variant="outlined"
              autoComplete={'off'}
              onChange={(e) => setState({ ...state, childName: e.target.value })}
              onBlur={() => setState({ ...state, childNameTouched: true })}
            />
          </div>
          <div className="share-flex-column">
            <TextField
              error={!validateName(state.parentName) && state.parentNameTouched}
              id="outlined-basic"
              sx={inputOptions}
              label="ФИО родителя"
              color="secondary"
              variant="outlined"
              autoComplete={'off'}
              onChange={(e) => setState({ ...state, parentName: e.target.value })}
              onBlur={() => setState({ ...state, parentNameTouched: true })}
            />
          </div>
          <div className="share-flex-row">
            <TextField
              error={!validatePhone(state.phone) && state.phoneTouched}
              id="outlined-basic"
              sx={inputOptions}
              label="Телефон"
              color="secondary"
              variant="outlined"
              autoComplete={'off'}
              onChange={(e) => setState({ ...state, phone: e.target.value })}
              onBlur={() => setState({ ...state, phoneTouched: true })}
            />
            <TextField
              error={!validateEmail(state.email) && state.emailTouched}
              id="outlined-basic"
              sx={inputOptions}
              label="Почта"
              color="secondary"
              variant="outlined"
              autoComplete={'off'}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              onBlur={() => setState({ ...state, emailTouched: true })}
            />
          </div>

          <div className="files-to-upload">
            <div
              className="file-name"
              style={{
                color: state.passportPhoto === null || validateFiles([state.passportPhoto]) ? '' : 'red',
              }}
            >
              Фото паспорта
            </div>
            <FileUpload
              setState={(e) =>
                e.target.files[0] ? setState({ ...state, passportPhoto: e.target.files[0] }) : null
              }
            />
            <div
              className="file-name"
              style={{
                color:
                  state.schoolRecordsPhoto === null || validateFiles([state.schoolRecordsPhoto]) ? '' : 'red',
              }}
            >
              Фото аттестата
            </div>
            <FileUpload
              setState={(e) =>
                e.target.files[0] ? setState({ ...state, schoolRecordsPhoto: e.target.files[0] }) : null
              }
            />
            <div
              className="file-name"
              style={{
                color: state.application === null || validateFiles([state.application]) ? '' : 'red',
              }}
            >
              Заявление
            </div>
            <FileUpload
              setState={(e) =>
                e.target.files[0] ? setState({ ...state, application: e.target.files[0] }) : null
              }
            />
          </div>

          <div className="allowed-formats">Доступные форматы: .doc .docx .rtf .pdf .odt .jpeg .png .gif</div>

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
            <HexaButton
              disabled={
                !validateName(state.childName) ||
                !validateName(state.parentName) ||
                !validatePhone(state.phone) ||
                !validateEmail(state.email) ||
                !validateFiles([state.passportPhoto, state.schoolRecordsPhoto, state.application]) ||
                state.personalDataAccess
              }
              onClick={(e) => setAllTouched(e)}
            >
              Отправить
            </HexaButton>
          </div>
        </form>
      </div>
    </div>
  );
};
