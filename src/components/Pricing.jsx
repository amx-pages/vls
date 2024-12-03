import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Pricing = () => {
  const navigate = useNavigate(); // Initialize navigate for programmatic redirection

  const handleContactClick = (language, level) => {
    // Redirect to the contact page and pass the language and level as state
    navigate('/contact', { state: { text: `${language} - ${level}` } });
  };

  // Course pricing for each language with 3 levels
  const courses = [
    { language: 'English', level: 'Basic Plan (A1-A2)', price: '$0', lessons: '5 language lessons per month' },
    { language: 'English', level: 'Middle Plan (A2-B1)', price: '$15', lessons: '15 language lessons per month' },
    { language: 'English', level: 'Advanced Plan (B2)', price: '$29', lessons: '30 language lessons per month' },
    
    { language: 'Italian', level: 'Basic Plan (A1-A2)', price: '$0', lessons: '5 language lessons per month' },
    { language: 'Italian', level: 'Middle Plan (A2-B1)', price: '$15', lessons: '15 language lessons per month' },
    { language: 'Italian', level: 'Advanced Plan (B2)', price: '$29', lessons: '30 language lessons per month' },
    
    { language: 'German', level: 'Basic Plan (A1-A2)', price: '$0', lessons: '5 language lessons per month' },
    { language: 'German', level: 'Middle Plan (A2-B1)', price: '$15', lessons: '15 language lessons per month' },
    { language: 'German', level: 'Advanced Plan (B2)', price: '$29', lessons: '30 language lessons per month' },
    
    { language: 'Korean', level: 'Basic Plan (Level 1-2)', price: '$0', lessons: '5 language lessons per month' },
    { language: 'Korean', level: 'Middle Plan (Level 2-3)', price: '$15', lessons: '15 language lessons per month' },
    { language: 'Korean', level: 'Advanced Plan (Level 4)', price: '$29', lessons: '30 language lessons per month' }
  ];

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="row mb-3 text-center" style={{ display: 'flex', alignItems: 'stretch' }}>

        {/* Mapping through all courses */}
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
                  <li>Help center access</li>
                </ul>
              </div>
              <div className="card-footer mt-auto">
                <button 
                  type="button" 
                  className="btn btn-lg btn-block btn-primary" // Restored the original blue button style
                  onClick={() => handleContactClick(course.language, course.level)} // Trigger redirection with dynamic language and level
                >
                  Contact us
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
