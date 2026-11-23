'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Sparkles,
  Search,
  SlidersHorizontal,
  X,
  RotateCcw,
  Heart,
  Plus,
  ArrowUpRight,
  ShieldCheck,
  Moon,
  Flame,
  Zap,
  Clock,
  Compass,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';
import { PRODUCTS, BRANDS } from '@/data/products';
import { Product } from '@/types/product';
import { useVaultStore } from '@/lib/store';
import { formatINR, cn } from '@/lib/utils';
import { ProductCard } from '@/components/ProductCard';

type NightCollection = 'all' | 'drops' | 'trending' | 'underrated' | 'grails';
type NightSort = 'featured' | 'price-asc' | 'price-desc' | 'popular' | 'newest';

function NightMarketContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { wishlist, toggleWishlist, openQuickAdd } = useVaultStore();

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCollection, setActiveCollection] = useState<NightCollection>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [priceMax, setPriceMax] = useState<number>(75000);
  const [sortBy, setSortBy] = useState<NightSort>('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Available filter sizes
  const sizesList = ['UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'];

  // All unique brands
  const brandList = useMemo(() => {
    return ['all', ...BRANDS];
  }, []);

  // Filter & Sort calculation
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    // 1. Collection filter
    if (activeCollection === 'drops') {
      list = list.filter((p) => p.newArrival || p.tags.includes('drop') || p.tags.includes('collab'));
    } else if (activeCollection === 'trending') {
      list = list.filter((p) => p.trending);
    } else if (activeCollection === 'underrated') {
      list = list.filter((p) =>
        ['Onitsuka Tiger', 'ASICS', 'Salomon', 'New Balance', 'Hoka'].some((b) =>
          p.brand.toLowerCase().includes(b.toLowerCase())
        )
      );
    } else if (activeCollection === 'grails') {
      list = list.filter((p) => p.price >= 20000 || p.tags.includes('grail') || p.featured);
    }

    // 2. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.model.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // 3. Brand filter
    if (selectedBrand !== 'all') {
      list = list.filter((p) => p.brand.toLowerCase().includes(selectedBrand.toLowerCase()));
    }

    // 4. Size filter
    if (selectedSize !== 'all') {
      list = list.filter((p) =>
        p.sizes.some((s) => s.size.toLowerCase() === selectedSize.toLowerCase() && s.available)
      );
    }

    // 5. Price Max filter
    list = list.filter((p) => p.price <= priceMax);

    // 6. Sort
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
      list.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
    } else if (sortBy === 'newest') {
      list.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
    }

    return list;
  }, [activeCollection, searchQuery, selectedBrand, selectedSize, priceMax, sortBy]);

  // Featured Spotlight Sneaker: Onitsuka Tiger Serrano Black & White
  const headlineSneaker = PRODUCTS[0];
  const spotlightTwo = PRODUCTS[1]; // Samba OG
  const spotlightThree = PRODUCTS[2]; // New Balance 990v6

  const activeFilterCount =
    (selectedBrand !== 'all' ? 1 : 0) +
    (selectedSize !== 'all' ? 1 : 0) +
    (priceMax < 75000 ? 1 : 0) +
    (activeCollection !== 'all' ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  const resetAllFilters = () => {
    setSearchQuery('');
    setActiveCollection('all');
    setSelectedBrand('all');
    setSelectedSize('all');
    setPriceMax(75000);
    setSortBy('featured');
  };

  return (
    <div className="w-full min-h-screen select-none px-4 sm:px-8 lg:px-12 py-8 space-y-16">
      
      {/* ============================================================== */}
      {/* 1. NIGHT MARKET HERO & OPENING SHOWCASE                         */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto w-full space-y-8 pt-4">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full reference-sub-panel border border-[#12B4CE]/40 text-[#85DCED] text-xs font-mono uppercase tracking-widest font-bold shadow-lg backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-[#12B4CE] shadow-[0_0_10px_#12B4CE] animate-ping" />
            <span>NIGHT MARKET // CURATED VAULT ACCESS</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/85 text-xs font-mono">
            <Moon className="w-3.5 h-3.5 text-[#F28A9A]" />
            <span>AFTER-HOURS SNEAKER DESTINATION</span>
          </div>
        </div>

        {/* Headline & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-sans font-light tracking-tight text-white uppercase leading-[0.94]">
              NIGHT <br />
              <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#12B5D0] via-[#85DCED] to-[#EF648F]">
                MARKET
              </span>
            </h1>

            <p className="text-base sm:text-xl text-white/90 font-light max-w-2xl leading-relaxed">
              The streets never sleep. Neither does sneaker culture.
            </p>

            <p className="text-xs sm:text-sm text-white/70 max-w-xl font-light leading-relaxed">
              Welcome to the SOLEVAULT Night Market — an exclusive destination where collectors discover trending releases, limited midnight drops, underrated silhouettes, and private vault inventory under atmospheric illumination.
            </p>
          </div>

          {/* Quick Metrics Bar on Right */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="reference-glass-card rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white/60 uppercase">Market Allotment</span>
                <span className="text-[#85DCED] font-bold">62+ Verified Silhouettes</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white/60 uppercase">Authentication</span>
                <span className="text-[#EF648F] font-bold">100% Vault Verified</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white/60 uppercase">Dispatch Transit</span>
                <span className="text-white font-bold">Express Air Across India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Featured Night Drop Banner: Onitsuka Tiger Serrano Black & White */}
        <div className="relative rounded-3xl overflow-hidden reference-glass-card p-6 sm:p-8 lg:p-10 border border-[#12B4CE]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12B4CE]/20 border border-[#12B4CE]/40 text-[#85DCED] text-[11px] font-mono uppercase tracking-widest font-bold">
                <Flame className="w-3.5 h-3.5 text-[#EF648F]" />
                <span>NIGHT MARKET HEADLINE DROP // FEATURED</span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-white/70 uppercase tracking-widest block">
                  {headlineSneaker.brand}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-white uppercase tracking-tight leading-tight">
                  {headlineSneaker.name}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-lg">
                {headlineSneaker.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="px-4 py-2 rounded-2xl reference-sub-panel border border-white/20">
                  <span className="text-[10px] font-mono text-white/60 block">NIGHT MARKET PRICE</span>
                  <span className="text-xl font-bold font-mono text-white">{formatINR(headlineSneaker.price)}</span>
                </div>

                <div className="px-4 py-2 rounded-2xl reference-sub-panel border border-white/20">
                  <span className="text-[10px] font-mono text-white/60 block">VAULT STOCK</span>
                  <span className="text-sm font-bold font-mono text-[#85DCED]">UK 6 - UK 11 In Vault</span>
                </div>

                <button
                  onClick={() => openQuickAdd(headlineSneaker)}
                  className="btn-reference-white px-7 py-3 rounded-full text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-2 shadow-xl"
                >
                  <span>RESERVE PAIR</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <Link
                  href={`/product/${headlineSneaker.slug}`}
                  className="btn-reference-glass px-5 py-3 rounded-full text-xs font-medium text-white/90 hover:text-white inline-flex items-center gap-1.5"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Sneaker Photograph */}
            <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] w-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#12B4CE]/20 via-transparent to-[#EF648F]/20 rounded-2xl blur-2xl" />
              <Image
                src={headlineSneaker.images[0]}
                alt={headlineSneaker.name}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
                className="object-contain object-center drop-shadow-[0_25px_45px_rgba(7,59,120,0.8)] transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CURATED NIGHT MARKET SPOTLIGHT TIERS (3 WINGS)              */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto w-full space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-white/15">
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-[#12B4CE]" />
            <h2 className="text-xl sm:text-2xl font-bold font-sans text-white uppercase tracking-tight">
              Curated Night Selections
            </h2>
          </div>
          <span className="text-xs font-mono text-white/60">
            Handpicked after-hours rotations
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Spotlight 1: Trending Night Releases */}
          <div
            onClick={() => setActiveCollection('trending')}
            className={cn(
              'group rounded-3xl p-6 reference-glass-card cursor-pointer transition-all duration-300 relative overflow-hidden border',
              activeCollection === 'trending'
                ? 'border-[#EF648F] shadow-[0_0_25px_rgba(239,100,143,0.3)]'
                : 'border-white/15 hover:border-white/30'
            )}
          >
            <div className="flex items-center justify-between pb-4">
              <span className="text-[10px] font-mono text-[#EF648F] font-bold uppercase tracking-widest">
                WING 01 // TRENDING NOW
              </span>
              <Flame className="w-4 h-4 text-[#EF648F]" />
            </div>
            <h3 className="text-lg font-bold font-sans text-white mb-2">Midnight Heat Releases</h3>
            <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
              High-velocity street favorites experiencing peak momentum across Seoul, Tokyo, and London.
            </p>
            <div className="flex items-center text-xs font-mono text-[#85DCED] group-hover:text-white transition-colors">
              <span>Explore Trending Drops &rarr;</span>
            </div>
          </div>

          {/* Spotlight 2: Underrated Classics */}
          <div
            onClick={() => setActiveCollection('underrated')}
            className={cn(
              'group rounded-3xl p-6 reference-glass-card cursor-pointer transition-all duration-300 relative overflow-hidden border',
              activeCollection === 'underrated'
                ? 'border-[#12B4CE] shadow-[0_0_25px_rgba(18,180,206,0.3)]'
                : 'border-white/15 hover:border-white/30'
            )}
          >
            <div className="flex items-center justify-between pb-4">
              <span className="text-[10px] font-mono text-[#12B4CE] font-bold uppercase tracking-widest">
                WING 02 // UNDERRATED CLASSICS
              </span>
              <Sparkles className="w-4 h-4 text-[#12B4CE]" />
            </div>
            <h3 className="text-lg font-bold font-sans text-white mb-2">Subtle Archival Icons</h3>
            <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
              Onitsuka Tiger, ASICS, and Salomon models revered by connoisseurs for uncompromising craftsmanship.
            </p>
            <div className="flex items-center text-xs font-mono text-[#85DCED] group-hover:text-white transition-colors">
              <span>Explore Cult Silhouettes &rarr;</span>
            </div>
          </div>

          {/* Spotlight 3: Limited Grails */}
          <div
            onClick={() => setActiveCollection('grails')}
            className={cn(
              'group rounded-3xl p-6 reference-glass-card cursor-pointer transition-all duration-300 relative overflow-hidden border',
              activeCollection === 'grails'
                ? 'border-[#85DCED] shadow-[0_0_25px_rgba(133,220,237,0.3)]'
                : 'border-white/15 hover:border-white/30'
            )}
          >
            <div className="flex items-center justify-between pb-4">
              <span className="text-[10px] font-mono text-[#85DCED] font-bold uppercase tracking-widest">
                WING 03 // LIMITED DROPS
              </span>
              <Zap className="w-4 h-4 text-[#85DCED]" />
            </div>
            <h3 className="text-lg font-bold font-sans text-white mb-2">Vault Grails & Editions</h3>
            <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
              Verified private collector releases, collaboration prototypes, and rare archival investments.
            </p>
            <div className="flex items-center text-xs font-mono text-[#85DCED] group-hover:text-white transition-colors">
              <span>Explore Rare Grails &rarr;</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. INTERACTIVE SNEAKER MARKETPLACE BROWSER                      */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto w-full space-y-8">
        
        {/* Marketplace Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/15">
          <div>
            <span className="text-[11px] font-mono text-[#EF648F] uppercase tracking-widest font-bold block">
              CATALOGUE DIRECTORY // ALL VERIFIED DROPS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white uppercase tracking-tight">
              Sneaker Marketplace
            </h2>
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#85DCED] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by brand, model, tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#073B78]/60 backdrop-blur-md border border-white/20 focus:border-[#85DCED] rounded-full pl-10 pr-9 py-2 text-xs font-sans text-white placeholder:text-white/50 outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Collection Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'All Night Market' },
            { id: 'drops', label: 'Limited Midnight Drops' },
            { id: 'trending', label: 'Trending Right Now' },
            { id: 'underrated', label: 'Underrated Classics' },
            { id: 'grails', label: 'Vault Grails' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCollection(tab.id as NightCollection)}
              className={cn(
                'px-4 py-2 rounded-full text-xs font-sans tracking-wide transition-all whitespace-nowrap',
                activeCollection === tab.id
                  ? 'bg-white text-[#063C78] font-semibold shadow-md'
                  : 'reference-sub-panel text-white/80 hover:text-white border border-white/15'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Controls Row: Brand Filter, Size Filter, Price Filter, Sort Dropdown */}
        <div className="reference-glass-card rounded-2xl p-4 sm:p-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            
            {/* 1. Brand Selector */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-white/70 uppercase">Filter Brand</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-[#073B78]/70 border border-white/20 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-[#85DCED]"
              >
                <option value="all">All Brands ({BRANDS.length})</option>
                {BRANDS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Size Selector */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-white/70 uppercase">Shoe Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full bg-[#073B78]/70 border border-white/20 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-[#85DCED]"
              >
                <option value="all">All Sizes (UK 5 - 12)</option>
                {sizesList.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Max Price Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-[11px] font-mono">
                <span className="text-white/70 uppercase">Price Ceiling:</span>
                <span className="text-[#85DCED] font-bold">{formatINR(priceMax)}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="75000"
                step="2500"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-[#EF648F] cursor-pointer"
              />
            </div>

            {/* 4. Sort Selector */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-white/70 uppercase">Sort Order</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as NightSort)}
                className="w-full bg-[#073B78]/70 border border-white/20 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-[#85DCED]"
              >
                <option value="featured">Curated Spotlight</option>
                <option value="popular">Most Popular</option>
                <option value="newest">Newest Drops</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Active Filters Badges & Count */}
          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-white/60">
                Found {filteredProducts.length} {filteredProducts.length === 1 ? 'silhouette' : 'silhouettes'}
              </span>

              {selectedBrand !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#12B4CE]/20 text-[#85DCED] text-[11px] font-mono border border-[#12B4CE]/30">
                  Brand: {selectedBrand}
                  <button onClick={() => setSelectedBrand('all')} className="hover:text-white">
                    &times;
                  </button>
                </span>
              )}

              {selectedSize !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#12B4CE]/20 text-[#85DCED] text-[11px] font-mono border border-[#12B4CE]/30">
                  Size: {selectedSize}
                  <button onClick={() => setSelectedSize('all')} className="hover:text-white">
                    &times;
                  </button>
                </span>
              )}

              {priceMax < 75000 && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#12B4CE]/20 text-[#85DCED] text-[11px] font-mono border border-[#12B4CE]/30">
                  Under {formatINR(priceMax)}
                  <button onClick={() => setPriceMax(75000)} className="hover:text-white">
                    &times;
                  </button>
                </span>
              )}

              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#12B4CE]/20 text-[#85DCED] text-[11px] font-mono border border-[#12B4CE]/30">
                  &ldquo;{searchQuery}&rdquo;
                  <button onClick={() => setSearchQuery('')} className="hover:text-white">
                    &times;
                  </button>
                </span>
              )}
            </div>

            {activeFilterCount > 0 && (
              <button
                onClick={resetAllFilters}
                className="inline-flex items-center gap-1 text-[11px] font-mono text-[#EF648F] hover:text-white underline"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={idx < 4}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl reference-glass-card p-12 text-center space-y-4 max-w-lg mx-auto">
            <Moon className="w-10 h-10 text-[#85DCED] mx-auto opacity-60" />
            <h3 className="text-xl font-bold font-sans text-white">No Matching Sneakers Found</h3>
            <p className="text-xs text-white/70 font-light">
              No Night Market silhouettes matched your current filter criteria. Try resetting filters or searching another keyword.
            </p>
            <button
              onClick={resetAllFilters}
              className="btn-reference-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* ============================================================== */}
      {/* 4. THE NIGHT SHIFT VAULT GUARANTEE                             */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto w-full pt-8 pb-12 border-t border-white/15">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-[11px] font-mono text-[#85DCED] uppercase tracking-widest font-bold">
            CONFIDENTIAL PROTOCOL // VAULT COMMITMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white uppercase tracking-tight">
            The Night Shift Guarantee
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Every Night Market transaction is backed by physical inspection protocols, temperature-controlled archival storage, and tracked vault couriers across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="reference-glass-card rounded-2xl p-6 space-y-3 border border-white/15">
            <div className="w-8 h-8 rounded-xl bg-[#12B4CE]/20 flex items-center justify-center text-[#12B4CE]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold font-sans text-white">Physical Verification</h4>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Every pair undergoes multi-point inspection: stitching, UV verification, box labels, and sole composition.
            </p>
          </div>

          <div className="reference-glass-card rounded-2xl p-6 space-y-3 border border-white/15">
            <div className="w-8 h-8 rounded-xl bg-[#12B4CE]/20 flex items-center justify-center text-[#12B4CE]">
              <Clock className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold font-sans text-white">Immediate Reservation</h4>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Clicking Reserve Pair holds your allocated size in the bag for expedited checkout without inventory sniping.
            </p>
          </div>

          <div className="reference-glass-card rounded-2xl p-6 space-y-3 border border-white/15">
            <div className="w-8 h-8 rounded-xl bg-[#12B4CE]/20 flex items-center justify-center text-[#12B4CE]">
              <Zap className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold font-sans text-white">Express Courier Transit</h4>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Dispatched double-boxed with tamper-evident serial tape to ensure mint archival arrival.
            </p>
          </div>

          <div className="reference-glass-card rounded-2xl p-6 space-y-3 border border-white/15">
            <div className="w-8 h-8 rounded-xl bg-[#12B4CE]/20 flex items-center justify-center text-[#12B4CE]">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold font-sans text-white">Collector Protection</h4>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Full 7-day authenticity backing with immediate resolution or refund through our collector concierge.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default function NightMarketPage() {
  return (
    <Suspense fallback={<div className="min-h-screen text-center py-20 text-white font-mono">Loading Night Market...</div>}>
      <NightMarketContent />
    </Suspense>
  );
}
