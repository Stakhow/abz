import React from 'react';
import './footer.sass'
import Logo from "../logo/logo";
import MainMenu from "../main-menu/main-menu";
import FullMenu from "../full-menu/full-menu";
import Contacts from "../contacts/contacts";
import SocialLinks from "../social-links/social-links";



const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top py-3 ">
                    <div className="row justify-content-between">
                        <div className="col-lg-2"><Logo /></div>
                        <div className="col-lg-7 d-flex justify-content-end"><MainMenu /></div>
                    </div>
                </div>
                <div className="footer-mid py-3">
                    <div className="row justify-content-between">
                        <div className="col-lg-3">
                            <Contacts/>
                        </div>
                        <div className="col-lg-9 d-flex justify-content-end">
                            <FullMenu />
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom py-3">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="copyrights">© abz.agency specially for the test task</div>
                        </div>
                        <div className="col-6">
                            <SocialLinks/>
                        </div>
                        
                        
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;