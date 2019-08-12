import React from "react";
import './logo.sass'
import {ReactComponent as LogoSvg} from "../../media/img/logo.svg";


const Logo = () => {
    return (
        <div className="logo">
            <a href="#">
                <LogoSvg/>
            </a>
        </div>
    )
}

export default Logo;


