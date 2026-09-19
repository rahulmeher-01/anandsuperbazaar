import React, { useState } from 'react';
import { GalleryPhoto } from '../types';
import { GALLERY_PHOTOS } from '../data/storeData';
import { Maximize2, Sparkles, Store, Camera } from 'lucide-react';

interface ExperienceGalleryProps {
  onPhotoClick: (photo: GalleryPhoto) => void;
}

export const ExperienceGallery: React.FC<ExperienceGalleryProps> = ({ onPhotoClick }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = ['All', 'Interiors', 'Fresh Produce', 'Staples & Spices', 'Experience'];

  const filteredPhotos = selectedFilter === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === selectedFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F9FAFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-emerald-600" />
              <span>Store Atmosphere</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
              EXPERIENCE ANAND
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Step inside Anand Super Bazaar. Broad aisles, sparkling hygiene, organized displays, and a cheerful neighborhood market atmosphere designed for you.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  selectedFilter === f
                    ? 'bg-[#18181B] text-white shadow-xs'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => {
            const isWide = index === 0 || index === 3;
            return (
              <div
                key={photo.id}
                onClick={() => onPhotoClick(photo)}
                className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-neutral-900 border border-neutral-200 ${
                  isWide ? 'sm:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
                style={{ minHeight: isWide ? '360px' : '300px' }}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none opacity-90 group-hover:opacity-100"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/20">
                    {photo.category}
                  </span>
                </div>

                {/* Floating Expand Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-9 h-9 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4 text-[#D01B27]" />
                  </div>
                </div>

                {/* Photo Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight group-hover:text-amber-300 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2 mt-1 font-normal">
                    {photo.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-500 font-serif italic">
            *Visuals represent typical store departments and fresh counters at Anand Super Bazaar. Visit your nearest store to experience the full assortment.
          </p>
        </div>
      </div>
    </section>
  );
};
