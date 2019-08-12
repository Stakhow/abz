import React from 'react';
import './spinner.sass';


import spinner_src from './../../media/icons/Rolling-2s-200px.gif';

const Spinner = () => {
    return (
        <div className="spinner">
            <img src={spinner_src} alt=""/>
        </div>
    )
}

export default Spinner;