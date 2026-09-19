import React from 'react';
import { AnandLogo } from './AnandLogo';
import { BRAND_CONFIG, STORE_BRANCHES } from '../data/storeData';
import { Phone, Mail, MapPin, Clock, Instagram, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenShoppingList: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenShoppingList }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#111827] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-neutral-800">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-3 rounded-xl inline-block shadow-md">
              <AnandLogo size="md" variant="dark" />
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm font-normal">
              Anand Super Bazaar is your neighborhood family shopping destination. Providing thousands of high quality groceries, sunrise-fresh produce, and household essentials at everyday honest prices.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 flex items-center justify-center transition-all text-white border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <button
                onClick={onOpenContact}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-neutral-200 border border-white/10 transition-colors"
              >
                Direct Support
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  About Anand
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  onClick={(e) => handleNavClick(e, '#categories')}
                  className="hover:text-white transition-colors"
                >
                  All Categories
                </a>
              </li>
              <li>
                <a
                  href="#offers"
                  onClick={(e) => handleNavClick(e, '#offers')}
                  className="hover:text-white transition-colors"
                >
                  Featured Offers
                </a>
              </li>
              <li>
                <a
                  href="#stores"
                  onClick={(e) => handleNavClick(e, '#stores')}
                  className="hover:text-white transition-colors"
                >
                  Store Locations
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleNavClick(e, '#gallery')}
                  className="hover:text-white transition-colors"
                >
                  Store Gallery
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenShoppingList}
                  className="text-left text-amber-300 hover:underline text-xs font-bold mt-1"
                >
                  📋 In-Store Checklist
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: 5 Store Outlets & Departments across Odisha */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              5 Store Outlets (Odisha)
            </h3>
            <ul className="space-y-2 text-xs text-neutral-300">
              {STORE_BRANCHES.map((b, idx) => (
                <li key={b.id} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">
                      {idx + 1}. {b.name.replace('Anand Super Bazaar – ', '')}
                    </span>
                    <a
                      href={`tel:${b.phone}`}
                      className="text-amber-400 hover:text-amber-300 font-mono font-bold text-[11px]"
                    >
                      {b.phone}
                    </a>
                  </div>
                  <span className="text-[10px] text-neutral-400">{b.locality}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-red-400">
              Contact & Timings
            </h3>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D01B27] shrink-0 mt-0.5" />
                <span>{STORE_BRANCHES[0].fullAddress}</span>
              </p>

              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#15803D] shrink-0" />
                <span>{BRAND_CONFIG.customerServiceHours}</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BRAND_CONFIG.officialPhone.replace(/[^0-9+]/g, '')}`} className="hover:text-white underline font-mono">
                  {BRAND_CONFIG.officialPhone}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${BRAND_CONFIG.officialEmail}`} className="hover:text-white">
                  {BRAND_CONFIG.officialEmail}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="w-full py-2 px-3 rounded-lg bg-[#D01B27] hover:bg-[#b01620] text-white text-xs font-bold transition-colors text-center"
              >
                Send Customer Feedback
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Anand Super Bazaar. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-serif italic text-amber-400">
              {BRAND_CONFIG.tagline}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
            <span className="text-neutral-500">Official Retail Brand</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
