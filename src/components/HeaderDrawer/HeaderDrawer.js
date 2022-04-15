import React from 'react';
import Box from '@mui/material/Box';
import { Drawer } from '@mui/material';
import './HeaderDrawer.scss';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const HeaderDrawer = (props) => {
  return (
    <Drawer anchor={props.anchor} open={props.open} onClose={props.onClose}>
      <Box
        sx={{
          width: '250px',
          color: 'white',
          bgcolor: '#232020',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        role="presentation"
      >
        <div className="header-drawer-first-section">
          <div className={'header-drawer-ithub'}>ITHUB</div>
          <ul className={'mobile-links-list'}>
            <li onClick={props.onClose}>
              <Link to="/commission">Приёмная комиссия </Link>
            </li>
            <li onClick={props.onClose}>
              <HashLink smooth to="/main#specialities">
                Специальности
              </HashLink>
            </li>
            <li onClick={props.onClose}>
              <Link to="/about">О колледже </Link>
            </li>
            <li onClick={props.onClose}>
              <Link to="/courses">Курсы</Link>
            </li>
          </ul>
        </div>
        <div className={'header-drawer-phone'}>
          Появились вопросы? Позвоните нам!{' '}
          <div>
            <a className="number" href={'tel:+73432867859'}>
              +7 (343) 286 78 59
            </a>
          </div>
        </div>
      </Box>
    </Drawer>
  );
};
