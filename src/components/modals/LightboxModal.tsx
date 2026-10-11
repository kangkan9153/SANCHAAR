import React, { useEffect } from 'react';
import { GalleryItem } from '../../data/gallery';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    };
    if (currentItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentItem, currentIndex, items.length, onClose, onNavigate]);

  if (!currentItem) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % items.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#101923]/95 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Bar with Counter and Close Button */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-[#1C69D4] px-2.5 py-1">
            {currentItem.category}
          </span>
          <span className="text-xs font-mono text-neutral-400">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-[#1C69D4] text-white transition-colors cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-[#1C69D4] text-white transition-colors cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Container */}
      <div
        className="relative max-w-5xl w-full flex flex-col items-center max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Display */}
        <div className="relative max-h-[65vh] w-full flex items-center justify-center overflow-hidden bg-black/40 border border-white/10">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[65vh] w-auto max-w-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption Card */}
        <div className="w-full bg-[#1A2533] border border-white/10 p-5 mt-3 text-white text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <h3 className="text-base sm:text-lg font-bold text-white">
              {currentItem.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <Calendar className="w-3.5 h-3.5 text-[#1C69D4]" />
              <span>{currentItem.date}</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
            {currentItem.caption}
          </p>
        </div>

        {/* Mobile Next/Prev buttons below caption */}
        <div className="flex items-center justify-between w-full pt-3 sm:hidden">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-white/10 text-white text-xs font-semibold"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-[#1C69D4] text-white text-xs font-semibold"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
