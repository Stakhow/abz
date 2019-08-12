import React from 'react';
import './about-me.sass';


import img_src from './../../media/img/man-mobile.svg';

const AboutMe = () => {
    return (
        <section id="about" className="about-me mb-7">
            <div className="container">
                <div className="row">
                    <div className="col-12 section-title">
                        <h2>Let's get ac quainted</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <img src={img_src} alt=""/>
                    </div>
                    <div className="col-lg-8">

                        <h3>I am cool frontend developer</h3>
                        <p>When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.</p>
                        <p>Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.</p>
                        <a href="#registation" className="link link-primary">Sign Up</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;