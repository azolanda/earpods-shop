import React from 'react';
import { Link } from 'react-router-dom';
import "./FooterMenu.css";

export default function FooterMenu() {
    const selectLanguage = (e) => {
        const elements = document.querySelectorAll(".footer-language__li");
        for(const item of elements){
            item.classList.remove("footer-language__li--active");
        }
        e.target.classList.add("footer-language__li--active");
    }

    return (
        <ul className='footer-menu__list'>
            <li className='footer-menu__li'>
                <Link to="https://www.neoflex.ru/project-list" className='footer-menu__link'>Избранное</Link>
            </li>
            <li className='footer-menu__li'>
                <Link to="/cart" className='footer-menu__link'>Корзина</Link>
            </li>
            <li className='footer-menu__li'>
                <Link to="https://www.neoflex.ru/contacts" className='footer-menu__link'>Контакты</Link>
            </li>
            <li className='footer-menu__li'>
                <Link to="https://www.neoflex.ru/services" className='footer-menu__link' >Условия сервиса</Link>
            </li>
            <li className='footer-language'>
                <img src="./src/assets/language-icon.svg" alt="language" />
                <ul className='footer-language__list'>
                    <li onClick={selectLanguage} className='footer-menu__li footer-language__li' title='Каз'>Каз</li>
                    <li onClick={selectLanguage} className='footer-menu__li footer-language__li footer-language__li--active' title='Рус'>Рус</li>
                    <li onClick={selectLanguage} className='footer-menu__li footer-language__li' title='Eng'>Eng</li>
                </ul>
            </li>
        </ul>
    )
}
