import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../component/header.css';

const LanguageOption = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');

  const handleLanguageChange = () => {
    const newLanguage = selectedLanguage === 'en' ? 'po' : 'en';
    setSelectedLanguage(newLanguage);
    localStorage.setItem('selectedLanguage', newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="switch">
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        checked={selectedLanguage === 'en'}
        onChange={handleLanguageChange}
      />
      <label htmlFor="language-toggle"></label>
      <span className="off">EN</span>
      <span className="on">PO</span>
    </div>
  );
};

export default LanguageOption;
