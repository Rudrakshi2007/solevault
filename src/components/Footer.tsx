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
    <footer className="w-full bg-[#073B78]/45 backdrop-blur-2xl border-t border-white/15 text-white/70 pt-16 pb-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-display text-3xl sm:text-4xl tracking-tighter uppercase font-black text-white group-hover:text-[#85DCED] transition-colors">
                SOLE<span className="text-[#85DCED] group-hover:text-[#F28A9A] transition-colors">VAULT</span>
              </span>
            </Link>
            <p className="text-[#85DCED] font-mono text-sm uppercase tracking-widest font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F28A9A]" />
              <span>Find Your Next Obsession.</span>
            </p>
            <p className="text-white/70 text-xs sm:text-sm max-w-md leading-relaxed">
              The digital flagship for global sneaker culture and high-concept footwear. Curating authentic grails, modern performance runners, and sartorial leather craft for discerning collectors.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F28A9A] font-bold block">
              ACCESS PRIVATE DROPS // EXCLUSIVE ARCHIVE
            </span>
            <p className="text-xs text-white/60">
              Subscribe for confidential restock alerts, editorial lookbooks, and upcoming raffle notifications.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3.5 reference-sub-panel border border-[#F28A9A]/50 rounded-xl text-[#F28A9A] text-xs font-mono font-bold shadow-sm">
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
                  className="flex-1 reference-sub-panel border border-white/20 focus:border-[#85DCED] focus:ring-2 focus:ring-[#85DCED]/20 rounded-xl px-4 py-3 text-xs font-mono text-white placeholder:text-white/40 shadow-sm outline-none transition-all"
                />
                <button
                  type="submit"
                  className="btn-reference-pink px-6 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 flex-shrink-0"
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
            <h4 className="text-white uppercase tracking-widest font-bold mb-4">
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5 text-white/70">
              <li><Link href="/night-market" className="text-[#85DCED] hover:text-[#F28A9A] transition-colors font-bold flex items-center gap-1.5"><span>Night Market ?</span><span className="text-[9px] bg-[#EF648F] text-white px-1.5 py-0.2 rounded-full font-mono">HOT</span></Link></li><li><Link href="/shop?category=sneakers" className="hover:text-[#85DCED] transition-colors">Lifestyle Sneakers</Link></li>
              <li><Link href="/shop?category=running" className="hover:text-[#85DCED] transition-colors">Performance Running</Link></li>
              <li><Link href="/shop?category=basketball" className="hover:text-[#85DCED] transition-colors">Court & Basketball</Link></li>
              <li><Link href="/shop?category=hiking" className="hover:text-[#85DCED] transition-colors">Trail & GORE-TEX</Link></li>
              <li><Link href="/shop?category=boots" className="hover:text-[#85DCED] transition-colors">Boots & Workwear</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest font-bold mb-4">
              ARCHIVES
            </h4>
            <ul className="space-y-2.5 text-white/70">
              <li><Link href="/shop?brand=Nike" className="hover:text-[#85DCED] transition-colors">Nike / Jordan Archive</Link></li>
              <li><Link href="/shop?brand=Adidas" className="hover:text-[#85DCED] transition-colors">Adidas Terrace Series</Link></li>
              <li><Link href="/shop?brand=New+Balance" className="hover:text-[#85DCED] transition-colors">New Balance Made in USA</Link></li>
              <li><Link href="/shop?brand=ASICS" className="hover:text-[#85DCED] transition-colors">ASICS GEL Heritage</Link></li>
              <li><Link href="/shop?brand=Salomon" className="hover:text-[#85DCED] transition-colors">Salomon Advanced Lab</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest font-bold mb-4">
              EXPERIENCE
            </h4>
            <ul className="space-y-2.5 text-white/70">
              <li><Link href="/shop" className="hover:text-[#85DCED] transition-colors">Full Vault Catalogue</Link></li>
              <li><Link href="/wishlist" className="hover:text-[#85DCED] transition-colors">Saved Wishlist</Link></li>
              <li><Link href="/account" className="hover:text-[#85DCED] transition-colors">Demo Collector Orders</Link></li>
              <li><Link href="/checkout" className="hover:text-[#85DCED] transition-colors">Demo Checkout</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest font-bold mb-4">
              GUARANTEE
            </h4>
            <div className="space-y-3 text-white/70 leading-relaxed">
              <div className="flex items-center gap-2 text-white font-bold">
                <ShieldCheck className="w-4 h-4 text-[#85DCED]" />
                <span>100% Verified Quality</span>
              </div>
              <p className="text-[11px] text-white/60">
                Every pair in our catalogue represents verified footwear engineering standards and authentic specifications.
              </p>
              <div className="pt-2 text-[10px] text-[#85DCED] font-bold border-t border-white/10">
                ALL TRANSACTIONS IN INDIAN RUPEES (INR ₹)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Demo Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/50 text-center md:text-left">
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
