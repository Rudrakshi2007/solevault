'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ArrowUpRight, HelpCircle, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useVaultStore } from '@/lib/store';
import { formatINR } from '@/lib/utils';

export function FeaturedShowcase() {
  const showcaseProduct = PRODUCTS[2]; // New Balance 990v6 Made in USA Core Grey
  const { addToCart, openSizeGuide } = useVaultStore();

  const [selectedColor, setSelectedColor] = useState<string>(
    showcaseProduct.colorways[0]?.name || 'Heritage Castlerock Grey'
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError('Please select a UK shoe size');
      return;
    }

    addToCart({
      productId: showcaseProduct.id,
      name: showcaseProduct.name,
      brand: showcaseProduct.brand,
      model: showcaseProduct.model,
      slug: showcaseProduct.slug,
      price: showcaseProduct.price,
      image: showcaseProduct.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    });

    setAdded(true);
    setError(null);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="featured-showcase" className="w-full py-24 sm:py-32 border-b border-white/15 relative overflow-hidden px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#85DCED] text-xs font-mono uppercase tracking-widest font-bold block mb-2">
              SPOTLIGHT SILHOUETTE // 01
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-white uppercase leading-[0.95]">
              ARCHIVAL COMFORT. <br />
              <span className="font-light text-white/90">ELEVATED TRANSIT.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/80 max-w-md leading-relaxed font-light">
            Where aerospace-grade FuelCell acceleration meets hand-finished pigskin suede. Engineered for those who move between high-intensity city transit and private spaces.
          </p>
        </div>

        {/* Asymmetrical Studio Presentation (Grid: 7 cols image, 5 cols buying experience) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Studio Image with Translucent Cyan-Blue Box (7 cols) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden reference-glass-card p-8 flex items-center justify-center">
              {/* Internal glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#079FCB]/30 via-[#EF648F]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="relative w-full h-full">
                <Image
                  src={showcaseProduct.images[0]}
                  alt={showcaseProduct.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain object-center drop-shadow-[0_25px_35px_rgba(7,59,120,0.6)] transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Watermark Details */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-white/90 uppercase tracking-widest reference-sub-panel px-4 py-2.5 rounded-xl border border-white/20">
                <span className="font-semibold">{showcaseProduct.model}</span>
                <span className="text-[#85DCED] font-bold">MADE IN USA ARCHIVE</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Controls & Buying Experience (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#85DCED] uppercase tracking-widest font-bold block mb-1">
                {showcaseProduct.brand}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-sans uppercase tracking-tight text-white">
                {showcaseProduct.name}
              </h3>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl reference-sub-panel flex items-baseline justify-between">
              <div>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-white">
                  {formatINR(showcaseProduct.price)}
                </span>
                {showcaseProduct.originalPrice && (
                  <span className="ml-3 text-xs font-mono text-white/50 line-through">
                    {formatINR(showcaseProduct.originalPrice)}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-mono font-bold text-[#85DCED] bg-white/10 border border-white/20 px-2.5 py-0.5 rounded-full uppercase">
                ALL PRICES IN INR (₹)
              </span>
            </div>

            {/* Colorways */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-white/70 block">
                Selected Colorway: <strong className="text-white">{selectedColor}</strong>
              </span>
              <div className="flex flex-wrap gap-2">
                {showcaseProduct.colorways.map((col) => (
                  <button
                    key={col.name}
                    onClick={() => setSelectedColor(col.name)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${
                      selectedColor === col.name
                        ? 'border-white bg-white/25 text-white font-bold shadow-md'
                        : 'border-white/15 bg-white/5 text-white/70 hover:border-white/30'
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-white/30"
                      style={{ backgroundColor: col.hex }}
                    />
                    <span>{col.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-white/80 font-medium">
                  Select Size (UK / India)
                </span>
                <button
                  type="button"
                  onClick={openSizeGuide}
                  className="text-xs font-mono text-[#85DCED] hover:text-white hover:underline flex items-center gap-1 font-semibold"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Size Conversion Chart</span>
                </button>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {showcaseProduct.sizes.map((s) => {
                  const isSelected = selectedSize === s.size;
                  const isAvailable = s.available;

                  return (
                    <button
                      key={s.size}
                      type="button"
                      disabled={!isAvailable}
                      onClick={() => {
                        setSelectedSize(s.size);
                        setError(null);
                      }}
                      className={`py-2 px-1 text-center rounded-xl text-xs font-mono font-bold transition-all ${
                        isSelected
                          ? 'btn-reference-white shadow-lg'
                          : isAvailable
                          ? 'reference-sub-panel text-white hover:bg-white/20'
                          : 'bg-white/5 text-white/30 border border-white/10 line-through opacity-40 cursor-not-allowed'
                      }`}
                    >
                      {s.size}
                    </button>
                  );
                })}
              </div>

              {error && (
                <p className="text-xs font-mono text-[#F28A9A] font-bold">{error}</p>
              )}
            </div>

            {/* Actions: White & Coral Buttons matching reference */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="btn-reference-pink w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ADDED TO BAG!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO CART // SELECT UK SIZE</span>
                  </>
                )}
              </button>

              <Link
                href={`/product/${showcaseProduct.slug}`}
                className="btn-reference-glass w-full py-3.5 rounded-full text-xs font-mono uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
              >
                <span>READ FULL ARCHIVE SPECIFICATIONS</span>
                <ArrowUpRight className="w-4 h-4 text-[#85DCED]" />
              </Link>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-white/70 pt-2 border-t border-white/15">
              <ShieldCheck className="w-4 h-4 text-[#12B5D0] flex-shrink-0" />
              <span>Complimentary Insured Courier Dispatch Over ₹10,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
