"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ShoppingBag, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const COMBOS = [
  {
    id: "pasta-delight-bundle",
    name: "Ultimate Pasta Delight Bundle",
    subtitle: "7 Premium Pasta Varieties",
    description: "Get all 7 signature varieties of our gourmet pasta penne. Perfect for wholesome family meals and gourmet dinners.",
    originalPrice: 1400,
    offerPrice: 1120,
    savings: "20% OFF",
    tag: "POPULAR",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1080&auto=format&fit=crop",
    items: ["Moringa Pasta Penne", "Beetroot Pasta Penne", "Little Grain Pasta Penne", "Foxtail Pasta Penne", "Multi Grain Pasta Penne", "Ragi Pasta Penne", "Jackfruit Pasta Penne"]
  },
  {
    id: "wholesome-breakfast-pack",
    name: "Wholesome Breakfast Pack",
    subtitle: "Vermicelli + Noodles + Cookies",
    description: "Start your morning with energizing nutrition. Includes rich vermicelli, multi-grain noodles, and delicious jaggery cookies.",
    originalPrice: 950,
    offerPrice: 712,
    savings: "25% OFF",
    tag: "BEST SELLER",
    image: "/images/breakfast_bundle.png",
    items: ["Quinoa Vermicelli", "Multi Grain Noodles", "Jowar Jaggery Cookies", "Choco Oats Nutrigen Cookies"]
  },
  {
    id: "gourmet-cookies-box",
    name: "Delight Snacking Box",
    subtitle: "6 Handcrafted Cookie Packs",
    description: "Pure guilt-free indulgence. Made with natural jaggery, whole oats, and zero refined sugar.",
    originalPrice: 1200,
    offerPrice: 1020,
    savings: "15% OFF",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1080&auto=format&fit=crop",
    items: ["Choco Oats Cookies", "Vanilla Oats Cookies", "Fruit & Nuts Cookies", "Multi Grain Cookies", "Mocha Oats Cookies", "Ragi Jaggery Cookies"]
  },
  {
    id: "family-pantry-mega-bundle",
    name: "Family Pantry Mega Bundle",
    subtitle: "Complete Food Assortment",
    description: "The ultimate stock-up package for your home. Includes pasta, noodles, vermicelli, and cookies at an unbeatable discount.",
    originalPrice: 2200,
    offerPrice: 1650,
    savings: "25% OFF",
    tag: "SUPER VALUE",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1080&auto=format&fit=crop",
    items: ["3x Pasta Packs", "3x Noodles Packs", "3x Vermicelli Packs", "3x Cookie Packs"]
  }
];

import { useCart } from "@/context/CartContext";

export function ComboOffersContent({ acf }: { acf: any }) {
  const { addToCart } = useCart();
  const handleWhatsAppOrder = (combo: typeof COMBOS[0]) => {
    const phoneNumber = "919446640824";
    const text = `Hi, I would like to order the ${combo.name} (${combo.subtitle}) for ₹${combo.offerPrice}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const parsedCombos = [];
  for (let i = 1; i <= 4; i++) {
    if (acf && acf[`combo_${i}_title`]) {
      parsedCombos.push({
        id: `combo-${i}`,
        name: acf[`combo_${i}_title`],
        subtitle: acf[`combo_${i}_subtitle`] || "",
        description: acf[`combo_${i}_description`] || "",
        originalPrice: Number(acf[`combo_${i}_originalPrice`]) || 0,
        offerPrice: Number(acf[`combo_${i}_offerPrice`]) || 0,
        savings: acf[`combo_${i}_savings`] || "",
        tag: acf[`combo_${i}_tag`] || "",
        image: acf[`combo_${i}_image`] || "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1080&auto=format&fit=crop",
        items: (acf[`combo_${i}_items`] || "").split('\n').filter(Boolean)
      });
    }
  }

  const finalCombos = parsedCombos.length > 0 ? parsedCombos : COMBOS;

  return (
    <div className="bg-brand-cream min-h-screen pb-24">
      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/20 text-brand-dark font-button text-xs uppercase tracking-wider mb-4 border border-brand-primary/40">
            <Sparkles className="w-4 h-4 text-brand-primary animate-pulse" />
            {acf?.hero_badge || "Exclusive Value Bundles"}
          </div>
          <h1 className="font-heading text-5xl md:text-6xl text-brand-dark mb-6">
            {acf?.hero_title || "Combo Offers"}
          </h1>
          <p className="font-sans text-brand-text/80 text-lg max-w-2xl mx-auto leading-relaxed">
            {acf?.hero_description || "Bundle and save with our curated packages. Enjoy premium organic food products delivered right to your door."}
          </p>
        </motion.div>
      </section>

      {/* Combos Grid */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {finalCombos.map((combo, index) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-brand-border hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image Banner */}
              <div className="relative h-64 bg-brand-sand overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {combo.savings && (
                    <span className="bg-red-500 text-white font-button text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {combo.savings}
                    </span>
                  )}
                  {combo.tag && (
                    <span className="bg-brand-dark text-white font-button text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {combo.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-brand-primary font-button text-xs uppercase tracking-widest mb-1">
                    {combo.subtitle}
                  </p>
                  <h3 className="font-heading text-2xl font-bold text-brand-dark mb-3">
                    {combo.name}
                  </h3>
                  <p className="font-sans text-brand-text/80 text-sm leading-relaxed mb-6">
                    {combo.description}
                  </p>

                  {/* Included Items */}
                  <div className="bg-brand-cream/50 rounded-2xl p-4 mb-6 border border-brand-border/60">
                    <p className="font-button text-xs uppercase tracking-wider text-brand-dark font-bold mb-3">
                      What's Included:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {combo.items.map((item: any, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-sans text-brand-text">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                  <div>
                    <span className="text-brand-text/50 font-sans text-sm line-through block">
                      ₹{combo.originalPrice}
                    </span>
                    <span className="font-heading text-3xl font-bold text-brand-dark">
                      ₹{combo.offerPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => handleWhatsAppOrder(combo)}
                    className="px-6 py-3.5 rounded-full font-button text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-md hover:shadow-lg"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.887-9.885 9.887m0-18.232C6.31 3.553 1.93 7.934 1.928 13.286c0 1.91.55 3.774 1.593 5.378l-1.692 6.18 6.326-1.659a11.66 11.66 0 005.57 1.416h.005c5.352 0 9.734-4.382 9.736-9.735 0-2.6-1.02-5.045-2.879-6.903a9.67 9.67 0 00-6.908-2.859" />
                    </svg> Order on WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
