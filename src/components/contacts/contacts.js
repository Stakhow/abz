import React from 'react';
import './contacts.sass';

import {ReactComponent as mailIco}  from './../../media/icons/mail.svg';
import {ReactComponent as phoneIco}  from './../../media/icons/phone.svg';
import {ReactComponent as cellphoneIco} from './../../media/icons/cellphone.svg';
import { connect } from 'react-redux';

const Contacts = ({contacts}) => {
    return (
        <div className="contact-list">
            <ul>
                {contacts.map( (item, idx) => {
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

const mapStateToProps = (state) => {
	return {
		contacts: state.contacts
	}
}


export default connect(mapStateToProps)(Contacts)