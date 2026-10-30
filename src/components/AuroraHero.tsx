'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
} from 'lucide-react';
import { AuroraParticleCanvas } from './AuroraParticleCanvas';
import { PRODUCTS } from '@/data/products';
import { formatINR } from '@/lib/utils';

export function AuroraHero() {
  const shoe1 = PRODUCTS[0]; // Air Jordan 1 Lost & Found
  const shoe2 = PRODUCTS[2]; // New Balance 990v6

  const scrollToCollection = () => {
    const target = document.getElementById('featured-showcase');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-[95vh] flex flex-col justify-between overflow-hidden select-none px-4 sm:px-8 lg:px-12 pt-10 pb-8">
      {/* 3D Ambient Particle Cloud in Cyan, White & Coral */}
      <AuroraParticleCanvas scrollProgress={0.05} className="opacity-75" />

      {/* Main Grid: Left Headline & CTA + Right Reference-Matched Glass Panel */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column (7 cols): Clean, Large, Elegant Typography */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-sans font-normal tracking-tight text-white leading-[1.03]">
              Your Personal <br />
              <span className="font-semibold text-white">Footwear Sanctuary</span>
            </h1>

            <p className="text-base sm:text-lg text-white/85 max-w-xl leading-relaxed font-light">
              Meet your personal digital sneaker vault — a comprehensive luxury platform offering tools for discovering archival grails, tracking verified releases, and curating your rotation.
            </p>
          </div>

          {/* Action Buttons matching reference style */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/shop"
              className="btn-reference-white inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-wider"
            >
              <span>Explore Collection</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <button
              onClick={scrollToCollection}
              className="btn-reference-glass inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs uppercase tracking-wider font-medium"
            >
              <span>Schedule Drop Preview</span>
              <ArrowUpRight className="w-4 h-4 text-white/70" />
            </button>
          </div>
        </div>

        {/* Right Column (5 cols): Exact Translucent Glass Floating Panel from Reference */}
        <div className="lg:col-span-5 relative">
          <div className="w-full max-w-md mx-auto rounded-3xl reference-glass-card p-6 sm:p-7 space-y-5">
            
            {/* Top pill notch handle */}
            <div className="w-12 h-1 rounded-full bg-white/40 mx-auto" />

            {/* Location / Meta header */}
            <div className="flex items-center gap-2 text-[11px] font-sans text-white/75">
              <MapPin className="w-3.5 h-3.5 text-[#12B5D0]" />
              <span className="truncate">Archive Vault 01, High Street, New Delhi, IND</span>
            </div>

            {/* Sub-panel 1 (Mondays style schedule / Featured Item) */}
            <div className="rounded-2xl reference-sub-panel p-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-white">
                <span className="font-bold text-sm tracking-tight">{shoe1.name}</span>
                <span className="flex items-center gap-1 text-[11px] text-[#85DCED] font-mono">
                  <Sparkles className="w-3 h-3 text-[#EF648F]" />
                  <span>Grail Tier</span>
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-white/80 font-mono">
                <div>
                  <span className="text-[10px] text-white/50 block">STATUS</span>
                  <span className="text-white font-bold">{formatINR(shoe1.price)}</span>
                </div>
                <div>
                  <span className="text-[10px] text-white/50 block">SIZING</span>
                  <span>UK 7 - UK 12</span>
                </div>
                <div>
                  <span className="text-[10px] text-white/50 block">ALLOCATION</span>
                  <span className="text-[#85DCED] font-bold">Verified</span>
                </div>
              </div>
            </div>

            {/* Sub-panel 2 (Thursdays style schedule / Featured Item 2) */}
            <div className="rounded-2xl reference-sub-panel p-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-white">
                <span className="font-bold text-sm tracking-tight">{shoe2.name}</span>
                <span className="flex items-center gap-1 text-[11px] text-[#85DCED] font-mono">
                  <Activity className="w-3 h-3 text-[#12B5D0]" />
                  <span>Aerospace</span>
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-white/80 font-mono">
                <div>
                  <span className="text-[10px] text-white/50 block">PRICE</span>
                  <span className="text-white font-bold">{formatINR(shoe2.price)}</span>
                </div>
                <div>
                  <span className="text-[10px] text-white/50 block">SIZING</span>
                  <span>UK 8 - UK 11</span>
                </div>
                <div>
                  <span className="text-[10px] text-white/50 block">DISPATCH</span>
                  <span className="text-[#EF648F] font-bold">Express 48h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 5-Column Feature Strip matching reference screenshot */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-xs text-white/80">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#12B5D0] font-semibold text-xs">
            <ShieldCheck className="w-4 h-4 text-[#12B5D0]" />
            <span>Verified Authenticity</span>
          </div>
          <p className="text-[11px] text-white/65 leading-snug">
            Expertly vetted footwear architecture and lineage
          </p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#85DCED] font-semibold text-xs">
            <Zap className="w-4 h-4 text-[#85DCED]" />
            <span>State-of-the-Art Core</span>
          </div>
          <p className="text-[11px] text-white/65 leading-snug">
            Precision damping and aerospace FuelCell engineering
          </p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#F28A9A] font-semibold text-xs">
            <Layers className="w-4 h-4 text-[#F28A9A]" />
            <span>UK / India Sizing</span>
          </div>
          <p className="text-[11px] text-white/65 leading-snug">
            Tailored international size conversion and half-sizes
          </p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#85DCED] font-semibold text-xs">
            <CheckCircle2 className="w-4 h-4 text-[#85DCED]" />
            <span>Archival Track Record</span>
          </div>
          <p className="text-[11px] text-white/65 leading-snug">
            Curated allocations for discerning collectors
          </p>
        </div>

        <div className="space-y-1 col-span-2 sm:col-span-1">
          <div className="flex items-center gap-2 text-[#12B5D0] font-semibold text-xs">
            <Sparkles className="w-4 h-4 text-[#12B5D0]" />
            <span>Express Dispatch</span>
          </div>
          <p className="text-[11px] text-white/65 leading-snug">
            Insured direct-to-door courier across India
          </p>
        </div>
      </div>
    </section>
  );
}
