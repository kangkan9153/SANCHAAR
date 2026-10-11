import React, { useEffect } from 'react';
import { ClubEvent } from '../../data/events';
import { X, Calendar, MapPin, Clock, CheckCircle2, User, UserCheck } from 'lucide-react';

interface EventDetailsModalProps {
  event: ClubEvent | null;
  onClose: () => void;
  onRegister: (event: ClubEvent) => void;
}

export const EventDetailsModal: React.FC<EventDetailsModalProps> = ({ event, onClose, onRegister }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (event) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#101923]/80 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-[#E6E6E6] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white border-b border-[#E6E6E6] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-wider uppercase bg-[#101923] text-white px-2.5 py-1">
              {event.category}
            </span>
            <span className="text-xs font-mono text-[#6B6B6B]">
              {event.isUpcoming ? 'UPCOMING EVENT' : 'PAST ARCHIVE'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6B6B6B] hover:text-[#101923] hover:bg-[#F7F7F7] transition-colors cursor-pointer"
            aria-label="Close Event Details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero image */}
        <div className="relative h-56 bg-[#101923] shrink-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101923] via-[#101923]/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <h3 className="text-xl font-bold leading-snug">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-[#262626]">
          {/* Logistics Box */}
          <div className="p-4 bg-[#FAFAFA] border border-[#E6E6E6] space-y-2 text-xs">
            <div className="flex items-center gap-2 text-[#1C69D4] font-semibold">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
              {event.time && <span>· {event.time}</span>}
            </div>
            <div className="flex items-center gap-2 text-[#3C3C3C]">
              <MapPin className="w-4 h-4 shrink-0 text-[#262626]" />
              <span>{event.venue}</span>
            </div>
            {event.speakerOrLead && (
              <div className="flex items-center gap-2 text-[#6B6B6B]">
                <User className="w-4 h-4 shrink-0 text-[#262626]" />
                <span>Conducted by: {event.speakerOrLead}</span>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#101923] mb-2">
              Event Overview & Curriculum
            </h4>
            <p className="text-xs text-[#3C3C3C] leading-relaxed font-light">
              {event.fullDesc}
            </p>
          </div>

          {event.prerequisites && (
            <div className="border border-[#E6E6E6] p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#101923] mb-2">
                Prerequisites & Preparation
              </h4>
              <ul className="space-y-1.5 text-xs text-[#3C3C3C] font-light">
                {event.prerequisites.map((pre, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#1C69D4] font-bold">·</span>
                    <span>{pre}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {event.takeaways && (
            <div className="border border-[#E6E6E6] p-4 bg-[#FAFAFA]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#101923] mb-2">
                Key Deliverables & Takeaways
              </h4>
              <ul className="space-y-1.5 text-xs text-[#3C3C3C] font-light">
                {event.takeaways.map((take, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1C69D4] shrink-0" />
                    <span>{take}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#F7F7F7] border-t border-[#E6E6E6] px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-[#E6E6E6] text-xs font-semibold text-[#6B6B6B] hover:text-[#101923] cursor-pointer"
          >
            Close
          </button>

          {event.isUpcoming && event.registrationStatus === 'REGISTRATION OPEN' && (
            <button
              onClick={() => {
                onClose();
                onRegister(event);
              }}
              className="px-6 py-2.5 bg-[#1C69D4] hover:bg-[#0653B6] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Register Now</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
