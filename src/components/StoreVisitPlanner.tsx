import React, { useState } from 'react';
import { InStoreShoppingListItem } from '../types';
import { IN_STORE_CHECKLIST_SUGGESTIONS, BRAND_CONFIG } from '../data/storeData';
import { X, Check, Plus, Trash2, Copy, Share2, Sparkles, MapPin, Printer } from 'lucide-react';

interface StoreVisitPlannerProps {
  isOpen: boolean;
  onClose: () => void;
  items: InStoreShoppingListItem[];
  onToggleItem: (id: string) => void;
  onAddItem: (name: string, category: string) => void;
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
  onLocateStore: () => void;
}

export const StoreVisitPlanner: React.FC<StoreVisitPlannerProps> = ({
  isOpen,
  onClose,
  items,
  onToggleItem,
  onAddItem,
  onRemoveItem,
  onClearAll,
  onLocateStore,
}) => {
  const [customItemName, setCustomItemName] = useState('');
  const [customCategory, setCustomCategory] = useState('Grocery & Staples');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (customItemName.trim()) {
      onAddItem(customItemName.trim(), customCategory);
      setCustomItemName('');
    }
  };

  const handleCopyList = () => {
    const header = `🛒 My Anand Super Bazaar Shopping List:\nOfficial Tagline: "${BRAND_CONFIG.tagline}"\n---------------------------------\n`;
    const body = items
      .map((it) => `${it.checked ? '✅' : '◻️'} ${it.name} (${it.category})`)
      .join('\n');
    const footer = `\n---------------------------------\nPlan your visit: ${window.location.href}`;
    navigator.clipboard.writeText(header + body + footer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="checklist-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#18181B] text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#15803D]" />
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                In-Store Shopping Companion
              </span>
            </div>
            <h2 id="checklist-title" className="text-2xl font-black tracking-tight">
              Your In-Store Visit Checklist
            </h2>
            <p className="text-xs text-neutral-300 mt-1">
              Check off items as you walk the aisles at Anand Super Bazaar. No online cart—just pure convenience!
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Quick Add Form */}
          <form onSubmit={handleAddCustom} className="flex gap-2">
            <input
              type="text"
              value={customItemName}
              onChange={(e) => setCustomItemName(e.target.value)}
              placeholder="e.g. 5kg Basmati Rice, Fresh Coriander, Biscuits..."
              className="flex-1 px-4 py-2 text-sm border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D01B27]"
            />
            <select
              value={customCategory}
              onChange={(e) => setCustomCategory(e.target.value)}
              className="px-3 py-2 text-xs border border-neutral-300 rounded-xl bg-neutral-50 text-neutral-700"
            >
              <option value="Grocery & Staples">Staples</option>
              <option value="Fresh & Produce">Produce</option>
              <option value="Dairy & Everyday Essentials">Dairy</option>
              <option value="Food & Beverages">Snacks & Tea</option>
              <option value="Home & Household">Household</option>
              <option value="Personal Care">Personal Care</option>
            </select>
            <button
              type="submit"
              className="px-4 py-2 bg-[#D01B27] hover:bg-[#b01620] text-white text-xs font-bold rounded-xl flex items-center gap-1 shrink-0"
            >
              <Plus className="w-4 h-4" /> Add
            </button>
          </form>

          {/* Quick Tap Suggestions */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Popular Store Essentials to Add
            </p>
            <div className="flex flex-wrap gap-1.5">
              {IN_STORE_CHECKLIST_SUGGESTIONS.slice(0, 6).map((sug, sIdx) => {
                const alreadyAdded = items.some((it) => it.name === sug.name);
                return (
                  <button
                    key={sIdx}
                    disabled={alreadyAdded}
                    onClick={() => onAddItem(sug.name, sug.category)}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-all ${
                      alreadyAdded
                        ? 'bg-neutral-100 text-neutral-400 border-neutral-200 cursor-not-allowed'
                        : 'bg-neutral-50 hover:bg-emerald-50 text-neutral-700 hover:text-emerald-800 border-neutral-200 hover:border-emerald-300'
                    }`}
                  >
                    {alreadyAdded ? '✓ Added' : `+ ${sug.name}`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Items List */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                Items on Your List ({items.length})
              </span>
              {items.length > 0 && (
                <button
                  onClick={onClearAll}
                  className="text-xs text-red-600 hover:text-red-800 font-semibold"
                >
                  Clear All
                </button>
              )}
            </div>

            {items.length === 0 ? (
              <div className="p-8 text-center bg-neutral-50 rounded-xl border border-dashed border-neutral-300">
                <p className="text-sm font-semibold text-neutral-600">
                  Your in-store visit checklist is empty.
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Add items above or tap suggestions to prepare for your shopping trip to Anand Super Bazaar!
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onToggleItem(item.id)}
                    className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-colors ${
                      item.checked
                        ? 'bg-emerald-50/70 border-emerald-200 text-neutral-500'
                        : 'bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          item.checked
                            ? 'bg-[#15803D] border-[#15803D] text-white'
                            : 'border-neutral-300 bg-white'
                        }`}
                      >
                        {item.checked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <p
                          className={`text-sm font-semibold ${
                            item.checked ? 'line-through opacity-70' : ''
                          }`}
                        >
                          {item.name}
                        </p>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveItem(item.id);
                      }}
                      className="text-neutral-400 hover:text-red-600 p-1 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopyList}
            disabled={items.length === 0}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-100 rounded-xl transition-colors disabled:opacity-50"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'List Copied to Clipboard!' : 'Copy / Share List'}</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onLocateStore();
            }}
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold bg-[#15803D] hover:bg-[#126b33] text-white rounded-xl shadow-xs transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <span>Ready? Find Store Location</span>
          </button>
        </div>
      </div>
    </div>
  );
};
