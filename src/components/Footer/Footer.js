import React from 'react';
import './Footer.scss';
import logo from '@assets/images/IThublogo.png';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-text">
          <img src={logo} className="logo-footer" alt="logoit" />
          <div className="text-address">Екатеринбург, Чкалова 3</div>
          <div className="text-copyright">© Copyright 2021 ITHub Ekat college</div>
        </div>
        <div className="footer-text">
          <Link to="/navigation" className="text-3d">
            ITJourney 3D
          </Link>
        </div>
        <div className="footer-text">
          <div className="text-contacts">Контакты</div>
          <div className="text-email">
            <MailOutlineIcon fontSize="small" /> priem.ekat@ithub.ru
          </div>
          <div className="text-email text-phone">
            <PhoneIcon fontSize="small" /> +7 (343) 286 78 59
          </div>
        </div>
      </div>
    </footer>
  );
};
