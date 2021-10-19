import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Header = () => {
    const { user, handleSignOut } = useAuth();
    return (
        <>
            <nav className="navbar navbar-expand-lg header-bg sticky-top">
                <div className="container">
                    <div className="logo-bg">
                        <a className="navbar-brand" href="/"><img className="logo-image" src={logo} alt="" /></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav menu-bar ">
                            <NavLink to="/home" activeStyle={{
                                fontWeight: "bold",
                                color: "#1BBDE4"
                            }}>Home</NavLink>
                            <NavLink to="/services" activeStyle={{
                                fontWeight: "bold",
                                color: "#1BBDE4"
                            }}>Services</NavLink>
                            <NavLink to="/projects" activeStyle={{
                                fontWeight: "bold",
                                color: "#1BBDE4"
                            }}>Projects</NavLink>
                            <NavLink to="/contact" activeStyle={{
                                fontWeight: "bold",
                                color: "#1BBDE4"
                            }}>Contact Us</NavLink>
                            {
                                user.displayName && <span className="ms-3 fw-bold fs-6" style={{ color: "#081839" }}>{user.displayName}</span>
                            }
                            {
                                user.displayName ? <button className="ms-4 btn-sign-out" onClick={handleSignOut}>log out</button> :
                                    <NavLink to="/login" activeStyle={{
                                        fontWeight: "bold",
                                        color: "#1BBDE4"
                                    }}>Login</NavLink>
                            }

                        </div>
                    </div>
                    <button className="btn-common">Make Appoinment</button>
                </div>
            </nav>
        </>
    );
};

export default Header;