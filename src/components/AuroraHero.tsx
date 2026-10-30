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
    <section className="relative w-full min-h-[94vh] lg:min-h-screen flex flex-col justify-between bg-paleBg ambient-diffusion-hero texture-vertical-glass text-[#172B3A] overflow-hidden select-none border-b border-[#55C7F2]/25">
      {/* 3D Procedural Sky Blue × Hot Pink Particle System */}
      <AuroraParticleCanvas scrollProgress={0.05} className="opacity-95" />

      {/* Ambient luminous glow orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#55C7F2]/20 blur-3xl pointer-events-none animate-float" />
      <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] rounded-full bg-[#FF3D9A]/15 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-white/60 blur-2xl pointer-events-none" />

      {/* Top spacing */}
      <div className="pt-8" />

      {/* Foreground Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 flex flex-col items-start justify-center">
        {/* Sky Blue & Hot Pink Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF3D9A]/40 bg-white/80 text-[#FF3D9A] backdrop-blur-md mb-6 shadow-sm shadow-[#FF3D9A]/15">
          <Sparkles className="w-3.5 h-3.5 text-[#FF3D9A]" />
          <span className="text-[11px] font-mono tracking-widest uppercase font-bold">
            SKY BLUE × HOT PINK // SS26 ARCHIVE
          </span>
        </div>

        {/* Brand Callout */}
        <span className="text-xs sm:text-sm font-mono tracking-cinematic text-[#087EAD] uppercase font-bold block mb-3">
          SOLEVAULT DIGITAL FLAGSHIP
        </span>

        {/* Primary Campaign Headline with vibrant Sky Blue to Hot Pink gradient */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black font-display tracking-tight text-[#172B3A] uppercase leading-[0.92] max-w-5xl mb-6 drop-shadow-sm">
          BEYOND THE{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55C7F2] via-[#FF3D9A] to-[#087EAD]">
            ORDINARY.
          </span>
        </h1>

        {/* Supporting Line with high clarity */}
        <p className="text-base sm:text-xl font-normal text-[#2C4659] max-w-xl leading-relaxed mb-10">
          Discover sneakers in an illuminated dimension. Engineered at the intersection of kinetic light diffusion, runway tailoring, and archival court heritage.
        </p>

        {/* Action Buttons: Hot Pink CTA + White/Sky Blue Secondary */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <button
            onClick={scrollToCollection}
            className="btn-hot-pink inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs font-mono font-bold uppercase tracking-widest group"
          >
            <span>EXPLORE THE COLLECTION</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <Link
            href="/shop"
            className="btn-secondary-white inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-mono uppercase tracking-widest font-semibold"
          >
            <span>VIEW ALL 62+ DROPS</span>
          </Link>
        </div>
      </div>

      {/* Bottom Scroll Indicator with frosted styling */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 flex items-center justify-between text-xs font-mono text-[#5A788D] border-t border-[#55C7F2]/25">
        <span className="hidden sm:inline-block tracking-wider font-medium">
          COORDINATES: 28.6139° N, 77.2090° E // ALL PRICES IN INR (₹)
        </span>

        <button
          onClick={scrollToExperience}
          className="flex items-center gap-2 text-[#087EAD] hover:text-[#FF3D9A] transition-colors uppercase tracking-widest font-bold group ml-auto sm:ml-0"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#FF3D9A] group-hover:translate-y-0.5" />
        </button>
      </div>
    </section>
  );
}
