import React from "react";
import Container from 'react-bootstrap/Container';

function Footer({ darkMode }) {
  return (
    <Container>
      <footer className={`row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5 border-top ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <div className="col mb-3">
          <p className={darkMode ? 'text-light' : 'text-dark'}>© 2025</p>
        </div>
        <div className="col mb-3"></div>
        <div className="col mb-3">
          <h5 className={darkMode ? 'text-light' : 'text-dark'}>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className={`nav-link p-0 ${darkMode ? 'text-light' : 'text-body-secondary'}`}>Home</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className={`nav-link p-0 ${darkMode ? 'text-light' : 'text-body-secondary'}`}>Features</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className={`nav-link p-0 ${darkMode ? 'text-light' : 'text-body-secondary'}`}>Pricing</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className={`nav-link p-0 ${darkMode ? 'text-light' : 'text-body-secondary'}`}>FAQs</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className={`nav-link p-0 ${darkMode ? 'text-light' : 'text-body-secondary'}`}>About</a>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5 className={darkMode ? 'text-light' : 'text-dark'}>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className={`nav-link p-0 ${darkMode ? 'text-light' : 'text-body-secondary'}`}>Home</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className={`nav-link p-0 ${darkMode ? 'text-light' : 'text-body-secondary'}`}>Features</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className={`nav-link p-0 ${darkMode ? 'text-light' : 'text-body-secondary'}`}>Pricing</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className={`nav-link p-0 ${darkMode ? 'text-light' : 'text-body-secondary'}`}>FAQs</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className={`nav-link p-0 ${darkMode ? 'text-light' : 'text-body-secondary'}`}>About</a>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5 className={darkMode ? 'text-light' : 'text-dark'}>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className={`nav-link p-0 ${darkMode ? 'text-light' : 'text-body-secondary'}`}>Home</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className={`nav-link p-0 ${darkMode ? 'text-light' : 'text-body-secondary'}`}>Features</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className={`nav-link p-0 ${darkMode ? 'text-light' : 'text-body-secondary'}`}>Pricing</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className={`nav-link p-0 ${darkMode ? 'text-light' : 'text-body-secondary'}`}>FAQs</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className={`nav-link p-0 ${darkMode ? 'text-light' : 'text-body-secondary'}`}>About</a>
            </li>
          </ul>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;