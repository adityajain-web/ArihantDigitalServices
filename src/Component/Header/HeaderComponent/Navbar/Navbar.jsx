import React from 'react';
import { Link } from '@material-ui/core';
import { NavbarMenu } from './NavbarMenu';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 col-md-11 col-xs-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="index.html">Arihant Digital Services</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <ul className="navbar-nav ms-auto">
                                        {NavbarMenu.map((item, index) => {
                                            return (<li key={index} className="nav-item mx-1"><Link className="nav-link" href={item.navLink_path}><span className="nav-icon me-2">{item.navLink_icon}</span>{item.navLink_text}</Link></li>)
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
