import React, { useState } from 'react';
import { CLUB_MEMBERS, ClubMember, MemberCategory } from '../data/members';
import { Faculty } from './Faculty';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

export const Members: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'CORE TEAM', 'TECHNICAL TEAM', 'EVENTS TEAM', 'DESIGN TEAM'];

  const filteredMembers = CLUB_MEMBERS.filter((m) => {
    if (activeCategory === 'ALL') return true;
    return m.category === activeCategory;
  });

  return (
    <section id="team" className="py-24 bg-white text-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-[2px] bg-[#1C69D4]" />
              <span className="text-xs font-bold tracking-widest text-[#1C69D4] uppercase">
                STUDENT INNOVATORS & ROSTER
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101923] mb-4 text-balance">
              THE PEOPLE BEHIND THE INNOVATION.
            </h2>
            <p className="text-base sm:text-lg text-[#3C3C3C] font-light leading-relaxed">
              Curious minds, collaborative thinkers, and mentors working together to build something meaningful.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap gap-2 border border-[#E6E6E6] p-1.5 bg-[#FAFAFA] self-start lg:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#101923] text-white shadow-xs'
                    : 'text-[#6B6B6B] hover:text-[#101923]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Informational Sample Notice */}
        <div className="mb-10 px-4 py-3 bg-[#FAFAFA] border border-[#E6E6E6] flex items-center justify-between text-xs text-[#6B6B6B]">
          <span>
            <strong className="text-[#262626] font-semibold">Club Roster Notice:</strong> Representative student designations and interest tracks. AGEMC club administrators can update names and profiles in the data schema.
          </span>
          <span className="hidden sm:inline font-mono text-[11px] uppercase">ECE AGEMC</span>
        </div>

        {/* Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-[#E6E6E6] p-6 flex flex-col justify-between group hover:border-[#1C69D4] transition-all duration-300"
            >
              <div>
                {/* Header with Avatar and Socials */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    style={{ backgroundColor: member.avatarBg }}
                    className="w-14 h-14 flex items-center justify-center text-white text-lg font-bold tracking-tight"
                  >
                    {member.initials}
                  </div>

                  <div className="flex items-center gap-2">
                    {member.githubUrl && (
                      <a
                        href={member.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6B6B6B] hover:text-[#101923] transition-colors p-1"
                        aria-label={`${member.name} GitHub profile`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6B6B6B] hover:text-[#1C69D4] transition-colors p-1"
                        aria-label={`${member.name} LinkedIn profile`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="text-[10px] font-bold tracking-wider text-[#1C69D4] uppercase mb-1">
                  {member.category}
                </div>

                <h3 className="text-base font-bold text-[#101923] mb-1 group-hover:text-[#1C69D4] transition-colors">
                  {member.name}
                </h3>

                <div className="text-xs text-[#3C3C3C] font-medium mb-1">
                  {member.role}
                </div>

                <div className="text-xs text-[#6B6B6B] mb-4">
                  {member.yearDept}
                </div>
              </div>

              {/* Technical Interests - Zero-Pill discipline (Unboxed text with separators) */}
              <div className="pt-4 border-t border-[#E6E6E6]">
                <div className="text-[10px] font-bold uppercase text-[#6B6B6B] tracking-wider mb-1.5">
                  Interests
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#3C3C3C]">
                  {member.techInterests.map((interest, idx) => (
                    <React.Fragment key={idx}>
                      <span>{interest}</span>
                      {idx < member.techInterests.length - 1 && (
                        <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section B: Faculty Mentors Component */}
        <Faculty />
      </div>
    </section>
  );
};
