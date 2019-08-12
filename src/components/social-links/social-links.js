import React from 'react';
import './social-links.sass';

import {ReactComponent as fbIcon} from "./../../media/icons/facebook.svg";
import {ReactComponent as linkedInIcon} from "./../../media/icons/linkedin.svg";
import {ReactComponent as instaIcon} from "./../../media/icons/instagram.svg";
import {ReactComponent as twitterIcon} from "./../../media/icons/twitter.svg";
import {ReactComponent as pinterestIcon} from "./../../media/icons/pinterest.svg";


const SocialLinks = () => {
    
    
    const socialLinksData = [
        {
            "link": "https://facebook.com",
            "icon": fbIcon
        },
        {
            "link": "https://linkedin.com",
            "icon": linkedInIcon
        },
        {
            "link": "https://instagram.com",
            "icon": instaIcon
        },
        {
            "link": "https://twitter.com",
            "icon": twitterIcon
        },
        {
            "link": "https://pinterest.com",
            "icon": pinterestIcon
        }
    ];
    
    return (
        <ul className="social-links">
            {socialLinksData.map( (item,idx) => {
                const {link} = item;
                const Icon = item.icon;
                return (
                    <li key={`social-links_${idx}`}>
                        <a href={link}>
                            <Icon/>
                        </a>
                    </li>
                )
            } )}
            
        </ul>
    )
}


export default SocialLinks