import React, { useState } from 'react';
import './Header.scss';
import logo from '@assets/images/IThublogo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { HeaderDrawer } from '../HeaderDrawer/HeaderDrawer';

export const Header = () => {
  const [state, setState] = useState({
    right: false,
  });
  return (
    <header>
      <Link to="/main">
        <img src={logo} className="logo-header" alt="ithub-logo" />
      </Link>
      <nav className="menu">
        <div className="triangles-container">
          <div className="triangle-row">
            <div className="triangle start-color" />
            <div className="triangle color3" />
          </div>
          <div className="triangle-row reversed" style={{ marginLeft: '30px' }}>
            <div className="triangle color2" />
            <div className="triangle color4" />
          </div>
          <div className="triangle-row reversed" style={{ marginTop: '60px' }}>
            <div className="triangle start-color" />
            <div className="triangle color3" />
          </div>
          <div className="triangle-row" style={{ margin: '60px 0 0 30px' }}>
            <div className="triangle color2" />
            <div className="triangle color4" />
          </div>
        </div>
        <ul className={'links-list'}>
          <li>
            <Link to="/commission">Приёмная комиссия </Link>
          </li>
          <li>
            <HashLink smooth to="/main#specialities">
              Специальности
            </HashLink>
          </li>
          <li>
            <Link to="/about">О колледже</Link>
          </li>
        </ul>
        <div className="mobile-menu">
          <IconButton
            aria-label="menu"
            className={'icon-button'}
            onClick={() => setState({ right: !state.right })}
          >
            <MenuIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <HeaderDrawer
            anchor={'right'}
            open={state.right}
            onClose={() => setState({ right: false })}
          />
        </div>
      </nav>
    </header>
  );
};
