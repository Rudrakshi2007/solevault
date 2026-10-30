'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ShieldCheck, Sparkles } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-white/85 backdrop-blur-xl border-t border-[#55C7F2]/25 text-[#4A667A] pt-16 pb-12 texture-vertical-glass relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[#55C7F2]/20">
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-display text-3xl sm:text-4xl tracking-tighter uppercase font-black text-[#172B3A] group-hover:text-[#087EAD] transition-colors">
                SOLE<span className="text-[#55C7F2] group-hover:text-[#FF3D9A] transition-colors">VAULT</span>
              </span>
            </Link>
            <p className="text-[#087EAD] font-mono text-sm uppercase tracking-widest font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF3D9A]" />
              <span>Find Your Next Obsession.</span>
            </p>
            <p className="text-[#4A667A] text-xs sm:text-sm max-w-md leading-relaxed">
              The digital flagship for global sneaker culture and high-concept footwear. Curating authentic grails, modern performance runners, and sartorial leather craft for discerning collectors.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF3D9A] font-bold block">
              ACCESS PRIVATE DROPS // EXCLUSIVE ARCHIVE
            </span>
            <p className="text-xs text-[#5A788D]">
              Subscribe for confidential restock alerts, editorial lookbooks, and upcoming raffle notifications.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3.5 bg-[#FFE8F3] border border-[#FF3D9A]/30 rounded-xl text-[#FF3D9A] text-xs font-mono font-bold shadow-sm">
                <Check className="w-4 h-4" />
                <span>THANK YOU. YOU HAVE BEEN ADDED TO THE VAULT COLLECTOR LIST.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white border border-[#B9EBFF] focus:border-[#55C7F2] focus:ring-2 focus:ring-[#55C7F2]/20 rounded-xl px-4 py-3 text-xs font-mono text-[#172B3A] placeholder:text-[#9BB3C4] shadow-sm outline-none transition-all"
                />
                <button
                  type="submit"
                  className="btn-hot-pink px-6 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 flex-shrink-0"
                >
                  <span>JOIN</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono">
          <div>
            <h4 className="text-[#172B3A] uppercase tracking-widest font-bold mb-4">
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5 text-[#4A667A]">
              <li><Link href="/shop?category=sneakers" className="hover:text-[#FF3D9A] transition-colors">Lifestyle Sneakers</Link></li>
              <li><Link href="/shop?category=running" className="hover:text-[#FF3D9A] transition-colors">Performance Running</Link></li>
              <li><Link href="/shop?category=basketball" className="hover:text-[#FF3D9A] transition-colors">Court & Basketball</Link></li>
              <li><Link href="/shop?category=hiking" className="hover:text-[#FF3D9A] transition-colors">Trail & GORE-TEX</Link></li>
              <li><Link href="/shop?category=boots" className="hover:text-[#FF3D9A] transition-colors">Boots & Workwear</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#172B3A] uppercase tracking-widest font-bold mb-4">
              ARCHIVES
            </h4>
            <ul className="space-y-2.5 text-[#4A667A]">
              <li><Link href="/shop?brand=Nike" className="hover:text-[#FF3D9A] transition-colors">Nike / Jordan Archive</Link></li>
              <li><Link href="/shop?brand=Adidas" className="hover:text-[#FF3D9A] transition-colors">Adidas Terrace Series</Link></li>
              <li><Link href="/shop?brand=New+Balance" className="hover:text-[#FF3D9A] transition-colors">New Balance Made in USA</Link></li>
              <li><Link href="/shop?brand=ASICS" className="hover:text-[#FF3D9A] transition-colors">ASICS GEL Heritage</Link></li>
              <li><Link href="/shop?brand=Salomon" className="hover:text-[#FF3D9A] transition-colors">Salomon Advanced Lab</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#172B3A] uppercase tracking-widest font-bold mb-4">
              EXPERIENCE
            </h4>
            <ul className="space-y-2.5 text-[#4A667A]">
              <li><Link href="/shop" className="hover:text-[#FF3D9A] transition-colors">Full Vault Catalogue</Link></li>
              <li><Link href="/wishlist" className="hover:text-[#FF3D9A] transition-colors">Saved Wishlist</Link></li>
              <li><Link href="/account" className="hover:text-[#FF3D9A] transition-colors">Demo Collector Orders</Link></li>
              <li><Link href="/checkout" className="hover:text-[#FF3D9A] transition-colors">Demo Checkout</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#172B3A] uppercase tracking-widest font-bold mb-4">
              GUARANTEE
            </h4>
            <div className="space-y-3 text-[#4A667A] leading-relaxed">
              <div className="flex items-center gap-2 text-[#172B3A] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#55C7F2]" />
                <span>100% Verified Quality</span>
              </div>
              <p className="text-[11px]">
                Every pair in our catalogue represents verified footwear engineering standards and authentic specifications.
              </p>
              <div className="pt-2 text-[10px] text-[#087EAD] font-bold border-t border-[#55C7F2]/20">
                ALL TRANSACTIONS IN INDIAN RUPEES (INR ₹)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Demo Disclaimer */}
        <div className="pt-8 border-t border-[#55C7F2]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#7B96A8] text-center md:text-left">
          <p>
            © 2026 SOLEVAULT. Non-commercial luxury sneaker prototype. Designed for high-fidelity portfolio & pitch presentation.
          </p>
          <p className="max-w-xl">
            Brand trademarks (Nike, Jordan, Adidas, New Balance, ASICS, etc.) are property of their respective trademark holders. Simulated demo pricing & inventory.
          </p>
        </div>
      </div>
    </footer>
  );
}
