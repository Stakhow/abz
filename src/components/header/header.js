import React from 'react';
import './header.sass';

import Logo from '../../components/logo/logo'
import MainMenu from "../main-menu/main-menu";
import UserCabinet from "../user-cabinet/user-cabinet";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-2"><Logo /></div>
                    <div className="col-md-auto"><MainMenu /></div>
                    <div className="col-md-3"><UserCabinet/></div>
                </div>
            </div>
        </header>
    )

}


export default Header;