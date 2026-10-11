import React, { useState } from 'react';
import { CLUB_EVENTS, ClubEvent, EventCategory } from '../data/events';
import { Calendar, MapPin, Clock, ArrowRight, UserCheck } from 'lucide-react';

interface EventsProps {
  onRegisterEvent: (event: ClubEvent) => void;
  onViewEventDetails: (event: ClubEvent) => void;
}

export const Events: React.FC<EventsProps> = ({ onRegisterEvent, onViewEventDetails }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'WORKSHOPS', 'COMPETITIONS', 'TECHNICAL SESSIONS', 'EXHIBITIONS'];

  const filteredUpcoming = CLUB_EVENTS.filter((e) => {
    if (!e.isUpcoming) return false;
    if (activeCategory === 'ALL') return true;
    return e.category === activeCategory;
  });

  const filteredPast = CLUB_EVENTS.filter((e) => {
    if (e.isUpcoming) return false;
    if (activeCategory === 'ALL') return true;
    return e.category === activeCategory;
  });

  return (
    <section id="events" className="py-24 bg-white text-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-[2px] bg-[#1C69D4]" />
              <span className="text-xs font-bold tracking-widest text-[#1C69D4] uppercase">
                CALENDAR & ACTIVITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101923] mb-4 text-balance">
              WHERE IDEAS COME TOGETHER.
            </h2>
            <p className="text-base sm:text-lg text-[#3C3C3C] font-light leading-relaxed">
              Workshops, technical sessions, competitions, and collaborative experiences that bring engineering to life.
            </p>
          </div>

          {/* Category Filter Tabs - Button Segmented Controls */}
          <div className="flex flex-wrap gap-2 border border-[#E6E6E6] p-1.5 bg-[#FAFAFA] self-start lg:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#101923] text-white shadow-xs'
                    : 'text-[#6B6B6B] hover:text-[#101923]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Informational Sample Notice */}
        <div className="mb-10 px-4 py-3 bg-[#FAFAFA] border border-[#E6E6E6] flex items-center justify-between text-xs text-[#6B6B6B]">
          <span>
            <strong className="text-[#262626] font-semibold">Notice:</strong> The events below illustrate the club's academic schedule structure and can be customized with confirmed AGEMC session dates.
          </span>
          <span className="hidden sm:inline font-mono text-[11px] uppercase">ECE Dept · 2026</span>
        </div>

        {/* Section A: UPCOMING EVENTS */}
        <div className="mb-20">
          <div className="flex items-center justify-between border-b border-[#E6E6E6] pb-4 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#101923] tracking-tight">
              Upcoming Events
            </h3>
            <span className="text-xs font-medium text-[#6B6B6B]">
              Showing {filteredUpcoming.length} active sessions
            </span>
          </div>

          {filteredUpcoming.length === 0 ? (
            <div className="p-12 text-center border border-dashed border-[#E6E6E6] bg-[#FAFAFA]">
              <p className="text-sm text-[#6B6B6B]">
                No upcoming events in this category right now. Check back soon or register your interest!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUpcoming.map((evt) => (
                <div
                  key={evt.id}
                  className="bg-white border border-[#E6E6E6] flex flex-col group hover:border-[#1C69D4] transition-all duration-300"
                >
                  <div className="relative h-48 bg-[#101923] overflow-hidden">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#101923] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1">
                      {evt.category}
                    </div>
                    {evt.registrationStatus && (
                      <div
                        className={`absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 ${
                          evt.registrationStatus === 'REGISTRATION OPEN'
                            ? 'bg-[#1C69D4] text-white'
                            : 'bg-neutral-800 text-neutral-300'
                        }`}
                      >
                        {evt.registrationStatus}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Date & Time Clean Metadata */}
                      <div className="flex items-center gap-2 text-xs text-[#1C69D4] font-semibold tracking-wide mb-2">
                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                        <span>{evt.date}</span>
                        {evt.time && (
                          <>
                            <span aria-hidden="true" className="text-[#E6E6E6]">·</span>
                            <span className="text-[#6B6B6B] flex items-center gap-1 font-normal">
                              <Clock className="w-3 h-3 shrink-0" />
                              {evt.time}
                            </span>
                          </>
                        )}
                      </div>

                      <h4 className="text-lg font-bold text-[#101923] group-hover:text-[#1C69D4] transition-colors mb-2 leading-snug">
                        {evt.title}
                      </h4>

                      <div className="flex items-start gap-1.5 text-xs text-[#6B6B6B] mb-4">
                        <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#262626]" />
                        <span>{evt.venue}</span>
                      </div>

                      <p className="text-xs text-[#3C3C3C] leading-relaxed mb-6 font-light line-clamp-3">
                        {evt.shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E6E6E6] flex items-center justify-between gap-3">
                      <button
                        onClick={() => onViewEventDetails(evt)}
                        className="text-xs font-semibold text-[#6B6B6B] hover:text-[#101923] cursor-pointer"
                      >
                        Details
                      </button>

                      {evt.registrationStatus === 'REGISTRATION OPEN' ? (
                        <button
                          onClick={() => onRegisterEvent(evt)}
                          className="px-4 py-2 text-xs font-bold tracking-wider uppercase text-white bg-[#1C69D4] hover:bg-[#0653B6] active:bg-[#04408e] transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <UserCheck className="w-3.5 h-3.5" />
                          <span>REGISTER</span>
                        </button>
                      ) : (
                        <span className="text-xs text-[#6B6B6B] font-medium uppercase tracking-wider">
                          COMING SOON
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section B: PAST EVENTS */}
        <div>
          <div className="flex items-center justify-between border-b border-[#E6E6E6] pb-4 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#101923] tracking-tight">
              Past Events & Highlights
            </h3>
            <span className="text-xs font-medium text-[#6B6B6B]">
              Documented milestones
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPast.map((evt) => (
              <div
                key={evt.id}
                className="bg-[#FAFAFA] border border-[#E6E6E6] p-6 flex flex-col justify-between group hover:border-[#101923] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#6B6B6B] mb-3">
                    <span className="font-semibold text-[#101923]">{evt.date}</span>
                    <span className="uppercase text-[10px] tracking-wider font-mono">{evt.category}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#101923] group-hover:text-[#1C69D4] transition-colors mb-2 leading-snug">
                    {evt.title}
                  </h4>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4 font-light">
                    {evt.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E6E6]">
                  <button
                    onClick={() => onViewEventDetails(evt)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#101923] hover:text-[#1C69D4] cursor-pointer"
                  >
                    <span>VIEW HIGHLIGHTS</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
