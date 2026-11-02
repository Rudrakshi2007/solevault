'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Clock,
  Menu,
  X,
  Search,
  Heart,
  ArrowRight,
  ShoppingBag,
} from 'lucide-react';
import { useVaultStore } from '@/lib/store';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  const { wishlist, getCartCount, openCart } = useVaultStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cartCount = mounted ? getCartCount() : 0;
  const wishlistCount = mounted ? wishlist.length : 0;

  const navLinks = [
    { label: 'Home', href: '/', hasDot: true },
    { label: 'Services +', href: '/shop?category=sneakers', hasGlow: true },
    { label: 'Product', href: '/shop' },
    { label: 'About us', href: '/account' },
  ];

  return (
    <>
      {/* Floating Header matching reference screenshot */}
      <header className="sticky top-0 z-40 w-full px-4 sm:px-8 lg:px-12 pt-6 pb-2 transition-all select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Top-Left: Logo & Brand in Clean White */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3s-5-0.24-5 3Z" />
              <path d="M12 9V3" />
            </svg>
            <span className="font-sans font-medium text-lg tracking-tight text-white">
              Pelmatech
            </span>
          </Link>

          {/* Top-Center: Floating Rounded Pill Navigation Container */}
          <nav className="hidden md:flex items-center gap-8 px-7 py-2.5 rounded-full GlassNavigation reference-nav-pill">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'text-xs font-sans tracking-wide transition-all duration-200 flex items-center gap-1.5 py-0.5 relative',
                    isActive || link.hasDot
                      ? 'text-white font-medium'
                      : 'text-white/80 hover:text-white'
                  )}
                >
                  {link.hasDot && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#12B4CE] shadow-[0_0_8px_#12B4CE]" />
                  )}

                  {/* Subtle warm lime/amber glow highlight matching the reference screenshot behind Services + */}
                  {link.hasGlow && (
                    <span
                      className="absolute inset-0 -inset-x-2 -inset-y-1 rounded-full bg-[#D4EAA0]/20 blur-sm pointer-events-none"
                      aria-hidden="true"
                    />
                  )}

                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Top-Right: Exact Two Compact Rounded Controls from Reference */}
          <div className="flex items-center gap-2.5">
            {/* White Rounded Pill Button with Clock/Cart Icon */}
            <button
              onClick={openCart}
              className="bg-white text-[#063C78] hover:bg-[#F4FAFC] h-9 px-3.5 rounded-full flex items-center justify-center shadow-md gap-1.5 transition-all"
              aria-label="View demo shopping bag and schedule"
              title="Cart / Schedule"
            >
              <Clock className="w-4 h-4 text-[#063C78]" />
              {cartCount > 0 && (
                <span className="text-[11px] font-bold font-mono text-[#063C78]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Translucent Square Pill with Menu / Controls Icon */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-9 h-9 rounded-xl GlassNavigation reference-nav-pill flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search Input Popover */}
        {searchOpen && (
          <div className="max-w-xl mx-auto mt-3 rounded-2xl GlassNavigation reference-nav-pill py-2.5 px-4 shadow-2xl transition-all">
            <div className="flex items-center gap-3">
              <Search className="w-4 h-4 text-[#12B4CE]" />
              <input
                type="text"
                placeholder="Search archive catalogue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none text-white text-xs font-sans placeholder:text-white/50 focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-white/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Slide-out Menu Modal for Complete Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-[#063C78]/60 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#063C78]/95 backdrop-blur-2xl border-l border-white/20 p-6 flex flex-col justify-between shadow-2xl text-white">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-sans font-medium text-base">Menu & Vault Access</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-white/60 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="space-y-2">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-xl hover:bg-white/10 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/shop?category=sneakers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-xl hover:bg-white/10 text-sm font-medium"
                >
                  Sneakers (Lifestyle)
                </Link>
                <Link
                  href="/shop?category=running"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-xl hover:bg-white/10 text-sm font-medium"
                >
                  Performance Running
                </Link>
                <Link
                  href="/shop?category=basketball"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-xl hover:bg-white/10 text-sm font-medium"
                >
                  Court & Heritage
                </Link>
                <Link
                  href="/shop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-xl hover:bg-white/10 text-sm font-medium"
                >
                  All 62+ Archive Drops
                </Link>
                <Link
                  href="/wishlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-xl hover:bg-white/10 text-sm font-medium flex items-center justify-between"
                >
                  <span>Wishlist</span>
                  {wishlistCount > 0 && (
                    <span className="text-xs bg-[#D943A4] text-white px-2 py-0.5 rounded-full font-mono">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
                <Link
                  href="/account"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-xl hover:bg-white/10 text-sm font-medium"
                >
                  Collector Profile
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCart();
                }}
                className="btn-reference-white w-full py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Open Bag ({cartCount})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
