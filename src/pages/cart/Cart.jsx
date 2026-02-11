import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import MainCart from '../../components/main-cart/MainCart'

export default function Cart() {
    useEffect(() => {
        if (window.scrollY > 0) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    });

    return (
        <div className='wrapper'>
            <Header />
            <MainCart/>
            <Footer />
        </div>
        
    )
}
