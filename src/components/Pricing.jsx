import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';

const Pricing = () => {
  const navigate = useNavigate(); 
  const { translations } = useContext(LanguageContext);

  const handleContactClick = (language, level) => {
    navigate('/contact', { state: { text: `${language} - ${level}` } });
  };

  const courses = [
    { language: translations.pricing_list.english.language, level: translations.pricing_list.english.basic, price: '$0', lessons: '5 language lessons per month' },
    { language: translations.pricing_list.english.language, level: translations.pricing_list.english.middle, price: '$15', lessons: '15 language lessons per month' },
    { language: translations.pricing_list.english.language, level: translations.pricing_list.english.advanced, price: '$29', lessons: '30 language lessons per month' },
    
    { language: translations.pricing_list.ukrainian.language, level: translations.pricing_list.ukrainian.basic, price: '$0', lessons: '5 language lessons per month' },
    { language: translations.pricing_list.ukrainian.language, level: translations.pricing_list.ukrainian.middle, price: '$15', lessons: '15 language lessons per month' },
    { language: translations.pricing_list.ukrainian.language, level: translations.pricing_list.ukrainian.advanced, price: '$29', lessons: '30 language lessons per month' },
    
    { language: translations.pricing_list.german.language, level: translations.pricing_list.german.basic, price: '$0', lessons: '5 language lessons per month' },
    { language: translations.pricing_list.german.language, level: translations.pricing_list.german.middle, price: '$15', lessons: '15 language lessons per month' },
    { language: translations.pricing_list.german.language, level: translations.pricing_list.german.advanced, price: '$29', lessons: '30 language lessons per month' },
    
    { language: translations.pricing_list.korean.language, level: translations.pricing_list.korean.basic, price: '$0', lessons: '5 language lessons per month' },
    { language: translations.pricing_list.korean.language, level: translations.pricing_list.korean.middle, price: '$15', lessons: '15 language lessons per month' },
    { language: translations.pricing_list.korean.language, level: translations.pricing_list.korean.advanced, price: '$29', lessons: '30 language lessons per month' }
  ];

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="row mb-3 text-center" style={{ display: 'flex', alignItems: 'stretch' }}>
        {courses.map((course, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card mb-4 box-shadow d-flex flex-column" style={{ height: '400px' }}>
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">{course.language}</h4>
                <h5 className="my-0 font-weight-normal">{course.level}</h5>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">{course.price} <small className="text-muted">/ mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>{course.lessons}</li>
                  <li>{translations.helpCenter}</li>
                </ul>
              </div>
              <div className="card-footer mt-auto">
                <button 
                  type="button" 
                  className="btn btn-lg btn-block btn-primary"
                  onClick={() => handleContactClick(course.language, course.level)}
                >
                  {translations.contactText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
