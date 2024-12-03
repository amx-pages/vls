import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { changeLanguage, language } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  // Translation object example
  const translations = {
    en: {
      english: 'English',
      austrian: 'Austria',
      korean: 'Korea',
      italian: 'Italy',
    },
    de: {
      english: 'Englisch',
      austrian: 'Österreich',
      korean: 'Korea',
      italian: 'Italien',
    },
    ko: {
      english: '영어 (English)',
      austrian: '오스트리아 (Austria)',
      korean: '한국어 (Korean)',
      italian: '이탈리아어 (Italian)',
    },
    it: {
      english: 'Inglese',
      austrian: 'Austria',
      korean: 'Coreano',
      italian: 'Italiano',
    },
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <select onChange={handleLanguageChange} value={language} className="form-select" aria-label="Language selector">
        <option value="en">{translations[language].english}</option>
        <option value="de">{translations[language].austrian}</option>
        <option value="ko">{translations[language].korean}</option>
        <option value="it">{translations[language].italian}</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
