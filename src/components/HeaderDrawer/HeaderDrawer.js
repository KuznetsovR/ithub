import React from 'react';
import Box from '@mui/material/Box';
import { Drawer } from '@mui/material';
import './HeaderDrawer.scss';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const HeaderDrawer = (props) => {
  return (
    <Drawer anchor={props.anchor} open={props.open} onClose={props.onClose}>
      <Box sx={{ width: '250px', color: 'white', bgcolor: '#232020', height: '100%' }} role="presentation">
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
      </Box>
    </Drawer>
  );
};
