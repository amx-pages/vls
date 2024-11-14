import React from 'react';

function About() {
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
              <span className="text-muted">Our Story</span>
              <h2 className="display-5 fw-bold">About Us</h2>
              <p className="lead">
                Our platform is dedicated to providing quality education to everyone, everywhere. Our expert instructors and industry-aligned curriculum ensure that you gain the skills you need to excel in your career.
              </p>
              <p className="lead mb-0">
                We believe in lifelong learning and strive to make knowledge accessible and engaging. Join our community today and start learning with us!
              </p>
            </div>
          </div>
        </div>

        {/* Second Section: Text on the left, Image on the right on larger screens; reversed on mobile */}
        <div className="row align-items-center gx-4 mt-5">
          <div className="col-md-6 offset-md-1 order-2 order-md-1">
            <div className="ms-md-2 ms-lg-5">
              <span className="text-muted">Our Vision</span>
              <h2 className="display-5 fw-bold">What We Stand For</h2>
              <p className="lead">
                Our mission is to empower individuals through accessible education. We provide a supportive environment where learners of all backgrounds can thrive and reach their full potential.
              </p>
              <p className="lead mb-0">
                We are committed to fostering a community that values growth, collaboration, and continuous learning.
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
              <span className="text-muted">Our Goals</span>
              <h2 className="display-5 fw-bold">What We Aim To Achieve</h2>
              <p className="lead">
                We aim to create a platform where learners can access the best educational resources and enhance their skills. Our goal is to make learning fun, interactive, and accessible to all.
              </p>
              <p className="lead mb-0">
                Our platform is designed to cater to various learning styles and levels, providing opportunities for every learner to succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
