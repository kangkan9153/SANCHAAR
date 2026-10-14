import React, { useState } from 'react';
import {
  SANCHAAR_POST_BEARERS,
  SANCHAAR_PRE_FINAL,
  SANCHAAR_SECOND_YEAR,
  SanchaarTeamMember,
} from '../data/sanchaarData';
import { MemberDetailModal, ModalMember } from '../components/modals/MemberDetailModal';

interface TeamCardProps extends SanchaarTeamMember {
  onSelect: () => void;
}

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  position,
  yearDept,
  linkedin,
  github,
  onSelect,
}) => {
  return (
    <div
      className="card-team cursor-pointer transition-transform hover:-translate-y-1"
      onClick={onSelect}
      title={`View ${name}'s profile and connections`}
    >
      <div className="pic-team">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="team-content-team">
        <h3 className="title-team">{name}</h3>
        <span className="post-team">{position}</span>
        <span style={{ fontSize: '11px', color: '#888', display: 'block', marginTop: '3px' }}>
          {yearDept}
        </span>
      </div>
      <ul className="social-team">
        <li>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} LinkedIn`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSelect();
            }}
            title={`Connect with ${name} on LinkedIn`}
          >
            <i className="ri-linkedin-box-line" />
          </a>
        </li>
        <li>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} GitHub`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSelect();
            }}
            title={`View ${name} on GitHub`}
          >
            <i className="fa fa-github" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<ModalMember | null>(null);

  return (
    <div className="body-team" style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem' }}>
      {/* Heading */}
      <div className="heading-team">
        <div className="headingmain">Our Team</div>
        <div className="grey-line-team" />
        <div className="coloured-line-team" />
      </div>

      <p style={{ textAlign: 'center', color: '#64748b', fontSize: '15px', maxWidth: '750px', margin: '20px auto 30px', padding: '0 20px' }}>
        Student Innovators, Robotics Engineers, and Embedded Systems Developers of SANCHAAR · AGEMC
      </p>

      <div className="container-team">
        {/* 1. Core Post Bearers / Final Year & Team Heads */}
        <div className="members-team" style={{ width: '100%', textAlign: 'center' }}>
          <div className="teamheading-team">Club Leadership &amp; Domain Heads</div>

          <div className="each-year-team">
            {SANCHAAR_POST_BEARERS.map((member, idx) => (
              <TeamCard
                key={`bearer-${idx}`}
                {...member}
                onSelect={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>

        {/* 2. Senior Coordinators (Pre Final Year) */}
        <div className="members-team" style={{ width: '100%', textAlign: 'center' }}>
          <div className="teamheading-team">Pre-Final Year Senior Coordinators</div>
          <div className="each-year-team">
            {SANCHAAR_PRE_FINAL.map((member, idx) => (
              <TeamCard
                key={`pre-${idx}`}
                {...member}
                onSelect={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>

        {/* 3. Junior Coordinators (Second Year) */}
        <div className="members-team" style={{ width: '100%', textAlign: 'center' }}>
          <div className="teamheading-team">Second Year Junior Coordinators</div>
          <div className="each-year-team">
            {SANCHAAR_SECOND_YEAR.map((member, idx) => (
              <TeamCard
                key={`sec-${idx}`}
                {...member}
                onSelect={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Profile Detail Modal */}
      <MemberDetailModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
};
