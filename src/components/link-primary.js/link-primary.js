import React from 'react';
import './link-primary.sass';

const LinkPrimary = (props) => {
    const {link, text} = props;
    return (
        <a href={link}  className="btn btn-primary">{text}</a>
    )
}

export default LinkPrimary;