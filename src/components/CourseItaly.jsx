import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const CourseItaly = () => {
  
  const { translations } = useContext(LanguageContext);

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
                <h2 className="card-title mb-3 text-center">{translations.courses.english.title}</h2>
                <p className="card-text text-center">
                  {translations.courses.english.detail}
                </p>
                <div className="course-details mt-4">
                  <p><strong>{translations.courses.tit}</strong>{translations.courses.english.c_tit}</p>
                  <p><strong>{translations.courses.dur}</strong>{translations.courses.english.c_dur}</p>
                  <p><strong>{translations.courses.fre}</strong>{translations.courses.english.c_fre}</p>
                  <p><strong>{translations.courses.ses}</strong>{translations.courses.english.c_ses}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Objectives */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h3 className="mb-4 text-center">{translations.courses.obj}</h3>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{translations.courses.key}</h5>
                    <ul className="list-unstyled">
                      <li><strong>1.</strong>{translations.courses.english.key_1}</li>
                      <li><strong>2.</strong>{translations.courses.english.key_2}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{translations.courses.ler}</h5>
                    <ul className="list-unstyled">
                      <li><strong>3.</strong>{translations.courses.english.ler_1}</li>
                      <li><strong>4.</strong>{translations.courses.english.ler_2}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Structure */}
        <div className="row mt-5">
          <div className="col-md-12">
            <h3 className="mb-4 text-center">{translations.courses.c_s}</h3>
            <div className="accordion" id="courseStructureAccordion">
              {/* Week 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek1">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek1" aria-expanded="true" aria-controls="collapseWeek1">
                    {translations.courses.english.weeks.w1_2}
                  </button>
                </h2>
                <div id="collapseWeek1" className="accordion-collapse collapse show" aria-labelledby="headingWeek1" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>{translations.courses.english.content.c1_1}</li>
                      <li>{translations.courses.english.content.c1_2}</li>
                      <li>{translations.courses.english.content.c1_3}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Week 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek3" aria-expanded="false" aria-controls="collapseWeek3">
                    {translations.courses.english.weeks.w3_4}
                  </button>
                </h2>
                <div id="collapseWeek3" className="accordion-collapse collapse" aria-labelledby="headingWeek3" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>{translations.courses.english.content.c2_1}</li>
                      <li>{translations.courses.english.content.c2_2}</li>
                      <li>{translations.courses.english.content.c2_3}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Week 5 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek5">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek5" aria-expanded="false" aria-controls="collapseWeek5">
                    {translations.courses.english.weeks.w5_6}
                  </button>
                </h2>
                <div id="collapseWeek5" className="accordion-collapse collapse" aria-labelledby="headingWeek5" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>{translations.courses.english.content.c3_1}</li>
                      <li>{translations.courses.english.content.c3_2}</li>
                      <li>{translations.courses.english.content.c3_3}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Week 7 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek7">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek7" aria-expanded="false" aria-controls="collapseWeek7">
                    {translations.courses.english.weeks.w7_8}
                  </button>
                </h2>
                <div id="collapseWeek7" className="accordion-collapse collapse" aria-labelledby="headingWeek7" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>{translations.courses.english.content.c4_1}</li>
                      <li>{translations.courses.english.content.c4_2}</li>
                      <li>{translations.courses.english.content.c4_3}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Week 9 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek9">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek9" aria-expanded="false" aria-controls="collapseWeek9">
                    {translations.courses.english.weeks.w9_10}
                  </button>
                </h2>
                <div id="collapseWeek9" className="accordion-collapse collapse" aria-labelledby="headingWeek9" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>{translations.courses.english.content.c5_1}</li>
                      <li>{translations.courses.english.content.c5_2}</li>
                      <li>{translations.courses.english.content.c5_3}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Week 11 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek11">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek11" aria-expanded="false" aria-controls="collapseWeek11">
                    {translations.courses.english.weeks.w11}
                  </button>
                </h2>
                <div id="collapseWeek11" className="accordion-collapse collapse" aria-labelledby="headingWeek11" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>{translations.courses.english.content.c6_1}</li>
                      <li>{translations.courses.english.content.c6_2}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Week 12 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingWeek12">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek12" aria-expanded="false" aria-controls="collapseWeek12">
                    {translations.courses.english.weeks.w12}
                  </button>
                </h2>
                <div id="collapseWeek12" className="accordion-collapse collapse" aria-labelledby="headingWeek12" data-bs-parent="#courseStructureAccordion">
                  <div className="accordion-body">
                    <ul>
                      <li>{translations.courses.english.content.c7_1}</li>
                      <li>{translations.courses.english.content.c7_2}</li>
                      <li>{translations.courses.english.content.c7_3}</li>
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
