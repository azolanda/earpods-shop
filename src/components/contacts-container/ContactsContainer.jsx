import React from "react";
import { useTranslation } from "react-i18next";
import address from "../../assets/direction-gps-location-map-navigation-pin.svg";
import call from "../../assets/call-cell-communication-phone-ring-talk.svg";
import envelope from "../../assets/chat-email-envelope-inbox-mail-message.svg";
import "./ContactsContainer.css";
import { Link } from "react-router-dom";

export default function ContactssContainer({ heading }) {
  const { t } = useTranslation();
  return (
    <div className="center page__container">
      <h1 className="heading">{heading}</h1>
      <div className="contacts">
        <div className="contacts__item">
          <img className="contacts__icon" src={address} alt="envelope-icon" />
          <p>{t("address")}</p>
        </div>
        <Link className="contacts__item" to="tel:+7(800)1000800">
          <img className="contacts__icon" src={call} alt="envelope-icon" />8 800
          100 0 800
        </Link>
        <Link className="contacts__item" to="mailto:info@qpick.ru">
          <img className="contacts__icon" src={envelope} alt="envelope-icon" />
          info@qpick.ru
        </Link>
        <div className="contacts__route">
          <h2 className="black-heading">{t("howGet")}</h2>
          <p>{t("howGetText")}</p>
        </div>
      </div>
    </div>
  );
}
