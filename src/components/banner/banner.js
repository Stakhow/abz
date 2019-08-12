import React from 'react';
import './banner.sass';

import bg_image from '../../media/img/bg-1-min.jpg'
import BtnPrimary from "../btn-primary/btn-primary";


const Banner = () => {
    const style = {
        backgroundImage: `url( ${bg_image} )`,
    }
    return (
        <section className="common-section banner" style={style}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <h1>Test assignment for Frontend Developer position</h1>
                            <p>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.</p>
                            <p>Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!</p>

                            <BtnPrimary/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Banner;