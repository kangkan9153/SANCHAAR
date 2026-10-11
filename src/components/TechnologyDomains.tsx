import React from 'react';
import { TECHNOLOGY_DOMAINS, TechDomain } from '../data/domains';
import { ArrowRight, Cpu, Radio, Bot, Layers, Gauge, BrainCircuit } from 'lucide-react';

interface TechnologyDomainsProps {
  onSelectDomain: (domain: TechDomain) => void;
}

export const TechnologyDomains: React.FC<TechnologyDomainsProps> = ({ onSelectDomain }) => {
  const getDomainIcon = (id: string) => {
    switch (id) {
      case 'iot':
        return Radio;
      case 'robotics':
        return Bot;
      case 'embedded':
        return Cpu;
      case 'pcb':
        return Layers;
      case 'sensors':
        return Gauge;
      case 'intelligent':
        return BrainCircuit;
      default:
        return Cpu;
    }
  };

  return (
    <section id="domains" className="py-24 bg-[#F7F7F7] border-y border-[#E6E6E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-[2px] bg-[#1C69D4]" />
            <span className="text-xs font-bold tracking-widest text-[#1C69D4] uppercase">
              TECHNICAL FOCUS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101923] mb-4 text-balance">
            EXPLORE WHAT WE BUILD.
          </h2>
          <p className="text-base sm:text-lg text-[#3C3C3C] font-light leading-relaxed">
            From connected devices to intelligent machines, discover the technologies that drive our experiments.
          </p>
        </div>

        {/* 6 Feature Cards Grid - Clean Rectangular Precision */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECHNOLOGY_DOMAINS.map((domain, index) => {
            const IconComp = getDomainIcon(domain.id);
            return (
              <div
                key={domain.id}
                className="bg-white border border-[#E6E6E6] flex flex-col group hover:border-[#1C69D4] transition-all duration-300"
              >
                {/* Image Cover with subtle zoom */}
                <div className="relative h-52 overflow-hidden bg-[#101923]">
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#101923]/90 text-white p-2.5 backdrop-blur-xs">
                    <IconComp className="w-4 h-4 text-[#1C69D4]" />
                  </div>
                  <div className="absolute bottom-3 right-3 text-[11px] font-mono text-white/90 bg-black/60 px-2 py-0.5">
                    0{index + 1}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#101923] group-hover:text-[#1C69D4] transition-colors mb-3">
                      {domain.title}
                    </h3>
                    <p className="text-sm text-[#3C3C3C] leading-relaxed mb-6 font-light">
                      {domain.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6E6E6]">
                    <button
                      onClick={() => onSelectDomain(domain)}
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#1C69D4] group-hover:text-[#0653B6] cursor-pointer"
                    >
                      <span>DISCOVER MORE</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
