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
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      {/* Top Announcement Bar with Sky Blue × Hot Pink atmospheric gradient */}
      <div className="bg-gradient-to-r from-[#B9EBFF]/45 via-white/85 to-[#FFB5D8]/35 border-b border-[#55C7F2]/25 text-[#087EAD] text-[11px] font-mono tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-3 backdrop-blur-md relative z-50">
        <span className="inline-block w-2 h-2 rounded-full bg-[#FF3D9A] shadow-[0_0_8px_#FF3D9A] animate-pulse" />
        <span className="font-semibold text-[#172B3A]">
          SKY BLUE × HOT PINK EDITION // ALL PRICES IN INR (₹)
        </span>
        <span className="hidden md:inline text-[#55C7F2] font-bold">|</span>
        <span className="hidden md:inline text-[#087EAD] font-semibold">
          COMPLIMENTARY EXPRESS DISPATCH OVER ₹10,000
        </span>
      </div>

      {/* Floating Glass Navigation Header */}
      <header className="sticky top-0 z-40 w-full px-3 sm:px-6 lg:px-8 py-2.5 transition-all duration-300">
        <div
          className={cn(
            'max-w-7xl mx-auto rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-300',
            'frosted-glass-nav',
            isScrolled
              ? 'shadow-xl shadow-[#55C7F2]/15 border-[#55C7F2]/40 bg-white/90'
              : 'shadow-lg shadow-[#087EAD]/08 border-[#55C7F2]/30 bg-white/80'
          )}
        >
          {/* Left: Mobile hamburger & Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-[#172B3A] p-2 -ml-2 hover:text-[#55C7F2] transition-colors rounded-xl hover:bg-[#F5FBFF]"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-display text-2xl sm:text-3xl tracking-tighter uppercase font-black text-[#172B3A] group-hover:text-[#087EAD] transition-colors">
                SOLE<span className="text-[#55C7F2] group-hover:text-[#FF3D9A] transition-colors">VAULT</span>
              </span>
              <span className="hidden sm:inline-block text-[9px] font-mono uppercase tracking-cinematic text-[#087EAD] bg-[#B9EBFF]/40 border border-[#55C7F2]/30 px-1.5 py-0.5 rounded-full font-bold">
                IND
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'text-xs font-mono uppercase tracking-widest transition-all duration-200 relative py-1 hover:text-[#FF3D9A]',
                    isActive
                      ? 'text-[#FF3D9A] font-bold'
                      : 'text-[#2C4659] hover:text-[#087EAD]'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#55C7F2] to-[#FF3D9A] shadow-[0_0_8px_rgba(255,61,154,0.6)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions (Search, Wishlist, Bag) */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-[#2C4659] hover:text-[#55C7F2] hover:bg-[#F5FBFF] transition-all p-2 rounded-xl"
              aria-label="Search catalogue"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <Link
              href="/wishlist"
              className="text-[#2C4659] hover:text-[#FF3D9A] hover:bg-[#FFE8F3] transition-all p-2 rounded-xl relative"
              aria-label="View wishlist"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#FF3D9A] text-white text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-[0_0_8px_#FF3D9A] animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button
              onClick={openCart}
              className="bg-white text-[#172B3A] hover:text-[#087EAD] hover:border-[#55C7F2] transition-all py-1.5 px-3 rounded-xl relative flex items-center gap-2 border border-[#55C7F2]/30 shadow-sm hover:shadow"
              aria-label="Open shopping bag"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#55C7F2]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#FF3D9A] text-white text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-[0_0_8px_#FF3D9A]">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden md:inline text-xs font-mono tracking-wider font-bold text-[#172B3A]">
                BAG
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar Drawer */}
        {searchOpen && (
          <div className="max-w-7xl mx-auto mt-2 bg-white/95 backdrop-blur-xl border border-[#55C7F2]/30 rounded-2xl py-3 px-4 shadow-xl shadow-[#55C7F2]/10 transition-all">
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <Search className="w-5 h-5 text-[#55C7F2]" />
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
                className="w-full bg-transparent text-[#172B3A] text-xs font-mono focus:outline-none placeholder:text-[#7B96A8]"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-[#7B96A8] hover:text-[#172B3A] text-xs font-mono uppercase px-2"
                >
                  Clear
                </button>
              )}
              <Link
                href={`/shop?q=${encodeURIComponent(searchQuery.trim())}`}
                className="btn-sky-gradient px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider rounded-xl whitespace-nowrap"
                onClick={() => setSearchOpen(false)}
              >
                Search
              </Link>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-[#7B96A8] hover:text-[#FF3D9A] p-1 rounded-lg"
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
            className="fixed inset-0 bg-[#172B3A]/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white/95 backdrop-blur-2xl border-r border-[#55C7F2]/30 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#55C7F2]/20">
                <span className="font-display text-2xl tracking-tighter uppercase font-black text-[#172B3A]">
                  SOLE<span className="text-[#55C7F2]">VAULT</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#172B3A] p-2 hover:text-[#FF3D9A] rounded-xl hover:bg-[#FFE8F3] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
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
                        'text-sm font-mono tracking-wide py-2.5 px-3 rounded-xl transition-all flex items-center justify-between',
                        isActive
                          ? 'bg-[#FFE8F3] text-[#FF3D9A] font-bold border border-[#FF3D9A]/30'
                          : 'text-[#172B3A] hover:bg-[#F5FBFF] hover:text-[#087EAD]'
                      )}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#55C7F2]" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#55C7F2]/20">
              <Link
                href="/account"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-xs font-mono text-[#087EAD] hover:text-[#FF3D9A] mb-4 font-semibold"
              >
                <ShieldCheck className="w-4 h-4 text-[#55C7F2]" />
                <span>Demo Collector Profile</span>
              </Link>
              <p className="text-[11px] font-mono text-[#7B96A8]">
                SOLEVAULT Digital Flagship Prototype © 2026. All prices listed in INR (₹).
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
