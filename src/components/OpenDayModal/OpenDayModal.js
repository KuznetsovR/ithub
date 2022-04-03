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
import axios from 'axios';
import { validateName } from '../../validators/name-validator';
import { validatePhone } from '../../validators/phone-validator';
import { validateEmail } from '../../validators/email-validator';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const OpenDayModal = (props) => {
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
    childNameTouched: false,
    parentName: '',
    parentNameTouched: false,
    phone: '',
    phoneTouched: false,
    email: '',
    emailTouched: false,
    date: '',
    dateTouched: false,
    personalDataAccess: false,
    openNotification: '',
  });

  const sendForm = async (e) => {
    e.preventDefault();
    if (
      !validateName(state.childName) ||
      !validateName(state.parentName) ||
      !validatePhone(state.phone) ||
      !validateEmail(state.email) ||
      !state.date.length ||
      !state.personalDataAccess
    )
      return;
    try {
      const form = {
        childName: state.childName,
        parentName: state.parentName,
        phone: state.phone,
        email: state.email,
        date: state.date,
        personalDataAccess: state.personalDataAccess,
      };
      await axios.post(window.API_PATH + '/open-day/', form);
      setState({
        childName: '',
        childNameTouched: false,
        parentName: '',
        parentNameTouched: false,
        phone: '',
        phoneTouched: false,
        email: '',
        emailTouched: false,
        date: '',
        dateTouched: false,
        personalDataAccess: false,
        openNotification: 'success',
      });
      setTimeout(() => {
        props.handleClose(false);
      }, 3000);
    } catch (e) {
      setState({
        ...state,
        openNotification: 'error',
      });
    }
  };
  const setAllTouched = () => {
    setState({
      ...state,
      childNameTouched: true,
      parentNameTouched: true,
      phoneTouched: true,
      emailTouched: true,
      dateTouched: true,
    });
  };

  const handleNotificationClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({
      ...state,
      openNotification: '',
    });
  };

  return (
    <>
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
                  error={!validateName(state.childName) && state.childNameTouched}
                  sx={inputOptions}
                  label="ФИО абитуриента"
                  color="secondary"
                  variant="outlined"
                  value={state.childName}
                  autoComplete={'off'}
                  onChange={(e) => setState({ ...state, childName: e.target.value })}
                  onBlur={() => setState({ ...state, childNameTouched: true })}
                />
              </div>
              <div className="open-day-flex-column">
                <TextField
                  error={!validateName(state.parentName) && state.parentNameTouched}
                  sx={inputOptions}
                  label="ФИО родителя"
                  color="secondary"
                  variant="outlined"
                  value={state.parentName}
                  autoComplete={'off'}
                  onChange={(e) => setState({ ...state, parentName: e.target.value })}
                  onBlur={() => setState({ ...state, parentNameTouched: true })}
                />
              </div>
              <div className="open-day-flex-row">
                <TextField
                  error={!validatePhone(state.phone) && state.phoneTouched}
                  sx={inputOptions}
                  label="Телефон"
                  color="secondary"
                  variant="outlined"
                  placeholder={'+7 123 456 7890'}
                  value={state.phone}
                  type={'tel'}
                  autoComplete={'off'}
                  onChange={(e) => setState({ ...state, phone: e.target.value })}
                  onBlur={() => setState({ ...state, phoneTouched: true })}
                />
                <TextField
                  error={!validateEmail(state.email) && state.emailTouched}
                  sx={inputOptions}
                  label="Электронная почта"
                  color="secondary"
                  variant="outlined"
                  value={state.email}
                  type={'email'}
                  autoComplete={'off'}
                  onChange={(e) => setState({ ...state, email: e.target.value })}
                  onBlur={() => setState({ ...state, emailTouched: true })}
                />
              </div>

              <div className="open-day-flex-row">
                <FormControl fullWidth error={!state.date && state.dateTouched}>
                  <InputLabel id="open-day-date-select">Дата и время</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Дата и время"
                    value={state.date}
                    color="secondary"
                    variant="outlined"
                    onChange={(e) => setState({ ...state, date: e.target.value })}
                  >
                    {props.availableDates.map((el, index) => {
                      return (
                        <MenuItem value={el} key={index}>
                          {el}
                        </MenuItem>
                      );
                    })}
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
              <div className="open-day-btn-wrapper">
                <HexaButton
                  disabled={
                    !validateName(state.childName) ||
                    !validatePhone(state.phone) ||
                    !validateEmail(state.email) ||
                    !state.date.length ||
                    !state.personalDataAccess
                  }
                  onClick={(e) => setAllTouched(e)}
                >
                  Отправить
                </HexaButton>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Snackbar
        open={state.openNotification === 'success'}
        autoHideDuration={4000}
        onClose={handleNotificationClose}
      >
        <Alert onClose={handleNotificationClose} severity="success" sx={{ width: '100%' }} variant="filled">
          Данные успешно отправлены!
        </Alert>
      </Snackbar>
      <Snackbar
        open={state.openNotification === 'error'}
        autoHideDuration={4000}
        onClose={handleNotificationClose}
      >
        <Alert onClose={handleNotificationClose} severity="error" sx={{ width: '100%' }} variant="filled">
          Произошла ошибка, попробуйте ещё раз.
        </Alert>
      </Snackbar>
    </>
  );
};
