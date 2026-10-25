'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, Flame, Sparkles } from 'lucide-react';
import { Product } from '@/types/product';
import { formatINR } from '@/lib/utils';

interface HeroCarouselProps {
  slides: Product[];
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const SLIDE_DURATION = 6500; // 6.5s per slide

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  // Handle automatic timer with progress bar
  useEffect(() => {
    if (isPaused) return;

    const interval = 50; // update progress every 50ms
    const step = (interval / SLIDE_DURATION) * 100;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = null;
    setIsPaused(false);
  };

  const activeProduct = slides[current];
  if (!activeProduct) return null;

  return (
    <section
      className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-obsidian select-none border-b border-charcoal/60"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Featured Footwear Carousel"
    >
      {/* Dynamic Background Atmospheric Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] lg:w-[900px] h-[500px] bg-gradient-to-b from-lime/10 via-transparent to-transparent blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,0)_0%,rgba(9,9,9,0.95)_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Information (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* Brand & Badge strip */}
                <div className="flex items-center gap-3">
                  <span className="text-lime text-xs font-mono uppercase tracking-widest font-bold px-2 py-0.5 border border-lime/30 rounded bg-lime/10 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    FLAGSHIP DROP
                  </span>
                  <span className="text-mutedGrey-light text-xs font-mono tracking-widest uppercase">
                    {activeProduct.brand}
                  </span>
                </div>

                {/* Campaign Headline */}
                <h2 className="text-xs sm:text-sm font-mono tracking-cinematic text-mutedGrey uppercase font-medium">
                  {activeProduct.heroHeadline || 'DEFINING MODERN FOOTWEAR CULTURE'}
                </h2>

                {/* Shoe Name */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black font-display tracking-tight text-ivory uppercase leading-none">
                  {activeProduct.name}
                </h1>

                {/* Price Display */}
                <div className="flex items-baseline gap-4 pt-1">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-lime">
                    {formatINR(activeProduct.price)}
                  </span>
                  {activeProduct.originalPrice && (
                    <span className="text-sm font-mono text-mutedGrey-dark line-through">
                      {formatINR(activeProduct.originalPrice)}
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-mutedGrey uppercase tracking-wider px-2 py-0.5 border border-charcoal rounded">
                    DEMO PRICE
                  </span>
                </div>

                {/* Description */}
                <p className="text-mutedGrey-light text-sm sm:text-base leading-relaxed max-w-lg line-clamp-3">
                  {activeProduct.description}
                </p>

                {/* Specifications pill bar */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-mutedGrey border-t border-charcoal/80">
                  {activeProduct.specifications.slice(0, 2).map((spec) => (
                    <div key={spec.label}>
                      <span className="block text-mutedGrey-dark text-[10px] uppercase">
                        {spec.label}
                      </span>
                      <span className="text-ivory font-medium truncate block">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href={`/product/${activeProduct.slug}`}
                    className="inline-flex items-center justify-center gap-2 bg-lime text-obsidian px-6 sm:px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded hover:bg-lime-hover transition-all duration-200 shadow-lg shadow-lime/20 group"
                  >
                    <span>EXPLORE SHOE</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <Link
                    href={`/shop?category=${activeProduct.category}`}
                    className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal-light text-ivory px-6 py-3.5 text-xs font-semibold uppercase tracking-widest rounded border border-charcoal/80 hover:border-mutedGrey-dark transition-all duration-200"
                  >
                    <span>DISCOVER COLLECTION</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Hero Sneaker Visual (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative flex items-center justify-center min-h-[320px] sm:min-h-[440px] lg:min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-charcoal/80 group"
              >
                <Image
                  src={activeProduct.images[0]}
                  alt={activeProduct.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle vignette & editorial watermark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-ivory/80 uppercase tracking-widest z-10 backdrop-blur-md bg-obsidian/40 px-3 py-1.5 rounded border border-white/10">
                  <span className="flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5 text-lime" />
                    {activeProduct.model}
                  </span>
                  <span>SKU: {activeProduct.sku}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Bottom Control Bar */}
        <div className="mt-12 pt-6 border-t border-charcoal flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Slide counter & active indicators */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-bold tracking-widest text-lime">
              {String(current + 1).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    setCurrent(index);
                    setProgress(0);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'w-8 bg-lime'
                      : 'w-2 bg-charcoal-light hover:bg-mutedGrey'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <span className="text-xs font-mono tracking-widest text-mutedGrey-dark">
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full sm:w-48 h-1 bg-charcoal rounded-full overflow-hidden">
            <div
              className="h-full bg-lime transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-charcoal hover:bg-charcoal-light text-ivory hover:text-lime border border-charcoal/80 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-charcoal hover:bg-charcoal-light text-ivory hover:text-lime border border-charcoal/80 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
