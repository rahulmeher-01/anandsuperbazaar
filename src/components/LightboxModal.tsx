import React, { useEffect } from 'react';
import { GalleryPhoto } from '../types';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onNavigate: (photo: GalleryPhoto) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photos,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        const idx = photos.findIndex((p) => p.id === photo.id);
        if (idx < photos.length - 1) onNavigate(photos[idx + 1]);
      }
      if (e.key === 'ArrowLeft') {
        const idx = photos.findIndex((p) => p.id === photo.id);
        if (idx > 0) onNavigate(photos[idx - 1]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, photos, onClose, onNavigate]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(photos[currentIndex - 1]);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all focus:outline-none"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Button */}
      {currentIndex < photos.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(photos[currentIndex + 1]);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all focus:outline-none"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Content Container */}
      <div
        className="relative max-w-5xl w-full max-h-[88vh] flex flex-col rounded-xl overflow-hidden bg-neutral-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[360px] sm:min-h-[500px]">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            className="max-h-[70vh] w-auto object-contain mx-auto transition-transform duration-300 select-none"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Captions bar */}
        <div className="p-4 sm:p-6 bg-neutral-950/95 border-t border-neutral-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Tag className="w-3 h-3" />
                {photo.category}
              </span>
              <span className="text-xs text-neutral-400">
                {currentIndex + 1} of {photos.length}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              {photo.title}
            </h3>
            <p className="text-sm text-neutral-300 mt-0.5">
              {photo.subtitle}
            </p>
          </div>

          <div className="text-xs text-neutral-400 sm:text-right shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-neutral-800">
            <span className="block font-medium text-neutral-300">Anand Super Bazaar</span>
            <span className="italic font-serif text-amber-400">Super Quality . Honest Prices.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
