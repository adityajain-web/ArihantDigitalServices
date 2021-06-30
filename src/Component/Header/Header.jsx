import React from 'react';
import { Navbar, HeaderCenterText } from './HeaderComponent/HeaderComponent';
import './Css/Header.scss';

const Header = () => {
    return (
        <>
            <header id="home">
                <Navbar />
                <HeaderCenterText />
            </header>
        </>
    )
}

export default Header
