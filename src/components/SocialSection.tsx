import React from 'react';
import { INSTAGRAM_POSTS, BRAND_CONFIG } from '../data/storeData';
import { Instagram, Heart, Sparkles, ExternalLink } from 'lucide-react';

export const SocialSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 text-pink-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              <span>Connect on Social Media</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
              MORE ANAND. MORE OFFERS. MORE UPDATES.
            </h2>

            <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Follow our official social page for sunrise fresh stock arrivals, festive discount previews, recipe inspirations, and store announcements.
            </p>
          </div>

          <div>
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D01B27] via-pink-600 to-purple-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Instagram className="w-4 h-4" />
              <span>FOLLOW US ON INSTAGRAM</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Instagram Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-900">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-white text-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center mb-2">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-xs font-bold text-amber-300">{BRAND_CONFIG.instagramHandle}</p>
                    <p className="text-[11px] text-neutral-200 mt-1 line-clamp-3">
                      {post.caption}
                    </p>
                  </div>
                </div>

                {/* Post Type Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/20">
                    {post.postType}
                  </span>
                </div>
              </div>

              {/* Caption Preview */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-neutral-700 line-clamp-2 leading-relaxed font-normal">
                  {post.caption}
                </p>

                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-semibold text-neutral-800 flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                    {post.likes}
                  </span>
                  <span className="font-bold text-pink-600 group-hover:underline">
                    View on IG →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Official Brand Handle Callout */}
        <div className="mt-8 text-center">
          <p className="text-sm font-semibold text-neutral-800">
            Tag <span className="font-bold text-[#D01B27]">{BRAND_CONFIG.instagramHandle}</span> in your Anand family shopping moments!
          </p>
        </div>
      </div>
    </section>
  );
};
