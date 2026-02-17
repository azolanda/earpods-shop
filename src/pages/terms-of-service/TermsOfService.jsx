import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import DetailsContainer from '../../components/detailsContainer/DetailsContainer';
import { useTranslation } from 'react-i18next';

export default function TermsOfService() {
    const { t } = useTranslation();

    return (
        <div className="wrapper">
        <Header />
        <DetailsContainer heading = {t("termsOfService")}/>
        <Footer />
        </div>
    )
}