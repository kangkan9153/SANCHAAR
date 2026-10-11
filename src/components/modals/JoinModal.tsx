import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNo: '',
    department: 'ECE',
    year: '1st Year',
    domainTrack: 'Internet of Things (IoT)',
    statement: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setSubmitted(false);
      setErrorMsg('');
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.rollNo.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg('Please enter a valid academic email.');
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setAppId(`SANCHAAR-MBR-${randomNum}`);
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
        <div className="bg-[#101923] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#1C69D4] uppercase block">
              MEMBERSHIP APPLICATION · AGEMC
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5">
              Join SANCHAAR IoT & Robotics Club
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Join Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            /* Successful Application View */
            <div className="space-y-6 text-center py-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
                <CheckCircle className="w-7 h-7" />
              </div>

              <div>
                <h4 className="text-xl font-extrabold text-[#101923] mb-1">
                  Application Received
                </h4>
                <p className="text-xs text-[#6B6B6B]">
                  Welcome! Your membership application has been submitted to the SANCHAAR Student Core Team and Faculty Coordinator.
                </p>
              </div>

              <div className="bg-[#FAFAFA] border border-[#E6E6E6] p-5 text-left space-y-2.5 font-mono text-xs">
                <div className="flex justify-between border-b border-[#E6E6E6] pb-2">
                  <span className="text-[#6B6B6B]">APPLICANT ID:</span>
                  <span className="font-bold text-[#1C69D4]">{appId}</span>
                </div>
                <div className="flex justify-between border-b border-[#E6E6E6] pb-2">
                  <span className="text-[#6B6B6B]">CANDIDATE:</span>
                  <span className="text-[#101923]">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#E6E6E6] pb-2">
                  <span className="text-[#6B6B6B]">TRACK:</span>
                  <span className="text-[#101923]">{formData.domainTrack}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6B6B]">CAMPUS STATUS:</span>
                  <span className="text-emerald-700 font-semibold">Under Faculty Review</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#F7F7F7] border border-[#E6E6E6] text-[11px] text-[#6B6B6B] text-left">
                <strong>Next Step:</strong> You will receive an invitation email to attend the next orientation and laboratory tour in Room 304, ECE Building.
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 bg-[#101923] hover:bg-[#1C69D4] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            /* Application Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 bg-[#FAFAFA] border border-[#E6E6E6] text-xs text-[#3C3C3C] leading-relaxed">
                Open to all enthusiastic students of <strong>Alipurduar Government Engineering and Management College (AGEMC)</strong> interested in embedded hardware, robotics, and connected devices.
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#101923] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aniket Ray"
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
                    College Roll No. *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 102025012"
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
                    Academic Year
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-[#E6E6E6] focus:border-[#1C69D4] focus:outline-hidden bg-white"
                  >
                    <option value="1st Year">1st Year (Freshers)</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#101923] mb-1.5">
                  Primary Domain Track of Interest
                </label>
                <select
                  value={formData.domainTrack}
                  onChange={(e) => setFormData({ ...formData, domainTrack: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs border border-[#E6E6E6] focus:border-[#1C69D4] focus:outline-hidden bg-white"
                >
                  <option value="Internet of Things (IoT)">Internet of Things (IoT & Wireless)</option>
                  <option value="Robotics & Automation">Robotics & Automation (Chassis, Kinematics & ROS)</option>
                  <option value="Embedded Systems Firmware">Embedded Systems Firmware (STM32, FreeRTOS)</option>
                  <option value="PCB Design & Circuit Fabrication">PCB Design & Circuit Fabrication (KiCad)</option>
                  <option value="Sensors & Signal Acquisition">Sensors & Signal Acquisition (Analog/Op-Amps)</option>
                  <option value="Media, Events & Documentation">Media, Events & Technical Documentation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#101923] mb-1.5">
                  Why do you want to join SANCHAAR?
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us what you'd like to learn or build, any past tinkering projects, or what inspired you."
                  value={formData.statement}
                  onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs border border-[#E6E6E6] focus:border-[#1C69D4] focus:outline-hidden resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1C69D4] hover:bg-[#0653B6] active:bg-[#04408e] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>SUBMIT MEMBERSHIP APPLICATION</span>
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
