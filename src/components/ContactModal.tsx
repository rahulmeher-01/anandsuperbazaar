import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG, STORE_BRANCHES } from '../data/storeData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: STORE_BRANCHES[0].name,
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate quick acknowledgement
    }, 500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#18181B] text-white flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Store Helpdesk & Inquiries
            </span>
            <h2 className="text-2xl font-black tracking-tight">Contact Anand Super Bazaar</h2>
            <p className="text-xs text-neutral-300 mt-0.5">
              We welcome your questions on product availability, store hours, and bulk family requirements.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Quick Contact Badges */}
          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <a
              href={`tel:${BRAND_CONFIG.officialPhone.replace(/[^0-9+]/g, '')}`}
              className="p-3.5 bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-200 flex items-center gap-3 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-red-100 text-[#D01B27] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-neutral-900">Telephone Helpline</p>
                <p className="text-neutral-600">{BRAND_CONFIG.officialPhone}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${BRAND_CONFIG.officialWhatsApp.replace(/[^0-9]/g, '')}?text=Hello%20Anand%20Super%20Bazaar`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 flex items-center gap-3 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-200 text-emerald-800 flex items-center justify-center shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-emerald-950">WhatsApp Store Support</p>
                <p className="text-emerald-700">{BRAND_CONFIG.officialWhatsApp}</p>
              </div>
            </a>
          </div>

          {/* Direct Branch Lines across Odisha */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              Direct Branch Helplines (Odisha)
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {STORE_BRANCHES.map((b, idx) => (
                <a
                  key={b.id}
                  href={`tel:${b.phone}`}
                  className="p-2.5 rounded-xl border border-neutral-200 hover:border-[#D01B27] hover:bg-red-50/50 flex flex-col transition-colors group"
                >
                  <span className="font-bold text-neutral-900 group-hover:text-[#D01B27] truncate">
                    {idx + 1}. {b.name.replace('Anand Super Bazaar – ', '')}
                  </span>
                  <span className="font-mono text-neutral-600 font-semibold text-[11px] mt-0.5">
                    📞 {b.phone}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#15803D] mx-auto" />
              <h3 className="text-xl font-bold text-neutral-900">Thank you, {formData.name || 'Valued Shopper'}!</h3>
              <p className="text-xs text-neutral-600 max-w-md mx-auto">
                Your store inquiry has been received. Our floor manager at {formData.branch} will assist you shortly during operating hours.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 bg-[#15803D] text-white text-xs font-bold rounded-xl"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Send a Message to Store Management
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D01B27]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Mobile / Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 00000"
                    className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D01B27]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Select Branch</label>
                <select
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#D01B27]"
                >
                  {STORE_BRANCHES.map((b) => (
                    <option key={b.id} value={b.name}>
                      {b.name.replace('Anand Super Bazaar – ', '')} – Ph: {b.phone} ({b.locality})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">How can we assist you?</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Inquire about item availability, festival sweets, bulk ration packing, or general feedback..."
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D01B27]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#D01B27] hover:bg-[#b01620] text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry to Store</span>
              </button>
            </form>
          )}

          {/* Timings */}
          <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center gap-3 text-xs text-neutral-600">
            <Clock className="w-4 h-4 text-[#15803D] shrink-0" />
            <span>Store hours: Mon – Sun 8:00 AM to 10:00 PM. Inquiries submitted after 10:00 PM are handled early next morning.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
