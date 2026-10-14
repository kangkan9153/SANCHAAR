import React, { useEffect, useState } from 'react';
import { X, Linkedin, ExternalLink, Copy, Check, Globe, Mail, ShieldCheck } from 'lucide-react';
import { SANCHAAR_INFO } from '../../data/sanchaarData';

interface SocialConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SocialConnectModal: React.FC<SocialConnectModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = () => {
    const url = SANCHAAR_INFO.socials.linkedin || 'https://agemc.ac.in';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
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
      window.open(SANCHAAR_INFO.socials.linkedin, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = SANCHAAR_INFO.socials.linkedin;
    }
  };

  const handleOpenCollege = () => {
    try {
      window.open('https://agemc.ac.in', '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = 'https://agemc.ac.in';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#101923]/80 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-md overflow-hidden border border-[#E6E6E6] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="bg-[#101923] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#0a66c2] flex items-center justify-center text-white text-xs font-bold">
              in
            </div>
            <span className="text-xs font-bold tracking-wider uppercase text-slate-200">
              Connect on LinkedIn
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto mb-3 bg-[#101923] border-2 border-[#10bfc5] rounded-full flex items-center justify-center text-[#10bfc5]">
              <Linkedin className="w-8 h-8 fill-[#10bfc5]" />
            </div>
            <h3 className="text-lg font-bold text-[#101923]">
              SANCHAAR — AGEMC
            </h3>
            <p className="text-xs text-[#10bfc5] font-semibold uppercase mt-0.5">
              IoT &amp; Robotics Club · ECE Department
            </p>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Alipurduar Government Engineering &amp; Management College professional network &amp; student updates.
            </p>
          </div>

          <div className="space-y-3">
            {/* Open LinkedIn */}
            <button
              type="button"
              onClick={handleOpenLinkedIn}
              className="w-full flex items-center justify-between bg-[#0a66c2] hover:bg-[#004182] text-white py-2.5 px-4 font-semibold text-xs transition-colors cursor-pointer rounded-xs"
            >
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 fill-white" />
                <span>Visit LinkedIn Page</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </button>

            {/* Copy Link */}
            <button
              type="button"
              onClick={handleCopy}
              className="w-full flex items-center justify-between bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 px-4 font-medium text-xs transition-colors cursor-pointer rounded-xs border border-slate-200"
            >
              <div className="flex items-center gap-2">
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Link Copied to Clipboard!' : 'Copy LinkedIn Link'}</span>
              </div>
              {copied && <span className="text-[10px] text-emerald-600 font-bold uppercase">Ready to paste</span>}
            </button>

            {/* Official College Portal */}
            <button
              type="button"
              onClick={handleOpenCollege}
              className="w-full flex items-center justify-between bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 px-4 font-medium text-xs transition-colors cursor-pointer rounded-xs border border-slate-200"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#10bfc5]" />
                <span>Visit Official AGEMC Portal (agemc.ac.in)</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </button>

            {/* Email Contact */}
            <a
              href={`mailto:${SANCHAAR_INFO.email}?subject=SANCHAAR LinkedIn & Industry Collaboration`}
              className="w-full flex items-center justify-between bg-slate-50 hover:bg-slate-100 text-slate-600 py-2.5 px-4 text-xs font-medium transition-colors rounded-xs border border-slate-200"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#10bfc5]" />
                <span>Email Club Coordinator</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">{SANCHAAR_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* Modal footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10bfc5]" />
            <span>Alipurduar, West Bengal 736123</span>
          </div>
          <span className="font-semibold text-slate-700">Govt. of West Bengal</span>
        </div>
      </div>
    </div>
  );
};
