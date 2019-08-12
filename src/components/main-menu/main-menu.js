import React from "react";
import './main-menu.sass'
import { connect } from 'react-redux';

const MainMenu  = () => {
    // console.log('testing', this.props.state);
    const menuData = [
        {link: "#about", text: "About me"},
        {link: "#relationships", text: "Relationships"},
        {link: "#requirements", text: "Requirements"},
        {link: "#users", text: "Users"},
        {link: "#registration", text: "Sign Up"},
    ];
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
    return state["main-menu"];
}

export default connect(mapStateToProps)(MainMenu);