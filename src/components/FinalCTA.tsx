import React from 'react';
import { MapPin, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/storeData';

interface FinalCTAProps {
  onLocateStore: () => void;
  onContactClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onLocateStore,
  onContactClick,
}) => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#18181B] text-white overflow-hidden">
      {/* Background Photography with Warm Tint Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=2000&q=80"
          alt="Anand Super Bazaar Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-neutral-950/80 to-black" />
      </div>

      {/* Brand Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#D01B27]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#15803D]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{BRAND_CONFIG.tagline}</span>
        </div>

        {/* Headline from Prompt */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight">
          YOUR NEXT SHOPPING TRIP STARTS HERE.
        </h2>

        {/* Supporting Copy from Prompt */}
        <p className="mt-6 text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-3xl mx-auto">
          Discover Anand Super Bazaar and experience everyday shopping with more choice, quality and value. Your neighborhood destination for everything you need.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onLocateStore}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#D01B27] hover:bg-[#b01620] text-white text-base font-bold tracking-wide shadow-lg shadow-red-950/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MapPin className="w-5 h-5" />
            <span>FIND YOUR STORE</span>
          </button>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-base font-bold tracking-wide border border-white/30 backdrop-blur-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-5 h-5 text-emerald-400" />
            <span>CONTACT ANAND</span>
          </button>
        </div>

        {/* Hours quick note */}
        <p className="mt-8 text-xs text-neutral-400">
          Open All 7 Days • Morning 8:00 AM – Night 10:00 PM • Free Parking Available
        </p>
      </div>
    </section>
  );
};
