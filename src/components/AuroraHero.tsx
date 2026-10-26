'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { AuroraParticleCanvas } from './AuroraParticleCanvas';

export function AuroraHero() {
  const scrollToExperience = () => {
    const target = document.getElementById('scroll-experience');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCollection = () => {
    const target = document.getElementById('featured-showcase');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[94vh] lg:min-h-screen flex flex-col justify-between bg-obsidian text-softWhite overflow-hidden select-none border-b border-deepSpace-border">
      {/* 3D Procedural Aurora Particle Background */}
      <AuroraParticleCanvas scrollProgress={0.05} className="opacity-90" />

      {/* Atmospheric radial gradient overlay for text readability without obscuring particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(5,6,8,0.2)_0%,rgba(5,6,8,0.85)_100%)] pointer-events-none" />

      {/* Top spacing */}
      <div className="pt-12" />

      {/* Foreground Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 flex flex-col items-start justify-center">
        {/* Subtle Aurora Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-auroraTeal/30 bg-auroraTeal/10 backdrop-blur-md mb-6 animate-pulse-slow">
          <Sparkles className="w-3.5 h-3.5 text-auroraTeal" />
          <span className="text-[11px] font-mono tracking-widest text-auroraTeal uppercase font-bold">
            AURORA EDITION // SS26
          </span>
        </div>

        {/* Brand Callout */}
        <span className="text-xs sm:text-sm font-mono tracking-cinematic text-mutedGrey uppercase font-medium block mb-3">
          SOLEVAULT DIGITAL FLAGSHIP
        </span>

        {/* Primary Campaign Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black font-display tracking-tight text-softWhite uppercase leading-[0.92] max-w-5xl mb-6">
          BEYOND THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-auroraTeal via-emeraldGlow to-icyBlue">ORDINARY.</span>
        </h1>

        {/* Supporting Line */}
        <p className="text-base sm:text-xl font-light text-softWhite-muted max-w-xl leading-relaxed mb-10">
          Discover sneakers in a new dimension. Engineered from the intersection of illuminated kinetic energy, runway tailoring, and archival court heritage.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <button
            onClick={scrollToCollection}
            className="inline-flex items-center justify-center gap-2.5 bg-auroraTeal hover:bg-auroraTeal-hover text-obsidian px-8 py-4 rounded-xl text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-auroraTeal/20 hover:shadow-auroraTeal/35 group"
          >
            <span>EXPLORE THE COLLECTION</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 bg-deepSpace/80 hover:bg-deepSpace-light text-softWhite px-8 py-4 rounded-xl text-xs font-mono uppercase tracking-widest border border-deepSpace-border hover:border-auroraTeal/40 backdrop-blur-md transition-all duration-300"
          >
            <span>VIEW ALL 62+ DROPS</span>
          </Link>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 flex items-center justify-between text-xs font-mono text-mutedGrey border-t border-deepSpace-border/80">
        <span className="hidden sm:inline-block tracking-wider">
          COORDINATES: 28.6139° N, 77.2090° E // ALL PRICES IN INR (₹)
        </span>

        <button
          onClick={scrollToExperience}
          className="flex items-center gap-2 text-auroraTeal hover:text-softWhite transition-colors uppercase tracking-widest group ml-auto sm:ml-0"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-auroraTeal group-hover:translate-y-0.5" />
        </button>
      </div>
    </section>
  );
}
