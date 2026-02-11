import React from 'react'
import Header from '../../components/header/Header';
import MainIndex from '../../components/main-index/MainIndex';
import Footer from '../../components/footer/Footer';

export default function Main() {
    return (
        <div className='wrapper'>
            <Header />
            <MainIndex/>
            <Footer />
        </div>
    )
}