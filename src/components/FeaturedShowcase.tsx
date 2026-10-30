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
    <section id="featured-showcase" className="w-full py-24 sm:py-32 bg-paleBg ambient-diffusion-showcase texture-vertical-glass border-b border-[#55C7F2]/25 relative overflow-hidden">
      {/* Subtle Ambient Radial Light Sources */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#55C7F2]/20 via-[#FF3D9A]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#FF3D9A] text-xs font-mono uppercase tracking-widest font-bold block mb-2">
              SHOWCASE SPOTLIGHT // 01
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-[#172B3A] uppercase leading-[0.95]">
              THE NEXT LEVEL OF{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55C7F2] via-[#FF3D9A] to-[#087EAD]">
                EVERYDAY.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-sans text-[#2C4659] max-w-md leading-relaxed font-normal">
            Where aerospace-grade FuelCell acceleration meets hand-finished pigskin suede. Engineered for those who move between high-intensity city transit and private spaces.
          </p>
        </div>

        {/* Asymmetrical Studio Presentation (Grid: 7 cols image, 5 cols buying experience) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Studio Image with Frosted Glass Box (7 cols) */}
          <div className="lg:col-span-7 relative group">
            {/* Architectural Frosted Box */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden frosted-glass-card p-8 flex items-center justify-center">
              {/* Luminous internal reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#55C7F2]/25 via-white/40 to-[#FF3D9A]/20 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="relative w-full h-full">
                <Image
                  src={showcaseProduct.images[0]}
                  alt={showcaseProduct.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain object-center drop-shadow-[0_25px_35px_rgba(85,199,242,0.25)] transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Watermark Details */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-[#172B3A] uppercase tracking-widest backdrop-blur-md bg-white/85 px-4 py-2.5 rounded-xl border border-[#55C7F2]/30 shadow-sm">
                <span className="font-semibold">{showcaseProduct.model}</span>
                <span className="text-[#FF3D9A] font-bold">MADE IN USA ARCHIVE</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Controls & Buying Experience (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#087EAD] uppercase tracking-widest font-bold block mb-1">
                {showcaseProduct.brand}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-[#172B3A]">
                {showcaseProduct.name}
              </h3>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-[#55C7F2]/30 shadow-sm flex items-baseline justify-between">
              <div>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-[#087EAD]">
                  {formatINR(showcaseProduct.price)}
                </span>
                {showcaseProduct.originalPrice && (
                  <span className="ml-3 text-xs font-mono text-[#7B96A8] line-through">
                    {formatINR(showcaseProduct.originalPrice)}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-mono font-bold text-[#FF3D9A] bg-[#FFE8F3] border border-[#FF3D9A]/30 px-2 py-0.5 rounded-full uppercase">
                INR LISTING
              </span>
            </div>

            {/* Colorways */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#2C4659] block">
                Selected Colorway: <strong className="text-[#172B3A]">{selectedColor}</strong>
              </span>
              <div className="flex flex-wrap gap-2">
                {showcaseProduct.colorways.map((col) => (
                  <button
                    key={col.name}
                    onClick={() => setSelectedColor(col.name)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${
                      selectedColor === col.name
                        ? 'border-[#FF3D9A] bg-[#FFE8F3] text-[#FF3D9A] font-bold shadow-sm'
                        : 'border-[#55C7F2]/30 bg-white/70 text-[#2C4659] hover:border-[#55C7F2]'
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-black/10"
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
                <span className="text-xs font-mono uppercase text-[#2C4659] font-medium">
                  Select Size (UK / India)
                </span>
                <button
                  type="button"
                  onClick={openSizeGuide}
                  className="text-xs font-mono text-[#087EAD] hover:text-[#FF3D9A] hover:underline flex items-center gap-1 font-semibold"
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
                      className={`py-2 px-1 text-center rounded-xl text-xs font-mono font-bold transition-all ${
                        isSelected
                          ? 'bg-[#FF3D9A] text-white shadow-md shadow-[#FF3D9A]/30 border border-[#FF3D9A]'
                          : isAvailable
                          ? 'bg-white hover:bg-[#F5FBFF] text-[#172B3A] border border-[#55C7F2]/30 hover:border-[#55C7F2] shadow-sm'
                          : 'bg-[#F5FBFF] text-[#9BB3C4] border border-gray-200 line-through opacity-40 cursor-not-allowed'
                      }`}
                    >
                      {s.size}
                    </button>
                  );
                })}
              </div>

              {error && (
                <p className="text-xs font-mono text-[#FF3D9A] font-bold">{error}</p>
              )}
            </div>

            {/* Actions: Special CTA Hot Pink Button */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="btn-hot-pink w-full py-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
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
                className="btn-secondary-white w-full py-3.5 rounded-xl text-xs font-mono uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
              >
                <span>READ FULL ARCHIVE SPECIFICATIONS</span>
                <ArrowUpRight className="w-4 h-4 text-[#087EAD]" />
              </Link>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#4A667A] pt-2 border-t border-[#55C7F2]/20 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#55C7F2] flex-shrink-0" />
              <span>Complimentary Insured Courier Dispatch Over ₹10,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
