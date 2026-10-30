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
  Clock,
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
    { label: 'Shop All', href: '/shop' },
  ];

  return (
    <>
      {/* Floating Horizontal Navigation matching reference screenshot */}
      <header className="sticky top-0 z-40 w-full px-4 sm:px-8 lg:px-12 pt-5 pb-3 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Brand Logo in Crisp White */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-white p-2.5 rounded-full reference-nav-pill hover:bg-white/20 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-sans font-bold text-xl sm:text-2xl tracking-tight text-white flex items-center gap-2">
                <span className="text-[#85DCED] group-hover:text-[#EF648F] transition-colors font-mono">∿</span>
                <span>solevault</span>
              </span>
            </Link>
          </div>

          {/* Center: Rounded Pill Nav Container */}
          <nav className="hidden lg:flex items-center gap-6 px-6 py-2.5 rounded-full reference-nav-pill">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'text-xs font-sans tracking-wide transition-all duration-200 flex items-center gap-1.5 py-0.5',
                    isActive
                      ? 'text-white font-bold'
                      : 'text-[#F4FAFC]/80 hover:text-white'
                  )}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#12B5D0] shadow-[0_0_8px_#12B5D0]" />
                  )}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right: Functional Glass Pills (Search, Wishlist, Bag) */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-full reference-nav-pill text-white/90 hover:text-white hover:bg-white/20 transition-all"
              aria-label="Search catalogue"
            >
              <Search className="w-4 h-4" />
            </button>

            <Link
              href="/wishlist"
              className="p-2.5 rounded-full reference-nav-pill text-white/90 hover:text-white hover:bg-white/20 transition-all relative"
              aria-label="View wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E83E9C] text-white text-[9px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-[0_0_8px_#E83E9C]">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button
              onClick={openCart}
              className="px-4 py-2 rounded-full reference-nav-pill text-white hover:bg-white/20 transition-all flex items-center gap-2"
              aria-label="Open shopping bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#85DCED]" />
              <span className="text-xs font-bold font-sans">
                BAG {cartCount > 0 && `(${cartCount})`}
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar Drawer */}
        {searchOpen && (
          <div className="max-w-3xl mx-auto mt-3 rounded-2xl reference-nav-pill py-3 px-5 shadow-2xl transition-all">
            <div className="flex items-center gap-3">
              <Search className="w-4 h-4 text-[#85DCED]" />
              <input
                type="text"
                placeholder="Search silhouettes, grails, colorways (e.g. Jordan, Samba, 990v6)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    window.location.href = `/shop?q=${encodeURIComponent(searchQuery.trim())}`;
                  }
                }}
                className="w-full bg-transparent text-white text-xs font-sans focus:outline-none placeholder:text-white/60"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-white/60 hover:text-white text-xs uppercase"
                >
                  Clear
                </button>
              )}
              <Link
                href={`/shop?q=${encodeURIComponent(searchQuery.trim())}`}
                className="btn-reference-white px-4 py-1.5 text-xs font-bold rounded-full whitespace-nowrap"
                onClick={() => setSearchOpen(false)}
              >
                Search
              </Link>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-white/60 hover:text-white p-1"
                aria-label="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#073B78]/70 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-[#07539B]/95 backdrop-blur-2xl border-r border-white/20 p-6 flex flex-col justify-between overflow-y-auto text-white shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/20">
                <span className="font-sans text-xl font-bold tracking-tight text-white">
                  solevault
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white p-2 hover:bg-white/10 rounded-full"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'text-sm font-sans tracking-wide py-2.5 px-4 rounded-xl transition-all flex items-center justify-between',
                        isActive
                          ? 'bg-white/20 text-white font-bold border border-white/30'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      )}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#85DCED]" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-white/20">
              <Link
                href="/account"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-xs font-sans text-[#85DCED] hover:text-white mb-4 font-semibold"
              >
                <ShieldCheck className="w-4 h-4 text-[#12B5D0]" />
                <span>Demo Collector Profile</span>
              </Link>
              <p className="text-[11px] font-mono text-white/60">
                SOLEVAULT Digital Flagship Prototype © 2026. All prices listed in INR (₹).
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
