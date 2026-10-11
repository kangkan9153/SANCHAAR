import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem, GalleryCategory } from '../data/gallery';
import { Maximize2, Camera } from 'lucide-react';

interface GalleryProps {
  onOpenLightbox: (item: GalleryItem, index: number) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'PROJECTS', 'WORKSHOPS', 'TEAM', 'EVENTS'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-24 bg-white text-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-[2px] bg-[#1C69D4]" />
              <span className="text-xs font-bold tracking-widest text-[#1C69D4] uppercase">
                VISUAL ARCHIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101923] mb-4 text-balance">
              INSIDE THE SANCHAAR LAB.
            </h2>
            <p className="text-base sm:text-lg text-[#3C3C3C] font-light leading-relaxed">
              A closer look at the people, prototypes, experiments, and moments behind our work.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap gap-2 border border-[#E6E6E6] p-1.5 bg-[#FAFAFA] self-start lg:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#101923] text-white shadow-xs'
                    : 'text-[#6B6B6B] hover:text-[#101923]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, index)}
              className="group relative bg-[#101923] border border-[#E6E6E6] overflow-hidden cursor-pointer h-72 sm:h-80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101923]/90 via-[#101923]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Meta */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-[10px] font-bold tracking-wider uppercase bg-[#101923]/80 px-2 py-0.5">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono text-neutral-300">
                  {item.date}
                </span>
              </div>

              {/* Bottom Details & Expand Icon */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold tracking-tight text-white mb-1 group-hover:text-[#1C69D4] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-light line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-none bg-white/10 group-hover:bg-[#1C69D4] flex items-center justify-center shrink-0 transition-colors">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Archive Note */}
        <div className="mt-8 pt-4 border-t border-[#E6E6E6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#6B6B6B]">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-[#1C69D4]" />
            <span>Documented inside AGEMC Electronics and Communication Engineering Laboratories.</span>
          </div>
          <span className="font-mono text-[11px]">ARCHIVE UPDATED: ACADEMIC SESSION 2026</span>
        </div>
      </div>
    </section>
  );
};
