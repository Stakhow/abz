import React from 'react';
import './link-primary.sass';

const LinkPrimary = (props) => {
    const {link, text} = props;
    return (
        <a href={link}  className="link link-primary">{text}</a>
    )
}

export default LinkPrimary;