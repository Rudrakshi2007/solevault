'use client';

import React, { useState } from 'react';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  ShoppingBag,
  Zap,
  HelpCircle,
  Truck,
  RotateCcw,
  Sparkles,
  Check,
  Plus,
  Minus,
  ZoomIn,
} from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { useVaultStore } from '@/lib/store';
import { formatINR } from '@/lib/utils';

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const {
    wishlist,
    toggleWishlist,
    addToCart,
    openSizeGuide,
  } = useVaultStore();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colorways[0]?.name || 'Standard'
  );
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const isWishlisted = wishlist.includes(product.id);

  // When colorway changes, update main image if mapped
  const handleColorChange = (colorName: string, imageIndex?: number) => {
    setSelectedColor(colorName);
    if (imageIndex !== undefined && product.images[imageIndex]) {
      setSelectedImageIndex(imageIndex);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError('Please choose a UK size before adding to bag');
      return;
    }

    addToCart({
      productId: product.id,
      name: product.name,
      brand: product.brand,
      model: product.model,
      slug: product.slug,
      price: product.price,
      image: product.images[selectedImageIndex] || product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity,
    });

    setSizeError(null);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      setSizeError('Please choose a UK size before checkout');
      return;
    }

    addToCart({
      productId: product.id,
      name: product.name,
      brand: product.brand,
      model: product.model,
      slug: product.slug,
      price: product.price,
      image: product.images[selectedImageIndex] || product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity,
    });

    router.push('/checkout');
  };

  // Related products
  const relatedProducts = PRODUCTS.filter(
    (p) => product.relatedProductIds.includes(p.id) || p.category === product.category
  )
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="w-full min-h-screen bg-obsidian py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumb strip */}
        <nav className="flex items-center gap-2 text-xs font-mono text-mutedGrey">
          <Link href="/" className="hover:text-lime transition-colors">Vault</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-lime transition-colors">Catalogue</Link>
          <span>/</span>
          <Link
            href={`/shop?category=${product.category}`}
            className="capitalize hover:text-lime transition-colors"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-ivory truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Product Overview Layout (Gallery + Buying Controls) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Gallery Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal border border-charcoal/80 cursor-zoom-in group shadow-2xl"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={`object-cover object-center transition-transform duration-500 ${
                  isZoomed ? 'scale-150' : 'group-hover:scale-105'
                }`}
              />

              <div className="absolute top-4 right-4 bg-obsidian/70 backdrop-blur-md p-2 rounded-full border border-white/10 text-ivory pointer-events-none">
                <ZoomIn className="w-4 h-4 text-lime" />
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.newArrival && (
                  <span className="bg-lime text-obsidian text-[11px] font-mono font-bold px-3 py-1 rounded uppercase tracking-wider">
                    NEW ARRIVAL
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-obsidian/85 backdrop-blur-md text-ivory text-[11px] font-mono px-3 py-1 rounded border border-white/10 uppercase tracking-wider">
                    SAVE {formatINR(product.originalPrice - product.price)}
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedImageIndex(idx);
                      setIsZoomed(false);
                    }}
                    className={`relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 border transition-all ${
                      selectedImageIndex === idx
                        ? 'border-lime ring-2 ring-lime/30'
                        : 'border-charcoal hover:border-mutedGrey-dark opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Buying & Specification Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-mutedGrey mb-2">
                <span>{product.brand}</span>
                <span>SKU: {product.sku}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display uppercase tracking-tight text-ivory">
                {product.name}
              </h1>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-xl bg-charcoal/40 border border-charcoal/80 flex items-baseline justify-between">
              <div>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-lime">
                  {formatINR(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="ml-3 text-sm font-mono text-mutedGrey line-through">
                    {formatINR(product.originalPrice)}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-mutedGrey px-2 py-0.5 border border-charcoal rounded">
                SIMULATED DEMO PRICE
              </span>
            </div>

            {/* Colorway Selection */}
            {product.colorways.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-mutedGrey block">
                  Select Colorway: <strong className="text-ivory">{selectedColor}</strong>
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.colorways.map((col) => (
                    <button
                      key={col.name}
                      onClick={() => handleColorChange(col.name, col.imageIndex)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-mono transition-all ${
                        selectedColor === col.name
                          ? 'border-lime bg-lime/10 text-ivory'
                          : 'border-charcoal hover:border-mutedGrey text-mutedGrey'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-charcoal-light shadow-sm"
                        style={{ backgroundColor: col.hex }}
                      />
                      <span>{col.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-mutedGrey font-semibold">
                  Select Shoe Size (UK / India)
                </span>
                <button
                  type="button"
                  onClick={openSizeGuide}
                  className="text-xs font-mono text-lime hover:underline flex items-center gap-1"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Size Conversion Chart</span>
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2.5">
                {product.sizes.map((s) => {
                  const isSelected = selectedSize === s.size;
                  const isAvailable = s.available;

                  return (
                    <button
                      key={s.size}
                      type="button"
                      disabled={!isAvailable}
                      onClick={() => {
                        setSelectedSize(s.size);
                        setSizeError(null);
                      }}
                      className={`py-3 px-2 text-center rounded-xl text-xs font-mono font-bold transition-all ${
                        isSelected
                          ? 'bg-lime text-obsidian shadow-lg shadow-lime/20'
                          : isAvailable
                          ? 'bg-charcoal hover:bg-charcoal-light text-ivory border border-charcoal-border hover:border-mutedGrey'
                          : 'bg-obsidian-deep text-mutedGrey-dark border border-charcoal/40 line-through opacity-40 cursor-not-allowed'
                      }`}
                    >
                      {s.size}
                    </button>
                  );
                })}
              </div>

              {sizeError && (
                <p className="text-xs font-mono text-red-400 font-semibold">{sizeError}</p>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-mono uppercase text-mutedGrey">
                Quantity:
              </span>
              <div className="flex items-center border border-charcoal rounded-xl bg-charcoal/40">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-mutedGrey hover:text-lime"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-xs font-mono font-bold text-ivory">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => Math.min(5, q + 1))}
                  className="p-2 text-mutedGrey hover:text-lime"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Purchase Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-4 rounded-xl bg-lime hover:bg-lime-hover text-obsidian text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-xl shadow-lime/20"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO CART</span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-4 rounded-xl border transition-colors ${
                    isWishlisted
                      ? 'bg-lime text-obsidian border-lime'
                      : 'bg-charcoal border-charcoal hover:border-mutedGrey text-ivory hover:text-lime'
                  }`}
                  aria-label={isWishlisted ? 'Saved to wishlist' : 'Save to wishlist'}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full py-4 rounded-xl bg-charcoal hover:bg-charcoal-light text-ivory text-xs font-mono font-bold uppercase tracking-wider border border-charcoal/80 hover:border-mutedGrey flex items-center justify-center gap-2 transition-colors"
              >
                <Zap className="w-4 h-4 text-lime" />
                <span>BUY NOW WITH DEMO CHECKOUT</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-charcoal/80 text-xs font-mono text-mutedGrey">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-lime flex-shrink-0" />
                <span>Express Dispatch (2-4 Days)</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-lime flex-shrink-0" />
                <span>7-Day Return Inspection</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <Sparkles className="w-4 h-4 text-lime flex-shrink-0" />
                <span>100% Authentic Product Verification Guarantee</span>
              </div>
            </div>

            {/* Description & Technical Specifications */}
            <div className="space-y-4 pt-4 border-t border-charcoal/80">
              <h3 className="text-xs font-mono uppercase tracking-widest text-lime font-bold">
                ARCHIVE NOTES & DETAILS
              </h3>
              <p className="text-xs sm:text-sm text-mutedGrey-light leading-relaxed">
                {product.description}
              </p>

              <div className="rounded-xl border border-charcoal overflow-hidden divide-y divide-charcoal text-xs font-mono">
                {product.specifications.map((spec) => (
                  <div key={spec.label} className="grid grid-cols-3 p-3 bg-charcoal/30">
                    <span className="text-mutedGrey uppercase font-medium">{spec.label}</span>
                    <span className="col-span-2 text-ivory">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Drops Section */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-charcoal/80 space-y-8">
            <div>
              <span className="text-lime text-xs font-mono uppercase tracking-widest font-bold block mb-1">
                COMPATIBLE ROTATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-ivory uppercase">
                YOU MAY ALSO COVET
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
