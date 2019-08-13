import React from "react";
import './main-menu.sass'
import { connect } from 'react-redux';

const MainMenu  = ({menuData}) => {

    return (
        <nav className="main-menu">
            <ul>
                {menuData.map( (item, idx) => {
                    return (
                        <li key={`main-menu_${idx}`}><a href={item.link}>{item.text}</a></li>
                    )
                } )}
            </ul>
        </nav>
    )
}


const mapStateToProps = (state) => {
    return {
        menuData : state["main-menu"]
    }
}

export default connect(mapStateToProps)(MainMenu);


