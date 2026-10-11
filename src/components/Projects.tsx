import React, { useState } from 'react';
import { CLUB_PROJECTS, ClubProject, ProjectCategory } from '../data/projects';
import { ArrowRight, Cpu, Layers } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: ClubProject) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'IOT', 'ROBOTICS', 'EMBEDDED SYSTEMS', 'PCB DESIGN', 'AUTOMATION'];

  const filteredProjects = CLUB_PROJECTS.filter((proj) => {
    if (activeCategory === 'ALL') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 bg-[#F7F7F7] border-t border-[#E6E6E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-[2px] bg-[#1C69D4]" />
              <span className="text-xs font-bold tracking-widest text-[#1C69D4] uppercase">
                RESEARCH & PROTOTYPES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101923] mb-4 text-balance">
              FROM CONCEPT TO CREATION.
            </h2>
            <p className="text-base sm:text-lg text-[#3C3C3C] font-light leading-relaxed">
              Real experiments. Practical engineering. Ideas brought to life.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap gap-2 border border-[#E6E6E6] p-1.5 bg-white self-start lg:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1C69D4] text-white shadow-xs'
                    : 'text-[#6B6B6B] hover:text-[#101923]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Informational Sample Notice */}
        <div className="mb-10 px-4 py-3 bg-white border border-[#E6E6E6] flex items-center justify-between text-xs text-[#6B6B6B]">
          <span>
            <strong className="text-[#262626] font-semibold">Note:</strong> Representative project builds developed by ECE student cohorts. Click any card to examine schematics, hardware components, and firmware architectures.
          </span>
          <span className="hidden sm:inline font-mono text-[11px] uppercase">ECE Lab · AGEMC</span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-white border border-[#E6E6E6] flex flex-col group hover:border-[#1C69D4] transition-all duration-300 cursor-pointer"
            >
              {/* Cover Image */}
              <div className="relative h-56 bg-[#101923] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#101923] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1">
                  {project.category}
                </div>
                <div className="absolute top-3 right-3 text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 bg-white/95 text-[#262626] border border-[#E6E6E6]">
                  {project.status}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#101923] group-hover:text-[#1C69D4] transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#3C3C3C] font-light leading-relaxed mb-4 line-clamp-3">
                    {project.shortDesc}
                  </p>

                  {/* Clean unboxed metadata with typographic separators (Zero-Pill discipline) */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#6B6B6B] mb-6">
                    <span className="font-medium text-[#101923]">Tech:</span>
                    {project.softwareStack.slice(0, 2).map((stack, idx) => (
                      <React.Fragment key={idx}>
                        <span>{stack}</span>
                        {idx < 1 && <span aria-hidden="true" className="text-[#CBD5E1]">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E6E6E6] flex items-center justify-between text-xs">
                  <span className="text-[#6B6B6B] text-[11px] font-light truncate max-w-[170px]">
                    {project.contributors[0]}
                  </span>
                  <div className="inline-flex items-center gap-1.5 font-bold tracking-wider uppercase text-[#1C69D4] group-hover:text-[#0653B6]">
                    <span>VIEW PROJECT</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
