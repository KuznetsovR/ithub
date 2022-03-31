// TODO: change Modal on Dialog

import React, { useState } from 'react';
import './SchoolModal.scss';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { purple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import { HexaButton } from '../HexaButton/HexaButton';
import axios from 'axios';

export const SchoolModal = (props) => {
  const style = {
    position: 'absolute',
    padding: '30px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 700,
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
    schoolName: '',
    city: '',
    phone: '',
    email: '',
    personalDataAccess: false,
  });

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post(window.API_PATH + '/school-event/', state)

      setState({
        name: '',
        schoolName: '',
        city: '',
        phone: '',
        email: '',
        personalDataAccess: false,
      })

      // Do smth to show user the success
      props.handleClose(false)
    } catch (e){
      // Do smth to show user the error
      console.error(e);
    }
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
      aria-labelledby="SchoolModal"
      aria-describedby="SchoolModalDescription"
    >
      <Fade in={props.open}>
        <Box sx={style}>
          <div className="text-school-head"> Выезд представителей в школы </div>
          <form onSubmit={sendForm}>
            <div className="school-flex-column">
              <TextField
                id="outlined-basic"
                sx={inputOptions}
                label="ФИО"
                color="secondary"
                variant="outlined"
                value={state.name}
                autoComplete={'off'}
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />
            </div>
            <div className="school-flex-row">
              <TextField
                id="outlined-basic"
                sx={inputOptions}
                label="Наименование учреждения"
                color="secondary"
                variant="outlined"
                value={state.schoolName}
                autoComplete={'off'}
                onChange={(e) => setState({ ...state, schoolName: e.target.value })}
              />
              <TextField
                id="outlined-basic"
                sx={inputOptions}
                label="Город"
                color="secondary"
                variant="outlined"
                value={state.city}
                autoComplete={'off'}
                onChange={(e) => setState({ ...state, city: e.target.value })}
              />
            </div>

            <div className="school-flex-row">
              <TextField
                id="outlined-basic"
                sx={inputOptions}
                label="Телефон"
                color="secondary"
                variant="outlined"
                value={state.phone}
                autoComplete={'off'}
                onChange={(e) => setState({ ...state, phone: e.target.value })}
              />
              <TextField
                id="outlined-basic"
                sx={inputOptions}
                label="Почта"
                color="secondary"
                variant="outlined"
                value={state.email}
                autoComplete={'off'}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
            </div>

            <div className="school-checkbox">
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: purple[50],
                      '&.Mui-checked': {
                        color: 'rgb(167,29,216)',
                      },
                    }}
                    checked={state.personalDataAccess}
                    onChange={(e) => setState({ ...state, personalDataAccess: e.target.checked })}
                  />
                }
                label="Я даю согласие на обработку персональных данных"
                sx={{
                  color: purple[50],
                }}
              />
            </div>
            <div className="school-btn-wrapper">
              <HexaButton>Отправить</HexaButton>
            </div>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};
