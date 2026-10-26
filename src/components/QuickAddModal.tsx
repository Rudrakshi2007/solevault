'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Check, HelpCircle } from 'lucide-react';
import { useVaultStore } from '@/lib/store';
import { formatINR } from '@/lib/utils';

export function QuickAddModal() {
  const { quickAddProduct, closeQuickAdd, addToCart, openSizeGuide } = useVaultStore();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!quickAddProduct) return null;

  const currentColor = selectedColor || quickAddProduct.colorways[0]?.name || 'Standard';

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError('Please select a UK shoe size to continue');
      return;
    }

    addToCart({
      productId: quickAddProduct.id,
      name: quickAddProduct.name,
      brand: quickAddProduct.brand,
      model: quickAddProduct.model,
      slug: quickAddProduct.slug,
      price: quickAddProduct.price,
      image: quickAddProduct.images[0],
      size: selectedSize,
      color: currentColor,
      quantity: 1,
    });

    closeQuickAdd();
    setSelectedSize(null);
    setSelectedColor(null);
    setError(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={closeQuickAdd}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg bg-obsidian border border-deepSpace-border rounded-3xl p-6 shadow-2xl overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-deepSpace-border">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-auroraTeal uppercase font-bold">
              QUICK SELECTION // AURORA
            </span>
            <h2 className="text-lg font-bold text-softWhite line-clamp-1 mt-0.5">
              {quickAddProduct.name}
            </h2>
          </div>
          <button
            onClick={closeQuickAdd}
            className="p-1.5 rounded-full text-mutedGrey hover:text-softWhite hover:bg-deepSpace transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-5 space-y-5">
          {/* Sneaker Preview Row */}
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-deepSpace border border-deepSpace-border flex-shrink-0">
              <Image
                src={quickAddProduct.images[0]}
                alt={quickAddProduct.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-mono text-mutedGrey uppercase block">
                {quickAddProduct.brand}
              </span>
              <span className="text-base font-mono font-bold text-auroraTeal">
                {formatINR(quickAddProduct.price)}
              </span>
              <span className="text-[11px] font-mono text-mutedGrey-dark block">
                SKU: {quickAddProduct.sku}
              </span>
            </div>
          </div>

          {/* Colorway Selection */}
          {quickAddProduct.colorways.length > 1 && (
            <div>
              <span className="text-xs font-mono text-mutedGrey uppercase block mb-2">
                Colorway: <span className="text-softWhite">{currentColor}</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {quickAddProduct.colorways.map((col) => (
                  <button
                    key={col.name}
                    onClick={() => setSelectedColor(col.name)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${
                      currentColor === col.name
                        ? 'border-auroraTeal bg-auroraTeal/10 text-softWhite'
                        : 'border-deepSpace-border hover:border-mutedGrey text-mutedGrey'
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
          )}

          {/* Size Selection */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-mutedGrey uppercase">
                Select Size (UK / India)
              </span>
              <button
                type="button"
                onClick={openSizeGuide}
                className="text-[11px] font-mono text-auroraTeal hover:underline flex items-center gap-1"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Size Guide</span>
              </button>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {quickAddProduct.sizes.map((s) => {
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
                        ? 'bg-auroraTeal text-obsidian shadow-md shadow-auroraTeal/20'
                        : isAvailable
                        ? 'bg-deepSpace hover:bg-deepSpace-light text-softWhite border border-deepSpace-border hover:border-auroraTeal/40'
                        : 'bg-obsidian-deep text-mutedGrey-dark border border-deepSpace-border/40 line-through cursor-not-allowed opacity-40'
                    }`}
                    title={isAvailable ? `Available` : `Sold out in this size`}
                  >
                    {s.size}
                  </button>
                );
              })}
            </div>

            {error && (
              <p className="text-xs font-mono text-red-400 mt-2">{error}</p>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-deepSpace-border flex gap-3">
          <button
            type="button"
            onClick={closeQuickAdd}
            className="w-1/3 py-3 rounded-xl border border-deepSpace-border text-xs font-mono uppercase tracking-wider text-mutedGrey hover:text-softWhite hover:bg-deepSpace transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleAddToCart}
            className="w-2/3 py-3 rounded-xl bg-auroraTeal hover:bg-auroraTeal-hover text-obsidian text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-auroraTeal/20"
          >
            <Check className="w-4 h-4" />
            <span>ADD TO CART</span>
          </button>
        </div>
      </div>
    </div>
  );
}
