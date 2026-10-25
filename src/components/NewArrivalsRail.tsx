'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/ProductCard';

interface NewArrivalsRailProps {
  products: Product[];
}

export function NewArrivalsRail({ products }: NewArrivalsRailProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const newArrivals = products.filter((p) => p.newArrival);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const offset = direction === 'left' ? -380 : 380;
    scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-obsidian border-b border-charcoal/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-lime text-xs font-mono uppercase tracking-widest font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>FRESH FROM THE VAULT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-ivory uppercase leading-none">
              NEW ARRIVALS
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/shop?newArrival=true"
              className="text-xs font-mono text-mutedGrey hover:text-lime uppercase tracking-wider mr-2 hidden sm:inline-flex items-center gap-1"
            >
              <span>See All New</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-charcoal hover:bg-charcoal-light text-ivory hover:text-lime border border-charcoal/80 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-charcoal hover:bg-charcoal-light text-ivory hover:text-lime border border-charcoal/80 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Rail */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="min-w-[280px] sm:min-w-[320px] max-w-[340px] flex-shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
