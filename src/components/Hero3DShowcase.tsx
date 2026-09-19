import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Sparkles, ShieldCheck, Tag, MapPin, CheckCircle2, Rotate3d, HeartHandshake } from 'lucide-react';
import { BRAND_CONFIG, STORE_BRANCHES } from '../data/storeData';
import { AnandLogo } from './AnandLogo';

export const Hero3DShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [autoRotate, setAutoRotate] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D physics
  const springConfig = { damping: 22, stiffness: 220, mass: 0.8 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], [16, -16]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const glareX = useTransform(springX, [-0.5, 0.5], ['10%', '90%']);
  const glareY = useTransform(springY, [-0.5, 0.5], ['10%', '90%']);

  // Auto rotation loop if active
  useEffect(() => {
    if (!autoRotate || isInteracting) return;
    let frameId: number;
    let angle = 0;
    const animate = () => {
      angle += 0.015;
      mouseX.set(Math.sin(angle) * 0.4);
      mouseY.set(Math.cos(angle * 0.7) * 0.25);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [autoRotate, isInteracting, mouseX, mouseY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsInteracting(true);
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsInteracting(false);
    if (!autoRotate) {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto perspective-1200 py-6">
      {/* Ambient background glow behind 3D card */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#D01B27]/25 via-emerald-500/20 to-amber-500/20 rounded-3xl blur-2xl -z-10 animate-pulse-glow" />

      {/* 3D Main Floating Plinth Card */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative bg-neutral-900/85 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-visible cursor-grab active:cursor-grabbing select-none"
      >
        {/* Dynamic Glare / Specular highlight */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-40 z-30"
          style={{
            background: `radial-gradient(circle 350px at ${glareX.get()} ${glareY.get()}, rgba(255,255,255,0.3), transparent 70%)`,
          }}
        />

        {/* 3D Depth Layer - 10px: Deep background grid lines */}
        <div
          style={{ transform: 'translateZ(10px)' }}
          className="absolute inset-4 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"
        />

        {/* Top 3D Bar (Z: 30px) */}
        <div
          style={{ transform: 'translateZ(30px)' }}
          className="flex items-center justify-between gap-2 mb-6"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400">
              In-Store Experience
            </span>
          </div>

          {/* 3D Mode Toggle */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setAutoRotate(!autoRotate);
            }}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold transition-all border ${
              autoRotate
                ? 'bg-amber-400 text-neutral-950 border-amber-300 shadow-sm'
                : 'bg-white/10 hover:bg-white/20 text-neutral-300 border-white/15'
            }`}
            title="Toggle continuous 3D rotation"
          >
            <Rotate3d className="w-3.5 h-3.5 animate-spin-slow" />
            <span>{autoRotate ? '3D Active' : 'Tilt 3D'}</span>
          </button>
        </div>

        {/* Center Stage: Authentic Anand Super Bazaar Visual Anchor (Z: 45px) */}
        <div
          style={{ transform: 'translateZ(45px)' }}
          className="text-center py-4 relative"
        >
          {/* Glowing Radial Disc underneath logo */}
          <div className="w-48 h-48 mx-auto -mb-32 rounded-full bg-gradient-to-b from-amber-400/20 via-emerald-500/10 to-transparent blur-xl pointer-events-none" />

          {/* Central Elevated Logo Box */}
          <div className="inline-block p-4 sm:p-5 rounded-2xl bg-white shadow-2xl border-2 border-amber-300/40 relative">
            <AnandLogo size="lg" />
          </div>

          {/* Tagline Ribbon with 3D Depth */}
          <div className="mt-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#18181B] text-amber-400 border border-amber-400/40 text-xs sm:text-sm font-serif italic font-bold shadow-md">
              "{BRAND_CONFIG.tagline}"
            </span>
          </div>

          <p className="text-xs text-neutral-300 font-medium mt-2">
            5 Outlets Serving Odisha with Super Quality & Everyday Value
          </p>
        </div>

        {/* Floating 3D Badge 1: 5 Branches in Odisha (Z: 60px, top-left offset) */}
        <motion.div
          style={{ transform: 'translateZ(60px)' }}
          className="mt-6 p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/90 to-neutral-900/90 border border-emerald-500/40 shadow-xl flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <MapPin className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-black text-white uppercase tracking-tight">
                5 Branches in Odisha
              </p>
              <p className="text-[11px] text-emerald-300 font-medium">
                Attabira • Budharaja • Rengali • Gole Bazaar • Charbhati
              </p>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-300 shrink-0">
            Open 8AM - 10PM
          </span>
        </motion.div>

        {/* Floating 3D Badge 2: Two Pillars Grid (Z: 50px) */}
        <div
          style={{ transform: 'translateZ(50px)' }}
          className="grid grid-cols-2 gap-3 mt-3"
        >
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-colors flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-black text-white uppercase leading-tight">
                Super Quality
              </p>
              <p className="text-[10px] text-neutral-400 leading-tight">Fresh Farm Sourcing</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Tag className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-black text-white uppercase leading-tight">
                Honest Prices
              </p>
              <p className="text-[10px] text-neutral-400 leading-tight">Zero Inflated Markups</p>
            </div>
          </div>
        </div>

        {/* 3D Floating Interactive Hint (Z: 35px) */}
        <div
          style={{ transform: 'translateZ(35px)' }}
          className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400"
        >
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive 3D Depth Card</span>
          </span>
          <span className="text-[10px] text-neutral-400 italic">Move cursor to tilt</span>
        </div>
      </motion.div>
    </div>
  );
};
