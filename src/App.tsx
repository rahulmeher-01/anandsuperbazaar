import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { CategoryGrid } from './components/CategoryGrid';
import { OffersSection } from './components/OffersSection';
import { WhyAnand } from './components/WhyAnand';
import { ExperienceGallery } from './components/ExperienceGallery';
import { StoreFinder } from './components/StoreFinder';
import { SocialSection } from './components/SocialSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

import { CategoryModal } from './components/CategoryModal';
import { LightboxModal } from './components/LightboxModal';
import { ContactModal } from './components/ContactModal';
import { StoreVisitPlanner } from './components/StoreVisitPlanner';

import { CategoryItem, GalleryPhoto, InStoreShoppingListItem } from './types';
import { GALLERY_PHOTOS } from './data/storeData';

export default function App() {
  // Modal states
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isShoppingListOpen, setIsShoppingListOpen] = useState(false);

  // In-Store Shopping List State (for visit preparation)
  const [shoppingItems, setShoppingItems] = useState<InStoreShoppingListItem[]>([
    { id: 'item-1', name: 'Aashirvaad Shudh Chakki Atta (10kg)', category: 'Grocery & Staples', checked: false },
    { id: 'item-2', name: 'Farm Fresh Organic Tomatoes (1kg)', category: 'Fresh & Produce', checked: false },
    { id: 'item-3', name: 'Amul Butter Salted (500g)', category: 'Dairy & Everyday Essentials', checked: false },
  ]);

  const handleToggleShoppingItem = (id: string) => {
    setShoppingItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, checked: !it.checked } : it))
    );
  };

  const handleAddShoppingItem = (name: string, category: string) => {
    const newItem: InStoreShoppingListItem = {
      id: `custom-${Date.now()}`,
      name,
      category,
      checked: false,
    };
    setShoppingItems((prev) => [newItem, ...prev]);
  };

  const handleRemoveShoppingItem = (id: string) => {
    setShoppingItems((prev) => prev.filter((it) => it.id !== id));
  };

  const handleClearShoppingItems = () => {
    setShoppingItems([]);
  };

  const scrollToStores = () => {
    const storesEl = document.querySelector('#stores');
    if (storesEl) {
      storesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOffers = () => {
    const offersEl = document.querySelector('#offers');
    if (offersEl) {
      offersEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCategories = () => {
    const catEl = document.querySelector('#categories');
    if (catEl) {
      catEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 flex flex-col font-['Outfit',sans-serif]">
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenStoreList={scrollToStores}
        onOpenShoppingList={() => setIsShoppingListOpen(true)}
        shoppingListCount={shoppingItems.length}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* SECTION 02: HERO */}
        <Hero
          onExploreClick={scrollToCategories}
          onOffersClick={scrollToOffers}
        />

        {/* SECTION 03: BRAND INTRODUCTION */}
        <BrandIntro />

        {/* SECTION 04: EXPLORE OUR CATEGORIES */}
        <CategoryGrid
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onLocateStore={scrollToStores}
        />

        {/* SECTION 05: FEATURED OFFERS */}
        <OffersSection onLocateStore={scrollToStores} />

        {/* SECTION 06: WHY ANAND */}
        <WhyAnand />

        {/* SECTION 07: THE ANAND EXPERIENCE */}
        <ExperienceGallery
          onPhotoClick={(photo) => setSelectedPhoto(photo)}
        />

        {/* SECTION 08: OUR STORES */}
        <StoreFinder />

        {/* SECTION 09: SOCIAL / INSTAGRAM */}
        <SocialSection />

        {/* SECTION 10: FINAL CALL TO ACTION */}
        <FinalCTA
          onLocateStore={scrollToStores}
          onContactClick={() => setIsContactOpen(true)}
        />
      </main>

      {/* SECTION 11: FOOTER */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onOpenShoppingList={() => setIsShoppingListOpen(true)}
      />

      {/* Interactive Modals */}
      <CategoryModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onLocateStore={scrollToStores}
      />

      <LightboxModal
        photo={selectedPhoto}
        photos={GALLERY_PHOTOS}
        onClose={() => setSelectedPhoto(null)}
        onNavigate={(p) => setSelectedPhoto(p)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <StoreVisitPlanner
        isOpen={isShoppingListOpen}
        onClose={() => setIsShoppingListOpen(false)}
        items={shoppingItems}
        onToggleItem={handleToggleShoppingItem}
        onAddItem={handleAddShoppingItem}
        onRemoveItem={handleRemoveShoppingItem}
        onClearAll={handleClearShoppingItems}
        onLocateStore={scrollToStores}
      />
    </div>
  );
}
