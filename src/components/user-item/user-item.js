import React from 'react';
import './user-item.sass';

const UserItem  = (props) => {
    return (
        <div id={`user_${props.user.id}`} className="user-item col-md-4">
            <div className="d-flex flex-lg-row flex-column align-items-lg-start align-items-center">
                <div className="user-photo">
                    <img src={props.user.photo} alt=""/>
                </div>
                <div className="user-info">
                    <h4 className="mb-lg-3 mb-2">{props.user.name}</h4>
                    <p>{props.user.position}</p>
                    <p><a href={`mailto:${props.user.email}`}>{props.user.email}</a></p>
                    <p><a href={`tel:${props.user.phone}`}>{props.user.phone}</a></p>
                </div>
            </div>
        </div>
    )
}

export default UserItem;