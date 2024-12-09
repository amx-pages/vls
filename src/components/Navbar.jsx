import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const { translations } = useContext(LanguageContext);
  
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
  <div className="container">
    {/* Left Section: Logo */}
    <div className="d-flex align-items-center">
      <Link className="navbar-brand fw-bold fs-4" to="/">
        VLS
      </Link>
    </div>

    {/* Mobile Toggle Button */}
    <button
      className="navbar-toggler border-0"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded={!isCollapsed}
      aria-label="Toggle navigation"
      onClick={toggleNavbar}
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Right Section: Menu and LanguageSwitcher */}
    <div
      className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}
      id="navbarNav"
    >
      <div className="d-flex flex-column flex-lg-row align-items-center w-100">
        {/* Centered Menu */}
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link
              className="nav-link fs-5"
              aria-current="page"
              to="/"
              onClick={() => setIsCollapsed(true)}
            >
              {translations.home}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link fs-5"
              to="/about"
              onClick={() => setIsCollapsed(true)}
            >
              {translations.about}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link fs-5"
              to="/pricing"
              onClick={() => setIsCollapsed(true)}
            >
              {translations.pricing}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link fs-5"
              to="/contact"
              onClick={() => setIsCollapsed(true)}
            >
              {translations.contact}
            </Link>
          </li>
        </ul>

        {/* Language Switcher */}
        <div className="d-flex justify-content-center justify-content-lg-end mt-3 mt-lg-0">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
