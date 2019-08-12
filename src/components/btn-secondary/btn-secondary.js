import React from 'react';
import './btn-secondary.sass';

const BtnSecondary = (props) => {
    const { loadMore, text } = props;
    // const text = props.text;
    return (
        <button onClick={loadMore} className="btn btn-secondary">{text}</button>
    )
}

export default BtnSecondary;