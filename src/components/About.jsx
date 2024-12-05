import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function About() {

  const { translations } = useContext(LanguageContext);

  return (
    <section className="py-5">
      <div className="container">
        {/* First Section: Image on the left, Text on the right */}
        <div className="row align-items-center gx-4 mb-5">
          <div className="col-md-5">
            <div className="ms-md-2 ms-lg-5">
              <img
                className="img-fluid rounded-3"
                src={`${process.env.PUBLIC_URL}/images/about_1.jpg`}
                alt="About Us"
              />
            </div>
          </div>
          <div className="col-md-6 offset-md-1">
            <div className="ms-md-2 ms-lg-5">
              <span className="text-muted">{translations.our_story}</span>
              <h2 className="display-5 fw-bold">{translations.about_us}</h2>
              <p className="lead">
                {translations.welcome_text}
              </p>
              <p className="lead mb-0">
                {translations.school_description}
              </p>
            </div>
          </div>
        </div>

        {/* Second Section: Text on the left, Image on the right on larger screens; reversed on mobile */}
        <div className="row align-items-center gx-4 mt-5">
          <div className="col-md-6 offset-md-1 order-2 order-md-1">
            <div className="ms-md-2 ms-lg-5">
              <span className="text-muted">{translations.our_vision}</span>
              <h2 className="display-5 fw-bold">{translations.what_we_stand_for}</h2>
              <p className="lead">
                {translations.interactive_learning}
              </p>
            </div>
          </div>
          <div className="col-md-5 order-1 order-md-2">
            <div className="ms-md-2 ms-lg-5">
              <img
                className="img-fluid rounded-3"
                src={`${process.env.PUBLIC_URL}/images/about_2.jpg`}
                alt="Our Vision"
              />
            </div>
          </div>
        </div>

        {/* Third Section: Image on the left, Text on the right */}
        <div className="row align-items-center gx-4 mt-5">
          <div className="col-md-5">
            <div className="ms-md-2 ms-lg-5">
              <img
                className="img-fluid rounded-3"
                src={`${process.env.PUBLIC_URL}/images/about_3.jpg`}
                alt="Our Goals"
              />
            </div>
          </div>
          <div className="col-md-6 offset-md-1">
            <div className="ms-md-2 ms-lg-5">
              <span className="text-muted">{translations.our_goals}</span>
              <h2 className="display-5 fw-bold">{translations.what_we_aim_to_achieve}</h2>
              <p className="lead">
                {translations.modern_teaching_methods}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
