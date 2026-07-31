"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function ComboOffers() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Luxury Brown Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3F3424] via-[#6E5432] to-[#3F3424]"></div>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-paper.png")' }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/20 border border-brand-primary/50 text-brand-cream font-button text-sm mb-4"
            >
              <Sparkles className="w-4 h-4 text-brand-primary animate-pulse" />
              LIMITED COMBO OFFER
            </motion.div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
              Bundle & Save
            </h2>
            <p className="font-sans text-brand-sand/80 text-lg max-w-xl">
              Get the best of Flavor House with our curated nutrition bundles. Perfect for modern, healthy living.
            </p>
          </div>
          <Link href="/combo-offers" className="shrink-0 flex items-center gap-2 text-brand-cream hover:text-brand-primary font-button border-b border-brand-cream hover:border-brand-primary pb-1 transition-all">
            View All Combos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Combo Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-[2rem] p-6 border border-white/20 hover:border-brand-primary/50 transition-colors group"
          >
            <div className="relative h-64 rounded-xl overflow-hidden mb-6 bg-brand-cream">
              <img 
                src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2070&auto=format&fit=crop" 
                alt="Ultimate Millet Pasta Bundle" 
                className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white font-bold font-button px-3 py-1 rounded-full text-xs shadow-lg">
                SAVE 20%
              </div>
            </div>
            <h3 className="font-heading text-2xl font-bold text-white mb-2">Ultimate Pasta Bundle</h3>
            <p className="font-sans text-brand-sand/80 text-sm mb-6 line-clamp-2">
              All 7 varieties of our premium pasta. Perfect for delicious pasta nights.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-brand-sand/50 text-sm line-through">₹1400</span>
                <span className="text-white font-heading text-2xl font-bold">₹1120</span>
              </div>
              <button className="bg-brand-primary text-white px-6 py-2.5 rounded-full font-button text-sm hover:bg-brand-cream hover:text-brand-dark transition-colors">
                Add to Cart
              </button>
            </div>
          </motion.div>

          {/* Combo Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-brand-primary/20 backdrop-blur-md rounded-[2rem] p-6 border border-brand-primary hover:border-brand-primary/80 transition-colors group shadow-[0_0_30px_rgba(184,148,95,0.2)]"
          >
            <div className="relative h-64 rounded-xl overflow-hidden mb-6 bg-brand-cream">
              <img 
                src="/images/breakfast_bundle.png" 
                alt="Wholesome Breakfast Bundle" 
                className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white font-bold font-button px-3 py-1 rounded-full text-xs shadow-lg">
                SAVE 25%
              </div>
              <div className="absolute top-4 right-4 bg-brand-dark text-brand-cream font-bold font-button px-3 py-1 rounded-full text-xs shadow-lg">
                BEST SELLER
              </div>
            </div>
            <h3 className="font-heading text-2xl font-bold text-white mb-2">Wholesome Breakfast Bundle</h3>
            <p className="font-sans text-brand-sand/80 text-sm mb-6 line-clamp-2">
              Vermicelli + Noodles + Cookies. Start your day right with traditional organic goodness.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-brand-sand/50 text-sm line-through">₹950</span>
                <span className="text-white font-heading text-2xl font-bold">₹712</span>
              </div>
              <button className="bg-brand-primary text-white px-6 py-2.5 rounded-full font-button text-sm hover:bg-white hover:text-brand-dark transition-colors">
                Add to Cart
              </button>
            </div>
          </motion.div>

          {/* Combo Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-[2rem] p-6 border border-white/20 hover:border-brand-primary/50 transition-colors group hidden lg:block"
          >
            <div className="relative h-64 rounded-xl overflow-hidden mb-6 bg-brand-cream">
              <img 
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1965&auto=format&fit=crop" 
                alt="Snacking Bundle" 
                className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white font-bold font-button px-3 py-1 rounded-full text-xs shadow-lg">
                SAVE 15%
              </div>
            </div>
            <h3 className="font-heading text-2xl font-bold text-white mb-2">Delight Snacking Bundle</h3>
            <p className="font-sans text-brand-sand/80 text-sm mb-6 line-clamp-2">
              All Jaggery & Oats Cookies varieties. The perfect companion for your tea time.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-brand-sand/50 text-sm line-through">₹1200</span>
                <span className="text-white font-heading text-2xl font-bold">₹1020</span>
              </div>
              <button className="bg-brand-primary text-white px-6 py-2.5 rounded-full font-button text-sm hover:bg-brand-cream hover:text-brand-dark transition-colors">
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
