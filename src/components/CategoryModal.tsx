import React from 'react';
import { CategoryItem } from '../types';
import { X, MapPin, CheckCircle2, Sparkles, Navigation } from 'lucide-react';

interface CategoryModalProps {
  category: CategoryItem | null;
  onClose: () => void;
  onLocateStore: () => void;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({
  category,
  onClose,
  onLocateStore,
}) => {
  if (!category) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-category-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image with Gradient */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-neutral-900">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Badge & Titles */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            {category.badge && (
              <span className="inline-block px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-[#D01B27] text-white mb-2 shadow-sm">
                {category.badge}
              </span>
            )}
            <h2 id="modal-category-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {category.name}
            </h2>
            {category.hindiName && (
              <p className="text-neutral-300 text-sm font-medium mt-0.5">
                {category.hindiName}
              </p>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
              About this Section
            </h3>
            <p className="text-base text-neutral-700 leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* In-Store Location Shelf */}
          <div className="flex items-center gap-3 p-3.5 bg-neutral-50 rounded-xl border border-neutral-200">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Store Department Placement
              </p>
              <p className="text-sm font-bold text-neutral-900">
                {category.shelfLocationPlaceholder}
              </p>
            </div>
          </div>

          {/* In-Store Highlights */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> What You'll Find In-Store
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {category.inStoreHighlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-neutral-700 bg-neutral-50/60 p-2.5 rounded-lg"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Brands Available in Store */}
          {category.popularBrands && category.popularBrands.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2.5">
                Featured Brand Partners
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.popularBrands.map((brand, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-semibold rounded-full border border-neutral-200"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Prompt constraint reminder / disclaimer */}
          <div className="pt-2 border-t border-neutral-100 text-xs text-neutral-500 flex items-center justify-between">
            <span>Available for in-person shopping at all Anand Super Bazaar stores.</span>
            <span className="font-semibold text-emerald-700">100% Genuine Quality</span>
          </div>
        </div>

        {/* Modal Footer / In-Store CTA */}
        <div className="p-4 sm:px-6 bg-neutral-50 border-t border-neutral-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900 rounded-lg transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onLocateStore();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D01B27] hover:bg-[#b01620] text-white text-sm font-bold rounded-lg shadow-md transition-all active:scale-[0.98]"
          >
            <Navigation className="w-4 h-4" />
            Find in Nearest Store
          </button>
        </div>
      </div>
    </div>
  );
};
