'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { AuroraParticleCanvas } from './AuroraParticleCanvas';

export function FinalCinematicCTA() {
  return (
    <section className="relative w-full py-32 sm:py-48 bg-obsidian overflow-hidden border-b border-deepSpace-border">
      {/* 3D Aurora Particle Background */}
      <AuroraParticleCanvas scrollProgress={0.9} className="opacity-80" />

      {/* Atmospheric dark radial scrim for high readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,6,8,0.2)_0%,rgba(5,6,8,0.92)_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-auroraTeal/30 bg-auroraTeal/10 text-auroraTeal text-xs font-mono uppercase tracking-widest font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PORTAL // THE DESTINATION</span>
        </div>

        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-softWhite uppercase leading-[0.92]">
          YOUR NEXT ICON <span className="text-transparent bg-clip-text bg-gradient-to-r from-auroraTeal via-emeraldGlow to-icyBlue">AWAITS.</span>
        </h2>

        <p className="text-base sm:text-xl font-light text-softWhite-muted max-w-lg mx-auto leading-relaxed">
          Find the pair that moves with you. Limited allocations, verified heritage engineering, and transparent Indian Rupee pricing.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 bg-auroraTeal hover:bg-auroraTeal-hover text-obsidian px-10 py-5 rounded-2xl text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-2xl shadow-auroraTeal/25 hover:shadow-auroraTeal/40 group"
          >
            <span>EXPLORE SOLEVAULT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
