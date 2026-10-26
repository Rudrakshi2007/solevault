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
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer Panel */}
      <div className="relative z-10 w-full max-w-md bg-obsidian border-l border-deepSpace-border h-full flex flex-col justify-between shadow-2xl animate-fade-in">
        {/* Drawer Header */}
        <div className="p-5 border-b border-deepSpace-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-auroraTeal" />
            <h2 className="text-base font-bold text-softWhite uppercase tracking-wider font-mono">
              SHOPPING BAG ({cart.reduce((s, i) => s + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 rounded-full text-mutedGrey hover:text-softWhite hover:bg-deepSpace transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Strip */}
        <div className="bg-deepSpace px-5 py-3 border-b border-deepSpace-border">
          <div className="flex justify-between text-[11px] font-mono text-mutedGrey mb-1.5">
            <span>
              {remainingForFreeShipping === 0
                ? 'Unlocked Free Express Delivery!'
                : `Add ${formatINR(remainingForFreeShipping)} for Free Delivery`}
            </span>
            <span className="text-auroraTeal font-bold">{Math.round(progressToFreeShipping)}%</span>
          </div>
          <div className="w-full h-1 bg-deepSpace-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-auroraTeal to-emeraldGlow transition-all duration-300"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Cart Items Scrollable Container */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 text-mutedGrey space-y-4">
              <ShoppingBag className="w-12 h-12 text-mutedGrey-dark" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-softWhite">Your bag is currently empty</p>
                <p className="text-xs text-mutedGrey">Discover our signature collection and find your grail.</p>
              </div>
              <Link
                href="/shop"
                onClick={closeCart}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-auroraTeal text-obsidian text-xs font-mono font-bold uppercase tracking-wider hover:bg-auroraTeal-hover transition-colors shadow-lg shadow-auroraTeal/20"
              >
                <span>EXPLORE CATALOGUE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3.5 rounded-2xl bg-deepSpace/60 border border-deepSpace-border"
              >
                {/* Thumbnail */}
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-obsidian-deep border border-deepSpace-border flex-shrink-0">
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
                      <span className="text-[10px] font-mono text-mutedGrey uppercase block">
                        {item.brand}
                      </span>
                      <h3 className="text-xs sm:text-sm font-semibold text-softWhite line-clamp-1">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-softWhite-muted mt-0.5">
                        <span className="text-auroraTeal font-bold">{item.size}</span>
                        <span>•</span>
                        <span className="truncate max-w-[120px]">{item.color}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-mutedGrey hover:text-red-400 p-1 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-deepSpace-border rounded-lg bg-obsidian">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:text-auroraTeal text-mutedGrey"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-mono font-bold text-softWhite">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:text-auroraTeal text-mutedGrey"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <span className="text-xs font-mono font-bold text-softWhite">
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
          <div className="p-5 border-t border-deepSpace-border bg-deepSpace/80 space-y-4">
            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex justify-between text-mutedGrey">
                <span>Subtotal</span>
                <span className="text-softWhite">{formatINR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-mutedGrey">
                <span>Estimated Shipping</span>
                <span className={shippingFee === 0 ? 'text-auroraTeal font-bold' : 'text-softWhite'}>
                  {shippingFee === 0 ? 'FREE' : formatINR(shippingFee)}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold pt-2 border-t border-deepSpace-border text-softWhite">
                <span>Estimated Total (INR)</span>
                <span className="text-auroraTeal font-mono">{formatINR(total)}</span>
              </div>
            </div>

            {/* Prototype notice badge */}
            <div className="p-2.5 rounded-xl bg-deepSpace border border-deepSpace-border flex items-center gap-2 text-[10px] font-mono text-mutedGrey">
              <ShieldAlert className="w-4 h-4 text-auroraTeal flex-shrink-0" />
              <span>Demo prototype. No live funds or payment cards processed.</span>
            </div>

            <div className="space-y-2">
              <Link
                href="/checkout"
                onClick={closeCart}
                className="w-full py-4 rounded-xl bg-auroraTeal hover:bg-auroraTeal-hover text-obsidian text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-xl shadow-auroraTeal/20"
              >
                <span>PROCEED TO DEMO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={closeCart}
                className="w-full py-2.5 text-center text-xs font-mono text-mutedGrey hover:text-softWhite transition-colors uppercase tracking-wider"
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
