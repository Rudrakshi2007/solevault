'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldAlert } from 'lucide-react';
import { useVaultStore } from '@/lib/store';
import { formatINR } from '@/lib/utils';

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useVaultStore();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isCartOpen || !mounted) return null;

  const subtotal = getCartTotal();
  const FREE_SHIPPING_THRESHOLD = 10000;
  const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 499;
  const progressToFreeShipping = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const remainingForFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);

  const total = subtotal + shippingFee;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop with soft blur */}
      <div
        className="fixed inset-0 bg-[#172B3A]/45 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer Panel: Reference Translucent Deep Cyan-Navy Glass */}
      <div className="relative z-10 w-full max-w-md bg-[#073B78]/95 backdrop-blur-2xl border-l border-white/20 h-full flex flex-col justify-between shadow-2xl animate-fade-in text-white">
        {/* Drawer Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#85DCED]" />
            <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">
              SHOPPING BAG ({cart.reduce((s, i) => s + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 rounded-xl text-white/60 hover:text-[#F28A9A] hover:bg-white/10 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Strip */}
        <div className="reference-sub-panel px-5 py-3 border-b border-white/10">
          <div className="flex justify-between text-[11px] font-mono text-white/80 mb-1.5 font-medium">
            <span>
              {remainingForFreeShipping === 0
                ? 'Unlocked Free Express Delivery!'
                : `Add ${formatINR(remainingForFreeShipping)} for Free Delivery`}
            </span>
            <span className="text-[#F28A9A] font-bold">{Math.round(progressToFreeShipping)}%</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/15">
            <div
              className="h-full bg-gradient-to-r from-[#12B5D0] to-[#F28A9A] transition-all duration-300"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Cart Items Scrollable Container */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 text-white/60 space-y-4">
              <ShoppingBag className="w-12 h-12 text-[#85DCED]" />
              <div className="space-y-1">
                <p className="text-sm font-bold text-white">Your bag is currently empty</p>
                <p className="text-xs text-white/60">Discover our signature collection and find your grail.</p>
              </div>
              <Link
                href="/shop"
                onClick={closeCart}
                className="btn-reference-white inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider"
              >
                <span>EXPLORE CATALOGUE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3.5 rounded-2xl reference-sub-panel border-white/15 shadow-sm"
              >
                {/* Thumbnail */}
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-black/20 border border-white/15 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono text-[#85DCED] uppercase font-bold block">
                        {item.brand}
                      </span>
                      <h3 className="text-xs sm:text-sm font-semibold text-white line-clamp-1">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-white/70 mt-0.5">
                        <span className="text-[#F28A9A] font-bold">{item.size}</span>
                        <span>•</span>
                        <span className="truncate max-w-[120px]">{item.color}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-white/50 hover:text-[#F28A9A] p-1 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-white/20 rounded-lg reference-sub-panel">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:text-[#F28A9A] text-white/70"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-mono font-bold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:text-[#85DCED] text-white/70"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <span className="text-xs font-mono font-bold text-[#85DCED]">
                      {formatINR(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Totals & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-white/10 reference-sub-panel space-y-4">
            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex justify-between text-white/70">
                <span>Subtotal</span>
                <span className="text-white font-semibold">{formatINR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Estimated Shipping</span>
                <span className={shippingFee === 0 ? 'text-[#85DCED] font-bold' : 'text-white'}>
                  {shippingFee === 0 ? 'FREE' : formatINR(shippingFee)}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold pt-2 border-t border-white/10 text-white">
                <span>Estimated Total (INR)</span>
                <span className="text-[#F28A9A] font-mono text-base">{formatINR(total)}</span>
              </div>
            </div>

            {/* Prototype notice badge */}
            <div className="p-2.5 rounded-xl reference-sub-panel border border-white/15 flex items-center gap-2 text-[10px] font-mono text-white/70 shadow-sm">
              <ShieldAlert className="w-4 h-4 text-[#85DCED] flex-shrink-0" />
              <span>Demo prototype. No live funds or payment cards processed.</span>
            </div>

            <div className="space-y-2">
              <Link
                href="/checkout"
                onClick={closeCart}
                className="btn-reference-white w-full py-4 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>PROCEED TO DEMO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={closeCart}
                className="w-full py-2.5 text-center text-xs font-mono text-white/60 hover:text-white transition-colors uppercase tracking-wider font-semibold"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
