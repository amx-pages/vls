import React from 'react';

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            {/* Optional logo or icon */}
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <small className="mb-3 mb-md-0 text-muted text-center">
            © 2025 VNS Language School. All Rights Reserved.
          </small>
        </div>

        <div className="col-md-4 text-center">
          <p className="mb-0">
            <i className="bi bi-envelope me-2"></i>
            <a
              href="mailto:radvla14111996@gmail.com"
              className="text-muted text-decoration-none"
            >
              radvla14111996@gmail.com
            </a>
          </p>
          <p className="mb-0">
            <i className="bi bi-telephone me-2"></i>
            <a
              href="tel:+4368181803352"
              className="text-muted text-decoration-none"
            >
              +43 681 8180 3352
            </a>
          </p>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
