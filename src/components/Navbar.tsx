import React, { useState } from 'react';
import { SANCHAAR_INFO } from '../data/sanchaarData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenJoinModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenJoinModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Domains', path: '/domains' },
    { label: 'Events', path: '/events' },
    { label: 'Projects', path: '/projects' },
    { label: 'Faculty', path: '/faculty' },
    { label: 'Team', path: '/team' },
    { label: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
      {/* Mobile Hamburger toggle */}
      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
        {isOpen ? (
          <div className="cross-icon">
            <div className="line1" />
            <div className="line2" />
          </div>
        ) : (
          <div className="hamburger-icon">
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        )}
      </div>

      <div className="nav-content">
        {/* Brand Logo & Wordmark */}
        <div className="logo1">
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/');
            }}
            className="flex items-center gap-2.5 text-decoration-none"
            style={{ textDecoration: 'none' }}
          >
            {/* High-tech circuit emblem */}
            <div
              style={{
                width: '42px',
                height: '42px',
                backgroundColor: '#101923',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10bfc5',
                border: '1px solid #10bfc5',
              }}
            >
              <svg
                width="24"
                height="24"
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
            <div className="flex flex-col text-left">
              <span
                style={{
                  color: '#101923',
                  fontWeight: 800,
                  fontSize: '18px',
                  letterSpacing: '0.5px',
                  lineHeight: 1,
                }}
              >
                {SANCHAAR_INFO.name}
              </span>
              <span
                style={{
                  color: '#10bfc5',
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  marginTop: '3px',
                }}
              >
                IoT &amp; Robotics · ECE AGEMC
              </span>
            </div>
          </a>
        </div>

        {/* Navigation Links */}
        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          {navLinks.map((item) => {
            const isActive =
              item.path === '/'
                ? currentPath === '/'
                : currentPath.startsWith(item.path);
            return (
              <li key={item.path}>
                <a
                  href={item.path === '/' ? '#/' : `#${item.path}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.path);
                  }}
                  style={{
                    color: isActive ? '#10bfc5' : '#17202a',
                    borderBottom: isActive ? '2px solid #10bfc5' : 'none',
                    paddingBottom: '4px',
                  }}
                >
                  {item.label}
                </a>
              </li>
            );
          })}

          {onOpenJoinModal && (
            <li className="block sm:hidden pt-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenJoinModal();
                }}
                className="px-5 py-2 bg-[#10bfc5] text-white text-xs font-bold rounded-full uppercase"
              >
                Join SANCHAAR
              </button>
            </li>
          )}
        </ul>

        {/* Desktop CTA Action */}
        {onOpenJoinModal && (
          <div className="hidden lg:flex items-center pr-6">
            <button
              onClick={onOpenJoinModal}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer shadow-xs"
              style={{
                backgroundColor: '#10bfc5',
                borderRadius: '4px',
                border: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0e9da2')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#10bfc5')}
            >
              Join SANCHAAR
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
