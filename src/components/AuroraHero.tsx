'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  MapPin,
  Clock,
  BarChart2,
  ShieldCheck,
  Zap,
  Calendar,
  Award,
  Layers,
} from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { formatINR } from '@/lib/utils';

export function AuroraHero() {
  const shoe1 = PRODUCTS[0]; // Onitsuka Tiger Serrano, Black & White Edition
  const shoe2 = PRODUCTS[2]; // New Balance 990v6

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-between select-none px-4 sm:px-8 lg:px-12 pt-6 pb-6 z-10">
      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column (7 cols): Exact Lightweight White Headline & Supporting Copy */}
        <div className="lg:col-span-7 space-y-6 lg:space-y-8 pr-0 lg:pr-6">
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-5xl sm:text-7xl lg:text-[5.4rem] font-sans font-light tracking-tight text-white leading-[1.04]">
              Your Personal <br />
              <span className="font-normal text-white">Footwear Companion</span>
            </h1>

            <p className="text-sm sm:text-base text-white/85 max-w-xl leading-relaxed font-light">
              Meet your personal digital sneaker companion — a comprehensive luxury platform
              offering tools for discovering archival grails, tracking verified releases,
              and curating your rotation.
            </p>
          </div>

          {/* Primary Action Row on Left (Mobile & Tablet) */}
          <div className="flex lg:hidden items-center gap-5 pt-2">
            <Link
              href="/shop"
              className="btn-reference-white inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold tracking-wide shadow-lg"
            >
              <span>Try for Free</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/shop"
              className="btn-reference-glass inline-flex items-center gap-1.5 text-xs font-medium text-white/90 hover:text-white"
            >
              <span>Schedule Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column (5 cols): Exact Translucent Glass Floating Panel & Actions from Reference */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">
          
          {/* Main Floating Glass Panel */}
          <div className="w-full max-w-[420px] rounded-[28px] GlassPanel reference-glass-card p-6 sm:p-7 space-y-4">
            
            {/* Top White Pill Notch Handle */}
            <div className="w-12 h-1 rounded-full bg-white/70 mx-auto -mt-1 mb-3" />

            {/* Location Tag Row */}
            <div className="flex items-center gap-2 text-xs font-sans text-white/80">
              <MapPin className="w-3.5 h-3.5 text-white/70 flex-shrink-0" />
              <span className="truncate">23 Sneaker Row, Vault District, BLR 560038</span>
            </div>

            {/* Sub-Card 1: Mondays / Grail Schedule */}
            <div className="rounded-2xl GlassCard reference-sub-panel p-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-white">
                <span className="font-semibold text-sm tracking-tight">Mondays</span>
                <span className="flex items-center gap-1.5 text-[11px] text-white/75 font-sans">
                  <BarChart2 className="w-3.5 h-3.5 text-[#12B4CE]" />
                  <span>Beginners</span>
                </span>
              </div>

              {/* Time Interval Row */}
              <div className="flex items-center justify-between text-xs text-white/90 font-sans pt-1">
                <div>
                  <span className="text-[10px] text-white/55 block font-light">Start</span>
                  <span className="font-semibold text-white">12:00 AM</span>
                </div>

                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 text-white/85 text-[11px] font-sans border border-white/15">
                  <Clock className="w-3 h-3 text-white/70" />
                  <span>2h</span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-white/55 block font-light">End</span>
                  <span className="font-semibold text-white">14:00 AM</span>
                </div>
              </div>

              {/* Exact Timeline Tick Marks Ruler */}
              <div className="pt-2 border-t border-white/10 flex justify-between items-end h-3 px-1 opacity-45">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-[1px] bg-white ${
                      i % 6 === 0 ? 'h-2.5 bg-white' : i % 2 === 0 ? 'h-2 bg-white/70' : 'h-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Sub-Card 2: Thursdays / Advanced Schedule */}
            <div className="rounded-2xl GlassCard reference-sub-panel p-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-white">
                <span className="font-semibold text-sm tracking-tight">Thursdays</span>
                <span className="flex items-center gap-1.5 text-[11px] text-white/75 font-sans">
                  <BarChart2 className="w-3.5 h-3.5 text-[#12B4CE]" />
                  <span>Advanced</span>
                </span>
              </div>

              {/* Time Interval Row */}
              <div className="flex items-center justify-between text-xs text-white/90 font-sans pt-1">
                <div>
                  <span className="text-[10px] text-white/55 block font-light">Start</span>
                  <span className="font-semibold text-white">13:00 AM</span>
                </div>

                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 text-white/85 text-[11px] font-sans border border-white/15">
                  <Clock className="w-3 h-3 text-white/70" />
                  <span>2h</span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-white/55 block font-light">End</span>
                  <span className="font-semibold text-white">15:00 AM</span>
                </div>
              </div>

              {/* Exact Timeline Tick Marks Ruler */}
              <div className="pt-2 border-t border-white/10 flex justify-between items-end h-3 px-1 opacity-45">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-[1px] bg-white ${
                      i % 6 === 0 ? 'h-2.5 bg-white' : i % 2 === 0 ? 'h-2 bg-white/70' : 'h-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons: Positioned directly beneath right panel as in screenshot */}
          <div className="hidden lg:flex items-center justify-end gap-5 w-full max-w-[420px] pt-1">
            <Link
              href="/shop"
              className="btn-reference-white inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-semibold tracking-wide shadow-lg"
            >
              <span>Try for Free</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/shop"
              className="btn-reference-glass inline-flex items-center gap-1.5 text-xs font-medium text-white/95 hover:text-white"
            >
              <span>Schedule Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom 5-Column Feature Strip matching reference screenshot exactly */}
      <div className="max-w-7xl mx-auto w-full pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-xs text-white/80">
        
        {/* Feature 1 */}
        <div className="space-y-1.5">
          <div className="w-6 h-6 rounded-lg bg-[#12B4CE]/20 border border-[#12B4CE]/30 flex items-center justify-center text-[#12B4CE]">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <p className="text-[12px] text-white/85 leading-snug font-light">
            Elite coaching for all ages and skill levels
          </p>
        </div>

        {/* Feature 2 */}
        <div className="space-y-1.5">
          <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white/90">
            <Zap className="w-3.5 h-3.5" />
          </div>
          <p className="text-[12px] text-white/85 leading-snug font-light">
            State-of-the-art facilities and equipment
          </p>
        </div>

        {/* Feature 3 */}
        <div className="space-y-1.5">
          <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white/90">
            <Calendar className="w-3.5 h-3.5" />
          </div>
          <p className="text-[12px] text-white/85 leading-snug font-light">
            Personalized training plans tailored to your goals
          </p>
        </div>

        {/* Feature 4 */}
        <div className="space-y-1.5">
          <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white/90">
            <Award className="w-3.5 h-3.5" />
          </div>
          <p className="text-[12px] text-white/85 leading-snug font-light">
            Proven track record of student success
          </p>
        </div>

        {/* Feature 5 */}
        <div className="space-y-1.5 col-span-2 sm:col-span-1">
          <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white/90">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <p className="text-[12px] text-white/85 leading-snug font-light">
            Comprehensive programs for beginners to advanced
          </p>
        </div>
      </div>
    </section>
  );
}
