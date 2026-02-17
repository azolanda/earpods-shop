import React from 'react';
import "./DetailsContainer.css";
import Details from '../UI/details/Details';
import { useTranslation } from 'react-i18next';

export default function DetailsContainer({heading}) {
    const { t } = useTranslation();
    return (
        <div className='center'>
            <h1 className='heading'>{heading}</h1>
            <Details summary = {t("summary1TermsOfService")}>
                <ul className='details-content'>
                    <li className='details-li'>{t("text1TermsOfService")}</li>
                    <li className='details-li'>{t("text2TermsOfService")}</li>
                    <li className='details-li'>{t("text3TermsOfService")}</li>
                    <li className='details-li'>{t("text4TermsOfService")}</li>
                    <li className='details-li'>{t("text5TermsOfService")}</li>
                </ul>
            </Details>
            <Details summary = {t("summary2TermsOfService")}>
                <p className='details-content'>{t("text6TermsOfService")}</p>
                <p className='details-content'>{t("text7TermsOfService")}</p>
                <ul className='details-content'>
                    <li className='details-li'>{t("text8TermsOfService")}</li>
                    <li className='details-li'>{t("text9TermsOfService")}</li>
                </ul>
                <p className='details-content'>{t("text10TermsOfService")}</p>
            </Details>
            <Details summary = {t("summary3TermsOfService")}>
                <p className='details-content'>{t("text11TermsOfService")}</p>
                <p className='details-content'>{t("text12TermsOfService")}</p>
                <p className='details-content cursive-text'>{t("text13TermsOfService")}</p>
            </Details>
        </div>
    )
}
