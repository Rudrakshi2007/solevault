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
    <div className="w-full min-h-screen bg-paleBg texture-vertical-glass py-8 sm:py-12 text-[#172B3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumb strip */}
        <nav className="flex items-center gap-2 text-xs font-mono text-[#5A788D]">
          <Link href="/" className="hover:text-[#FF3D9A] transition-colors font-semibold">Vault</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#FF3D9A] transition-colors font-semibold">Catalogue</Link>
          <span>/</span>
          <Link
            href={`/shop?category=${product.category}`}
            className="capitalize hover:text-[#FF3D9A] transition-colors font-semibold"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-[#172B3A] font-bold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Product Overview Layout (Gallery + Buying Controls) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Gallery Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image: Frosted Glass */}
            <div
              className="relative aspect-[4/3] rounded-3xl overflow-hidden frosted-glass-card cursor-zoom-in group shadow-2xl p-6 flex items-center justify-center bg-white/80"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              {/* Internal glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#55C7F2]/15 via-white/40 to-[#FF3D9A]/15 pointer-events-none" />

              <div className="relative w-full h-full">
                <Image
                  src={product.images[selectedImageIndex] || product.images[0]}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className={`object-contain object-center drop-shadow-[0_20px_35px_rgba(85,199,242,0.25)] transition-transform duration-500 ${
                    isZoomed ? 'scale-150' : 'group-hover:scale-105'
                  }`}
                />
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-full border border-[#55C7F2]/30 text-[#087EAD] pointer-events-none shadow-sm">
                <ZoomIn className="w-4 h-4 text-[#FF3D9A]" />
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.newArrival && (
                  <span className="bg-gradient-to-r from-[#FF3D9A] to-[#FF66B2] text-white text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm shadow-[#FF3D9A]/30">
                    NEW ARRIVAL
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-white/95 backdrop-blur-md text-[#087EAD] text-[11px] font-mono font-bold px-3 py-1 rounded-full border border-[#55C7F2]/30 uppercase tracking-wider shadow-sm">
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
                    className={`relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border p-2 bg-white transition-all shadow-sm ${
                      selectedImageIndex === idx
                        ? 'border-[#FF3D9A] ring-2 ring-[#FF3D9A]/30'
                        : 'border-[#55C7F2]/30 hover:border-[#55C7F2] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Buying & Specification Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#087EAD] font-bold mb-2">
                <span>{product.brand}</span>
                <span>SKU: {product.sku}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display uppercase tracking-tight text-[#172B3A]">
                {product.name}
              </h1>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-[#55C7F2]/30 shadow-sm flex items-baseline justify-between">
              <div>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-[#087EAD]">
                  {formatINR(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="ml-3 text-sm font-mono text-[#7B96A8] line-through">
                    {formatINR(product.originalPrice)}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF3D9A] bg-[#FFE8F3] px-2.5 py-1 border border-[#FF3D9A]/30 rounded-full font-bold">
                SIMULATED DEMO PRICE
              </span>
            </div>

            {/* Colorway Selection */}
            {product.colorways.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#4A667A] font-semibold block">
                  Select Colorway: <strong className="text-[#172B3A]">{selectedColor}</strong>
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.colorways.map((col) => (
                    <button
                      key={col.name}
                      onClick={() => handleColorChange(col.name, col.imageIndex)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-mono transition-all ${
                        selectedColor === col.name
                          ? 'border-[#FF3D9A] bg-[#FFE8F3] text-[#FF3D9A] font-bold shadow-sm'
                          : 'border-[#55C7F2]/30 hover:border-[#55C7F2] text-[#4A667A] bg-white'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-sm"
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
                <span className="text-xs font-mono uppercase text-[#4A667A] font-bold">
                  Select Shoe Size (UK / India)
                </span>
                <button
                  type="button"
                  onClick={openSizeGuide}
                  className="text-xs font-mono text-[#087EAD] hover:text-[#FF3D9A] hover:underline flex items-center gap-1 font-semibold"
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

              {sizeError && (
                <p className="text-xs font-mono text-[#FF3D9A] font-bold">{sizeError}</p>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-mono uppercase text-[#4A667A] font-medium">
                Quantity:
              </span>
              <div className="flex items-center border border-[#55C7F2]/30 rounded-xl bg-white shadow-sm">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-[#4A667A] hover:text-[#FF3D9A]"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-xs font-mono font-bold text-[#172B3A]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => Math.min(5, q + 1))}
                  className="p-2 text-[#4A667A] hover:text-[#55C7F2]"
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
                  className="btn-hot-pink flex-1 py-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO CART</span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-4 rounded-xl border transition-all ${
                    isWishlisted
                      ? 'bg-[#FFE8F3] text-[#FF3D9A] border-[#FF3D9A] shadow-sm'
                      : 'bg-white border-[#55C7F2]/30 hover:border-[#FF3D9A] text-[#4A667A] hover:text-[#FF3D9A] shadow-sm'
                  }`}
                  aria-label={isWishlisted ? 'Saved to wishlist' : 'Save to wishlist'}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleBuyNow}
                className="btn-sky-gradient w-full py-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-white" />
                <span>BUY NOW WITH DEMO CHECKOUT</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#55C7F2]/20 text-xs font-mono text-[#4A667A]">
              <div className="flex items-center gap-2 font-medium">
                <Truck className="w-4 h-4 text-[#55C7F2] flex-shrink-0" />
                <span>Express Dispatch (2-4 Days)</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <RotateCcw className="w-4 h-4 text-[#55C7F2] flex-shrink-0" />
                <span>7-Day Return Inspection</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 font-medium">
                <Sparkles className="w-4 h-4 text-[#FF3D9A] flex-shrink-0" />
                <span>100% Authentic Product Verification Guarantee</span>
              </div>
            </div>

            {/* Description & Technical Specifications */}
            <div className="space-y-4 pt-4 border-t border-[#55C7F2]/20">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#FF3D9A] font-bold">
                ARCHIVE NOTES & DETAILS
              </h3>
              <p className="text-xs sm:text-sm text-[#2C4659] leading-relaxed">
                {product.description}
              </p>

              <div className="rounded-2xl border border-[#55C7F2]/30 overflow-hidden divide-y divide-[#55C7F2]/20 text-xs font-mono bg-white shadow-sm">
                {product.specifications.map((spec) => (
                  <div key={spec.label} className="grid grid-cols-3 p-3.5 hover:bg-[#F5FBFF] transition-colors">
                    <span className="text-[#087EAD] uppercase font-bold">{spec.label}</span>
                    <span className="col-span-2 text-[#172B3A] font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Drops Section */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-[#55C7F2]/25 space-y-8">
            <div>
              <span className="text-[#FF3D9A] text-xs font-mono uppercase tracking-widest font-bold block mb-1">
                COMPATIBLE ROTATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#172B3A] uppercase">
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
