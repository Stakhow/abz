import React from 'react';
import './social-links.sass';
import { connect } from 'react-redux' ;

import {ReactComponent as fbIcon} from "./../../media/icons/facebook.svg";
import {ReactComponent as linkedInIcon} from "./../../media/icons/linkedin.svg";
import {ReactComponent as instaIcon} from "./../../media/icons/instagram.svg";
import {ReactComponent as twitterIcon} from "./../../media/icons/twitter.svg";
import {ReactComponent as pinterestIcon} from "./../../media/icons/pinterest.svg";


const SocialLinks = ({socialLinks}) => {
	const Test = () =>{
		socialLinks.map( (item) => {
			const testI = require(`./../../media/icons/${item.icon}`);
			console.log(item.icon);
			console.log(testI);
			return (<p>{item.icon}</p>);
		} );
	};
	Test();
    
    return (
        <ul className="social-links">
            {socialLinks.map( (item,idx) => {
                const {link, icon} = item;
                return (
                    <li key={`social-links_${idx}`}>
                        <a href={link}>{require(`./../../media/icons/${ icon }`)}</a>
                    </li>
                )
            } )}
        </ul>
    )
};

const mapStateToProps = (state) => {
	return {
		socialLinks: state.socialLinks
	}
};


export default connect(mapStateToProps)(SocialLinks);