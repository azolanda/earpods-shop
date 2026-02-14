import React from 'react';
import "./TotalCart.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function TotalCart({totalSum}) {
  const { t } = useTranslation();

  return (
    <div className='total-cart'>
        <div className='total-container'>
            <h3 className='total-heading'>{t("totalHeading")}</h3>
            <span className="total-sum">₽&nbsp;{totalSum()}</span>
        </div>
        <Link to="/" className='total-button'>{t("totalButton")}</Link>
    </div>
  )
}
