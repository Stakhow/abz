import React from "react";
import './full-menu.sass'


const fullMenuData = [
    [
        {link : "News", text: "News"},
        {link : "Blog", text: "Blog"},
        {link : "Partners", text: "Partners"},
        {link : "Shop", text: "Shop"}
    ],
    [
        {link : "Overview", text: "Overview"},
        {link : "Design", text: "Design"},
        {link : "Code", text: "Code"},
        {link : "Collaborate", text: "Collaborate"}
    ],
    [
        {link : "Tutorials", text: "Tutorials"},
        {link : "Resources", text: "Resources"},
        {link : "Guides", text: "Guides"},
        {link : "Examples", text: "Examples"}
    ],
    [
        {link : "FAQ", text: "FAQ"},
        {link : "Terms", text: "Terms"},
        {link : "Conditions", text: "Conditions"},
        {link : "Help", text: "Help"}
    ],
];


const FullMenu  = () => {
    const Menu = fullMenuData.map((menuItem, idx) => {
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

export default FullMenu
