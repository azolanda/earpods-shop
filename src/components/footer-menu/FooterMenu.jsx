import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./FooterMenu.css";
import languageIcon from "../../assets/language-icon.svg";
import { useChangeLanguage } from "../../hooks/useChangeLanguage";

export default function FooterMenu() {
  const { t } = useTranslation();
  const changeLanguage = useChangeLanguage();

  return (
    <ul className="footer-menu__list">
      <li className="footer-menu__li">
        <Link to="/" className="footer-menu__link">
          {t("favourites")}
        </Link>
      </li>
      <li className="footer-menu__li">
        <Link to="/cart" className="footer-menu__link">
          {t("cart")}
        </Link>
      </li>
      <li className="footer-menu__li">
        <Link to="/contacts" className="footer-menu__link">
          {t("contacts")}
        </Link>
      </li>
      <li className="footer-menu__li">
        <Link to="/terms-of-service" className="footer-menu__link">
          {t("termsOfService")}
        </Link>
      </li>
      <li className="footer-language">
        <img src={languageIcon} alt="language" />
        <ul className="footer-language__list">
          <li
            onClick={changeLanguage}
            className="footer-menu__li footer-language__li"
            title="kaz"
          >
            Каз
          </li>
          <li
            onClick={changeLanguage}
            className="footer-menu__li footer-language__li"
            title="ru"
          >
            Рус
          </li>
          <li
            onClick={changeLanguage}
            className="footer-menu__li footer-language__li"
            title="en"
          >
            Eng
          </li>
        </ul>
      </li>
    </ul>
  );
}
