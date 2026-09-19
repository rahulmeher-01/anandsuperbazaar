import React, { useState } from 'react';
import { STORE_BRANCHES, BRAND_CONFIG } from '../data/storeData';
import { StoreBranch } from '../types';
import { MapPin, Clock, Phone, Navigation, CheckCircle2, MessageSquare, Car, Sparkles, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TiltCard } from './TiltCard';

export const StoreFinder: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<StoreBranch>(STORE_BRANCHES[0]);

  return (
    <section id="stores" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#15803D]" />
            <span>5 Store Outlets Across Odisha</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
            FIND AN ANAND NEAR YOU
          </h2>

          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Locate your nearest Anand Super Bazaar store across Odisha — now serving you in <span className="font-bold text-neutral-900">Attabira, Budharaja, Rengali, Gole Bazaar, and Charbhati</span>. Enjoy spacious aisles, courteous staff, easy parking, and honest daily savings.
          </p>

          <p className="mt-2 text-xs text-neutral-400">
            *Open all 7 days from 8:00 AM to 10:00 PM. Call your local branch directly for product availability and assistance.
          </p>
        </motion.div>

        {/* Store Explorer Layout: Branches Grid + Selected Feature Panel */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Branch Cards List */}
          <div className="lg:col-span-7 space-y-4">
            {STORE_BRANCHES.map((branch) => {
              const isSelected = branch.id === selectedBranch.id;
              return (
                <div
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch)}
                  className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-50/90 border-[#15803D] ring-2 ring-[#15803D]/20 shadow-md'
                      : 'bg-white border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/50'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {branch.isFlagship && (
                          <span className="px-2 py-0.5 rounded bg-[#D01B27] text-white text-[10px] font-bold uppercase tracking-wider">
                            Flagship Store
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Open Today
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-neutral-900 tracking-tight">
                        {branch.name}
                      </h3>
                      <p className="text-xs font-semibold text-neutral-500">
                        {branch.locality}
                      </p>
                    </div>

                    <span className="text-xs font-bold text-[#15803D] shrink-0 self-start">
                      {isSelected ? 'Currently Selected ✓' : 'Click to View Details'}
                    </span>
                  </div>

                  {/* Address Details */}
                  <div className="space-y-2 text-xs text-neutral-700 mt-3 pt-3 border-t border-neutral-200/60">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#D01B27] shrink-0 mt-0.5" />
                      <span>{branch.fullAddress}</span>
                    </p>

                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#15803D] shrink-0" />
                      <span className="font-semibold text-neutral-900">{branch.openingHours}</span>
                      <span className="text-neutral-500">({branch.daysOpen})</span>
                    </p>

                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#D01B27] shrink-0" />
                      <span className="font-semibold text-neutral-800">Phone:</span>
                      <a
                        href={`tel:${branch.phone}`}
                        className="font-bold text-[#D01B27] hover:underline font-mono text-xs tracking-wider"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {branch.phone}
                      </a>
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 pt-3 border-t border-neutral-200/60 flex flex-wrap items-center gap-3">
                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#15803D] hover:bg-[#126b33] text-white text-xs font-bold tracking-wide transition-colors shadow-xs"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>GET DIRECTIONS</span>
                    </a>

                    <a
                      href={`https://wa.me/${branch.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Anand%20Super%20Bazaar,%20I%20have%20an%20inquiry%20regarding%20store%20timings%20and%20products.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors border border-emerald-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp Store Help</span>
                    </a>

                    <a
                      href={`tel:${branch.phone.replace(/[^0-9+]/g, '')}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Phone className="w-3.5 h-3.5 text-neutral-600" />
                      <span>Call Branch</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Branch Showcase Card with 3D Tilt */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <TiltCard maxTilt={8} scaleOnHover={1.01} className="w-full">
                <div className="bg-neutral-900 rounded-2xl overflow-hidden text-white shadow-2xl border border-neutral-800 transform-style-3d">
                  {/* Branch Exterior Visual */}
                  <div className="relative h-60 w-full overflow-hidden bg-black transform-style-3d">
                    <img
                      src={selectedBranch.imageUrl}
                      alt={selectedBranch.name}
                      className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                    <div
                      style={{ transform: 'translateZ(25px)' }}
                      className="absolute top-4 left-4"
                    >
                      <span className="px-3 py-1 rounded-md bg-[#15803D] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                        In-Store Experience
                      </span>
                    </div>

                    <div
                      style={{ transform: 'translateZ(20px)' }}
                      className="absolute bottom-4 left-4 right-4"
                    >
                      <p className="text-xl font-black tracking-tight leading-snug">
                        {selectedBranch.name}
                      </p>
                      <p className="text-xs text-amber-300 font-medium mt-0.5">
                        {selectedBranch.landmark}
                      </p>
                    </div>
                  </div>

                  {/* Branch Feature Details */}
                  <div className="p-6 space-y-6 bg-neutral-900">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
                        Verified Store Timings
                      </h4>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-bold text-white">
                            {selectedBranch.openingHours}
                          </p>
                          <p className="text-xs text-neutral-400">
                            {selectedBranch.daysOpen}
                          </p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                          Open All Week
                        </span>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2.5">
                        Store Amenities & Convenience
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 flex items-center gap-2">
                          <Car className="w-4 h-4 text-emerald-400" />
                          <span>Ample Free Parking</span>
                        </div>
                        <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-amber-400" />
                          <span>100% Air Conditioned</span>
                        </div>
                        <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-400" />
                          <span>Fast Express Billing</span>
                        </div>
                        <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-400" />
                          <span>Wheelchair Accessible</span>
                        </div>
                      </div>
                    </div>

                    {/* Branch Phone & WhatsApp Quick Connect */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <a
                        href={`tel:${selectedBranch.phone}`}
                        className="p-3 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-white transition-colors border border-white/10"
                      >
                        <Phone className="w-3.5 h-3.5 text-amber-400" />
                        <span className="truncate">Call: {selectedBranch.phone}</span>
                      </a>
                      <a
                        href={`https://wa.me/91${selectedBranch.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Anand%20Super%20Bazaar%20${encodeURIComponent(selectedBranch.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-emerald-600/30 hover:bg-emerald-600/40 border border-emerald-500/40 rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-emerald-300 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                    {/* Direct Google Maps Direction CTA */}
                    <div className="pt-1">
                      <a
                        href={selectedBranch.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-4 rounded-xl bg-[#D01B27] hover:bg-[#b01620] text-white text-sm font-bold tracking-wide flex items-center justify-center gap-2 transition-transform shadow-lg active:scale-[0.98]"
                      >
                        <Navigation className="w-4 h-4" />
                        <span>Navigate on Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
