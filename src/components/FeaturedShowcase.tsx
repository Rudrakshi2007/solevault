'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ArrowUpRight, HelpCircle, Check, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useVaultStore } from '@/lib/store';
import { formatINR } from '@/lib/utils';

export function FeaturedShowcase() {
  // Use New Balance 990v6 Made in USA or Adidas Samba OG as signature showcase shoe
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
    <section id="featured-showcase" className="w-full py-24 sm:py-32 bg-obsidian border-b border-deepSpace-border relative overflow-hidden">
      {/* Subtle Aurora Ambient Radial Glow in the background */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-r from-auroraTeal/10 via-emeraldGlow/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-auroraTeal text-xs font-mono uppercase tracking-widest font-bold block mb-2">
              SHOWCASE SPOTLIGHT // 01
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-softWhite uppercase leading-[0.95]">
              THE NEXT LEVEL OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-auroraTeal to-emeraldGlow">EVERYDAY.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-mutedGrey max-w-md leading-relaxed">
            Where aerospace-grade FuelCell acceleration meets hand-finished pigskin suede. Engineered for those who move between high-intensity city transit and private spaces.
          </p>
        </div>

        {/* Asymmetrical Studio Presentation (Grid: 7 cols image, 5 cols buying experience) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Studio Image with Aurora Rim Lighting (7 cols) */}
          <div className="lg:col-span-7 relative group">
            {/* Architectural Rim Light Box */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-deepSpace/80 border border-deepSpace-border p-8 flex items-center justify-center shadow-2xl backdrop-blur-md">
              {/* Rim lighting effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-auroraTeal/20 via-transparent to-emeraldGlow/15 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="relative w-full h-full">
                <Image
                  src={showcaseProduct.images[0]}
                  alt={showcaseProduct.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain object-center drop-shadow-[0_25px_35px_rgba(53,230,211,0.2)] transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Watermark Details */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-mutedGrey uppercase tracking-widest backdrop-blur-md bg-obsidian/60 px-4 py-2 rounded-xl border border-white/5">
                <span>{showcaseProduct.model}</span>
                <span className="text-auroraTeal font-bold">MADE IN USA ARCHIVE</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Controls & Buying Experience (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono text-auroraTeal uppercase tracking-widest block mb-1">
                {showcaseProduct.brand}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-softWhite">
                {showcaseProduct.name}
              </h3>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-xl bg-deepSpace/70 border border-deepSpace-border flex items-baseline justify-between">
              <div>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-auroraTeal">
                  {formatINR(showcaseProduct.price)}
                </span>
                {showcaseProduct.originalPrice && (
                  <span className="ml-3 text-xs font-mono text-mutedGrey line-through">
                    {formatINR(showcaseProduct.originalPrice)}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-mono text-mutedGrey uppercase px-2 py-0.5 border border-deepSpace-border rounded">
                INR LISTING
              </span>
            </div>

            {/* Colorways */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-mutedGrey block">
                Selected Colorway: <strong className="text-softWhite">{selectedColor}</strong>
              </span>
              <div className="flex flex-wrap gap-2">
                {showcaseProduct.colorways.map((col) => (
                  <button
                    key={col.name}
                    onClick={() => setSelectedColor(col.name)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all ${
                      selectedColor === col.name
                        ? 'border-auroraTeal bg-auroraTeal/10 text-softWhite'
                        : 'border-deepSpace-border text-mutedGrey hover:border-mutedGrey-dark'
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-white/10"
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
                <span className="text-xs font-mono uppercase text-mutedGrey">
                  Select Size (UK / India)
                </span>
                <button
                  type="button"
                  onClick={openSizeGuide}
                  className="text-xs font-mono text-auroraTeal hover:underline flex items-center gap-1"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Size Chart</span>
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
                      className={`py-2 px-1 text-center rounded-lg text-xs font-mono font-bold transition-all ${
                        isSelected
                          ? 'bg-auroraTeal text-obsidian shadow-lg shadow-auroraTeal/20'
                          : isAvailable
                          ? 'bg-deepSpace hover:bg-deepSpace-light text-softWhite border border-deepSpace-border hover:border-auroraTeal/40'
                          : 'bg-obsidian text-mutedGrey-dark border border-deepSpace-border/40 line-through opacity-40 cursor-not-allowed'
                      }`}
                    >
                      {s.size}
                    </button>
                  );
                })}
              </div>

              {error && (
                <p className="text-xs font-mono text-red-400 font-semibold">{error}</p>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full py-4 rounded-xl bg-auroraTeal hover:bg-auroraTeal-hover text-obsidian text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-xl shadow-auroraTeal/20"
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
                className="w-full py-3.5 rounded-xl bg-deepSpace hover:bg-deepSpace-light text-softWhite text-xs font-mono uppercase tracking-widest border border-deepSpace-border hover:border-auroraTeal/40 flex items-center justify-center gap-2 transition-colors"
              >
                <span>READ FULL ARCHIVE SPECIFICATIONS</span>
                <ArrowUpRight className="w-4 h-4 text-auroraTeal" />
              </Link>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-mutedGrey pt-2 border-t border-deepSpace-border">
              <ShieldCheck className="w-4 h-4 text-emeraldGlow flex-shrink-0" />
              <span>Complimentary Insured Courier Dispatch Over ₹10,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
