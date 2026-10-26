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
    <section className="w-full py-24 sm:py-32 bg-obsidian border-b border-deepSpace-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-deepSpace-border">
          <div>
            <div className="flex items-center gap-2 text-auroraTeal text-xs font-mono uppercase tracking-widest font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>AURORA LUXURY SELECTION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-softWhite uppercase leading-none">
              COLLECTION EXPLORER
            </h2>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs font-mono text-mutedGrey hover:text-auroraTeal uppercase tracking-widest transition-colors group"
          >
            <span>ENTER FULL 62+ ARCHIVE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category Capsule Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === tab.id
                  ? 'bg-auroraTeal text-obsidian font-bold shadow-md shadow-auroraTeal/20'
                  : 'bg-deepSpace hover:bg-deepSpace-light text-mutedGrey hover:text-softWhite border border-deepSpace-border hover:border-auroraTeal/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid with Aurora Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA to shop all */}
        <div className="pt-8 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-deepSpace hover:bg-deepSpace-light text-softWhite text-xs font-mono uppercase tracking-widest border border-deepSpace-border hover:border-auroraTeal transition-all shadow-xl hover:shadow-auroraTeal/10"
          >
            <span>DISCOVER COMPLETE VAULT CATALOGUE ({PRODUCTS.length} PAIRS)</span>
            <ArrowRight className="w-4 h-4 text-auroraTeal" />
          </Link>
        </div>
      </div>
    </section>
  );
}
