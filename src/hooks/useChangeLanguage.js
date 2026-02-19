import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useChangeLanguage = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const selectLanguage = (language) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
  };

  const changeLanguage = (e) => {
    const elements = document.querySelectorAll(".footer-language__li");
    for (const item of elements) {
      item.classList.remove("footer-language__li--active");
    }
    e.target.classList.add("footer-language__li--active");

    const selectedLanguage = e.target.title;
    selectLanguage(selectedLanguage);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng");
    const savedLanguageElement = document.querySelector(
      `[title=${savedLanguage}]`,
    );
    const commonLanguageElement = document.querySelector('[title="ru"]');

    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
      selectLanguage(savedLanguage);
      savedLanguageElement?.classList.add("footer-language__li--active");
    } else {
      commonLanguageElement?.classList.add("footer-language__li--active");
    }
  }, []);

  return changeLanguage;
};
