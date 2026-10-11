import React from 'react';
import { Cpu, Wifi, Bot, Compass, Share2, Layers, ArrowRight } from 'lucide-react';

interface AboutProps {
  onLearnMoreDomains: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnMoreDomains }) => {
  const clubPillars = [
    {
      icon: Wifi,
      title: 'Internet of Things & Connected Nodes',
      desc: 'Exploring wireless networks, telemetry streams, and cloud dashboard architectures.',
    },
    {
      icon: Cpu,
      title: 'Embedded Systems & Microcontrollers',
      desc: 'Mastering bare-metal C/C++, FreeRTOS, and register manipulation across STM32 and ESP32 chips.',
    },
    {
      icon: Bot,
      title: 'Robotics & Automation',
      desc: 'Developing autonomous rovers, inverse kinematics, and closed-loop motor feedback controls.',
    },
    {
      icon: Layers,
      title: 'Real-World ECE Application',
      desc: 'Translating theoretical signal analysis and circuit laws into functional, hardware-tested devices.',
    },
    {
      icon: Compass,
      title: 'Hands-on Experimentation & Prototyping',
      desc: 'Fostering lab culture where failure is a test metric and prototypes evolve through direct bench iteration.',
    },
    {
      icon: Share2,
      title: 'Knowledge Sharing & Mentorship',
      desc: 'Conducting bootcamps, peer-led hardware clinics, and open-source project documentation for all semesters.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white text-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Copy & Pillars */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-[2px] bg-[#1C69D4]" />
              <span className="text-xs font-bold tracking-widest text-[#1C69D4] uppercase">
                WHO WE ARE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101923] mb-4 leading-tight text-balance">
              ENGINEERING CURIOSITY INTO REALITY.
            </h2>

            <p className="text-lg sm:text-xl text-[#3C3C3C] font-normal mb-8 leading-relaxed">
              A community built around technology, experimentation, and innovation.
            </p>

            <div className="prose prose-neutral text-base text-[#3C3C3C] space-y-4 mb-10 leading-relaxed font-light">
              <p>
                SANCHAAR is the official Internet of Things (IoT) and Robotics Club of the Department of Electronics and Communication Engineering (ECE) at Alipurduar Government Engineering and Management College (AGEMC), West Bengal.
              </p>
              <p>
                Founded to bridge the critical interval between academic circuit theorems and production hardware engineering, SANCHAAR operates as an open collaborative incubator. Here, students design schematics, solder micro-components, configure real-time operating system tasks, and build machines that navigate, sense, and communicate autonomously.
              </p>
            </div>

            {/* Core Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {clubPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="flex gap-3">
                    <div className="w-8 h-8 rounded-none bg-[#F7F7F7] border border-[#E6E6E6] flex items-center justify-center shrink-0 text-[#1C69D4]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#101923] mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#6B6B6B] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <button
                onClick={onLearnMoreDomains}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#1C69D4] hover:text-[#0653B6] group cursor-pointer transition-colors"
              >
                <span>LEARN MORE ABOUT US & OUR TECHNOLOGY DOMAINS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Quality Lab Photography & Mission/Vision Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Laboratory Photo with Precision Border */}
            <div className="relative border border-[#E6E6E6] bg-[#FAFAFA] overflow-hidden group">
              <img
                src="/src/assets/images/about_engineering_team_1791620929739.jpg"
                alt="AGEMC Electronics Engineering students testing an autonomous rover in the laboratory"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-[#FAFAFA] border-t border-[#E6E6E6] flex items-center justify-between text-xs text-[#6B6B6B]">
                <span className="font-semibold text-[#262626]">ECE Hardware & Prototyping Lab</span>
                <span>AGEMC Campus</span>
              </div>
            </div>

            {/* Mission Block */}
            <div className="p-6 bg-[#FAFAFA] border border-[#E6E6E6] relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold tracking-widest text-[#1C69D4] uppercase">
                  OUR MISSION
                </span>
                <span className="text-[10px] text-[#6B6B6B]">FOUNDATIONAL CHARTER</span>
              </div>
              <p className="text-sm text-[#3C3C3C] leading-relaxed italic">
                &ldquo;To encourage hands-on learning, technical collaboration, and practical innovation in IoT, robotics, and electronics.&rdquo;
              </p>
            </div>

            {/* Vision Block */}
            <div className="p-6 bg-[#101923] text-white border border-[#1A2533] relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold tracking-widest text-[#1C69D4] uppercase">
                  OUR VISION
                </span>
                <span className="text-[10px] text-neutral-400">LONG-TERM ASPIRATION</span>
              </div>
              <p className="text-sm text-neutral-200 leading-relaxed italic">
                &ldquo;To create an environment where students transform engineering knowledge into intelligent systems and meaningful technological solutions.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
