import React from "react";
import './full-menu.sass'
import { connect  } from 'react-redux';


const FullMenu  = ({fullMenu}) => {
    const Menu = fullMenu.map((menuItem, idx) => {
        return (
            <div key={`full-menu__item_${idx}`} className="col-auto full-menu__item">
                <ul>
                    {menuItem.map((item, index) => {
                        return (
                            <li key={`full-menu__item_${idx}_${index}`}>
                                <a href={item.link}>{item.text}</a>
                            </li>
                        )
                    } )}
                </ul>
            </div>
        )
    });
    
    return (
        <nav className="full-menu row">
            {Menu}
        </nav>
    )
}



const mapStateToProps = (state) => {
	return {
		fullMenu : state.fullMenu
	}
}


export default connect(mapStateToProps)(FullMenu);
