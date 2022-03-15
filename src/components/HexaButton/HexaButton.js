import React from 'react';
import './HexaButton.scss';

export const HexaButton = (props) => {
  return (
    <button className={`hexa ${props.disabled ? 'disabled' : ''}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
