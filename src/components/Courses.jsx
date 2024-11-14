// src/components/CoursePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const { courseName } = useParams();  // Capture the course name from the URL
  
  const courseDetails = {
    english: {
      image: '/images/english.jpg',
      text: 'Learn English with our expert instructors. Improve your speaking, writing, and listening skills.'
    },
    italy: {
      image: '/images/italy.jpg',
      text: 'Explore Italian language and culture. Join our classes to immerse yourself in the Italian way of life.'
    },
    austria: {
      image: '/images/austria.jpg',
      text: 'Master the German language as spoken in Austria. We focus on the local dialects and Austrian culture.'
    },
    korea: {
      image: '/images/korea.jpg',
      text: 'Learn Korean with native speakers. Whether for travel or work, our courses will equip you with essential skills.'
    }
  };

  const course = courseDetails[courseName.toLowerCase()];

  return (
    <div className="container py-5">
      {course ? (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg">
              <img src={course.image} alt={`${courseName} course`} className="card-img-top" />
              <div className="card-body">
                <h2 className="card-title">{courseName.charAt(0).toUpperCase() + courseName.slice(1)}</h2>
                <p className="card-text">{course.text}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-danger" role="alert">
          Course not found!
        </div>
      )}
    </div>
  );
};

export default CoursePage;
