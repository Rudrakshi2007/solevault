'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export function FeaturedDrop() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-obsidian-deep border-b border-charcoal/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-charcoal bg-charcoal/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Left Editorial Visual (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1400&q=85"
                alt="Not Made To Blend In Campaign"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-obsidian via-transparent to-transparent opacity-80" />
            </div>

            {/* Right Editorial Copy (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 bg-obsidian/90 backdrop-blur-md">
              <div className="space-y-2">
                <span className="text-lime text-xs font-mono uppercase tracking-widest font-bold block">
                  EXCLUSIVE EDITORIAL // SS26
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-ivory uppercase leading-none">
                  NOT MADE TO BLEND IN.
                </h2>
              </div>

              <p className="text-mutedGrey text-sm sm:text-base leading-relaxed">
                Footwear that refuses conformity. Curated from the intersection of underground Parisian runway tailoring, Tokyo terrace subcultures, and New York basketball heritage.
              </p>

              <div className="pt-4">
                <Link
                  href="/shop?featured=true"
                  className="inline-flex items-center gap-3 bg-lime hover:bg-lime-hover text-obsidian px-8 py-4 rounded-xl text-xs font-mono font-bold uppercase tracking-widest transition-all duration-200 shadow-xl shadow-lime/10 group"
                >
                  <span>EXPLORE THE VAULT CURATION</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
