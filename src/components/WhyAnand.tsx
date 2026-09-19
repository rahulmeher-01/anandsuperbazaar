import React from 'react';
import { VALUE_PILLARS } from '../data/storeData';
import { ShieldCheck, Layers, BadgePercent, ShoppingBag, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';

export const WhyAnand: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#15803D]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#D01B27]" />;
      case 'BadgePercent':
        return <BadgePercent className="w-6 h-6 text-amber-500" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-neutral-300" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#18181B] text-white relative overflow-hidden">
      {/* Subtle brand glow in dark mode */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#15803D]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D01B27]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Foundation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            WHY ANAND SUPER BAZAAR
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
            Built on trust, verified quality, and genuine respect for every family’s household budget. Four timeless pillars that guide everything we do.
          </p>
        </motion.div>

        {/* 4 Value Pillars Grid with 3D TiltCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <TiltCard maxTilt={14} scaleOnHover={1.04} className="h-full">
                <div className="bg-neutral-900/90 rounded-2xl p-7 border border-neutral-800 hover:border-neutral-700 shadow-xl transition-shadow flex flex-col justify-between h-full group transform-style-3d">
                  <div>
                    {/* Pillar Icon Box with 3D Pop (Z: 30px) */}
                    <div
                      style={{ transform: 'translateZ(30px)' }}
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors shadow-inner"
                    >
                      {getIcon(pillar.iconName)}
                    </div>

                    {/* Subtitle / Hindi script (Z: 20px) */}
                    <div
                      style={{ transform: 'translateZ(20px)' }}
                      className="flex items-baseline justify-between mb-2"
                    >
                      <span className="text-xs font-bold text-amber-400 tracking-wider">
                        {pillar.tagline}
                      </span>
                      <span className="text-xs text-neutral-500 font-medium">
                        {pillar.hindiTitle}
                      </span>
                    </div>

                    {/* Pillar Title (Z: 25px) */}
                    <h3
                      style={{ transform: 'translateZ(25px)' }}
                      className="text-2xl font-black text-white tracking-tight mb-3"
                    >
                      {pillar.title}
                    </h3>

                    {/* Pillar Description */}
                    <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                      "{pillar.description}"
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    style={{ transform: 'translateZ(15px)' }}
                    className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#15803D]" />
                    <span className="text-[11px] text-neutral-400 font-medium">
                      Guaranteed at all 5 branches
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

