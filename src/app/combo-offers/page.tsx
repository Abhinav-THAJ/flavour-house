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

export default function ComboOffersPage() {
  const { addToCart } = useCart();
  const [addedComboId, setAddedComboId] = useState<string | null>(null);

  const handleAddToCart = (combo: typeof COMBOS[0]) => {
    addToCart({
      id: combo.id,
      name: combo.name,
      price: combo.offerPrice,
      image: combo.image,
    });
    setAddedComboId(combo.id);
    setTimeout(() => setAddedComboId(null), 2000);
  };

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
            Exclusive Value Bundles
          </div>
          <h1 className="font-heading text-5xl md:text-6xl text-brand-dark mb-6">Combo Offers</h1>
          <p className="font-sans text-brand-text/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Bundle and save with our curated packages. Enjoy premium organic food products delivered right to your door.
          </p>
        </motion.div>
      </section>

      {/* Combos Grid */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {COMBOS.map((combo, index) => (
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
                  <span className="bg-red-500 text-white font-button text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {combo.savings}
                  </span>
                  <span className="bg-brand-dark text-white font-button text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {combo.tag}
                  </span>
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
                      {combo.items.map((item, i) => (
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
                    onClick={() => handleAddToCart(combo)}
                    className={`px-6 py-3.5 rounded-full font-button text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                      addedComboId === combo.id
                        ? "bg-green-600 text-white"
                        : "bg-brand-primary text-white hover:bg-brand-dark shadow-md hover:shadow-lg"
                    }`}
                  >
                    {addedComboId === combo.id ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" /> Added to Cart!
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" /> Add Bundle
                      </>
                    )}
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
