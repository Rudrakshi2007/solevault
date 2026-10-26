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

      // Scroll progress from 0 (top enters viewport) to 1 (bottom reaches viewport)
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
      description: 'Before the leather touches pavement, energy coalesces. An illuminated particle field ignites in deep obsidian space.',
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
      description: 'Magnetic coronal flux loops stream with velocity, channeling kinetic force into every step, stitch, and sole.',
    },
    {
      stage: '04 / 05',
      title: 'DIMENSION',
      text: 'A DIFFERENT PERSPECTIVE.',
      description: 'Spatial depth collapses into sculptural presence. The sneaker materializes through volumetric emerald and icy teal rays.',
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
      className="relative w-full h-[450vh] bg-obsidian"
    >
      {/* Sticky Fullscreen 3D Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-6 sm:p-12 border-b border-deepSpace-border">
        {/* 3D Canvas driven by the scroll progress */}
        <AuroraParticleCanvas scrollProgress={scrollProgress} className="opacity-95" />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,6,8,0.05)_0%,rgba(5,6,8,0.75)_100%)] pointer-events-none" />

        {/* Top Bar: Progress Indicator & Stage Counter */}
        <div className="relative z-20 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-3">
            <Orbit className="w-4 h-4 text-auroraTeal animate-spin-slow" />
            <span className="text-softWhite font-bold tracking-widest uppercase">
              CINEMATIC SCROLL EXPERIENCE
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-auroraTeal font-bold tracking-widest">
              {currentStageData.stage}
            </span>
            <div className="w-24 sm:w-40 h-1 bg-deepSpace-border rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-auroraTeal to-emeraldGlow transition-all duration-150 ease-out"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
            <span className="text-mutedGrey tracking-widest">
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
                <span className="inline-block px-3 py-1 rounded-full border border-auroraTeal/40 bg-auroraTeal/10 text-auroraTeal text-xs font-mono uppercase tracking-widest font-bold">
                  STAGE {currentStageData.title}
                </span>

                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-softWhite uppercase leading-none">
                  {currentStageData.text}
                </h2>

                <p className="text-sm sm:text-base font-mono text-softWhite-muted max-w-lg mx-auto leading-relaxed">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emeraldGlow/40 bg-emeraldGlow/10 text-emeraldGlow text-xs font-mono uppercase tracking-widest font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FINAL STAGE // THE ARTIFACT REVEALED</span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-softWhite uppercase leading-none">
                FIND YOUR NEXT ICON.
              </h2>

              {/* Emergent Sneaker Card with Aurora Rim Lighting */}
              <div className="relative w-full max-w-xl aspect-[16/10] rounded-3xl overflow-hidden bg-deepSpace/90 border border-auroraTeal/40 shadow-2xl shadow-auroraTeal/20 p-6 flex flex-col justify-between group backdrop-blur-xl">
                {/* Glow Backdrop Behind Shoe */}
                <div className="absolute inset-0 bg-gradient-to-tr from-auroraTeal/15 via-transparent to-emeraldGlow/15 pointer-events-none" />

                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-mutedGrey uppercase block">
                      {flagshipShoe.brand}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display uppercase text-softWhite">
                      {flagshipShoe.name}
                    </h3>
                  </div>

                  <span className="text-base font-mono font-bold text-auroraTeal px-3 py-1 rounded-lg bg-deepSpace border border-auroraTeal/30">
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
                    className="object-contain object-center drop-shadow-[0_20px_30px_rgba(53,230,211,0.25)] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="relative z-10 flex items-center justify-between pt-3 border-t border-deepSpace-border text-xs font-mono">
                  <span className="text-mutedGrey">
                    Sizes: UK 7 - UK 12 Available
                  </span>

                  <Link
                    href={`/product/${flagshipShoe.slug}`}
                    className="inline-flex items-center gap-2 bg-auroraTeal hover:bg-auroraTeal-hover text-obsidian px-5 py-2.5 rounded-lg font-bold uppercase tracking-wider transition-colors"
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
        <div className="relative z-20 flex items-center justify-between text-[11px] font-mono text-mutedGrey">
          <span>Scroll down to advance stages • Scroll up to reverse timeline</span>
          <span className="uppercase text-auroraTeal">
            Stage {activeStage + 1} of 5 Active
          </span>
        </div>
      </div>
    </div>
  );
}
