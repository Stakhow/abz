import React from 'react';
import './about-me.sass';

import img_src from './../../media/img/man-mobile.svg';
import { connect } from 'react-redux';

const AboutMe = ({props}) => {
    const {title, subtitle, content, button, image} = props;
    const Content = () => { return content.map( (item, idx) => { return <p key={idx}>{item}</p> }) };
    return (
        <section id="about" className="about-me mb-7">
            <div className="container">
                <div className="row">
                    <div className="col-12 section-title">
                        <h2>{title}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <img src={img_src} alt=""/>
                    </div>
                    <div className="col-lg-8">

                        <h3>{subtitle}</h3>
                        <Content/>
                        <a href="#registation" className="link link-primary">Sign Up</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        props: state["about"]
    }
}

export default connect(mapStateToProps)(AboutMe);