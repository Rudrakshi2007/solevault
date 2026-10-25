'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '@/data/products';

export function CategoryWorlds() {
  const displayCategories = CATEGORIES.filter((c) => c.id !== 'all');

  return (
    <section className="w-full py-16 sm:py-24 bg-obsidian border-b border-charcoal/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-lime text-xs font-mono uppercase tracking-widest font-bold block mb-2">
              DISCOVER WORLDS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-ivory uppercase leading-none">
              CATEGORIES
            </h2>
          </div>
          <p className="text-mutedGrey text-xs sm:text-sm max-w-md font-mono">
            Explore curated capsules engineered for distinct arenas: from high-altitude alpine trails to bespoke evening tailoring.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-charcoal border border-charcoal/80 hover:border-lime transition-all duration-300 shadow-lg"
            >
              {/* Background Image */}
              {cat.image && (
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:filter group-hover:brightness-110"
                />
              )}

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono tracking-widest text-lime px-2 py-0.5 rounded bg-obsidian/60 backdrop-blur-md border border-white/10 uppercase">
                    {cat.count} PIECES
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold font-display uppercase tracking-tight text-ivory group-hover:text-lime transition-colors">
                    {cat.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-mutedGrey group-hover:text-ivory transition-colors">
                    <span>Explore Capsule</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
