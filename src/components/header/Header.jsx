import React from 'react';
import Logo from "../logo/Logo";
import "./Header.css";
import HeaderIcons from '../header-icons/HeaderIcons';

export default function Header() {
    return (
        <div className='header center'>
            <Logo />
            <HeaderIcons />
        </div>
    )
}
