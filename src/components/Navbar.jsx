// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const { translations } = useContext(LanguageContext); // Access the current translations

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
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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

