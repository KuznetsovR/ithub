import React, { useState } from 'react';
import './Specialties.scss';
import { SpecialityModal } from '@components/export.components.js';
import { modalContents } from './ModalContent';

export const Specialties = () => {
  const [openModal, setOpenModal] = useState();

  return (
    <div className="specialities-container" id={'specialities'}>
      <h1 className="specialities-heading-text">Специальности</h1>
      <div className="all-specialities-rectangles">
        <div className="specialities-rectangle rec-bg1" onClick={() => setOpenModal('webdev')}>
          <div className="rec-text-default rec-text-size1">Веб-Разработчик</div>
        </div>
        <SpecialityModal
          open={openModal === 'webdev'}
          handleClose={setOpenModal}
          specialityContent={modalContents.webdev}
        />

        <div className="specialities-rectangle rec-bg2" onClick={() => setOpenModal('programmer')}>
          <div className="rec-text-default rec-text-size1">Программист</div>
        </div>
        <SpecialityModal
          open={openModal === 'programmer'}
          handleClose={setOpenModal}
          specialityContent={modalContents.programmer}
        />

        <div className="specialities-rectangle rec-bg3" onClick={() => setOpenModal('sysadmin')}>
          <div className="rec-text-default rec-text-size2">Системный администратор</div>
        </div>
        <SpecialityModal
          open={openModal === 'sysadmin'}
          handleClose={setOpenModal}
          specialityContent={modalContents.sysadmin}
        />
      </div>
    </div>
  );
};
