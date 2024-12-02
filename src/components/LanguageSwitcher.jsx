import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
	<div className="d-flex justify-content-center align-items-center">
     <select onChange={handleLanguageChange} className="form-select" aria-label="Language selector">
       <option value="en">English</option>
       <option value="de">Austria</option>
       <option value="ko">Korea</option>
       <option value="it">Italy</option>
     </select>
	</div>
  );
};

export default LanguageSwitcher;

