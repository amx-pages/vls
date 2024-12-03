import React from 'react';

const CourseKorea = () => {
  return (
    <div>
      {/* Existing course container */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg border-0">
              <img
                src={`${process.env.PUBLIC_URL}/images/korea.jpg`}
                alt="Korea course"
                className="card-img-top rounded-3"
              />
              <div className="card-body">
                <h2 className="card-title mb-3 text-center">Korean Course</h2>
                <p className="card-text text-center">
                  Learn Korean language and immerse yourself in Korean culture. Our course covers all levels from beginner to advanced.
                </p>
                <div className="course-details mt-4">
                  <p><strong>Course Title:</strong> Korean Language for Beginners to Intermediate</p>
                  <p><strong>Duration:</strong> 12 weeks (3 months)</p>
                  <p><strong>Frequency:</strong> 2 sessions per week</p>
                  <p><strong>Session Length:</strong> 1.5 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New text part: Course Objectives and Structure */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h3 className="mb-4 text-center">Course Objectives</h3>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Key Skills</h5>
                    <ul className="list-unstyled">
                      <li><strong>1.</strong> Learn Korean alphabet (Hangul) and basic writing skills.</li>
                      <li><strong>2.</strong> Build foundational conversational skills for everyday use.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Learning Goals</h5>
                    <ul className="list-unstyled">
                      <li><strong>3.</strong> Develop listening, speaking, reading, and writing proficiency.</li>
                      <li><strong>4.</strong> Gain cultural knowledge of Korea, its traditions, and social norms.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <h3 className="mb-4 text-center">Course Structure</h3>
            <div className="accordion" id="courseStructureAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek1">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek1" aria-expanded="true" aria-controls="collapseWeek1">
                    Week 1–2: Introduction to Korean
                  </button>
                </h2>
                <div id="collapseWeek1" className="accordion-collapse collapse show" aria-labelledby="headingWeek1" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>Introduction to Hangul (Korean alphabet).</li>
                      <li>Basic greetings and self-introduction.</li>
                      <li>Numbers, dates, and time expressions.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek3" aria-expanded="false" aria-controls="collapseWeek3">
                    Week 3–4: Everyday Communication
                  </button>
                </h2>
                <div id="collapseWeek3" className="accordion-collapse collapse" aria-labelledby="headingWeek3" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>Asking and giving directions in Korean.</li>
                      <li>Ordering food and drinks in restaurants.</li>
                      <li>Talking about family, hobbies, and daily routines.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek5">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek5" aria-expanded="false" aria-controls="collapseWeek5">
                    Week 5–6: Grammar Essentials I
                  </button>
                </h2>
                <div id="collapseWeek5" className="accordion-collapse collapse" aria-labelledby="headingWeek5" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>Sentence structure and word order.</li>
                      <li>Present tense verbs and common expressions.</li>
                      <li>Introduction to particles (이/가, 은/는, etc.).</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek7">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek7" aria-expanded="false" aria-controls="collapseWeek7">
                    Week 7–8: Conversational Skills
                  </button>
                </h2>
                <div id="collapseWeek7" className="accordion-collapse collapse" aria-labelledby="headingWeek7" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>Ordering in a restaurant and making reservations.</li>
                      <li>Asking for directions and giving information.</li>
                      <li>Daily routines and hobbies conversations.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek9">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek9" aria-expanded="false" aria-controls="collapseWeek9">
                    Week 9–10: Grammar Essentials II
                  </button>
                </h2>
                <div id="collapseWeek9" className="accordion-collapse collapse" aria-labelledby="headingWeek9" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>Past tense verbs (이다, 했다).</li>
                      <li>Negative sentences and informal speech.</li>
                      <li>Conditional expressions and usage.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek11">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek11" aria-expanded="false" aria-controls="collapseWeek11">
                    Week 11: Listening and Reading Comprehension
                  </button>
                </h2>
                <div id="collapseWeek11" className="accordion-collapse collapse" aria-labelledby="headingWeek11" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>Listening exercises for common conversations.</li>
                      <li>Reading short stories and dialogues.</li>
                      <li>Discussions and comprehension tests.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek12">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek12" aria-expanded="false" aria-controls="collapseWeek12">
                    Week 12: Final Review and Assessment
                  </button>
                </h2>
                <div id="collapseWeek12" className="accordion-collapse collapse" aria-labelledby="headingWeek12" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>Role-play activities for conversation practice.</li>
                      <li>Writing essays and short dialogues.</li>
                      <li>Final evaluation and feedback.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseKorea;
