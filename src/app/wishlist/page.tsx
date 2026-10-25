'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Heart, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { useVaultStore } from '@/lib/store';

export default function WishlistPage() {
  const { wishlist } = useVaultStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-obsidian text-ivory p-12 text-center font-mono">
        Loading saved wishlist...
      </div>
    );
  }

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="w-full min-h-screen bg-obsidian py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-charcoal gap-4">
          <div>
            <div className="flex items-center gap-2 text-lime text-xs font-mono uppercase tracking-widest font-bold mb-2">
              <Heart className="w-4 h-4 fill-lime" />
              <span>SAVED TO VAULT</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-ivory uppercase">
              WISHLIST ({wishlistedProducts.length})
            </h1>
          </div>

          {wishlistedProducts.length > 0 && (
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-xs font-mono text-mutedGrey hover:text-lime uppercase tracking-wider transition-colors"
            >
              <span>Explore More Drops</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Content */}
        {wishlistedProducts.length === 0 ? (
          <div className="py-24 text-center space-y-4 bg-charcoal/20 rounded-2xl border border-charcoal p-8">
            <Heart className="w-12 h-12 text-mutedGrey mx-auto" />
            <h2 className="text-xl font-bold text-ivory">Your Wishlist Is Empty</h2>
            <p className="text-xs font-mono text-mutedGrey max-w-sm mx-auto">
              Save your favorite sneakers, runners, and boots to your private vault to track drops and availability.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 mt-4 px-8 py-3.5 rounded-xl bg-lime text-obsidian text-xs font-mono font-bold uppercase tracking-widest hover:bg-lime-hover transition-colors shadow-lg shadow-lime/20"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>DISCOVER CATALOGUE</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
