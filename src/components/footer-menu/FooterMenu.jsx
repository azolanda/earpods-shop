import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./FooterMenu.css";
import languageIcon from "../../assets/language-icon.svg";

export default function FooterMenu() {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState("");

    const selectLanguage = (language) => {
        i18n.changeLanguage(language);
        setSelectedLanguage(language);
    }

    const changeLanguage = (e) => {
        const elements = document.querySelectorAll(".footer-language__li");
        for(const item of elements){
            item.classList.remove("footer-language__li--active");
        }
        e.target.classList.add("footer-language__li--active");
        
        const selectedLanguage = e.target.title;
        selectLanguage(selectedLanguage);
    }

    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng');
        const savedLanguageElement = document.querySelector(`[title=${savedLanguage}]`);
        const commonLanguageElement = document.querySelector('[title="ru"]');

        if (savedLanguage) {
            setSelectedLanguage(savedLanguage); 
            selectLanguage(savedLanguage);
            savedLanguageElement?.classList.add("footer-language__li--active"); 
        } else {
            commonLanguageElement?.classList.add("footer-language__li--active");
        }
    }, []);

    return (
        <ul className='footer-menu__list'>
            
            <li className='footer-menu__li'>
                <Link to="/" className='footer-menu__link'>{t("favourites")}</Link>
            </li>            
            <li className='footer-menu__li'>
                <Link to="/cart" className='footer-menu__link'>{t("cart")}</Link>
            </li>
            <li className='footer-menu__li'>
                <Link to="https://www.neoflex.ru/contacts" className='footer-menu__link'>{t("contacts")}</Link>
            </li>
            <li className='footer-menu__li'>
                <Link to="/terms-of-service" className='footer-menu__link' >{t("termsOfService")}</Link>
            </li>
            <li className='footer-language'>
                <img src={languageIcon} alt="language" />
                <ul className='footer-language__list'>
                    <li onClick={changeLanguage} className='footer-menu__li footer-language__li' title='kaz'>Каз</li>
                    <li onClick={changeLanguage} className='footer-menu__li footer-language__li' title='ru'>Рус</li>
                    <li onClick={changeLanguage} className='footer-menu__li footer-language__li' title='en'>Eng</li>
                </ul>
            </li>
        </ul>
    )
}
