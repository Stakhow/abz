import React from 'react';
import './relationships.sass';


import img_html from './../../media/img/html.svg'
import img_css from './../../media/img/css.svg'
import img_javascript from './../../media/img/javascript.svg'

const Relationships = () => {
    return (
        <section id="relationships" className="relationships">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>About my relationships with web-development</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 relationships__item">
                        <img src={img_html} alt="html"/>
                        <h3>I'm in love with HTML</h3>
                        <p>Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.</p>
                    </div>
                    <div className="col-lg-4 relationships__item">
                        <img src={img_css} alt="css"/>
                        <h3>CSS is my best friend</h3>
                        <p>Cascading Style Sheets (CSS) is a  style sheet language used for describing the presentation of a document written in a markup language like HTML.</p>
                    </div>
                    <div className="col-lg-4 relationships__item">
                        <img src={img_javascript} alt="javascript"/>
                        <h3>JavaScript is my passion</h3>
                        <p>JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Relationships;