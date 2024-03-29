import React, { useState } from 'react';
import './CoursesModal.scss';
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

export const CoursesModal = (props) => {
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
    childName: '',
    parentName: '',
    phone: '',
    email: '',
    personalDataAccess: false,
  });

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post(window.API_PATH + '/courses/', state);
      setState({
        childName: '',
        parentName: '',
        phone: '',
        email: '',
        personalDataAccess: false,
      });
      // Do smth to show user the success
      props.handleClose(false);
    } catch (e) {
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
      aria-labelledby="CoursesModal"
      aria-describedby="CoursesModalDescription"
    >
      <Fade in={props.open}>
        <Box sx={style}>
          <div className="text-open-day-head"> Записаться на курсы </div>
          <form onSubmit={sendForm}>
            <div className="courses-flex-column">
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
            <div className="courses-flex-column">
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
            <div className="courses-flex-row">
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

            <div className="courses-checkbox">
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
            <div className="courses-btn-wrapper">
              <HexaButton>Отправить</HexaButton>
            </div>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};
