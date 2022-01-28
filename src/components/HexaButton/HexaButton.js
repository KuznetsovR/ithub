import React from 'react';
import './HexaButton.scss';

export const HexaButton = (props) => {
    return (
        <button className={'hexa'} onClick={props.onClick}>{props.children}</button>
    );
};
