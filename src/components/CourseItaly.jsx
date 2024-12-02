import React from 'react';

const CourseItaly = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <img
              src={`${process.env.PUBLIC_URL}/images/italy.jpg`}
              alt="Italy course"
              className="card-img-top"
            />
            <div className="card-body">
              <h2 className="card-title">Italy Course</h2>
              <p className="card-text">
                Explore the Italian language and culture. From beginner to advanced, this course will help you master the language.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItaly;

