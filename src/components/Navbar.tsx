'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useVaultStore } from '@/lib/store';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  const { wishlist, getCartCount, openCart } = useVaultStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartCount = mounted ? getCartCount() : 0;
  const wishlistCount = mounted ? wishlist.length : 0;

  const navLinks = [
    { label: 'Discover', href: '/' },
    { label: 'Sneakers', href: '/shop?category=sneakers' },
    { label: 'Running', href: '/shop?category=running' },
    { label: 'Basketball', href: '/shop?category=basketball' },
    { label: 'Hiking', href: '/shop?category=hiking' },
    { label: 'Boots', href: '/shop?category=boots' },
    { label: 'Women', href: '/shop?category=women' },
    { label: 'Shop All', href: '/shop' },
  ];

  return (
    <>
      {/* Top Announcement Bar with Aurora Lighting */}
      <div className="bg-deepSpace border-b border-deepSpace-border text-softWhite-muted text-[11px] font-mono tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-3">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-auroraTeal shadow-[0_0_8px_#35E6D3] animate-pulse" />
        <span>AURORA 3D EDITION // ALL PRICES IN INR (₹)</span>
        <span className="hidden md:inline text-mutedGrey-dark">|</span>
        <span className="hidden md:inline text-emeraldGlow">COMPLIMENTARY EXPRESS DISPATCH OVER ₹10,000</span>
      </div>

      {/* Main Navigation Header */}
      <header
        className={cn(
          'sticky top-0 z-40 transition-all duration-300 w-full',
          isScrolled
            ? 'bg-obsidian/90 backdrop-blur-xl border-b border-deepSpace-border/80 py-3 shadow-2xl shadow-black/90'
            : 'bg-gradient-to-b from-obsidian via-obsidian/80 to-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Mobile hamburger & Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-softWhite p-2 -ml-2 hover:text-auroraTeal transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-display text-2xl sm:text-3xl tracking-tighter uppercase font-black text-softWhite group-hover:text-auroraTeal transition-colors">
                SOLE<span className="text-auroraTeal">VAULT</span>
              </span>
              <span className="hidden sm:inline-block text-[9px] font-mono uppercase tracking-cinematic text-mutedGrey border border-deepSpace-border px-1.5 py-0.5 rounded">
                IND
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'text-xs font-mono uppercase tracking-widest transition-all duration-200 relative py-1 hover:text-auroraTeal',
                    isActive ? 'text-auroraTeal font-bold' : 'text-softWhite-muted'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-auroraTeal to-emeraldGlow shadow-[0_0_8px_#35E6D3]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions (Search, Wishlist, Bag) */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-softWhite-muted hover:text-auroraTeal transition-colors p-2"
              aria-label="Search catalogue"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href="/wishlist"
              className="text-softWhite-muted hover:text-auroraTeal transition-colors p-2 relative"
              aria-label="View wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-auroraTeal text-obsidian text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-[0_0_6px_#35E6D3]">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button
              onClick={openCart}
              className="text-softWhite hover:text-auroraTeal transition-colors p-2 relative flex items-center gap-2"
              aria-label="Open shopping bag"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-auroraTeal text-obsidian text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_6px_#35E6D3]">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden md:inline text-xs font-mono tracking-wider font-semibold text-softWhite">
                BAG
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar Drawer */}
        {searchOpen && (
          <div className="w-full bg-deepSpace border-b border-deepSpace-border py-4 px-4 transition-all">
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <Search className="w-5 h-5 text-auroraTeal" />
              <input
                type="text"
                placeholder="Search brand, silhouette, model (e.g. Jordan, Samba, 990v6)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    window.location.href = `/shop?q=${encodeURIComponent(searchQuery.trim())}`;
                  }
                }}
                className="w-full bg-transparent text-softWhite text-xs font-mono focus:outline-none placeholder:text-mutedGrey"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-mutedGrey hover:text-softWhite text-xs font-mono uppercase"
                >
                  Clear
                </button>
              )}
              <Link
                href={`/shop?q=${encodeURIComponent(searchQuery.trim())}`}
                className="bg-auroraTeal text-obsidian px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider rounded hover:bg-auroraTeal-hover transition-colors whitespace-nowrap shadow-[0_0_8px_#35E6D3]"
                onClick={() => setSearchOpen(false)}
              >
                Search
              </Link>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-mutedGrey hover:text-softWhite p-1"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-obsidian border-r border-deepSpace-border p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-deepSpace-border">
                <span className="font-display text-2xl tracking-tighter uppercase font-black text-softWhite">
                  SOLE<span className="text-auroraTeal">VAULT</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-softWhite p-2 hover:text-auroraTeal"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-mono tracking-wide text-softWhite hover:text-auroraTeal transition-colors py-1 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-mutedGrey" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-deepSpace-border">
              <Link
                href="/account"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-xs font-mono text-softWhite-muted hover:text-auroraTeal mb-4"
              >
                <ShieldCheck className="w-4 h-4 text-auroraTeal" />
                <span>Demo Collector Profile</span>
              </Link>
              <p className="text-[11px] font-mono text-mutedGrey-dark">
                SOLEVAULT Digital Flagship Prototype © 2026. All prices listed in INR (₹).
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
