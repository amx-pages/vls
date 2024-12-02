import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import CourseAustria from './components/CourseAustria';
import CourseEnglish from './components/CourseEnglish';
import CourseItaly from './components/CourseItaly';
import CourseKorea from './components/CourseKorea';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router basename="/vns">
      <div className="App">
        <Navbar />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses_austria" element={<CourseAustria />} />
            <Route path="/courses_english" element={<CourseEnglish />} />
            <Route path="/courses_italy" element={<CourseItaly />} />
            <Route path="/courses_korea" element={<CourseKorea />} />
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

