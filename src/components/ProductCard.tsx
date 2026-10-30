'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Plus } from 'lucide-react';
import { Product } from '@/types/product';
import { useVaultStore } from '@/lib/store';
import { formatINR, cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { wishlist, toggleWishlist, openQuickAdd } = useVaultStore();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="group relative flex flex-col reference-glass-card rounded-3xl overflow-hidden p-3 sm:p-3.5 transition-all duration-300">
      {/* Product Image Frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#073B78]/50 border border-white/15">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {product.newArrival && (
            <span className="bg-gradient-to-r from-[#EF648F] to-[#E83E9C] text-white text-[9px] font-sans font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md shadow-[#E83E9C]/40">
              NEW DROP
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-[#073B78]/80 backdrop-blur-md text-[#85DCED] text-[9px] font-mono px-2 py-0.5 rounded-full border border-white/20 uppercase tracking-wider">
              SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          className={cn(
            'absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md transition-all duration-200 z-10 border',
            isWishlisted
              ? 'bg-[#EF648F] text-white border-[#EF648F] shadow-lg shadow-[#EF648F]/50'
              : 'bg-[#073B78]/60 text-white/80 hover:text-white hover:bg-[#07539B]/80 border-white/20'
          )}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={cn('w-3.5 h-3.5', isWishlisted && 'fill-current')} />
        </button>

        {/* Quick Add Overlay on hover */}
        <div className="absolute inset-x-2.5 bottom-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={() => openQuickAdd(product)}
            className="btn-reference-white w-full text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-2xl"
          >
            <Plus className="w-4 h-4 text-[#073B78]" />
            <span>QUICK ADD // UK SIZE</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="pt-3.5 pb-1 px-1.5 flex flex-col flex-1 justify-between gap-2.5">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#85DCED] mb-1">
            <span>{product.brand}</span>
            <span className="capitalize text-white/60">{product.category}</span>
          </div>

          {/* Model Name in crisp white */}
          <Link href={`/product/${product.slug}`} className="block group-hover:text-[#85DCED] transition-colors">
            <h3 className="font-semibold text-sm sm:text-base text-white leading-snug line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Price row */}
        <div className="flex items-center justify-between pt-2 border-t border-white/15">
          <div className="flex items-center gap-1.5">
            {product.colorways.slice(0, 3).map((col, idx) => (
              <span
                key={idx}
                className="w-2.5 h-2.5 rounded-full border border-white/40 shadow-xs"
                style={{ backgroundColor: col.hex }}
              />
            ))}
          </div>

          <span className="font-mono font-bold text-sm sm:text-base text-white">
            {formatINR(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
}
