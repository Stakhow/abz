import React from 'react';
import './btn-primary.sass';

const BtnPrimary = (props) => {
    const {value, text, disabled} = props;
    return (
        <button value={value} onClick={props.onSubmitBtnClick} className="btn btn-primary" disabled={disabled}>{text}</button>
    )
}

export default BtnPrimary;