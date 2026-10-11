import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { DomainsPage } from './pages/DomainsPage';
import { Events } from './pages/Events';
import { EventDetail } from './pages/EventDetail';
import { ProjectsPage } from './pages/ProjectsPage';
import { Faculty } from './pages/Faculty';
import { Team } from './pages/Team';
import { GalleryPage } from './pages/GalleryPage';

// Modals
import { ProjectModal } from './components/modals/ProjectModal';
import { DomainDetailModal } from './components/modals/DomainDetailModal';
import { EventRegisterModal } from './components/modals/EventRegisterModal';
import { JoinModal } from './components/modals/JoinModal';
import { LightboxModal } from './components/modals/LightboxModal';

// Data models
import { ClubProject } from './data/projects';
import { TechDomain } from './data/domains';
import { GALLERY_ITEMS, GalleryItem } from './data/gallery';

/**
 * Normalizes pathname or hash to a standard route path like:
 * '/', '/domains', '/events', '/events/:slug', '/projects', '/faculty', '/team', '/gallery'
 */
function resolveCurrentPath(): string {
  try {
    // 1. Check hash first for SPA hash-routing (#/events or #events)
    const hash = window.location.hash.replace(/^#\/?/, '').trim();
    if (hash) {
      const cleanHash = '/' + hash.split('?')[0].replace(/\/+$/, '');
      return cleanHash === '' ? '/' : cleanHash;
    }

    // 2. Check window.location.pathname
    let pathname = window.location.pathname || '/';
    // Remove query params or index.html
    pathname = pathname.split('?')[0];
    if (pathname === '/index.html' || pathname === '') {
      return '/';
    }
    // Remove trailing slashes (except root '/')
    if (pathname.length > 1 && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }
    return pathname;
  } catch {
    return '/';
  }
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(resolveCurrentPath);

  // Modal states
  const [selectedProject, setSelectedProject] = useState<ClubProject | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<TechDomain | null>(null);
  const [registeringEvent, setRegisteringEvent] = useState<any | null>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState<{ isOpen: boolean; currentIndex: number }>({
    isOpen: false,
    currentIndex: 0,
  });

  const navigate = useCallback((path: string) => {
    // Normalize path
    let target = path.trim();
    if (!target.startsWith('/')) target = '/' + target;
    if (target.length > 1 && target.endsWith('/')) target = target.slice(0, -1);

    // Try pushState; if blocked by iframe sandbox, use hash fallback safely
    try {
      window.history.pushState({}, '', target);
    } catch {
      try {
        window.location.hash = target;
      } catch {
        // Fallback in case hash is also restricted
      }
    }

    setCurrentPath(target);

    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentPath(resolveCurrentPath());
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const handleOpenLightbox = (item: GalleryItem, index: number) => {
    setLightboxState({ isOpen: true, currentIndex: index });
  };

  const handleNavigateLightbox = (newIndex: number) => {
    setLightboxState((prev) => ({ ...prev, currentIndex: newIndex }));
  };

  // Determine which page to render based on path
  const renderPage = () => {
    const normalized = currentPath.toLowerCase();

    if (normalized === '/' || normalized === '' || normalized === '/home') {
      return (
        <Home
          onNavigate={navigate}
          onOpenJoinModal={() => setIsJoinModalOpen(true)}
        />
      );
    }

    if (normalized === '/domains') {
      return (
        <DomainsPage
          onSelectDomain={(domain) => setSelectedDomain(domain)}
          onNavigate={navigate}
        />
      );
    }

    if (normalized === '/events') {
      return (
        <Events
          onNavigate={navigate}
          onRegisterEvent={(evt) => setRegisteringEvent(evt)}
        />
      );
    }

    if (normalized.startsWith('/events/')) {
      const slug = currentPath.slice('/events/'.length).replace(/\/+$/, '');
      return (
        <EventDetail
          slug={slug}
          onNavigate={navigate}
          onRegisterEvent={(evt) => setRegisteringEvent(evt)}
        />
      );
    }

    if (normalized === '/projects') {
      return (
        <ProjectsPage
          onSelectProject={(project) => setSelectedProject(project)}
        />
      );
    }

    if (normalized === '/faculty') {
      return <Faculty />;
    }

    if (normalized === '/team') {
      return <Team />;
    }

    if (normalized === '/gallery') {
      return (
        <GalleryPage
          onOpenLightbox={handleOpenLightbox}
        />
      );
    }

    // Default fallback to Home
    return (
      <Home
        onNavigate={navigate}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />
    );
  };

  return (
    <div className="App min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Sticky Top Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full" style={{ minHeight: 'calc(100vh - 4rem)' }}>
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <DomainDetailModal
        domain={selectedDomain}
        onClose={() => setSelectedDomain(null)}
        onExploreProjects={() => navigate('/projects')}
      />

      <EventRegisterModal
        event={registeringEvent}
        onClose={() => setRegisteringEvent(null)}
      />

      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      {lightboxState.isOpen && (
        <LightboxModal
          items={GALLERY_ITEMS}
          currentIndex={lightboxState.currentIndex}
          onClose={() => setLightboxState({ isOpen: false, currentIndex: 0 })}
          onNavigate={handleNavigateLightbox}
        />
      )}
    </div>
  );
}
