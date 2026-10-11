import React from 'react';
import { SANCHAAR_FACULTY } from '../data/sanchaarData';

export const Faculty: React.FC = () => {
  return (
    <div className="rprofessors" style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '100vh' }}>
      {/* Heading */}
      <div className="heading-faculty">
        <div className="facultyheading">Our Faculty Mentors</div>
        <div className="grey-line-faculty" />
        <div className="coloured-line-faculty" />
      </div>

      <p style={{ textAlign: 'center', color: '#64748b', fontSize: '15px', maxWidth: '750px', margin: '20px auto 0', padding: '0 20px' }}>
        Department of Electronics &amp; Communication Engineering (ECE) · Alipurduar Government Engineering and Management College (AGEMC)
      </p>

      {/* Grid of faculty mentors */}
      <div className="rall-prof" style={{ marginTop: '40px' }}>
        {SANCHAAR_FACULTY.map((prof) => (
          <div key={prof.id} className="rprof-card">
            <div className="lines" />
            <div className="imgBx">
              <img
                className="each-prof"
                src={prof.image}
                alt={prof.name}
                loading="lazy"
              />
            </div>
            <div className="contxt">
              <div className="dtls">
                <h2>
                  {prof.name}
                  <br />
                  <span style={{ color: '#10bfc5', fontWeight: 600 }}>{prof.designation}</span>
                  <br />
                  <span style={{ fontSize: '12px', color: '#777' }}>{prof.roleInClub}</span>
                </h2>

                <div className="rprof-links">
                  <ul className="sci">
                    <li>
                      <a href={`mailto:${prof.email}`} aria-label={`Email ${prof.name}`}>
                        <i className="fa fa-envelope" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/school/alipurduar-government-engineering-and-management-college/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="AGEMC Faculty LinkedIn Directory"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="tBtn">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `mailto:${prof.email}`;
                    }}
                  >
                    Contact Mentor
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
