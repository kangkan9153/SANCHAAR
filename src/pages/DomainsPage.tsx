import React, { useState } from 'react';
import { TECHNOLOGY_DOMAINS, TechDomain } from '../data/domains';

interface DomainsPageProps {
  onSelectDomain: (domain: TechDomain) => void;
  onNavigate: (path: string) => void;
}

export const DomainsPage: React.FC<DomainsPageProps> = ({ onSelectDomain, onNavigate }) => {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem', backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="heading-team">
          <div className="headingmain">Technology Domains</div>
          <div className="grey-line-team" />
          <div className="coloured-line-team" />
        </div>

        <p style={{ textAlign: 'center', color: '#64748b', fontSize: '15px', maxWidth: '800px', margin: '20px auto 45px', padding: '0 20px' }}>
          Explore the core engineering tracks, research focus areas, and hands-on laboratory curricula at SANCHAAR · AGEMC.
        </p>

        {/* 6 Technology Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECHNOLOGY_DOMAINS.map((domain, index) => (
            <div
              key={domain.id}
              className="bg-white border border-[#e2e8f0] overflow-hidden flex flex-col group hover:border-[#10bfc5] transition-all duration-300 shadow-xs"
              style={{ borderRadius: '8px' }}
            >
              <div className="relative h-52 bg-[#101923] overflow-hidden">
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#101923] text-[#10bfc5] text-xs font-bold font-mono px-2.5 py-1">
                  DOMAIN 0{index + 1}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#10bfc5] transition-colors mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {domain.shortDesc}
                  </p>

                  <div className="mb-4 pt-3 border-t border-gray-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      Key Hardware &amp; Chips:
                    </span>
                    <div className="flex flex-wrap gap-1 text-[11px] text-gray-700">
                      {domain.keyTech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="bg-gray-100 px-2 py-0.5 rounded-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectDomain(domain)}
                    className="text-xs font-bold uppercase tracking-wider text-[#10bfc5] hover:text-[#0e9da2] cursor-pointer"
                  >
                    View Curriculum &amp; Gear →
                  </button>

                  <button
                    onClick={() => onNavigate('/projects')}
                    className="text-xs text-gray-400 hover:text-gray-900 cursor-pointer"
                  >
                    Projects
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
