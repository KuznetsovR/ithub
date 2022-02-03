import React from 'react';
import './SpecialityModal.scss';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import { HexaButton } from '../HexaButton/HexaButton';
import Fade from '@mui/material/Fade';

export const SpecialityModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    padding: '30px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: 'white',
    bgcolor: '#191818',
    border: '1px solid #000',
  };
  return (
    <>
      <HexaButton onClick={handleOpen}>123</HexaButton>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        aria-labelledby="SpecialityModal"
        aria-describedby="SpecialityModalDescription"
      >
        <Fade in={open}>
          <Box sx={style}>
            {props.children}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
