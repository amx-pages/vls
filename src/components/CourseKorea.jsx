import React from 'react';

const CourseKorea = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <img
              src={`${process.env.PUBLIC_URL}/images/korea.jpg`}
              alt="Korea course"
              className="card-img-top"
            />
            <div className="card-body">
              <h2 className="card-title">Korea Course</h2>
              <p className="card-text">
                Learn Korean language and immerse yourself in Korean culture. Our course covers all levels from beginner to advanced.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseKorea;

