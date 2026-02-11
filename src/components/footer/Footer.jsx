import React from 'react'
import Logo from '../logo/Logo'
import "./Footer.css"
import SocialNetworkIcons from '../social-network-icons/SocialNetworkIcons'
import FooterMenu from '../footer-menu/FooterMenu'

export default function Footer() {
    return (
        <div className='footer center'>
            <Logo />
            <FooterMenu />
            <SocialNetworkIcons />
        </div>
    )
}
