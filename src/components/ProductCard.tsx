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
    <div className="group relative flex flex-col bg-deepSpace/60 rounded-2xl overflow-hidden border border-deepSpace-border hover:border-auroraTeal/50 hover:shadow-[0_10px_30px_rgba(53,230,211,0.12)] transition-all duration-300 backdrop-blur-sm">
      {/* Product Image Frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-obsidian-deep">
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
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.newArrival && (
            <span className="bg-auroraTeal text-obsidian text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-[0_0_8px_#35E6D3]">
              NEW DROP
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-obsidian/80 backdrop-blur-md text-softWhite text-[10px] font-mono px-2 py-0.5 rounded border border-white/10 uppercase tracking-wider">
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
            'absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 z-10',
            isWishlisted
              ? 'bg-auroraTeal text-obsidian shadow-md shadow-auroraTeal/30'
              : 'bg-obsidian/60 text-softWhite-muted hover:text-auroraTeal hover:bg-obsidian/90'
          )}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={cn('w-4 h-4', isWishlisted && 'fill-current')} />
        </button>

        {/* Quick Add Overlay on hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={() => openQuickAdd(product)}
            className="w-full bg-obsidian/95 hover:bg-auroraTeal text-softWhite hover:text-obsidian text-xs font-mono font-bold tracking-wider uppercase py-2.5 px-4 rounded-xl backdrop-blur-md border border-white/10 hover:border-auroraTeal flex items-center justify-center gap-2 transition-all duration-200 shadow-xl"
          >
            <Plus className="w-4 h-4" />
            <span>QUICK ADD // SELECT SIZE</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-[11px] font-mono text-mutedGrey uppercase tracking-wider mb-1">
            <span>{product.brand}</span>
            <span className="capitalize">{product.category}</span>
          </div>

          {/* Model Name */}
          <Link href={`/product/${product.slug}`} className="block group-hover:text-auroraTeal transition-colors">
            <h3 className="font-semibold text-sm sm:text-base text-softWhite leading-snug line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Colorways and Price row */}
        <div className="flex items-center justify-between pt-2 border-t border-deepSpace-border">
          {/* Colorway preview dots */}
          <div className="flex items-center gap-1.5" title={`${product.colorways.length} colorways available`}>
            {product.colorways.slice(0, 3).map((col, idx) => (
              <span
                key={idx}
                className="w-2.5 h-2.5 rounded-full border border-white/10 shadow-inner"
                style={{ backgroundColor: col.hex }}
              />
            ))}
            {product.colorways.length > 3 && (
              <span className="text-[10px] font-mono text-mutedGrey">
                +{product.colorways.length - 3}
              </span>
            )}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-sm sm:text-base font-bold text-softWhite">
              {formatINR(product.price)}
            </span>
            {product.originalPrice && (
              <span className="font-mono text-xs text-mutedGrey line-through">
                {formatINR(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
