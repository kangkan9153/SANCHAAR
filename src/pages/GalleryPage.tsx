import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gallery';

interface GalleryPageProps {
  onOpenLightbox: (item: GalleryItem, index: number) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'PROJECTS', 'WORKSHOPS', 'TEAM', 'EVENTS'];

  const filtered = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  return (
    <div style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem', backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="heading-team">
          <div className="headingmain">Lab Gallery</div>
          <div className="grey-line-team" />
          <div className="coloured-line-team" />
        </div>

        <p style={{ textAlign: 'center', color: '#64748b', fontSize: '15px', maxWidth: '800px', margin: '20px auto 35px', padding: '0 20px' }}>
          Inside the SANCHAAR Hardware &amp; Robotics Laboratory at Alipurduar Government Engineering and Management College.
        </p>

        {/* Filter Controls */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
              style={{
                backgroundColor: activeCategory === cat ? '#10bfc5' : '#f8fafc',
                color: activeCategory === cat ? '#ffffff' : '#475569',
                border: '1px solid #cbd5e1',
                borderRadius: '20px',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, index)}
              className="group relative bg-[#101923] border border-[#e2e8f0] overflow-hidden cursor-pointer h-72 sm:h-80"
              style={{ borderRadius: '6px' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101923]/90 via-[#101923]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Meta */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-[10px] font-bold tracking-wider uppercase bg-[#101923]/80 px-2 py-0.5 text-[#10bfc5]">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono text-neutral-300">
                  {item.date}
                </span>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-base font-bold tracking-tight text-white mb-1 group-hover:text-[#10bfc5] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 font-light line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
