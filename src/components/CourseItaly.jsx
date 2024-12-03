import React from 'react';

const CourseItaly = () => {
  return (
    <div>
      {/* Existing course container */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg border-0">
              <img
                src={`${process.env.PUBLIC_URL}/images/italy.jpg`}
                alt="Italy course"
                className="card-img-top rounded-3"
              />
              <div className="card-body">
                <h2 className="card-title mb-3 text-center">Italian Course</h2>
                <p className="card-text text-center">
                  Explore the Italian language and culture. From beginner to advanced, this course will help you master the language.
                </p>
                <div className="course-details mt-4">
                  <p><strong>Course Title:</strong> Italian Language for Beginners to Intermediate</p>
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
                      <li><strong>1.</strong> Acquire basic conversational skills.</li>
                      <li><strong>2.</strong> Master Italian pronunciation and grammar.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Learning Goals</h5>
                    <ul className="list-unstyled">
                      <li><strong>3.</strong> Listening, speaking, reading, writing.</li>
                      <li><strong>4.</strong> Gain cultural insights into Italy and Italian-speaking regions.</li>
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
                    Week 1–2: Introduction to Italian
                  </button>
                </h2>
                <div id="collapseWeek1" className="accordion-collapse collapse show" aria-labelledby="headingWeek1" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>Alphabet and pronunciation.</li>
                      <li>Basic greetings and self-introduction.</li>
                      <li>Numbers, dates, and time.</li>
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
                      <li>Asking and giving directions.</li>
                      <li>Shopping vocabulary and phrases.</li>
                      <li>Introducing family and friends.</li>
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
                      <li>Articles and nouns (gender and plural forms).</li>
                      <li>Basic sentence structure (word order).</li>
                      <li>Present tense of regular and irregular verbs.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek7">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek7" aria-expanded="false" aria-controls="collapseWeek7">
                    Week 7–8: Practical Conversations
                  </button>
                </h2>
                <div id="collapseWeek7" className="accordion-collapse collapse" aria-labelledby="headingWeek7" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>Ordering food and drinks in restaurants.</li>
                      <li>Talking about hobbies and daily routines.</li>
                      <li>Weather and small talk.</li>
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
                      <li>Modal verbs (e.g., poter, dovere).</li>
                      <li>Introduction to past tense (Passato prossimo).</li>
                      <li>Prepositions and their cases.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek11">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek11" aria-expanded="false" aria-controls="collapseWeek11">
                    Week 11: Reading and Listening Skills
                  </button>
                </h2>
                <div id="collapseWeek11" className="accordion-collapse collapse" aria-labelledby="headingWeek11" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>Reading short texts and dialogues.</li>
                      <li>Listening comprehension practice (audio clips, short videos).</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek12">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek12" aria-expanded="false" aria-controls="collapseWeek12">
                    Week 12: Final Practice and Assessment
                  </button>
                </h2>
                <div id="collapseWeek12" className="accordion-collapse collapse" aria-labelledby="headingWeek12" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>Role-plays and conversational practice.</li>
                      <li>Writing short paragraphs (e.g., a diary entry).</li>
                      <li>Final review and assessment.</li>
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

export default CourseItaly;
