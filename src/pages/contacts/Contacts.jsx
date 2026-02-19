import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ContactsContainer from "../../components/contacts-container/ContactsContainer";
import { useTranslation } from "react-i18next";

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <div className="wrapper">
      <Header />
      <ContactsContainer heading={t("contacts")} />
      <Footer />
    </div>
  );
}
