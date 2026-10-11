import React from 'react';
import { SANCHAAR_INFO } from '../data/sanchaarData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [shareToast, setShareToast] = React.useState<string | null>(null);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  const handleShareLinkedIn = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const currentUrl = typeof window !== 'undefined' && window.location ? window.location.href.split('#')[0] : 'https://agemc.ac.in';
      const isLocal = currentUrl.includes('localhost') || currentUrl.includes('127.0.0.1');
      const shareUrl = isLocal ? 'https://agemc.ac.in' : currentUrl;
      const shareEndpoint = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(currentUrl).catch(() => {});
      }

      window.open(shareEndpoint, '_blank', 'noopener,noreferrer');
      setShareToast('URL copied to clipboard! Opening LinkedIn share dialog...');
      setTimeout(() => setShareToast(null), 4000);
    } catch {
      window.open(SANCHAAR_INFO.socials.linkedin, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer>
      {/* Toast Notification */}
      {shareToast && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: '#101923',
            color: '#10bfc5',
            padding: '12px 20px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 600,
            boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
            border: '1px solid #10bfc5',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <i className="fa fa-check-circle" />
          <span>{shareToast}</span>
        </div>
      )}

      <div className="footer-cols">
        {/* Brand & Social Column */}
        <div className="logo_social">
          <div className="logo2 flex items-center gap-3 mb-2">
            <div
              style={{
                width: '38px',
                height: '38px',
                backgroundColor: '#101923',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10bfc5',
                border: '1px solid #10bfc5',
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M5 12h4" />
                <path d="M15 12h4" />
                <path d="M12 5v4" />
                <path d="M12 15v4" />
                <circle cx="4" cy="12" r="1.5" />
                <circle cx="20" cy="12" r="1.5" />
              </svg>
            </div>
            <div>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#101923' }}>
                {SANCHAAR_INFO.name}
              </span>
              <p style={{ fontSize: '11px', color: '#10bfc5', fontWeight: 700, margin: 0, textTransform: 'uppercase' }}>
                IoT &amp; Robotics Club · ECE AGEMC
              </p>
            </div>
          </div>

          <div className="col col-social" style={{ paddingLeft: '25px', paddingTop: '10px' }}>
            <p style={{ fontSize: '13px', color: '#555', marginBottom: '15px', maxWidth: '320px', lineHeight: '1.5' }}>
              Department of Electronics and Communication Engineering, Alipurduar Government Engineering and Management College.
            </p>

            <h3>
              Follow Us
              <div className="underline">
                <span />
              </div>
            </h3>
            <p style={{ marginTop: '10px' }} className="flex flex-wrap items-center gap-2">
              <a
                href={SANCHAAR_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SANCHAAR at AGEMC on LinkedIn"
                title="Connect with AGEMC on LinkedIn"
              >
                <i className="fa fa-linkedin" />
              </a>
              <a
                href={SANCHAAR_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="SANCHAAR GitHub Repositories"
              >
                <i className="fa fa-github" />
              </a>
              <a
                href={SANCHAAR_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="SANCHAAR Instagram"
              >
                <i className="fa fa-instagram" />
              </a>
              <a
                href={`mailto:${SANCHAAR_INFO.email}`}
                aria-label="Email SANCHAAR"
                title="Email SANCHAAR"
              >
                <i className="fa fa-envelope" />
              </a>
            </p>
            <div style={{ marginTop: '12px' }}>
              <button
                type="button"
                onClick={handleShareLinkedIn}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: '11px',
                }}
                title="Share SANCHAAR on LinkedIn"
              >
                <i className="fa fa-linkedin" style={{ color: '#0a66c2' }} />
                <span>Share on LinkedIn</span>
              </button>
            </div>
          </div>
        </div>

        {/* Official Contact Column */}
        <div className="col col-contact">
          <div className="footer-widget-heading">
            <h3>
              Official Contact{' '}
              <div className="underline">
                <span />
              </div>
            </h3>
          </div>
          <ul>
            <li>
              <strong>General Club Enquiries:</strong>
              <br />
              <i className="fa fa-envelope" style={{ color: '#10bfc5' }} />{' '}
              <a href={`mailto:${SANCHAAR_INFO.email}`} style={{ color: '#333', textDecoration: 'none' }}>
                {SANCHAAR_INFO.email}
              </a>
            </li>
            <li>
              <strong>Departmental Office:</strong>
              <br />
              <i className="fa fa-phone" style={{ color: '#10bfc5' }} /> {SANCHAAR_INFO.phoneDesk}
            </li>
            <li>
              <strong>Campus Location:</strong>
              <br />
              <i className="fa fa-map-marker" style={{ color: '#10bfc5' }} />{' '}
              {SANCHAAR_INFO.campusAddress}
            </li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="col col-link">
          <h3>
            Quick Links
            <div className="underline">
              <span />
            </div>
          </h3>
          <ul>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('/');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/domains"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('/domains');
                }}
              >
                Technology Domains
              </a>
            </li>
            <li>
              <a
                href="/events"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('/events');
                }}
              >
                Events &amp; Workshops
              </a>
            </li>
            <li>
              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('/projects');
                }}
              >
                Member Projects
              </a>
            </li>
            <li>
              <a
                href="/faculty"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('/faculty');
                }}
              >
                Faculty Mentors
              </a>
            </li>
            <li>
              <a
                href="/team"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('/team');
                }}
              >
                Student Team
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('/gallery');
                }}
              >
                Lab Gallery
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="rcopyRight">
        <p>
          <i className="fa fa-copyright" /> 2026 SANCHAAR | IoT &amp; Robotics Club, AGEMC.
          <br />
          Designed and Developed by <b style={{ color: 'black' }}>ECE Student Web Team</b>.
        </p>
      </div>
    </footer>
  );
};
