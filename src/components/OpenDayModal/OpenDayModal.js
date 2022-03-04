import React, { useState } from 'react';
import './OpenDayModal.scss';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { purple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import { HexaButton } from '../HexaButton/HexaButton';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

export const OpenDayModal = (props) => {
  const style = {
    position: 'absolute',
    padding: '30px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 450,
    color: 'white',
    outline: 'none',
    bgcolor: 'rgb(30,29,29)',
    border: '1px solid #000',
    borderRadius: 3,
  };
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
    name: '',
    phone: '',
    email: '',
    date: '',
    personalDataAccess: false,
  });

  const sendForm = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <Modal
      open={props.open}
      onClose={() => props.handleClose(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      aria-labelledby="OpenDayModal"
      aria-describedby="OpenDayModalDescription"
    >
      <Fade in={props.open}>
        <Box sx={style}>
          <div className="text-open-day-head"> День открытых дверей </div>
          <form onSubmit={sendForm}>
            <div className="open-day-flex-column">
              <TextField
                sx={inputOptions}
                label="ФИО"
                color="secondary"
                variant="outlined"
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />
            </div>
            <div className="open-day-flex-row">
              <TextField
                sx={inputOptions}
                label="Телефон"
                color="secondary"
                variant="outlined"
                onChange={(e) => setState({ ...state, phone: e.target.value })}
              />
              <TextField
                sx={inputOptions}
                label="Почта"
                color="secondary"
                variant="outlined"
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
            </div>

            <div className="open-day-flex-row">
              <FormControl fullWidth>
                <InputLabel id="open-day-date-select">Дата</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Дата"
                  value={state.date}
                  color="secondary"
                  variant="outlined"
                  onChange={(e) => setState({ ...state, date: e.target.value })}
                >
                  <MenuItem value={'05.03.2022'}>05.03.2022</MenuItem>
                  <MenuItem value={'09.03.2022'}>09.03.2022</MenuItem>
                  <MenuItem value={'23.03.2022'}>23.03.2022</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="open-day-checkbox">
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
            <div className="open-day-btn-wrapper">
              <HexaButton>Отправить</HexaButton>
            </div>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};
