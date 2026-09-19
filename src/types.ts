export interface CategoryItem {
  id: string;
  name: string;
  hindiName?: string;
  tagline: string;
  description: string;
  imageUrl: string;
  badge?: string;
  inStoreHighlights: string[];
  shelfLocationPlaceholder: string;
  popularBrands: string[];
}

export interface OfferItem {
  id: string;
  title: string;
  subtitle: string;
  offerType: 'Special Offer' | 'Weekend Fresh Deal' | 'Festival Special' | 'Combo Deal' | 'Brand Promotion';
  badgeColor: string;
  validity: string;
  description: string;
  conditionNote: string;
  imageUrl: string;
  inStoreSection: string;
  featured?: boolean;
}

export interface StoreBranch {
  id: string;
  name: string;
  locality: string;
  fullAddress: string;
  landmark: string;
  phone: string;
  whatsapp: string;
  openingHours: string;
  daysOpen: string;
  parkingAvailable: boolean;
  wheelchairAccessible: boolean;
  airConditioned: boolean;
  googleMapsUrl: string;
  imageUrl: string;
  isFlagship?: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  category: 'Interiors' | 'Fresh Produce' | 'Staples & Spices' | 'Experience';
  imageUrl: string;
  caption: string;
}

export interface ValuePillarItem {
  key: 'QUALITY' | 'VARIETY' | 'VALUE' | 'CONVENIENCE';
  title: string;
  hindiTitle: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface InstagramPostItem {
  id: string;
  imageUrl: string;
  caption: string;
  likes: string;
  postType: 'New Arrival' | 'Offer Alert' | 'Fresh Stock' | 'Behind The Scenes';
  link: string;
}

export interface InStoreShoppingListItem {
  id: string;
  name: string;
  category: string;
  checked: boolean;
}
