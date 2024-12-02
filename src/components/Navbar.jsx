import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const { translations } = useContext(LanguageContext);
  
  // Add a state to control the navbar collapse
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed); // Toggle collapse state
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          LEA
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed} // Control collapse state based on our state
          aria-label="Toggle navigation"
          onClick={toggleNavbar} // Toggle the collapse state when button is clicked
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fs-5" aria-current="page" to="/">
                {translations.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/about">
                {translations.about}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/pricing">
                {translations.pricing}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/contact">
                {translations.contact}
              </Link>
            </li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

