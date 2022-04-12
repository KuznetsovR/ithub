import React from 'react';
import './Footer.scss';
import logo from '@assets/images/IThublogo.png';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import { ReactComponent as VKIcon } from '@assets/images/vkIcon.svg';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-text">
          <img src={logo} className="logo-footer" alt="logoit" />
          <div className="text-address">Екатеринбург, Чкалова 3</div>
          <div className="text-copyright">© Copyright 2021-2022 ITHub Ekat college</div>
        </div>
        <div className="footer-text footer-text-center">
          <a href="/" className={'text-3d'}>
            ITJourney 3D
          </a>
          <a href="https://ithub.ru/">ITHub Moscow</a>
        </div>
        <div className="footer-text">
          <div className="text-contacts">Контакты</div>
          <div className="footer-contact-info">
            <MailOutlineIcon fontSize="small" />
            <a href={'mailto:priem.ekat@ithub.ru'}>priem.ekat@ithub.ru</a>
          </div>
          <div className="footer-contact-info">
            <PhoneIcon fontSize="small" /> <a href={'tel:+73432867859'}>+7 (343) 286 78 59</a>
          </div>
          <div className="footer-contact-info">
            <a href="https://vk.com/ithub.ekat" target="_blank" rel="noreferrer">
              <VKIcon />
              Мы Вконтакте
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
