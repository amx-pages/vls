import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryString = window.location.search; // e.g., "?courses/austria"
    if (queryString) {
      const path = queryString.slice(1); // Remove '?' to get "courses/austria"
      navigate(`/${path}`); // Navigate to "/courses/austria"
    }
  }, [navigate]);

  return null; // No UI for this component
};

function App() {
  return (
    <Router basename="/vns">
      <div className="App">
        <Navbar />
        <RedirectHandler />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses/:courseName" element={<Courses />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

