import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext'; // Import the context

const Pricing = () => {
  const navigate = useNavigate(); 
  const { translations } = useContext(LanguageContext); // Access translations from context

  const handleContactClick = (language, level) => {
    navigate('/contact', { state: { text: `${language} - ${level}` } });
  };

  // Course pricing for each language with 3 levels
  const courses = [
    { language: translations.courses.english.language, level: translations.courses.english.basic, price: '$0', lessons: '5 language lessons per month' },
    { language: translations.courses.english.language, level: translations.courses.english.middle, price: '$15', lessons: '15 language lessons per month' },
    { language: translations.courses.english.language, level: translations.courses.english.advanced, price: '$29', lessons: '30 language lessons per month' },
    
    { language: translations.courses.italian.language, level: translations.courses.italian.basic, price: '$0', lessons: '5 language lessons per month' },
    { language: translations.courses.italian.language, level: translations.courses.italian.middle, price: '$15', lessons: '15 language lessons per month' },
    { language: translations.courses.italian.language, level: translations.courses.italian.advanced, price: '$29', lessons: '30 language lessons per month' },
    
    { language: translations.courses.german.language, level: translations.courses.german.basic, price: '$0', lessons: '5 language lessons per month' },
    { language: translations.courses.german.language, level: translations.courses.german.middle, price: '$15', lessons: '15 language lessons per month' },
    { language: translations.courses.german.language, level: translations.courses.german.advanced, price: '$29', lessons: '30 language lessons per month' },
    
    { language: translations.courses.korean.language, level: translations.courses.korean.basic, price: '$0', lessons: '5 language lessons per month' },
    { language: translations.courses.korean.language, level: translations.courses.korean.middle, price: '$15', lessons: '15 language lessons per month' },
    { language: translations.courses.korean.language, level: translations.courses.korean.advanced, price: '$29', lessons: '30 language lessons per month' }
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
