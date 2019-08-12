import React from 'react';
import './contacts.sass';

import {ReactComponent as mailIco}  from './../../media/icons/mail.svg';
import {ReactComponent as phoneIco}  from './../../media/icons/phone.svg';
import {ReactComponent as cellphoneIco} from './../../media/icons/cellphone.svg';


const contactLinksData = [
    {
        link: "work.of.future@gmail.com",
        text: "work.of.future@gmail.com",
        icon: mailIco,
        type: "mail"
    },
    {
        link: "+38 (050) 789 24 98",
        text: "+38 (050) 789 24 98",
        icon: phoneIco,
        type: "tel"
    },
    {
        link: "+38 (095) 556 08 45",
        text: "+38 (095) 556 08 45",
        icon: cellphoneIco,
        type: "tel"
    },
]

const Contacts = () => {
    return (
        <div className="contact-list">
            <ul>
                {contactLinksData.map( (item, idx) => {
                    switch (item.type) {
                        case 'mail' : item.type = 'mailto:';
                        break;
                        case 'tel' : item.type = 'tel:';
                        break;
                        default: item.type = null;
                        break;
                    }
                    return (
                        <li key={`contact-list__item-${idx}`}>
                            <a href={`${item.type}${item.link}`}>
                                <item.icon/>
                                {item.text}
                             </a>
                        </li>
                    )
                    
                } )}
            </ul>
        </div>
    )
}


export default Contacts