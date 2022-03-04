import React from 'react';
import './SpecialityModal.scss';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

export const SpecialityModal = (props) => {
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
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      aria-labelledby="SpecialityModal"
      aria-describedby="SpecialityModalDescription"
    >
      <Fade in={props.open}>
        <Box sx={style}>
          <div className="rectangle-spec-modal">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {props.specialityContent.heading}
            </Typography>
          </div>
          <div className="text-spec-modal">
            <Typography id="modal-modal-description" sx={{ mt: 5 }}>
              {props.specialityContent.description}
            </Typography>
            <Typography id="modal-modal-role" sx={{ mt: 4 }}>
              {props.specialityContent.role}
            </Typography>
            <Typography id="modal-modal-price" sx={{ mt: 8 }}>
              {props.specialityContent.price}
            </Typography>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};
