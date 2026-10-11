import React, { useState } from 'react';
import { CLUB_PROJECTS, ClubProject } from '../data/projects';

interface ProjectsPageProps {
  onSelectProject: (project: ClubProject) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'IOT', 'ROBOTICS', 'EMBEDDED SYSTEMS', 'PCB DESIGN', 'AUTOMATION'];

  const filtered = CLUB_PROJECTS.filter((p) => {
    if (activeCategory === 'ALL') return true;
    return p.category === activeCategory;
  });

  return (
    <div style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem', backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="heading-team">
          <div className="headingmain">Member Projects</div>
          <div className="grey-line-team" />
          <div className="coloured-line-team" />
        </div>

        <p style={{ textAlign: 'center', color: '#64748b', fontSize: '15px', maxWidth: '800px', margin: '20px auto 35px', padding: '0 20px' }}>
          Physical hardware prototypes, embedded firmware, and autonomous robotics architectures designed and fabricated by SANCHAAR student members.
        </p>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
              style={{
                backgroundColor: activeCategory === cat ? '#10bfc5' : '#ffffff',
                color: activeCategory === cat ? '#ffffff' : '#475569',
                border: '1px solid #cbd5e1',
                borderRadius: '20px',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className="bg-white border border-[#e2e8f0] overflow-hidden flex flex-col group hover:border-[#10bfc5] transition-all duration-300 shadow-xs cursor-pointer"
              style={{ borderRadius: '8px' }}
            >
              <div className="relative h-56 bg-[#101923] overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#101923] text-[#10bfc5] text-xs font-bold px-2.5 py-1">
                  {proj.category}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-[10px] font-mono font-bold px-2 py-0.5">
                  {proj.status}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#10bfc5] transition-colors mb-2 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {proj.shortDesc}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-gray-500 mb-4">
                    <strong className="text-gray-700">Chips:</strong>
                    {proj.hardwareComponents.slice(0, 2).map((hw, idx) => (
                      <span key={idx} className="bg-gray-100 px-1.5 py-0.5 rounded-xs">
                        {hw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-400 text-[11px] font-medium">
                    {proj.contributors[0]}
                  </span>
                  <span className="text-[#10bfc5] font-bold uppercase tracking-wider flex items-center gap-1">
                    Details <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
