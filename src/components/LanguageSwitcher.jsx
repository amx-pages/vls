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
      ukrainian: 'Ukraine',
      italian: 'Italian',
      korean: 'Korea',
    },
    de: {
      english: 'Englisch',
      austrian: 'Österreich',
      ukrainian: 'Ukraine',
      italian: 'Italienisch',
      korean: 'Korea',
    },
    uk: {
      english: 'Англійська',
      austrian: 'Австрія',
      ukrainian: 'Українська',
      italian: 'Італійська',
      korean: 'Корейська',
    },
    it: {
      english: 'Inglese',
      austrian: 'Austria',
      ukrainian: 'Ukraniano',
      italian: 'Italiano',
      korean: 'Coreano',
    },
    ko: {
      english: '영어 (English)',
      austrian: '오스트리아 (Austria)',
      ukrainian: '우크라이나어 (Ukrainian)',
      italian: '이탈리아어 (Italian)',
      korean: '한국어 (Korean)',
    },
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <select onChange={handleLanguageChange} value={language} className="form-select" aria-label="Language selector">
        <option value="en">{translations[language].english}</option>
        <option value="de">{translations[language].austrian}</option>
        <option value="uk">{translations[language].ukrainian}</option>
        <option value="it">{translations[language].italian}</option>
        <option value="ko">{translations[language].korean}</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
