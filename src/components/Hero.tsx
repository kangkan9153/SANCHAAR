import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { CLUB_IMAGES } from '../assets/images';

interface HeroProps {
  onExploreProjects: () => void;
  onDiscoverAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onDiscoverAbout }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center bg-[#101923] text-white pt-24 pb-16 overflow-hidden"
    >
      {/* Background Cinematic Photo with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={CLUB_IMAGES.heroRoboticsLab}
          alt="High-Tech University Robotics and Embedded Systems Laboratory at AGEMC"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient scrims for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101923] via-[#101923]/85 to-[#101923]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101923] via-transparent to-[#101923]/60" />
        {/* Subtle engineering grid overlay pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-6 h-[2px] bg-[#1C69D4]" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#1C69D4] uppercase">
              ECE DEPARTMENT · AGEMC
            </span>
          </div>

          {/* Main Heading - Refined, Bold, Responsive */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 text-balance">
            BUILDING THE FUTURE, ONE INNOVATION AT A TIME.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-light leading-relaxed mb-10 max-w-2xl">
            SANCHAAR is the IoT and Robotics Club of AGEMC, bringing together curious minds to explore embedded systems, intelligent devices, automation, robotics, and connected technologies.
          </p>

          {/* CTA Button Group - Sharp Rectangular Precision */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExploreProjects}
              className="px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#1C69D4] hover:bg-[#0653B6] active:bg-[#04408e] transition-all flex items-center justify-center gap-3 cursor-pointer shadow-xs"
            >
              <span>EXPLORE OUR PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onDiscoverAbout}
              className="px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-transparent border border-white/70 hover:border-white hover:bg-white/10 active:bg-white/20 transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>DISCOVER SANCHAAR</span>
            </button>
          </div>

          {/* Micro Trust & Mission Line */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400 font-medium">
            <span>Alipurduar, West Bengal</span>
            <span className="text-white/30">·</span>
            <span>Where Electronics Meets Intelligence</span>
            <span className="text-white/30">·</span>
            <span>Connecting Ideas. Engineering the Future.</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group cursor-pointer"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">SCROLL</span>
        <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-[#1C69D4] transition-colors" />
      </a>
    </section>
  );
};
