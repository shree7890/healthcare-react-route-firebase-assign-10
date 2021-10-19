import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="py-5" style={{ backgroundColor: "#081839" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="text-white">
                            <h3 className="mb-3">Our Services</h3>
                            <div>
                                <ul className="service-layer">
                                    <li>About Us</li>
                                    <li>Services</li>
                                    <li>Privacy Policy</li>
                                    <li>Best Collections</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="text-white">
                            <h5 className="mb-4">Sign Up To Get Latest Updates</h5>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Type your E-mail" aria-label="" aria-describedby="button-addon2" />
                                <button className="btn-common" type="button" id="button-addon2">Button</button>
                            </div>
                            <div>
                                <h4>Follow on socials</h4>
                                <ul className="d-flex align-items-center li-social">
                                    <li><i className="fab fa-facebook"></i></li>
                                    <li><i className="fab fa-twitter-square"></i></li>
                                    <li><i className="fab fa-linkedin"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <h4 className="text-white text-center mb-4">Opening Hours</h4>
                            <ul className="footer-hour">
                                <li>Mon – Tues08:00 AM – 05:00PM</li>
                                <li>Wedne – Thur09:00 AM – 06:00PM</li>
                                <li>PersonalMon – 10:00 AM</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;