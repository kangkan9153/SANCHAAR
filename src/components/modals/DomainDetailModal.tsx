import React, { useEffect } from 'react';
import { TechDomain } from '../../data/domains';
import { X, Wrench, CheckCircle2, Cpu, ArrowRight } from 'lucide-react';

interface DomainDetailModalProps {
  domain: TechDomain | null;
  onClose: () => void;
  onExploreProjects: () => void;
}

export const DomainDetailModal: React.FC<DomainDetailModalProps> = ({
  domain,
  onClose,
  onExploreProjects,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (domain) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [domain, onClose]);

  if (!domain) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#101923]/80 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-[#E6E6E6] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-[#E6E6E6] px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#1C69D4] block">
              SANCHAAR TECHNOLOGY DOMAIN
            </span>
            <h3 className="text-xl font-bold text-[#101923]">
              {domain.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6B6B6B] hover:text-[#101923] hover:bg-[#F7F7F7] transition-colors cursor-pointer"
            aria-label="Close Domain Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero image */}
        <div className="relative h-60 bg-[#101923] shrink-0">
          <img
            src={domain.image}
            alt={domain.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101923] via-[#101923]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-sm text-neutral-200 font-light max-w-xl">
              {domain.shortDesc}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 text-[#262626]">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C69D4] mb-2">
              Domain Scope & Methodology
            </h4>
            <p className="text-sm text-[#3C3C3C] leading-relaxed font-light">
              {domain.fullDesc}
            </p>
          </div>

          {/* Key Tech and Equipment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-[#E6E6E6] p-5 bg-[#FAFAFA]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#101923] mb-3">
                <Cpu className="w-4 h-4 text-[#1C69D4]" />
                <span>Primary Software & Chips</span>
              </div>
              <ul className="space-y-2 text-xs text-[#3C3C3C] font-light">
                {domain.keyTech.map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#1C69D4] shrink-0" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#E6E6E6] p-5 bg-[#FAFAFA]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#101923] mb-3">
                <Wrench className="w-4 h-4 text-[#101923]" />
                <span>Lab Testbench Equipment</span>
              </div>
              <ul className="space-y-2 text-xs text-[#3C3C3C] font-light">
                {domain.equipment.map((eq, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#101923] shrink-0" />
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="border border-[#E6E6E6] p-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#101923] mb-4">
              Student Learning Outcomes
            </h4>
            <ul className="space-y-2.5 text-xs text-[#3C3C3C] font-light">
              {domain.learningOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1C69D4] shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#F7F7F7] border-t border-[#E6E6E6] px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-[#E6E6E6] text-xs font-semibold text-[#6B6B6B] hover:text-[#101923] cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onExploreProjects();
            }}
            className="px-5 py-2.5 bg-[#1C69D4] hover:bg-[#0653B6] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <span>View Related Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
