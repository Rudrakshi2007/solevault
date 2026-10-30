'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Orbit } from 'lucide-react';
import { AuroraParticleCanvas } from './AuroraParticleCanvas';
import { formatINR } from '@/lib/utils';
import { PRODUCTS } from '@/data/products';

export function ScrollExperience3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll through the container height
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      const totalScrollableDistance = containerHeight - windowHeight;
      if (totalScrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableDistance));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine current active stage (0: Awaken, 1: Form, 2: Energy, 3: Dimension, 4: Reveal)
  let activeStage = 0;
  if (scrollProgress >= 0.8) activeStage = 4;
  else if (scrollProgress >= 0.6) activeStage = 3;
  else if (scrollProgress >= 0.4) activeStage = 2;
  else if (scrollProgress >= 0.2) activeStage = 1;

  const stages = [
    {
      stage: '01 / 05',
      title: 'AWAKEN',
      text: 'EVERY ICON HAS AN ORIGIN.',
      description: 'Before the leather touches pavement, energy coalesces. An illuminated particle cloud ignites in crystalline sky blue and pure white.',
    },
    {
      stage: '02 / 05',
      title: 'FORM',
      text: 'DESIGNED TO STAND APART.',
      description: 'Particles sweep across orbital axes, forming the structural blueprints of revolutionary footwear architecture.',
    },
    {
      stage: '03 / 05',
      title: 'ENERGY',
      text: 'ENERGY IN EVERY DETAIL.',
      description: 'Magnetic coronal flux loops stream with velocity, channeling radiant hot pink kinetic force into every step, stitch, and sole.',
    },
    {
      stage: '04 / 05',
      title: 'DIMENSION',
      text: 'A DIFFERENT PERSPECTIVE.',
      description: 'Spatial depth collapses into sculptural presence. The sneaker materializes through volumetric sky blue and vibrant pink rays.',
    },
    {
      stage: '05 / 05',
      title: 'REVEAL',
      text: 'FIND YOUR NEXT ICON.',
      description: 'The physical artifact arrives. Pure archival court heritage fused with modern streetwear divinity.',
    },
  ];

  const currentStageData = stages[activeStage];
  const flagshipShoe = PRODUCTS[0]; // Air Jordan 1 Lost & Found

  return (
    <div
      id="scroll-experience"
      ref={containerRef}
      className="relative w-full h-[450vh] bg-paleBg texture-vertical-glass"
    >
      {/* Sticky Fullscreen 3D Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-6 sm:p-12 border-b border-[#55C7F2]/25">
        {/* 3D Canvas driven by the scroll progress */}
        <AuroraParticleCanvas scrollProgress={scrollProgress} className="opacity-95" />

        {/* Luminous Ambient Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5FBFF]/70 via-[#EBF6FC]/60 to-[#F5FBFF]/80 pointer-events-none" />

        {/* Top Bar: Progress Indicator & Stage Counter */}
        <div className="relative z-20 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-3">
            <Orbit className="w-4 h-4 text-[#FF3D9A] animate-spin-slow" />
            <span className="text-[#172B3A] font-bold tracking-widest uppercase">
              CINEMATIC SCROLL EXPERIENCE
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#FF3D9A] font-bold tracking-widest">
              {currentStageData.stage}
            </span>
            <div className="w-24 sm:w-40 h-1.5 bg-[#B9EBFF]/50 rounded-full overflow-hidden border border-[#55C7F2]/30">
              <div
                className="h-full bg-gradient-to-r from-[#55C7F2] via-[#FF3D9A] to-[#087EAD] transition-all duration-150 ease-out"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
            <span className="text-[#087EAD] font-bold tracking-widest">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>

        {/* Center: Stage Text or Product Reveal Container */}
        <div className="relative z-20 max-w-4xl mx-auto w-full my-auto text-center flex flex-col items-center justify-center">
          {/* Stages 0 - 3 (Text Overlays) */}
          {activeStage < 4 ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -25, scale: 1.05 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <span className="inline-block px-3.5 py-1.5 rounded-full border border-[#55C7F2]/40 bg-white/85 text-[#087EAD] text-xs font-mono uppercase tracking-widest font-bold shadow-sm shadow-[#55C7F2]/10 backdrop-blur-md">
                  STAGE {currentStageData.title}
                </span>

                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-[#172B3A] uppercase leading-none drop-shadow-sm">
                  {currentStageData.text}
                </h2>

                <p className="text-sm sm:text-base font-sans text-[#2C4659] max-w-lg mx-auto leading-relaxed font-normal">
                  {currentStageData.description}
                </p>
              </motion.div>
            </AnimatePresence>
          ) : (
            /* Stage 4: REVEAL (Sneaker emerges from illuminated particle core) */
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center justify-center space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF3D9A]/40 bg-[#FFE8F3]/80 text-[#FF3D9A] text-xs font-mono uppercase tracking-widest font-bold backdrop-blur-md shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FINAL STAGE // THE ARTIFACT REVEALED</span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-[#172B3A] uppercase leading-none">
                FIND YOUR NEXT ICON.
              </h2>

              {/* Emergent Sneaker Card with Frosted Glass & Atmospheric Rim Lighting */}
              <div className="relative w-full max-w-xl aspect-[16/10] rounded-3xl overflow-hidden frosted-glass-card p-6 flex flex-col justify-between group">
                {/* Glow Backdrop Behind Shoe */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#55C7F2]/20 via-white/50 to-[#FF3D9A]/20 pointer-events-none" />

                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-[#087EAD] uppercase font-bold block">
                      {flagshipShoe.brand}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display uppercase text-[#172B3A]">
                      {flagshipShoe.name}
                    </h3>
                  </div>

                  <span className="text-base font-mono font-bold text-[#FF3D9A] px-3 py-1 rounded-xl bg-white border border-[#FF3D9A]/30 shadow-sm">
                    {formatINR(flagshipShoe.price)}
                  </span>
                </div>

                {/* Floating Shoe Image */}
                <div className="relative w-full h-44 sm:h-52 my-2">
                  <Image
                    src={flagshipShoe.images[0]}
                    alt={flagshipShoe.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-contain object-center drop-shadow-[0_20px_35px_rgba(85,199,242,0.3)] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="relative z-10 flex items-center justify-between pt-3 border-t border-[#55C7F2]/25 text-xs font-mono">
                  <span className="text-[#5A788D] font-medium">
                    Sizes: UK 7 - UK 12 Available
                  </span>

                  <Link
                    href={`/product/${flagshipShoe.slug}`}
                    className="btn-hot-pink inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs"
                  >
                    <span>RESERVE PAIR</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom Bar: Interactive Scroll Hints */}
        <div className="relative z-20 flex items-center justify-between text-[11px] font-mono text-[#5A788D]">
          <span>Scroll down to advance stages • Scroll up to reverse timeline</span>
          <span className="uppercase text-[#FF3D9A] font-bold">
            Stage {activeStage + 1} of 5 Active
          </span>
        </div>
      </div>
    </div>
  );
}
