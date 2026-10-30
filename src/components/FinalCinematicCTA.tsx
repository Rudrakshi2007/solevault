'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { AuroraParticleCanvas } from './AuroraParticleCanvas';

export function FinalCinematicCTA() {
  return (
    <section className="relative w-full py-32 sm:py-48 bg-paleBg ambient-diffusion-cta texture-vertical-glass overflow-hidden border-b border-[#55C7F2]/25">
      {/* 3D Sky Blue × Hot Pink Particle System */}
      <AuroraParticleCanvas scrollProgress={0.9} className="opacity-85" />

      {/* Atmospheric luminous glow layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,rgba(245,251,255,0.92)_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF3D9A]/40 bg-white/90 text-[#FF3D9A] text-xs font-mono uppercase tracking-widest font-bold shadow-sm shadow-[#FF3D9A]/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PORTAL // THE DESTINATION</span>
        </div>

        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-[#172B3A] uppercase leading-[0.92] drop-shadow-sm">
          YOUR NEXT ICON{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55C7F2] via-[#FF3D9A] to-[#087EAD]">
            AWAITS.
          </span>
        </h2>

        <p className="text-base sm:text-xl font-normal text-[#2C4659] max-w-lg mx-auto leading-relaxed">
          Find the pair that moves with you. Limited allocations, verified heritage engineering, and transparent Indian Rupee pricing.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/shop"
            className="btn-hot-pink inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 group"
          >
            <span>EXPLORE SOLEVAULT ARCHIVE</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
