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
        className="fixed inset-0 bg-[#172B3A]/45 backdrop-blur-sm transition-opacity"
        onClick={closeQuickAdd}
      />

      {/* Modal Dialog: Frosted Glass */}
      <div className="relative z-10 w-full max-w-lg bg-white/95 backdrop-blur-2xl border border-[#55C7F2]/40 rounded-3xl p-6 shadow-2xl overflow-hidden animate-fade-in text-[#172B3A]">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#55C7F2]/25">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#FF3D9A] uppercase font-bold">
              QUICK SELECTION // SOLEVAULT
            </span>
            <h2 className="text-lg font-bold text-[#172B3A] line-clamp-1 mt-0.5">
              {quickAddProduct.name}
            </h2>
          </div>
          <button
            onClick={closeQuickAdd}
            className="p-1.5 rounded-xl text-[#7B96A8] hover:text-[#FF3D9A] hover:bg-[#FFE8F3] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-5 space-y-5">
          {/* Sneaker Preview Row */}
          <div className="flex items-center gap-4 bg-[#F5FBFF] p-3 rounded-2xl border border-[#55C7F2]/25">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white border border-[#55C7F2]/20 flex-shrink-0">
              <Image
                src={quickAddProduct.images[0]}
                alt={quickAddProduct.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-mono text-[#087EAD] uppercase font-bold block">
                {quickAddProduct.brand}
              </span>
              <span className="text-base font-mono font-bold text-[#FF3D9A]">
                {formatINR(quickAddProduct.price)}
              </span>
              <span className="text-[11px] font-mono text-[#7B96A8] block">
                SKU: {quickAddProduct.sku}
              </span>
            </div>
          </div>

          {/* Colorway Selection */}
          {quickAddProduct.colorways.length > 1 && (
            <div>
              <span className="text-xs font-mono text-[#4A667A] uppercase block mb-2 font-medium">
                Colorway: <span className="text-[#172B3A] font-bold">{currentColor}</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {quickAddProduct.colorways.map((col) => (
                  <button
                    key={col.name}
                    onClick={() => setSelectedColor(col.name)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${
                      currentColor === col.name
                        ? 'border-[#FF3D9A] bg-[#FFE8F3] text-[#FF3D9A] font-bold shadow-sm'
                        : 'border-[#55C7F2]/30 hover:border-[#55C7F2] text-[#4A667A] bg-white'
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-black/15"
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
              <span className="text-xs font-mono text-[#4A667A] uppercase font-medium">
                Select Size (UK / India)
              </span>
              <button
                type="button"
                onClick={openSizeGuide}
                className="text-[11px] font-mono text-[#087EAD] hover:text-[#FF3D9A] hover:underline flex items-center gap-1 font-semibold"
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
                        ? 'bg-[#FF3D9A] text-white shadow-md shadow-[#FF3D9A]/30 border border-[#FF3D9A]'
                        : isAvailable
                        ? 'bg-white hover:bg-[#F5FBFF] text-[#172B3A] border border-[#55C7F2]/30 hover:border-[#55C7F2] shadow-sm'
                        : 'bg-[#F5FBFF] text-[#9BB3C4] border border-gray-200 line-through cursor-not-allowed opacity-40'
                    }`}
                    title={isAvailable ? `Available` : `Sold out in this size`}
                  >
                    {s.size}
                  </button>
                );
              })}
            </div>

            {error && (
              <p className="text-xs font-mono text-[#FF3D9A] font-bold mt-2">{error}</p>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#55C7F2]/25 flex gap-3">
          <button
            type="button"
            onClick={closeQuickAdd}
            className="w-1/3 py-3 rounded-xl border border-[#55C7F2]/30 text-xs font-mono uppercase tracking-wider text-[#4A667A] hover:text-[#172B3A] hover:bg-[#F5FBFF] transition-colors font-semibold"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleAddToCart}
            className="btn-hot-pink w-2/3 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            <span>ADD TO CART</span>
          </button>
        </div>
      </div>
    </div>
  );
}
