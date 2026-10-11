import React, { useState } from 'react';
import { SANCHAAR_EVENTS, SanchaarEvent } from '../data/sanchaarData';

interface EventsProps {
  onNavigate: (path: string) => void;
  onRegisterEvent?: (event: SanchaarEvent) => void;
}

export const Events: React.FC<EventsProps> = ({ onNavigate, onRegisterEvent }) => {
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const categories = ['ALL', 'WORKSHOPS', 'COMPETITIONS', 'TECHNICAL SESSIONS', 'EXHIBITIONS'];

  const filteredEvents = SANCHAAR_EVENTS.filter((evt) => {
    if (filterCategory === 'ALL') return true;
    return evt.category === filterCategory;
  });

  return (
    <div className="event-section" style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem' }}>
      {/* Heading */}
      <div className="heading-event">
        <div className="event-heading-text">Our Events &amp; Workshops</div>
        <div className="grey-line-event" />
        <div className="coloured-line-event" />
      </div>

      {/* Subtitle Description */}
      <div className="event-text">
        The IoT &amp; Robotics Club (SANCHAAR) at Alipurduar Government Engineering and Management College organises hands-on hardware clinics, micro-controller bootcamps, and robotics competitions designed to inspire and prepare young engineers.
      </div>

      {/* Category Filter Controls */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', margin: '25px auto 10px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className="px-4 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
            style={{
              backgroundColor: filterCategory === cat ? '#10bfc5' : '#f1f5f9',
              color: filterCategory === cat ? '#ffffff' : '#475569',
              border: '1px solid #cbd5e1',
              borderRadius: '20px',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Events Cards Container */}
      <div className="card-container-event">
        {filteredEvents.map((event) => (
          <div key={event.id} className="card-event">
            <div className="card-event-image-container relative">
              <img
                src={event.image}
                alt={event.title}
                className="card-event-image"
                loading="lazy"
              />
              <span
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  backgroundColor: '#101923',
                  color: '#10bfc5',
                  fontSize: '10px',
                  fontWeight: 700,
                  padding: '3px 8px',
                  borderRadius: '3px',
                }}
              >
                {event.category}
              </span>
            </div>

            <div className="card-event-details">
              <h2 className="card-event-title" style={{ fontSize: '1.25rem' }}>{event.title}</h2>
              <div style={{ fontSize: '12px', color: '#10bfc5', fontWeight: 600, marginBottom: '8px' }}>
                {event.date}
              </div>
              <p className="card-event-description">{event.description}</p>
            </div>

            <div className="card-event-button flex items-center justify-center gap-3">
              <a
                href={`/events/${event.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/events/${event.slug}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="card-event-link"
              >
                READ MORE
              </a>

              {event.isUpcoming && onRegisterEvent && (
                <button
                  onClick={() => onRegisterEvent(event)}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#101923] text-white hover:bg-[#10bfc5] transition-colors rounded-sm cursor-pointer"
                >
                  Register
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
