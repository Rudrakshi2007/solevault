'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export function CollectionExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Capsule Drops' },
    { id: 'sneakers', label: 'Lifestyle' },
    { id: 'running', label: 'Running & Marathon' },
    { id: 'basketball', label: 'Court Heritage' },
    { id: 'hiking', label: 'Trail & GORE-TEX' },
    { id: 'boots', label: 'Boots' },
  ];

  const displayedProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  }).slice(0, 8);

  return (
    <section className="w-full py-24 sm:py-32 bg-paleBg texture-vertical-glass border-b border-[#55C7F2]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#55C7F2]/25">
          <div>
            <div className="flex items-center gap-2 text-[#FF3D9A] text-xs font-mono uppercase tracking-widest font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>COLLECTION SELECTION // SS26</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-[#172B3A] uppercase leading-none">
              COLLECTION EXPLORER
            </h2>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#087EAD] hover:text-[#FF3D9A] uppercase tracking-widest transition-colors font-bold group"
          >
            <span>ENTER FULL 62+ ARCHIVE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category Capsule Filter Buttons */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === tab.id
                  ? 'btn-hot-pink font-bold shadow-md shadow-[#FF3D9A]/30'
                  : 'bg-white/80 hover:bg-[#F5FBFF] text-[#2C4659] hover:text-[#087EAD] border border-[#55C7F2]/30 hover:border-[#55C7F2] shadow-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 4} />
          ))}
        </div>

        {/* Bottom CTA to Shop Archive */}
        <div className="pt-8 text-center">
          <Link
            href="/shop"
            className="btn-sky-gradient inline-flex items-center gap-3 px-10 py-4 rounded-xl text-xs font-mono font-bold uppercase tracking-widest shadow-xl shadow-[#55C7F2]/25 group"
          >
            <span>VIEW ALL 62+ SILHOUETTES IN ARCHIVE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
