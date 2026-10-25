'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  SlidersHorizontal,
  X,
  RotateCcw,
  Search,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, BRANDS } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { SortOption, CategoryType, AudienceType } from '@/types/product';
import { formatINR } from '@/lib/utils';

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // URL state initialization
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('q') || '';
  const initialBrand = searchParams.get('brand') || '';
  const initialFeatured = searchParams.get('featured') === 'true';
  const initialNewArrival = searchParams.get('newArrival') === 'true';

  // Filter & Sort State
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    initialBrand ? [initialBrand] : []
  );
  const [priceMax, setPriceMax] = useState<number>(75000);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedAudience, setSelectedAudience] = useState<string>('all');
  const [newArrivalsOnly, setNewArrivalsOnly] = useState<boolean>(initialNewArrival);
  const [featuredOnly, setFeaturedOnly] = useState<boolean>(initialFeatured);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState<number>(16);

  // Available size list
  const allSizes = [
    'UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'
  ];

  // Brand toggle helper
  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  // Size toggle helper
  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrands([]);
    setPriceMax(75000);
    setSelectedSizes([]);
    setSelectedAudience('all');
    setNewArrivalsOnly(false);
    setFeaturedOnly(false);
    setSortBy('featured');
    router.replace('/shop');
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesBrand = p.brand.toLowerCase().includes(query);
        const matchesModel = p.model.toLowerCase().includes(query);
        const matchesCategory = p.category.toLowerCase().includes(query);
        const matchesTags = p.tags.some((t) => t.toLowerCase().includes(query));
        if (!matchesName && !matchesBrand && !matchesModel && !matchesCategory && !matchesTags) {
          return false;
        }
      }

      // Category
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Brands
      if (selectedBrands.length > 0) {
        const matchesBrand = selectedBrands.some((b) =>
          p.brand.toLowerCase().includes(b.toLowerCase())
        );
        if (!matchesBrand) return false;
      }

      // Price Max
      if (p.price > priceMax) {
        return false;
      }

      // Sizes
      if (selectedSizes.length > 0) {
        const hasAvailableSize = p.sizes.some(
          (s) => selectedSizes.includes(s.size) && s.available
        );
        if (!hasAvailableSize) return false;
      }

      // Audience
      if (selectedAudience !== 'all' && p.audience !== selectedAudience && p.audience !== 'unisex') {
        return false;
      }

      // New Arrivals
      if (newArrivalsOnly && !p.newArrival) {
        return false;
      }

      // Featured
      if (featuredOnly && !p.featured) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'newest') return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [
    searchQuery,
    selectedCategory,
    selectedBrands,
    priceMax,
    selectedSizes,
    selectedAudience,
    newArrivalsOnly,
    featuredOnly,
    sortBy,
  ]);

  const activeFilterCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    selectedBrands.length +
    (priceMax < 75000 ? 1 : 0) +
    selectedSizes.length +
    (selectedAudience !== 'all' ? 1 : 0) +
    (newArrivalsOnly ? 1 : 0) +
    (featuredOnly ? 1 : 0) +
    (searchQuery ? 1 : 0);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="w-full min-h-screen bg-obsidian py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title & Search Bar Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-charcoal gap-6">
          <div>
            <div className="flex items-center gap-2 text-lime text-xs font-mono uppercase tracking-widest font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>OFFICIAL CATALOGUE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-ivory uppercase">
              ALL DROPS ({filteredProducts.length})
            </h1>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mutedGrey" />
            <input
              type="text"
              placeholder="Search brand, model, tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-charcoal border border-charcoal-border rounded-xl pl-10 pr-4 py-2.5 text-xs font-mono text-ivory placeholder:text-mutedGrey-dark focus:outline-none focus:border-lime"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-mutedGrey hover:text-ivory"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Bar & Sort Options */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-charcoal/60">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl bg-charcoal border border-charcoal/80 text-xs font-mono text-ivory hover:text-lime"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
            </button>

            {activeFilterCount > 0 && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 text-xs font-mono text-mutedGrey hover:text-lime transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All ({activeFilterCount})</span>
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-mutedGrey hidden sm:inline uppercase">
              Sort by:
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort products by"
                className="appearance-none bg-charcoal border border-charcoal-border text-ivory text-xs font-mono py-2 pl-3.5 pr-8 rounded-xl focus:outline-none focus:border-lime cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Model: A to Z</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mutedGrey pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {activeFilterCount > 0 && (
          <div className="py-3 flex flex-wrap items-center gap-2">
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime/10 border border-lime/30 text-lime text-xs font-mono">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory('all')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedBrands.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime/10 border border-lime/30 text-lime text-xs font-mono"
              >
                {b}
                <button onClick={() => toggleBrand(b)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedSizes.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime/10 border border-lime/30 text-lime text-xs font-mono"
              >
                Size: {s}
                <button onClick={() => toggleSize(s)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedAudience !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime/10 border border-lime/30 text-lime text-xs font-mono">
                Audience: {selectedAudience}
                <button onClick={() => setSelectedAudience('all')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {newArrivalsOnly && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime/10 border border-lime/30 text-lime text-xs font-mono">
                New Arrivals
                <button onClick={() => setNewArrivalsOnly(false)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {featuredOnly && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime/10 border border-lime/30 text-lime text-xs font-mono">
                Flagship Drops
                <button onClick={() => setFeaturedOnly(false)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime/10 border border-lime/30 text-lime text-xs font-mono">
                Query: &quot;{searchQuery}&quot;
                <button onClick={() => setSearchQuery('')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}

        {/* Main Grid with Sidebar Filter */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-8">
          {/* Desktop Filter Sidebar (1 col) */}
          <aside className="hidden lg:block space-y-8 pr-6 border-r border-charcoal">
            {/* Category Filter */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-lime font-bold mb-3">
                CATEGORIES
              </h3>
              <div className="space-y-1.5">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center justify-between text-xs font-mono py-1 px-2 rounded-lg transition-colors text-left ${
                      selectedCategory === cat.id
                        ? 'bg-lime text-obsidian font-bold'
                        : 'text-mutedGrey hover:text-ivory hover:bg-charcoal'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] opacity-70">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Brands Filter */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-lime font-bold mb-3">
                BRANDS
              </h3>
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {BRANDS.map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center gap-2.5 text-xs font-mono text-mutedGrey hover:text-ivory cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="rounded border-charcoal bg-charcoal text-lime focus:ring-0 focus:ring-offset-0 cursor-pointer"
                    />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xs font-mono uppercase tracking-widest text-lime font-bold">
                  MAX PRICE
                </h3>
                <span className="text-xs font-mono font-bold text-ivory">
                  {formatINR(priceMax)}
                </span>
              </div>
              <input
                type="range"
                min={3999}
                max={75000}
                step={1000}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                aria-label="Maximum price filter"
                className="w-full accent-lime bg-charcoal h-1 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-mutedGrey-dark mt-1">
                <span>₹3,999</span>
                <span>₹75,000</span>
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-lime font-bold mb-3">
                SHOE SIZE (UK)
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {allSizes.map((size) => {
                  const isSelected = selectedSizes.includes(size);
                  return (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`py-1.5 text-center rounded-lg text-xs font-mono transition-all ${
                        isSelected
                          ? 'bg-lime text-obsidian font-bold shadow-md shadow-lime/20'
                          : 'bg-charcoal text-mutedGrey hover:text-ivory hover:bg-charcoal-light border border-charcoal-border'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Audience Segment */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-lime font-bold mb-3">
                INTENDED AUDIENCE
              </h3>
              <div className="flex flex-wrap gap-2">
                {['all', 'men', 'women', 'kids'].map((aud) => (
                  <button
                    key={aud}
                    onClick={() => setSelectedAudience(aud)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-colors ${
                      selectedAudience === aud
                        ? 'bg-lime text-obsidian font-bold'
                        : 'bg-charcoal text-mutedGrey hover:text-ivory'
                    }`}
                  >
                    {aud === 'all' ? 'All' : aud}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid Area (3 cols) */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center space-y-4 bg-charcoal/20 rounded-2xl border border-charcoal p-8">
                <SlidersHorizontal className="w-12 h-12 text-mutedGrey mx-auto" />
                <h3 className="text-lg font-bold text-ivory">No drops match your criteria</h3>
                <p className="text-xs font-mono text-mutedGrey max-w-sm mx-auto">
                  Try broadening your search term, resetting brand filters, or extending the maximum price range.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-2 px-6 py-2.5 rounded-lg bg-lime text-obsidian text-xs font-mono font-bold uppercase tracking-wider hover:bg-lime-hover transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {displayedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Load More Pagination */}
                {visibleCount < filteredProducts.length && (
                  <div className="pt-12 text-center">
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 12)}
                      className="px-8 py-3.5 rounded-xl bg-charcoal hover:bg-charcoal-light text-ivory text-xs font-mono uppercase tracking-widest border border-charcoal/80 hover:border-lime transition-all"
                    >
                      Load More Drops ({filteredProducts.length - visibleCount} remaining)
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-obsidian border-l border-charcoal p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-charcoal">
                <h2 className="text-base font-bold text-ivory uppercase font-mono">
                  FILTER DROPS
                </h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1 text-mutedGrey hover:text-ivory"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-xs font-mono uppercase text-lime font-bold mb-2">
                  Category
                </h3>
                <div className="grid grid-cols-2 gap-1.5">
                  {CATEGORIES.slice(0, 8).map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`text-xs font-mono py-1.5 px-2 rounded-lg text-left truncate ${
                        selectedCategory === cat.id
                          ? 'bg-lime text-obsidian font-bold'
                          : 'bg-charcoal text-mutedGrey'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h3 className="text-xs font-mono uppercase text-lime font-bold mb-2">
                  Top Brands
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {BRANDS.map((b) => (
                    <button
                      key={b}
                      onClick={() => toggleBrand(b)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono ${
                        selectedBrands.includes(b)
                          ? 'bg-lime text-obsidian font-bold'
                          : 'bg-charcoal text-mutedGrey'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Max */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-lime font-bold uppercase">Max Price</span>
                  <span className="text-ivory">{formatINR(priceMax)}</span>
                </div>
                <input
                  type="range"
                  min={3999}
                  max={75000}
                  step={1000}
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  aria-label="Mobile maximum price filter"
                  className="w-full accent-lime"
                />
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-xs font-mono uppercase text-lime font-bold mb-2">
                  Shoe Size (UK)
                </h3>
                <div className="grid grid-cols-3 gap-1.5">
                  {allSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`py-1.5 text-xs font-mono rounded-lg ${
                        selectedSizes.includes(size)
                          ? 'bg-lime text-obsidian font-bold'
                          : 'bg-charcoal text-mutedGrey'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-charcoal flex gap-3">
              <button
                onClick={resetFilters}
                className="w-1/2 py-3 rounded-lg border border-charcoal text-xs font-mono uppercase text-mutedGrey"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-1/2 py-3 rounded-lg bg-lime text-obsidian text-xs font-mono font-bold uppercase"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-obsidian text-ivory p-12 text-center font-mono">Loading Vault Drops...</div>}>
      <ShopContent />
    </Suspense>
  );
}
