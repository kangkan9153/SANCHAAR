import React from 'react';
import { SANCHAAR_EVENTS, SanchaarEvent } from '../data/sanchaarData';

interface EventDetailProps {
  slug: string;
  onNavigate: (path: string) => void;
  onRegisterEvent?: (event: SanchaarEvent) => void;
}

export const EventDetail: React.FC<EventDetailProps> = ({ slug, onNavigate, onRegisterEvent }) => {
  const event = SANCHAAR_EVENTS.find(
    (e) => e.slug.toLowerCase() === slug.toLowerCase() ||
           e.title.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
  );

  if (!event) {
    return (
      <div className="main-event-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h2>
          <p className="text-gray-600 mb-6">The requested club workshop or session could not be found.</p>
          <button
            onClick={() => onNavigate('/events')}
            className="darksoul-hover-fill-button2"
          >
            Go Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="main-event-section" style={{ minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      <div className="event-details-section">
        {/* Header */}
        <div className="header-event">
          <h1 className="sticky-event">{event.title}</h1>
        </div>

        {/* Main Content */}
        <div className="main-content-event">
          <div className="event-image-event">
            <img
              src={event.image}
              alt={event.title}
              style={{ maxHeight: '380px', width: 'auto', maxWidth: '100%', borderRadius: '8px' }}
            />
          </div>

          <div className="event-details-event" style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, backgroundColor: '#101923', color: '#10bfc5', padding: '4px 10px', borderRadius: '4px' }}>
                {event.category}
              </span>
              {event.registrationStatus && (
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#10bfc5' }}>
                  {event.registrationStatus}
                </span>
              )}
            </div>

            <p className="description-event">
              {event.modaldescription || event.description}
            </p>

            {/* Prerequisites */}
            {event.prerequisites && (
              <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '6px', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#101923', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Prerequisites &amp; Software Needed
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#475569' }}>
                  {event.prerequisites.map((req, idx) => (
                    <li key={idx} style={{ marginBottom: '4px' }}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Takeaways */}
            {event.takeaways && (
              <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '6px', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#101923', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Key Deliverables &amp; Takeaways
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#475569' }}>
                  {event.takeaways.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '4px' }}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <p className="event-info-event">
              {event.date && (
                <>
                  <strong>Date: </strong>
                  {event.date}
                  <br />
                </>
              )}
              {event.time && (
                <>
                  <strong>Time: </strong>
                  {event.time}
                  <br />
                </>
              )}
              {event.venue && (
                <>
                  <strong>Venue: </strong>
                  {event.venue}
                </>
              )}
            </p>
          </div>
        </div>

        {/* Footer with Go Back and Register CTA */}
        <div className="footer-event flex items-center justify-center gap-4">
          <button
            className="darksoul-hover-fill-button2"
            onClick={() => {
              onNavigate('/events');
              try {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } catch {
                window.scrollTo(0, 0);
              }
            }}
            type="button"
          >
            <div className="color-fill-2" />
            <p style={{ margin: 0 }}>Go Back</p>
          </button>

          {event.isUpcoming && onRegisterEvent && (
            <button
              onClick={() => onRegisterEvent(event)}
              className="px-6 py-2.5 bg-[#101923] hover:bg-[#10bfc5] text-white text-sm font-bold uppercase tracking-wider rounded-sm cursor-pointer transition-colors"
            >
              Register Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
