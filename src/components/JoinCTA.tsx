import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface JoinCTAProps {
  onOpenJoinModal: () => void;
  onExploreProjects: () => void;
}

export const JoinCTA: React.FC<JoinCTAProps> = ({ onOpenJoinModal, onExploreProjects }) => {
  return (
    <section className="py-24 bg-[#101923] text-white relative overflow-hidden border-t border-[#1A2533]">
      {/* Subtle background matrix pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-4xl mx-auto sm:mx-0">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-6 h-[2px] bg-[#1C69D4]" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#1C69D4] uppercase">
              STUDENT ADMISSIONS & RECRUITMENT · AGEMC
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight text-balance">
            YOUR NEXT BIG IDEA STARTS HERE.
          </h2>

          <p className="text-base sm:text-xl text-neutral-300 font-light leading-relaxed mb-8 max-w-2xl">
            Interested in IoT, robotics, embedded systems, or electronics? Learn, experiment, collaborate, and build with SANCHAAR.
          </p>

          <div className="text-xs uppercase tracking-widest text-[#1C69D4] font-bold mb-10">
            Think. Build. Test. Innovate.
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenJoinModal}
              className="px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#1C69D4] hover:bg-[#0653B6] active:bg-[#04408e] transition-all flex items-center justify-center gap-3 cursor-pointer shadow-xs"
            >
              <span>JOIN SANCHAAR</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreProjects}
              className="px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-transparent border border-white/60 hover:border-white hover:bg-white/10 active:bg-white/20 transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>EXPLORE OUR WORK</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
