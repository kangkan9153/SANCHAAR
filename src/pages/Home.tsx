import React, { useState, useEffect } from 'react';
import {
  SANCHAAR_HERO_SLIDES,
  SANCHAAR_EVENTS,
  SANCHAAR_POST_BEARERS,
  SANCHAAR_INFO,
} from '../data/sanchaarData';
import { TECHNOLOGY_DOMAINS } from '../data/domains';
import { CLUB_PROJECTS } from '../data/projects';

interface HomeProps {
  onNavigate: (path: string) => void;
  onOpenJoinModal?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenJoinModal }) => {
  // 1. Hero Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = SANCHAAR_HERO_SLIDES.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 4500);
    return () => clearInterval(timer);
  }, [slideCount]);

  // Featured events (top 4)
  const featuredEvents = SANCHAAR_EVENTS.slice(0, 4);

  // Featured projects (top 3)
  const featuredProjects = CLUB_PROJECTS.slice(0, 3);

  // Post Bearers carousel state
  const [bearerIndex, setBearerIndex] = useState(0);

  const nextBearers = () => {
    setBearerIndex((prev) => (prev + 1) % SANCHAAR_POST_BEARERS.length);
  };

  const prevBearers = () => {
    setBearerIndex((prev) => (prev - 1 + SANCHAAR_POST_BEARERS.length) % SANCHAAR_POST_BEARERS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setBearerIndex((prev) => (prev + 1) % SANCHAAR_POST_BEARERS.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="landing-page" style={{ paddingTop: '4rem' }}>
      {/* 1. Hero Section with Cinematic Carousel */}
      <div className="carousel relative w-full h-[88vh] sm:h-[100vh] overflow-hidden bg-[#101923]">
        {SANCHAAR_HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`carousel-item absolute w-full h-full transition-opacity duration-1000 ${
              currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Dark gradient scrim for legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#101923]/95 via-[#101923]/80 to-[#101923]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101923] via-transparent to-black/40" />

            {/* Hero Text Overlay */}
            <div className="absolute inset-0 flex items-center px-6 sm:px-16 lg:px-24">
              <div className="max-w-3xl text-left text-white">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-8 h-[2px] bg-[#10bfc5]" />
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-[#10bfc5] uppercase">
                    ECE DEPARTMENT · AGEMC
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                  {slide.title}
                </h1>

                <p className="text-sm sm:text-lg text-neutral-300 font-light leading-relaxed mb-8 max-w-2xl">
                  {slide.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate('/projects')}
                    className="px-6 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#10bfc5] hover:bg-[#0e9da2] transition-colors cursor-pointer"
                    style={{ borderRadius: '4px' }}
                  >
                    EXPLORE PROJECTS
                  </button>

                  <button
                    onClick={() => {
                      const el = document.getElementById('arrow-next');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-transparent border border-white/60 hover:bg-white/10 transition-colors cursor-pointer"
                    style={{ borderRadius: '4px' }}
                  >
                    DISCOVER SANCHAAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 pb-2 z-20">
          {SANCHAAR_HERO_SLIDES.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-8 h-1 transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? 'bg-[#10bfc5]' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Carousel Arrow Triggers */}
        <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between z-20 pointer-events-none">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1))}
            className="pointer-events-auto text-white text-3xl hover:text-[#10bfc5] px-4 py-2 bg-black/40 hover:bg-black/70 rounded-full transition-colors cursor-pointer"
            aria-label="Previous Slide"
          >
            ❮
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slideCount)}
            className="pointer-events-auto text-white text-3xl hover:text-[#10bfc5] px-4 py-2 bg-black/40 hover:bg-black/70 rounded-full transition-colors cursor-pointer"
            aria-label="Next Slide"
          >
            ❯
          </button>
        </div>
      </div>

      {/* 2. About Us Section */}
      <div id="arrow-next" className="about-us-section" style={{ padding: '70px 20px', textAlign: 'center' }}>
        <h1 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px' }}>
          <span className="title1">About</span> <span className="title2">Us</span>
        </h1>

        <div className="content">
          {/* Column 1: Who are We? */}
          <div className="column">
            <h2>
              Who are <span>We?</span>
            </h2>
            <p>
              SANCHAAR is the official Internet of Things (IoT) and Robotics Club of the Department of Electronics and Communication Engineering (ECE) at Alipurduar Government Engineering and Management College (AGEMC), West Bengal.
            </p>
            <p style={{ marginTop: '14px' }}>
              We are a student-driven technical society dedicated to transforming classroom circuit theory into working autonomous machines, intelligent embedded systems, and connected sensor platforms.
            </p>
          </div>

          {/* Column 2: What are Our Objectives? */}
          <div className="column">
            <h2>
              What are <span>Our Objectives?</span>
            </h2>
            <ul>
              <li>
                Conduct hands-on workshops and bootcamps on ESP32, STM32, ARM Cortex, and FreeRTOS.
              </li>
              <li>
                Design and race autonomous line-following and obstacle-avoiding mobile robots.
              </li>
              <li>
                Master professional PCB design and schematic development using KiCad.
              </li>
              <li>
                Foster an open lab environment where students build prototypes and publish open research.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Technology Domains Grid Spotlight */}
      <div style={{ backgroundColor: '#f8fafc', padding: '70px 20px', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <h1 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '10px' }}>
              <span className="title1">Our Core</span> <span className="title2">Domains</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: '15px' }}>
              Explore the engineering disciplines driving innovation at the SANCHAAR laboratory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNOLOGY_DOMAINS.map((domain, index) => (
              <div
                key={domain.id}
                onClick={() => onNavigate('/domains')}
                className="bg-white border border-[#e2e8f0] p-6 hover:border-[#10bfc5] transition-all cursor-pointer shadow-xs group"
                style={{ borderRadius: '8px' }}
              >
                <div className="h-44 overflow-hidden mb-4 rounded-sm bg-[#101923]">
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-[#10bfc5] font-bold">0{index + 1}</span>
                  <span className="text-[10px] text-gray-400 uppercase font-semibold">ECE AGEMC</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#10bfc5] transition-colors mb-2">
                  {domain.title}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                  {domain.shortDesc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <button
              onClick={() => onNavigate('/domains')}
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#10bfc5] border border-[#10bfc5] hover:bg-[#10bfc5] hover:text-white transition-colors cursor-pointer rounded-full"
            >
              Explore All 6 Domains →
            </button>
          </div>
        </div>
      </div>

      {/* 4. Featured Events Section */}
      <div className="event-home-section" style={{ padding: '60px 0', backgroundColor: '#0f172a' }}>
        <h1 className="section-title-team" style={{ textAlign: 'center', marginBottom: '30px' }}>
          <span className="title1" style={{ color: '#fff' }}>Featured</span>{' '}
          <span className="title2" style={{ color: '#10bfc5' }}>Events</span>
        </h1>

        <div className="py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 sm:px-12 max-w-7xl mx-auto">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => onNavigate(`/events/${event.slug}`)}
                className="relative rounded-lg shadow-lg overflow-hidden bg-white/5 cursor-pointer group"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-[280px] sm:h-[340px] transition duration-300 ease-in-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#10bfc5] mb-1">
                    {event.category}
                  </span>
                  <span className="text-white text-base font-bold leading-snug">
                    {event.title}
                  </span>
                  <span className="text-neutral-300 text-[11px] font-mono mt-1">
                    {event.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button to /events */}
        <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <button
            onClick={() => {
              onNavigate('/events');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn btn-white text-center flex items-center px-6 py-2.5 rounded-full border-0 shadow-none cursor-pointer"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50px',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span style={{ color: '#00BCD4', fontWeight: '600', fontSize: '20px' }}>Our</span>
            <span style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '20px', marginLeft: '6px' }}>Events</span>
            <span style={{ color: '#00BCD4', fontSize: '20px', marginLeft: '8px' }}>→</span>
          </button>
        </div>
      </div>

      {/* 5. Featured Projects Showcase */}
      <div style={{ backgroundColor: '#ffffff', padding: '70px 20px' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <h1 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '10px' }}>
              <span className="title1">Featured</span> <span className="title2">Projects</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: '15px' }}>
              Tangible electronics and robotics solutions engineered by AGEMC club members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onNavigate('/projects')}
                className="bg-white border border-[#e2e8f0] overflow-hidden hover:border-[#10bfc5] transition-all cursor-pointer shadow-xs group flex flex-col"
                style={{ borderRadius: '8px' }}
              >
                <div className="h-52 bg-[#101923] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#101923] text-[#10bfc5] text-[10px] font-bold px-2.5 py-1">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#10bfc5] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                      {project.shortDesc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#10bfc5] font-bold">
                    <span>VIEW HARDWARE SPECS</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <button
              onClick={() => onNavigate('/projects')}
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#101923] hover:bg-[#10bfc5] transition-colors cursor-pointer rounded-full"
            >
              View All Member Projects →
            </button>
          </div>
        </div>
      </div>

      {/* 6. Post Bearers / Student Leadership Section */}
      <div className="team-home-section" style={{ padding: '60px 0', backgroundColor: '#17202a' }}>
        <h1 className="section-title-team" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="title1" style={{ color: '#fff' }}>Student</span>{' '}
          <span className="title2" style={{ color: '#10bfc5' }}>Leadership</span>
        </h1>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
          {/* Controls */}
          <div className="flex justify-end gap-2 mb-4 px-4">
            <button
              onClick={prevBearers}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#10bfc5] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous Lead"
            >
              ❮
            </button>
            <button
              onClick={nextBearers}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#10bfc5] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next Lead"
            >
              ❯
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {Array.from({ length: 4 }).map((_, i) => {
              const item = SANCHAAR_POST_BEARERS[(bearerIndex + i) % SANCHAAR_POST_BEARERS.length];
              return (
                <div key={`${item.name}-${i}`} className="card-teamhome">
                  <div className="img-bx-teamhome">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="content-teamhome">
                    <div className="detail-teamhome">
                      <h2>
                        {item.name}
                        <br />
                        <span>{item.position}</span>
                      </h2>
                      <ul className="sci-teamhome">
                        <li>
                          <a href={item.linkedin} target="_blank" rel="noreferrer" className="linkedin" aria-label="LinkedIn">
                            <i className="ri-linkedin-box-line" />
                          </a>
                        </li>
                        <li>
                          <a href={item.github} target="_blank" rel="noreferrer" className="instagram" aria-label="GitHub">
                            <i className="fa fa-github" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Button to /team */}
        <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <button
            onClick={() => {
              onNavigate('/team');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn btn-white text-center flex items-center px-6 py-2.5 rounded-full border-0 shadow-none cursor-pointer"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50px',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span style={{ color: '#00BCD4', fontWeight: '600', fontSize: '20px' }}>Meet</span>
            <span style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '20px', marginLeft: '6px' }}>Our</span>
            <span style={{ color: '#00BCD4', fontWeight: '600', fontSize: '20px', marginLeft: '6px' }}>Team</span>
            <span style={{ color: '#00BCD4', fontSize: '20px', marginLeft: '8px' }}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
