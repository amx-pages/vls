// src/components/About.jsx
import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';  // Import LanguageContext

function About() {
  // Access the translations from the context
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
                src="https://freefrontend.dev/assets/square.png"
                alt="About Us"
              />
            </div>
          </div>

          <div className="col-md-6 offset-md-1">
            <div className="ms-md-2 ms-lg-5">
              <span className="text-muted">{translations.our_story}</span> {/* Translate this text */}
              <h2 className="display-5 fw-bold">{translations.about_us}</h2> {/* Translate this text */}
              <p className="lead">
                {translations.welcome_text} {/* Translate this text */}
              </p>
              <p className="lead mb-0">
                {translations.school_description} {/* Translate this text */}
              </p>
            </div>
          </div>
        </div>

        {/* Second Section: Text on the left, Image on the right on larger screens; reversed on mobile */}
        <div className="row align-items-center gx-4 mt-5">
          <div className="col-md-6 offset-md-1 order-2 order-md-1">
            <div className="ms-md-2 ms-lg-5">
              <span className="text-muted">{translations.our_vision}</span> {/* Translate this text */}
              <h2 className="display-5 fw-bold">{translations.what_we_stand_for}</h2> {/* Translate this text */}
              <p className="lead">
                {translations.interactive_learning} {/* Translate this text */}
              </p>
            </div>
          </div>

          <div className="col-md-5 order-1 order-md-2">
            <div className="ms-md-2 ms-lg-5">
              <img
                className="img-fluid rounded-3"
                src="https://freefrontend.dev/assets/square.png"
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
                src="https://freefrontend.dev/assets/square.png"
                alt="Our Goals"
              />
            </div>
          </div>

          <div className="col-md-6 offset-md-1">
            <div className="ms-md-2 ms-lg-5">
              <span className="text-muted">{translations.our_goals}</span> {/* Translate this text */}
              <h2 className="display-5 fw-bold">{translations.what_we_aim_to_achieve}</h2> {/* Translate this text */}
              <p className="lead">
                {translations.modern_teaching_methods} {/* Translate this text */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

