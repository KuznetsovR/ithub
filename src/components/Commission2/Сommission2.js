import React from 'react';
import './Сommission2.scss';
import { HexaButton } from '../HexaButton/HexaButton';
import FormGroup from '@mui/material/FormGroup';
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

  return (
    <div className="shape-case">
      <div className="text-shape-head"> Подать документы</div>
      <div className="shape-rectangle">
        <div className="share-flex-column">
          <TextField
            id="outlined-basic"
            sx={inputOptions}
            label="ФИО ребёнка"
            color="secondary"
            variant="outlined"
          />
        </div>
        <div className="share-flex-column">
          <TextField
            id="outlined-basic"
            sx={inputOptions}
            label="ФИО родителя"
            color="secondary"
            variant="outlined"
          />
        </div>
        <div className="share-flex-row">
          <TextField
            id="outlined-basic"
            sx={inputOptions}
            label="Телефон"
            color="secondary"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            sx={inputOptions}
            label="Почта"
            color="secondary"
            variant="outlined"
          />
        </div>

        <div className="files-to-upload">
          <div className="file-name">Фото паспорта</div>
          <FileUpload />
          <div className="file-name">Фото аттестата</div>
          <FileUpload />
          <div className="file-name">Заявление</div>
          <FileUpload />
        </div>

        <div className="share-checkbox">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: purple[50],
                    '&.Mui-checked': {
                      color: 'rgb(167,29,216)',
                    },
                  }}
                />
              }
              label="Я даю согласие на обработку персональных данных"
              defaultChecked
              sx={{
                color: purple[50],
              }}
            />
          </FormGroup>
        </div>
        <div className="share-btn-wrapper">
          <HexaButton>Отправить</HexaButton>
        </div>
      </div>
    </div>
  );
};
