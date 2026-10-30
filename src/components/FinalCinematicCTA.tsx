'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { AuroraParticleCanvas } from './AuroraParticleCanvas';

export function FinalCinematicCTA() {
  return (
    <section className="relative w-full py-32 sm:py-48 overflow-hidden border-b border-white/10">
      {/* Particle System */}
      <AuroraParticleCanvas scrollProgress={0.9} className="opacity-60" />

      {/* Atmospheric center bloom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,138,154,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 reference-sub-panel text-[#F28A9A] text-xs font-mono uppercase tracking-widest font-bold shadow-sm backdrop-blur-xl">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PORTAL // THE DESTINATION</span>
        </div>

        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-white uppercase leading-[0.92] drop-shadow-lg">
          YOUR NEXT ICON{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#12B5D0] via-[#85DCED] to-[#F28A9A]">
            AWAITS.
          </span>
        </h2>

        <p className="text-base sm:text-xl font-normal text-white/85 max-w-lg mx-auto leading-relaxed">
          Find the pair that moves with you. Limited allocations, verified heritage engineering, and transparent Indian Rupee pricing.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/shop"
            className="btn-reference-white inline-flex items-center gap-3 px-10 py-5 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 group shadow-2xl"
          >
            <span>EXPLORE SOLEVAULT ARCHIVE</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <Link
            href="/shop?category=sneakers"
            className="btn-reference-glass inline-flex items-center gap-3 px-8 py-5 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300"
          >
            <span>GRAIL TIER DROPS</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
