// src/components/CourseAustria.jsx
import React from 'react';

const CourseAustria = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <img
              src={`${process.env.PUBLIC_URL}/images/austria.jpg`}
              alt="Austria course"
              className="card-img-top"
            />
            <div className="card-body">
              <h2 className="card-title">Austria Course</h2>
              <p className="card-text">
                Master the German language as spoken in Austria. We focus on the local dialects and Austrian culture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAustria;

