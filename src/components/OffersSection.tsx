import React, { useState } from 'react';
import { FEATURED_OFFERS, BRAND_CONFIG } from '../data/storeData';
import { Sparkles, Calendar, MapPin, Share2, Tag, Check, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';

interface OffersSectionProps {
  onLocateStore: () => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onLocateStore }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = (title: string, id: string) => {
    const text = `Check out this offer at Anand Super Bazaar: ${title}! Visit store to avail.`;
    if (navigator.share) {
      navigator.share({ title: 'Anand Super Bazaar Offer', text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(`${text} ${window.location.href}`);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section id="offers" className="py-20 sm:py-28 bg-[#FFF8F8] relative overflow-hidden">
      {/* Decorative Brand Accent Gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D01B27]/10 text-[#D01B27] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>In-Store Promotions & Savings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
            WHAT'S HAPPENING AT ANAND
          </h2>

          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Honest everyday savings and weekly celebrations at all Anand Super Bazaar stores. Discover current promotional events available when you visit in person.
          </p>

          <p className="mt-2 text-xs font-serif italic text-neutral-500">
            Official Brand Tagline: "{BRAND_CONFIG.tagline}"
          </p>
        </motion.div>

        {/* Offers Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_OFFERS.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="h-full"
            >
              <TiltCard maxTilt={10} scaleOnHover={1.02} className="h-full">
                <div className="bg-white rounded-2xl overflow-hidden border border-red-100/90 shadow-md hover:shadow-2xl transition-shadow flex flex-col sm:flex-row h-full group transform-style-3d">
                  {/* Offer Image */}
                  <div className="sm:w-2/5 relative h-52 sm:h-auto overflow-hidden bg-neutral-900 transform-style-3d">
                    <img
                      src={offer.imageUrl}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/60 via-transparent to-transparent" />

                    {/* Offer Category Tag in 3D (Z: 25px) */}
                    <div
                      style={{ transform: 'translateZ(25px)' }}
                      className="absolute top-3 left-3"
                    >
                      <span className={`px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider shadow-md ${offer.badgeColor}`}>
                        {offer.offerType}
                      </span>
                    </div>

                    {/* In-Store Exclusive Seal in 3D (Z: 20px) */}
                    <div
                      style={{ transform: 'translateZ(20px)' }}
                      className="absolute bottom-3 left-3"
                    >
                      <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wide border border-white/20 shadow-sm">
                        In-Store Only
                      </span>
                    </div>
                  </div>

                  {/* Offer Content */}
                  <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-4 bg-white">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500">
                        <Calendar className="w-3.5 h-3.5 text-[#D01B27]" />
                        <span>{offer.validity}</span>
                      </div>

                      <h3
                        style={{ transform: 'translateZ(18px)' }}
                        className="text-xl font-black text-neutral-900 tracking-tight leading-tight group-hover:text-[#D01B27] transition-colors"
                      >
                        {offer.title}
                      </h3>

                      <p className="text-xs font-semibold text-emerald-800">
                        {offer.subtitle}
                      </p>

                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {offer.description}
                      </p>
                    </div>

                    {/* Section Locator & Terms Note */}
                    <div className="pt-3 border-t border-neutral-100 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1 font-semibold text-neutral-700">
                          <Tag className="w-3 h-3 text-[#15803D]" />
                          <span>{offer.inStoreSection}</span>
                        </span>

                        <button
                          onClick={() => handleShare(offer.title, offer.id)}
                          className="text-neutral-400 hover:text-neutral-700 transition-colors p-1"
                          title="Share offer"
                        >
                          {copiedId === offer.id ? (
                            <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5">
                              <Check className="w-3 h-3" /> Copied
                            </span>
                          ) : (
                            <Share2 className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      {/* Visit Store Action Button */}
                      <button
                        onClick={onLocateStore}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#D01B27] hover:bg-[#b01620] text-white text-xs font-bold tracking-wide shadow-sm flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
                      >
                        <MapPin className="w-3.5 h-3.5 text-white/90" />
                        <span>Avail In-Store Today</span>
                      </button>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Note on Verified In-Store Pricing */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex items-center gap-3 text-xs text-neutral-600 max-w-2xl mx-auto">
          <Info className="w-4 h-4 text-neutral-400 shrink-0" />
          <p>
            Offers are subject to daily in-store availability. We publish verified, transparent prices directly at the shelf with no artificial markups.
          </p>
        </div>
      </div>
    </section>
  );
};

