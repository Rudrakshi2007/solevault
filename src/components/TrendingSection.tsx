'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Flame } from 'lucide-react';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/ProductCard';

interface TrendingSectionProps {
  products: Product[];
}

export function TrendingSection({ products }: TrendingSectionProps) {
  const trendingItems = products.filter((p) => p.trending).slice(0, 8);

  return (
    <section className="w-full py-16 sm:py-24 bg-obsidian-deep border-b border-charcoal/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-lime text-xs font-mono uppercase tracking-widest font-bold mb-2">
              <Flame className="w-4 h-4 fill-lime" />
              <span>MOST COVETED ROTATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-ivory uppercase leading-none">
              TRENDING DROPS
            </h2>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs font-mono text-mutedGrey hover:text-lime uppercase tracking-widest transition-colors group"
          >
            <span>VIEW ALL 60+ DROPS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingItems.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 4} />
          ))}
        </div>
      </div>
    </section>
  );
}
