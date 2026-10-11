import React from 'react';
import { FACULTY_COORDINATORS } from '../data/faculty';
import { GraduationCap, Mail, ShieldCheck } from 'lucide-react';

export const Faculty: React.FC = () => {
  return (
    <div className="mt-20 pt-16 border-t border-[#E6E6E6]">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-5 h-[2px] bg-[#1C69D4]" />
        <span className="text-xs font-bold tracking-widest text-[#1C69D4] uppercase">
          ACADEMIC LEADERSHIP & GUIDANCE
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#101923] tracking-tight">
            Faculty Mentors & Departmental Leadership
          </h3>
          <p className="text-sm text-[#3C3C3C] font-light mt-1">
            Institutional oversight and academic patronage from the ECE Department at AGEMC.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAFAFA] border border-[#E6E6E6] text-[11px] text-[#6B6B6B]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#1C69D4]" />
          <span>Alipurduar Government Engineering and Management College</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FACULTY_COORDINATORS.map((faculty) => (
          <div
            key={faculty.id}
            className="bg-[#FAFAFA] border border-[#E6E6E6] p-8 flex flex-col justify-between group hover:border-[#101923] transition-colors"
          >
            <div>
              {/* Formal Academic Badge */}
              <div className="w-12 h-12 bg-[#101923] text-white flex items-center justify-center mb-6 group-hover:bg-[#1C69D4] transition-colors">
                <GraduationCap className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-bold tracking-widest text-[#1C69D4] uppercase block mb-1">
                {faculty.roleInClub}
              </span>

              <h4 className="text-lg font-bold text-[#101923] mb-1">
                {faculty.name}
              </h4>

              <div className="text-xs text-[#3C3C3C] font-medium mb-1">
                {faculty.designation}
              </div>

              <div className="text-xs text-[#6B6B6B] mb-4">
                {faculty.department}
              </div>

              <p className="text-xs text-[#3C3C3C] leading-relaxed font-light mb-6">
                {faculty.bio}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E6E6E6]">
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#6B6B6B] mb-4">
                <span className="font-semibold text-[#101923]">Domains:</span>
                {faculty.specialization.map((spec, idx) => (
                  <React.Fragment key={idx}>
                    <span>{spec}</span>
                    {idx < faculty.specialization.length - 1 && (
                      <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-[#6B6B6B] font-mono">
                <Mail className="w-3.5 h-3.5 text-[#1C69D4]" />
                <span className="truncate">{faculty.emailPlaceholder}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
