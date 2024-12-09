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
      ukrainian: 'Ukraine',
    },
    de: {
      english: 'Englisch',
      austrian: 'Österreich',
      korean: 'Korea',
      ukrainian: 'Ukraine',
    },
    ko: {
      english: '영어 (English)',
      austrian: '오스트리아 (Austria)',
      korean: '한국어 (Korean)',
      ukrainian: '우크라이나어 (Ukrainian)',
    },
    uk: {
      english: 'Англійська',
      austrian: 'Австрія',
      korean: 'Корейська',
      ukrainian: 'Українська',
    },
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <select onChange={handleLanguageChange} value={language} className="form-select" aria-label="Language selector">
        <option value="en">{translations[language].english}</option>
        <option value="de">{translations[language].austrian}</option>
        <option value="uk">{translations[language].ukrainian}</option>
        <option value="ko">{translations[language].korean}</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
