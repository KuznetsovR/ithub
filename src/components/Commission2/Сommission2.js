import React from 'react';
import './Сommission2.scss';
import { HexaButton } from '../HexaButton/HexaButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { purple } from '@mui/material/colors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
  
  export const Commission2 = () => {
  const fullwidth = {
    '& > :not(style)': { m: 0, width: '85ch' },
    '.MuiInputLabel-root': { color: 'white' },
    '.MuiOutlinedInput-root': { borderColor: 'white' },
    '.MuiInputBase-root': { color: 'white' },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#a71dd8',
      },
    },
  };
  const mediumwidth = {
    '& > :not(style)': { m: 0, width: '40ch' },
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
          <Box component="form" sx={fullwidth} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="ФИО ребёнка" color="secondary" variant="outlined" />
          </Box>
        </div>
        <div className="share-flex-column">
          <Box component="form" sx={fullwidth} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="ФИО родителя" color="secondary" variant="outlined" />
          </Box>
        </div>
        <div className="share-flex-row">
          <Box
            component="form"
            sx={mediumwidth}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Телефон" color="secondary" variant="outlined" />
          </Box>
          <Box
            component="form"
            sx={mediumwidth}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Почта" color="secondary" variant="outlined" />
          </Box>
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
}

