import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';

const Home = () => {
  const { translations } = useContext(LanguageContext);

  const languages = [
    { name: translations.pricing_list.german.language, imgSrc: 'austria.jpg', flagSrc: 'austry-flag.png', link: '/courses_austria' },
    { name: translations.pricing_list.english.language, imgSrc: 'english.jpg', flagSrc: 'uc-flag.png', link: '/courses_english' },
    { name: translations.pricing_list.ukrainian.language, imgSrc: 'ukraine.jpg', flagSrc: 'ukraine-flag.png', link: '/courses_ukraine' },
    { name: translations.pricing_list.korean.language, imgSrc: 'korea.jpg', flagSrc: 'korea-flag.png', link: '/courses_korea' },
  ];

  return (
    <div className="text-center py-5">
      <h1 className="display-4 fw-bold">VLS</h1>
      <h1 className="display-4 fw-bold">{translations.languageSchool}</h1>
      <h2 className="lead text-muted mb-5">Vita! Neu! Superb!</h2>
      <div className="container">
        <div className="row g-4 languageGrid">
          {languages.map((language, index) => (
            <div
              key={index}
              className={`col-12 col-md-6 ${index === 0 ? 'col-lg-12 firstCard' : 'col-lg-4'}`}
            >
              <div className="position-relative overflow-hidden rounded-3 shadow-sm languageCard">
                <Link to={language.link}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${language.imgSrc}`}
                    alt={`${language.name} background`}
                    className="img-fluid w-100"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${language.flagSrc}`}
                    alt={`${language.name} flag`}
                    className="position-absolute top-0 start-0 m-2"
                    style={{ width: '50px' }}
                  />
                  <span
                    className="position-absolute bottom-0 start-50 translate-middle-x text-white fw-bold px-3 py-2"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                  >
                    {language.name}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
