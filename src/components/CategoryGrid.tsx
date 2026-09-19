import React, { useState } from 'react';
import { CategoryItem } from '../types';
import { CATEGORIES } from '../data/storeData';
import { ArrowUpRight, Sparkles, MapPin, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TiltCard } from './TiltCard';

interface CategoryGridProps {
  onSelectCategory: (category: CategoryItem) => void;
  onLocateStore: () => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  onSelectCategory,
  onLocateStore,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Departments' },
    { id: 'fresh', label: 'Fresh & Kitchen' },
    { id: 'pantry', label: 'Staples & Beverages' },
    { id: 'home', label: 'Home & Personal Care' },
    { id: 'lifestyle', label: 'Beauty & Lifestyle' },
  ];

  const filteredCategories = CATEGORIES.filter((cat) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'fresh') return cat.id === 'fresh-produce' || cat.id === 'dairy-essentials';
    if (activeFilter === 'pantry') return cat.id === 'grocery-staples' || cat.id === 'food-beverages';
    if (activeFilter === 'home') return cat.id === 'home-household' || cat.id === 'personal-care';
    if (activeFilter === 'lifestyle') return cat.id === 'beauty' || cat.id === 'fashion-lifestyle';
    return true;
  });

  return (
    <section id="categories" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#D01B27] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>In-Store Departments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
              EXPLORE OUR CATEGORIES
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Explore the rich variety awaiting your family at Anand Super Bazaar. From sunrise-fresh greens to trusted pantry staples and home essentials.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onLocateStore}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#15803D]" />
              <span>Locate Department In-Store</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-[#18181B] text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories Grid - Discovery Cards with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="h-full"
            >
              <TiltCard
                maxTilt={12}
                scaleOnHover={1.03}
                className="h-full"
                onClick={() => onSelectCategory(category)}
              >
                <div className="group relative bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-2xl hover:border-neutral-300 transition-shadow duration-300 flex flex-col h-full cursor-pointer transform-style-3d">
                  {/* Card Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-neutral-100 transform-style-3d">
                    <img
                      src={category.imageUrl}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Badge in 3D Depth (Z: 25px) */}
                    {category.badge && (
                      <span
                        style={{ transform: 'translateZ(25px)' }}
                        className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold rounded-md bg-white/95 backdrop-blur-md text-neutral-900 shadow-md border border-white/40"
                      >
                        {category.badge}
                      </span>
                    )}

                    {/* In-Store Discovery Pill in 3D (Z: 30px) */}
                    <div
                      style={{ transform: 'translateZ(30px)' }}
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="p-2 rounded-full bg-white/95 text-neutral-900 shadow-lg flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-[#D01B27]" />
                      </span>
                    </div>

                    {/* Department placement on image with 3D Depth (Z: 20px) */}
                    <div
                      style={{ transform: 'translateZ(20px)' }}
                      className="absolute bottom-3 left-3 right-3 text-white"
                    >
                      <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block">
                        {category.shelfLocationPlaceholder.split('•')[0]}
                      </span>
                      <p className="text-xl font-extrabold tracking-tight leading-snug drop-shadow-md">
                        {category.name}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
                    <div>
                      {category.hindiName && (
                        <p className="text-xs font-semibold text-emerald-800 mb-1">
                          {category.hindiName}
                        </p>
                      )}
                      <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* Interactive Discovery Button */}
                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-neutral-800 group-hover:text-[#D01B27] transition-colors">
                      <span className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[#15803D]" />
                        <span>View Section Details</span>
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* In-Store Browsing Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F8FAFC] border border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#15803D] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-neutral-900">
                Over 10,000+ Items In Stock Across All Departments
              </p>
              <p className="text-xs text-neutral-500">
                Products are showcased for in-store discovery. Visit any Anand Super Bazaar branch to experience hands-on freshness.
              </p>
            </div>
          </div>

          <button
            onClick={onLocateStore}
            className="px-5 py-2.5 rounded-xl bg-[#15803D] hover:bg-[#126b33] text-white text-xs font-bold tracking-wide transition-colors whitespace-nowrap shadow-xs"
          >
            Find Closest Branch
          </button>
        </div>
      </div>
    </section>
  );
};
