import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Linkedin, Github, Mail, Copy, Check, ShieldCheck } from 'lucide-react';

export interface ModalMember {
  name: string;
  position?: string;
  role?: string;
  yearDept: string;
  image?: string;
  linkedin: string;
  github?: string;
  instagram?: string;
  techInterests?: string[];
  category?: string;
}

interface MemberDetailModalProps {
  member: ModalMember | null;
  onClose: () => void;
}

export const MemberDetailModal: React.FC<MemberDetailModalProps> = ({ member, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (member) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  const handleCopyLink = () => {
    const textToCopy = member.linkedin || 'https://agemc.ac.in';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }).catch(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleOpenLinkedIn = () => {
    try {
      window.open(member.linkedin, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = member.linkedin;
    }
  };

  const handleOpenGithub = () => {
    if (!member.github) return;
    try {
      window.open(member.github, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = member.github;
    }
  };

  const titleRole = member.position || member.role || 'Club Member';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#101923]/80 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-lg overflow-hidden border border-[#E6E6E6] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="bg-[#101923] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10bfc5] animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase text-slate-300">
              SANCHAAR TEAM PROFILE
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
            aria-label="Close Profile Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Member Profile Body */}
        <div className="p-6">
          <div className="flex items-start gap-4 mb-6">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-[#10bfc5] shadow-md shrink-0"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-[#101923] text-[#10bfc5] flex items-center justify-center font-bold text-xl border-2 border-[#10bfc5] shrink-0">
                {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
              </div>
            )}

            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-[#101923] truncate">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-[#10bfc5]">
                {titleRole}
              </p>
              <p className="text-xs text-[#6B6B6B] mt-0.5">
                {member.yearDept} · ECE AGEMC
              </p>
              <div className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 bg-slate-100 text-[10px] text-slate-600 font-medium">
                <ShieldCheck className="w-3 h-3 text-[#10bfc5]" />
                <span>Verified Club Coordinator</span>
              </div>
            </div>
          </div>

          {/* Technical Specializations */}
          {member.techInterests && member.techInterests.length > 0 && (
            <div className="mb-6 bg-slate-50 border border-slate-200 p-4 rounded">
              <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase block mb-2">
                Core Competencies &amp; Lab Focus
              </span>
              <div className="flex flex-wrap gap-1.5">
                {member.techInterests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs bg-white text-[#101923] border border-slate-200 font-medium rounded-xs"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Connect & Social Links */}
          <div className="space-y-3">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Professional Connections
            </div>

            {/* LinkedIn Connect Button */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleOpenLinkedIn}
                className="flex-1 flex items-center justify-center gap-2 bg-[#0a66c2] hover:bg-[#004182] text-white py-2.5 px-4 font-semibold text-xs tracking-wide transition-colors cursor-pointer rounded-xs"
                title="Open LinkedIn in a new tab"
              >
                <Linkedin className="w-4 h-4 fill-white" />
                <span>Open LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </button>

              <button
                type="button"
                onClick={handleCopyLink}
                className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 px-3.5 text-xs font-medium transition-colors cursor-pointer rounded-xs border border-slate-200"
                title="Copy LinkedIn URL"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy URL</span>
                  </>
                )}
              </button>
            </div>

            {/* GitHub button if available */}
            {member.github && (
              <button
                type="button"
                onClick={handleOpenGithub}
                className="w-full flex items-center justify-center gap-2 bg-[#24292e] hover:bg-[#1b1f23] text-white py-2.5 px-4 font-semibold text-xs tracking-wide transition-colors cursor-pointer rounded-xs"
                title="Open GitHub profile"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repositories</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </button>
            )}

            {/* Contact via ECE Department */}
            <a
              href={`mailto:sanchaar.club@agemc.ac.in?subject=Enquiry regarding ${encodeURIComponent(member.name)} (${encodeURIComponent(titleRole)})`}
              className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 text-xs font-medium transition-colors rounded-xs border border-slate-200"
            >
              <Mail className="w-3.5 h-3.5 text-[#10bfc5]" />
              <span>Contact via Club Desk (sanchaar.club@agemc.ac.in)</span>
            </a>
          </div>
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-[11px] text-slate-500">
          <span>Alipurduar Government Engineering &amp; Management College</span>
          <span className="text-[#10bfc5] font-semibold">ECE Dept.</span>
        </div>
      </div>
    </div>
  );
};
