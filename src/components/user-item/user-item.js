import React from 'react';
import './user-item.sass';

const UserItem  = ({user}) => {
    return (
        <div id={`user_${user.id}`} className="user-item col-md-4">
            <div className="d-flex flex-lg-row flex-column align-items-lg-start align-items-center">
                <div className="user-photo">
                    <img src={user.photo} alt=""/>
                </div>
                <div className="user-info">
                    <h4 className="mb-lg-3 mb-2">{user.name}</h4>
                    <p>{user.position}</p>
                    <p>{user.id}</p>
                    <p><a href={`mailto:${user.email}`}>{user.email}</a></p>
                    <p><a href={`tel:${user.phone}`}>{user.phone}</a></p>
                </div>
            </div>
        </div>
    )
}

export default UserItem;