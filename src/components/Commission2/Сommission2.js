import React from 'react';
import './Сommission2.scss';
import { HexaButton } from '../HexaButton/HexaButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { purple } from '@mui/material/colors';

export const Сommission2 = () => {
  return (
    <div className="shape-case">
      <div className="text-shape-head"> Подать документы</div>
      <div className="shape-rectangle" >
        <div className="share-flex-column">
        <div className="shape-rectangle-fio"></div>
        <div className="shape-rectangle-fio"></div>
        <div className="share-flex-row">
        <div className="share-rectangle-phone-email"></div>
        <div className="share-rectangle-phone-email"></div>
        </div>
        </div>
        <div className="share-checkbox">
        <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Я даю согласие на согласие на обработку персональных данных"  defaultChecked 
        sx={{
          color: purple[50],
          '&.Mui-checked': {
            color: purple[500],
          },
        }}/>
    </FormGroup>
        </div>
        <div className="share-btn-wrapper">
            <HexaButton>Отправить</HexaButton>
          </div>
      </div>
    </div>
  );
};
