import React from 'react';
import './btn-secondary.sass';
import Spinner from "../spinner/spinner";

const BtnSecondary = (props) => {
    const { text, onClickHandler, status=false } = props;
    console.log('status', status);
    if (status) return <Spinner/>
    return (
        <button onClick={onClickHandler} className="btn btn-secondary" disabled={status}>{text}</button>
    )
}

export default BtnSecondary;