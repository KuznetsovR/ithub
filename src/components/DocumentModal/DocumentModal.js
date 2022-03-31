import React from 'react';
import './DocumentModal.scss';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export const DocumentModal = (props) => {
  const style = {
    position: 'absolute',
    padding: '30px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '90%',
    maxWidth: 700,
    color: 'white',
    outline: 'none',
    bgcolor: 'rgb(30,29,29)',
    border: '1px solid #000',
    borderRadius: 3,
    textAlign: 'center',
  };
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      aria-labelledby="DocumentModal"
      aria-describedby="DocumentModalDescription"
    >
      <Fade in={props.open}>
        <Box sx={style}>
          { props.children }
        </Box>
      </Fade>
    </Modal>
  )
};
