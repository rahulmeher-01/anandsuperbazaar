import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, MapPin, Tag, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_CONFIG } from '../data/storeData';
import { Hero3DShowcase } from './Hero3DShowcase';

interface HeroProps {
  onExploreClick: () => void;
  onOffersClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOffersClick }) => {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 lg:pb-28 overflow-hidden bg-neutral-900 text-white min-h-[92vh] flex items-center"
    >
      {/* Background Photography with Warm Atmospheric Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=2000&q=85"
          alt="Anand Super Bazaar Aisles & Fresh Products"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.15]"
          referrerPolicy="no-referrer"
        />
        {/* Editorial Gradients: Deep charcoal with subtle warmth from brand palette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/70" />
        {/* Subtle Brand Accent Light Bloom */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#D01B27]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#15803D]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      </div>

      {/* Hero Content Container: 2-Column Responsive Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text, CTAs & Value Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Official Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 mb-6 shadow-inner"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                Official Supermarket Destination
              </span>
              <span className="hidden sm:inline text-white/50">•</span>
              <span className="text-white font-serif italic text-sm tracking-normal">
                "{BRAND_CONFIG.tagline}"
              </span>
            </motion.div>

            {/* Master Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.05] uppercase"
            >
              EVERYTHING YOU NEED.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-white mt-1">
                UNDER ONE ROOF.
              </span>
            </motion.h1>

            {/* Supporting Copy from Prompt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-neutral-200 font-normal leading-relaxed max-w-2xl text-shadow-sm"
            >
              Discover quality, variety and everyday value at <strong className="text-white font-bold">Anand Super Bazaar</strong>. A complete family shopping experience with farm-fresh produce, pantry essentials, and genuine savings across Odisha.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#D01B27] hover:bg-[#b01620] text-white text-base font-bold tracking-wide shadow-lg shadow-red-900/40 transition-colors focus:outline-none focus:ring-4 focus:ring-red-500/50"
              >
                <span>EXPLORE ANAND</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOffersClick}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-base font-bold tracking-wide border border-white/30 backdrop-blur-md transition-colors focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                <Tag className="w-5 h-5 text-amber-400" />
                <span>VIEW OFFERS</span>
              </motion.button>

              <a
                href="#stores"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-neutral-300 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#15803D]" />
                <span>5 Branches in Odisha</span>
              </a>
            </motion.div>

            {/* Brand Commitment Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-[#15803D]/30 border border-[#15803D]/50 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Super Quality</p>
                  <p className="text-[11px] text-neutral-400">Strict purity checks</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Honest Prices</p>
                  <p className="text-[11px] text-neutral-400">Everyday fair savings</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Wide Variety</p>
                  <p className="text-[11px] text-neutral-400">8+ departments</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">5 Branches</p>
                  <p className="text-[11px] text-neutral-400">Across Odisha</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive 3D Holographic Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <Hero3DShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

