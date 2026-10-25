'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export function EditorialCampaign() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-obsidian overflow-hidden border-b border-charcoal/80">
      {/* Background Graphic Ambient Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=2000&q=85"
          alt="Every Step Has A Signature Campaign"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.22] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <span className="inline-block text-lime text-xs font-mono tracking-cinematic uppercase font-bold px-3 py-1 rounded border border-lime/30 bg-lime/10">
          PHILOSOPHY // 001
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-ivory uppercase leading-none">
          EVERY STEP HAS A SIGNATURE.
        </h2>

        <p className="text-mutedGrey-light text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
          True luxury footwear is not an accessory—it is your stance against the pavement. From precision cushioning architectures to handcrafted European leather patinas, we curate silhouettes made to outlive momentary hype.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/shop?category=sneakers"
            className="inline-flex items-center gap-2 bg-lime hover:bg-lime-hover text-obsidian px-8 py-4 rounded-xl text-xs font-mono font-bold uppercase tracking-widest transition-all duration-200 shadow-xl shadow-lime/20 group"
          >
            <span>DISCOVER THE ARCHIVE</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <Link
            href="/account"
            className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-ivory px-8 py-4 rounded-xl text-xs font-mono uppercase tracking-widest border border-charcoal/80 hover:border-mutedGrey-dark transition-colors"
          >
            <span>JOIN COLLECTOR NETWORK</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
