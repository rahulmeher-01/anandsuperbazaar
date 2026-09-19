import React, { useState, useEffect } from 'react';
import { AnandLogo } from './AnandLogo';
import { MapPin, Phone, Menu, X, Clock, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/storeData';

interface NavbarProps {
  onOpenStoreList: () => void;
  onOpenShoppingList: () => void;
  shoppingListCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenStoreList,
  onOpenShoppingList,
  shoppingListCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Categories', href: '#categories' },
    { name: 'Offers', href: '#offers' },
    { name: 'Our Stores', href: '#stores' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#18181B] text-white text-[11px] sm:text-xs py-1.5 px-4 tracking-wide border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline text-neutral-300">Official Brand Destination:</span>
            <span className="text-amber-400 font-semibold font-serif italic text-sm">
              {BRAND_CONFIG.tagline}
            </span>
          </div>

          <div className="flex items-center gap-4 text-neutral-300">
            <span className="hidden md:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              {BRAND_CONFIG.customerServiceHours}
            </span>
            <span className="text-neutral-400">|</span>
            <a
              href={`tel:${BRAND_CONFIG.officialPhone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1 hover:text-white transition-colors text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#D01B27]" />
              <span className="hidden sm:inline">Store Helpline:</span> {BRAND_CONFIG.officialPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-neutral-200/80'
            : 'bg-white py-3.5 border-b border-neutral-100 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#D01B27] rounded-lg p-0.5"
            aria-label="Anand Super Bazaar Home"
          >
            <AnandLogo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-neutral-700 hover:text-[#D01B27] tracking-tight transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D01B27] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* In-Store Visit Shopping Checklist Trigger */}
            <button
              onClick={onOpenShoppingList}
              className="relative hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors border border-neutral-200"
              title="Plan your in-store grocery checklist"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Visit Checklist</span>
              {shoppingListCount > 0 && (
                <span className="w-5 h-5 bg-[#D01B27] text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                  {shoppingListCount}
                </span>
              )}
            </button>

            {/* Primary Action CTA: FIND A STORE */}
            <a
              href="#stores"
              onClick={(e) => handleNavClick(e, '#stores')}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-[#15803D] hover:bg-[#126b33] text-white text-xs sm:text-sm font-bold shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <MapPin className="w-4 h-4 text-emerald-200" />
              <span>FIND A STORE</span>
            </a>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[102px] z-50 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border-b border-neutral-200 p-6 shadow-xl flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
            {/* Quick Status */}
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-emerald-900 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>All Stores Open Today</span>
              </div>
              <span className="text-emerald-700 font-medium">8:00 AM – 10:00 PM</span>
            </div>

            {/* Nav list */}
            <div className="flex flex-col divide-y divide-neutral-100">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-3 text-base font-bold text-neutral-800 hover:text-[#D01B27] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-neutral-400">→</span>
                </a>
              ))}
            </div>

            {/* In-Store Checklist Button for Mobile */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShoppingList();
              }}
              className="w-full py-3 px-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>In-Store Grocery Trip Checklist</span>
              {shoppingListCount > 0 && (
                <span className="w-5 h-5 bg-[#D01B27] text-white rounded-full text-xs flex items-center justify-center">
                  {shoppingListCount}
                </span>
              )}
            </button>

            {/* Primary CTA */}
            <a
              href="#stores"
              onClick={(e) => handleNavClick(e, '#stores')}
              className="w-full py-3 rounded-xl bg-[#15803D] text-white text-center font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              <span>DISCOVER STORE LOCATIONS</span>
            </a>

            {/* Call button */}
            <a
              href={`tel:${BRAND_CONFIG.officialPhone.replace(/[^0-9+]/g, '')}`}
              className="text-center text-xs font-semibold text-neutral-600 py-1"
            >
              Call Customer Support: {BRAND_CONFIG.officialPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
