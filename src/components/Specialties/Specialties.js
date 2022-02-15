import React from 'react';
import './Specialties.scss';
import { SpecialityModal } from '../SpecialityModal/SpecialityModal';

export const Specialties = () => {
  const [openModal, setOpenModal] = React.useState(null);
  const handleOpen = (name) => {
    setOpenModal(name);
  };
  const handleClose = (name) => {
    setOpenModal(name);
  };
  const modalContents = {
    programmer: {
      heading: 'Some heading for programmers',
      description: 'Some desc for programmers',
    },
    webdev: {
      heading: 'Some heading for webdev',
      description: 'Some desc for webdev',
    },
    sysadmin: {
      heading: 'Some heading for sysadmin',
      description: 'Some desc for sysadmin',
    },
  };
  return (
    <div className="specialities-container" id={'specialities'}>
      <div className="specialities-heading-text">Специальности:</div>
      <div className="all-specialities-rectangles">
        <div className="specialities-rectangle rec-bg1" onClick={()=>handleOpen('webdev')}>
          <div className="rec-text-default rec-text-size1">Веб-Разработчик</div>
        </div>
        <SpecialityModal
          open={openModal === 'webdev'}
          handleClose={handleClose}
          specialityContent={modalContents.webdev}
        />

        <div className="specialities-rectangle rec-bg2" onClick={()=>handleOpen('programmer')}>
          <div className="rec-text-default rec-text-size1">Программист</div>
        </div>
        <SpecialityModal
          open={openModal === 'programmer'}
          handleClose={handleClose}
          specialityContent={modalContents.programmer}
        />

        <div className="specialities-rectangle rec-bg3" onClick={()=>handleOpen('sysadmin')}>
          <div className="rec-text-default rec-text-size2">Системный администратор</div>
        </div>
        <SpecialityModal
          open={openModal === 'sysadmin'}
          handleClose={handleClose}
          specialityContent={modalContents.sysadmin}
        />
      </div>
    </div>
  );
};
