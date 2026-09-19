import React from 'react';
import { CheckCircle, HeartHandshake, Sparkles, ShoppingBag, ShieldCheck, MapPin } from 'lucide-react';
import { BRAND_CONFIG } from '../data/storeData';
import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';

export const BrandIntro: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Editorial Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Brand Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>The Anand Promise</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.15]">
              MORE THAN JUST A SUPERMARKET.
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed font-normal">
              At <strong className="text-neutral-950 font-bold">Anand Super Bazaar</strong>, we believe everyday grocery shopping should be an effortless, enjoyable experience for every family. From the moment you enter our wide, air-conditioned aisles, you are welcomed by fresh aromas, neatly curated shelves, and genuine warmth.
            </p>

            <p className="text-base text-neutral-600 leading-relaxed">
              We source daily farm produce at sunrise, inspect our pulses and grains for unadulterated purity, and partner with India’s most trusted household brands. Our core guiding principle is simple and uncompromising: deliver <span className="font-semibold text-neutral-900">super quality</span> with <span className="font-semibold text-neutral-900">honest prices</span> every single day.
            </p>

            {/* Core Commitments Checklist */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#15803D] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">Purity & Freshness First</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">Handpicked farm produce and sorted, clean pantry grains.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">Honest & Fair Pricing</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">Transparent shelf tagging without hidden or inflated markups.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">All Household Needs</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">Groceries, personal care, cookware, and family lifestyle under one roof.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#D01B27] flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">Courteous Family Service</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">Fast billing desks and attentive staff ready to help you locate items.</p>
                </div>
              </div>
            </div>

            {/* In-Store Discovery Callout */}
            <div className="pt-3">
              <a
                href="#stores"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#15803D] hover:text-[#126b33] transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#D01B27]" />
                <span className="underline underline-offset-4">Explore our physical store locations & timings</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Large Premium Visual & Brand Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <TiltCard maxTilt={10} scaleOnHover={1.02}>
                {/* Main Visual */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900 transform-style-3d">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85"
                    alt="Anand Super Bazaar Fresh Produce Section"
                    className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div
                    style={{ transform: 'translateZ(25px)' }}
                    className="absolute bottom-6 left-6 right-6 text-white"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                      Store Experience
                    </span>
                    <p className="text-xl font-extrabold tracking-tight">
                      Clean, Organized & Family-Friendly
                    </p>
                    <p className="text-xs text-neutral-300 mt-1">
                      Every aisle is organized for speed, comfort, and verified quality.
                    </p>
                  </div>
                </div>
              </TiltCard>

              {/* Floating Brand Stamp Card with smooth floating animation */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-white p-5 rounded-2xl shadow-2xl border border-neutral-200/80 max-w-[260px] hidden sm:block animate-float-slow z-20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-[#D01B27]" />
                  <div className="w-3 h-3 rounded-full bg-[#15803D]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 ml-auto">
                    Authentic
                  </span>
                </div>
                <p className="text-sm font-extrabold text-neutral-900 leading-snug">
                  Anand Super Bazaar
                </p>
                <p className="text-base font-serif italic font-bold text-neutral-700 mt-1">
                  "{BRAND_CONFIG.tagline}"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
