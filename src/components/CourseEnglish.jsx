import React from 'react';

const CourseEnglish = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <img
              src={`${process.env.PUBLIC_URL}/images/english.jpg`}
              alt="English course"
              className="card-img-top"
            />
            <div className="card-body">
              <h2 className="card-title">English Course</h2>
              <p className="card-text">
                Learn English from the basics to advanced levels. Our course covers grammar, speaking, writing, and listening.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseEnglish;

