import React, { useEffect } from 'react';
import { ClubProject } from '../../data/projects';
import { X, ExternalLink, Github, Cpu, Terminal, CheckCircle2, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  project: ClubProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#101923]/80 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-[#E6E6E6] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-[#E6E6E6] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-wider uppercase bg-[#101923] text-white px-2.5 py-1">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#6B6B6B]">
              STATUS: {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#6B6B6B] hover:text-[#101923] hover:bg-[#F7F7F7] transition-colors cursor-pointer"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Hero Banner */}
        <div className="relative h-64 sm:h-80 bg-[#101923] shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101923] via-[#101923]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-2xl">
              {project.shortDesc}
            </p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8 text-[#262626]">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C69D4] mb-2">
              Project Overview
            </h3>
            <p className="text-sm text-[#3C3C3C] leading-relaxed font-light">
              {project.overview}
            </p>
          </div>

          {/* Problem Statement & Objectives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAFAFA] border border-[#E6E6E6] p-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#101923] mb-2">
                <AlertCircle className="w-4 h-4 text-[#1C69D4]" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs text-[#3C3C3C] leading-relaxed font-light">
                {project.problemStatement}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#101923] mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#1C69D4]" />
                <span>Design Objectives</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#3C3C3C] font-light">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#1C69D4] font-bold shrink-0">·</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hardware & Software Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#E6E6E6] p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#101923] mb-3">
                <Cpu className="w-4 h-4 text-[#1C69D4]" />
                <span>Hardware Components</span>
              </div>
              <ul className="space-y-2 text-xs text-[#3C3C3C] font-light">
                {project.hardwareComponents.map((hw, idx) => (
                  <li key={idx} className="flex items-center gap-2 py-1 border-b border-[#F7F7F7] last:border-0">
                    <span className="w-1.5 h-1.5 bg-[#101923] shrink-0" />
                    <span>{hw}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#E6E6E6] p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#101923] mb-3">
                <Terminal className="w-4 h-4 text-[#1C69D4]" />
                <span>Software & Firmware Stack</span>
              </div>
              <ul className="space-y-2 text-xs text-[#3C3C3C] font-light">
                {project.softwareStack.map((sw, idx) => (
                  <li key={idx} className="flex items-center gap-2 py-1 border-b border-[#F7F7F7] last:border-0">
                    <span className="w-1.5 h-1.5 bg-[#1C69D4] shrink-0" />
                    <span>{sw}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Architecture Details */}
          <div className="border border-[#E6E6E6] p-5 bg-[#FAFAFA]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#101923] mb-2">
              System Architecture & Execution Loop
            </h3>
            <p className="text-xs text-[#3C3C3C] leading-relaxed font-light">
              {project.architectureDetails}
            </p>
          </div>

          {/* Contributors & Repositories */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#E6E6E6] text-xs">
            <div>
              <span className="font-semibold text-[#101923]">Contributors: </span>
              <span className="text-[#6B6B6B]">{project.contributors.join(', ')}</span>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-[#101923] text-[#101923] hover:bg-[#101923] hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-wider text-[11px]"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F7F7F7] border-t border-[#E6E6E6] px-6 py-4 flex items-center justify-between text-xs text-[#6B6B6B]">
          <span>SANCHAAR · Department of Electronics & Communication Engineering, AGEMC</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-[#E6E6E6] hover:bg-[#FAFAFA] text-[#262626] font-semibold uppercase tracking-wider text-[11px] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
