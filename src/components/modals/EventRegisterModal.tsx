import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

interface EventRegisterModalProps {
  event: any | null;
  onClose: () => void;
}

export const EventRegisterModal: React.FC<EventRegisterModalProps> = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNo: '',
    department: 'ECE',
    semester: 'Semester 3 (2nd Year)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (event) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setSubmitted(false);
      setErrorMsg('');
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.rollNo.trim()) {
      setErrorMsg('Please fill in your name, email, and college roll number.');
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    // Generate deterministic ticket code
    const randomHex = Math.floor(100000 + Math.random() * 900000);
    setTicketId(`SANCHAAR-EVT-${randomHex}`);
    setSubmitted(true);
    setErrorMsg('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#101923]/80 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto border border-[#E6E6E6] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white border-b border-[#E6E6E6] px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#1C69D4] block">
              EVENT REGISTRATION DESK
            </span>
            <h3 className="text-base font-bold text-[#101923]">
              {event.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6B6B6B] hover:text-[#101923] hover:bg-[#F7F7F7] transition-colors cursor-pointer"
            aria-label="Close Registration Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {submitted ? (
            /* Successful Registration Ticket */
            <div className="space-y-6 text-center py-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
                <CheckCircle className="w-7 h-7" />
              </div>

              <div>
                <h4 className="text-xl font-extrabold text-[#101923] mb-1">
                  Registration Confirmed
                </h4>
                <p className="text-xs text-[#6B6B6B]">
                  Your seat has been reserved for the upcoming SANCHAAR laboratory session.
                </p>
              </div>

              {/* Digital Pass Box */}
              <div className="bg-[#FAFAFA] border border-[#E6E6E6] p-5 text-left space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-[#E6E6E6] pb-2">
                  <span className="text-[#6B6B6B]">PASS ID:</span>
                  <span className="font-bold text-[#1C69D4]">{ticketId}</span>
                </div>
                <div className="flex justify-between border-b border-[#E6E6E6] pb-2">
                  <span className="text-[#6B6B6B]">PARTICIPANT:</span>
                  <span className="text-[#101923] font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#E6E6E6] pb-2">
                  <span className="text-[#6B6B6B]">COLLEGE ROLL:</span>
                  <span className="text-[#101923]">{formData.rollNo}</span>
                </div>
                <div className="flex justify-between border-b border-[#E6E6E6] pb-2">
                  <span className="text-[#6B6B6B]">SESSION DATE:</span>
                  <span className="text-[#101923]">{event.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6B6B]">VENUE:</span>
                  <span className="text-[#101923] truncate max-w-[200px]">{event.venue}</span>
                </div>
              </div>

              <div className="text-[11px] text-[#6B6B6B] leading-relaxed">
                Please bring your college ID and personal laptop with development software pre-installed as indicated in prerequisites.
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 bg-[#101923] hover:bg-[#1C69D4] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Event Summary Strip */}
              <div className="p-3.5 bg-[#FAFAFA] border border-[#E6E6E6] space-y-1.5 text-xs text-[#3C3C3C]">
                <div className="flex items-center gap-2 text-[#1C69D4] font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{event.date}</span>
                  {event.time && <span>· {event.time}</span>}
                </div>
                <div className="flex items-center gap-2 text-[#6B6B6B]">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{event.venue}</span>
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs">
                  {errorMsg}
                </div>
              )}

              {/* Form Fields */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#101923] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sourav Mukherjee"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs border border-[#E6E6E6] focus:border-[#1C69D4] focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#101923] mb-1.5">
                    College Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@agemc.ac.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-[#E6E6E6] focus:border-[#1C69D4] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#101923] mb-1.5">
                    Roll / Registration No. *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 102024001"
                    value={formData.rollNo}
                    onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-[#E6E6E6] focus:border-[#1C69D4] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#101923] mb-1.5">
                    Department
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-[#E6E6E6] focus:border-[#1C69D4] focus:outline-hidden bg-white"
                  >
                    <option value="ECE">Electronics & Communication (ECE)</option>
                    <option value="CSE">Computer Science & Eng (CSE)</option>
                    <option value="EE">Electrical Engineering (EE)</option>
                    <option value="ME">Mechanical Engineering (ME)</option>
                    <option value="CE">Civil Engineering (CE)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#101923] mb-1.5">
                    Academic Year / Semester
                  </label>
                  <select
                    value={formData.semester}
                    onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-[#E6E6E6] focus:border-[#1C69D4] focus:outline-hidden bg-white"
                  >
                    <option value="Semester 1 (1st Year)">Semester 1 (1st Year)</option>
                    <option value="Semester 2 (1st Year)">Semester 2 (1st Year)</option>
                    <option value="Semester 3 (2nd Year)">Semester 3 (2nd Year)</option>
                    <option value="Semester 4 (2nd Year)">Semester 4 (2nd Year)</option>
                    <option value="Semester 5 (3rd Year)">Semester 5 (3rd Year)</option>
                    <option value="Semester 6 (3rd Year)">Semester 6 (3rd Year)</option>
                    <option value="Semester 7 (4th Year)">Semester 7 (4th Year)</option>
                    <option value="Semester 8 (4th Year)">Semester 8 (4th Year)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#101923] mb-1.5">
                  Questions or Hardware Interests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any prior hardware exposure (e.g. Arduino, ESP32, Python) or questions for the mentors."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs border border-[#E6E6E6] focus:border-[#1C69D4] focus:outline-hidden resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1C69D4] hover:bg-[#0653B6] active:bg-[#04408e] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>CONFIRM WORKSHOP REGISTRATION</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
