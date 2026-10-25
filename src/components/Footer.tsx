'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';

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
    <footer className="w-full bg-obsidian-deep border-t border-charcoal text-ivory-dark pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-charcoal">
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-display text-3xl sm:text-4xl tracking-tighter uppercase font-black text-ivory">
                SOLE<span className="text-lime">VAULT</span>
              </span>
            </Link>
            <p className="text-lime font-mono text-sm uppercase tracking-widest font-semibold">
              Find Your Next Obsession.
            </p>
            <p className="text-mutedGrey text-xs sm:text-sm max-w-md leading-relaxed">
              The digital flagship for global sneaker culture and high-concept footwear. Curating authentic grails, modern performance runners, and sartorial leather craft for discerning collectors.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-lime font-semibold block">
              ACCESS PRIVATE DROPS
            </span>
            <p className="text-xs text-mutedGrey">
              Subscribe for confidential restock alerts, editorial lookbooks, and upcoming raffle notifications.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-lime/10 border border-lime/30 rounded-xl text-lime text-xs font-mono">
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
                  className="flex-1 bg-charcoal border border-charcoal-border rounded-xl px-4 py-3 text-xs font-mono text-ivory placeholder:text-mutedGrey-dark focus:outline-none focus:border-lime"
                />
                <button
                  type="submit"
                  className="bg-lime hover:bg-lime-hover text-obsidian px-5 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 flex-shrink-0"
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
            <h4 className="text-ivory uppercase tracking-widest font-bold mb-4">
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5 text-mutedGrey">
              <li><Link href="/shop?category=sneakers" className="hover:text-lime transition-colors">Lifestyle Sneakers</Link></li>
              <li><Link href="/shop?category=running" className="hover:text-lime transition-colors">Performance Running</Link></li>
              <li><Link href="/shop?category=basketball" className="hover:text-lime transition-colors">Court & Basketball</Link></li>
              <li><Link href="/shop?category=skate" className="hover:text-lime transition-colors">Skate Silhouettes</Link></li>
              <li><Link href="/shop?category=hiking" className="hover:text-lime transition-colors">Trail & GORE-TEX</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-ivory uppercase tracking-widest font-bold mb-4">
              ARCHIVES
            </h4>
            <ul className="space-y-2.5 text-mutedGrey">
              <li><Link href="/shop?brand=Nike" className="hover:text-lime transition-colors">Nike / Jordan Archive</Link></li>
              <li><Link href="/shop?brand=Adidas" className="hover:text-lime transition-colors">Adidas Terrace Series</Link></li>
              <li><Link href="/shop?brand=New+Balance" className="hover:text-lime transition-colors">New Balance Made in USA</Link></li>
              <li><Link href="/shop?brand=ASICS" className="hover:text-lime transition-colors">ASICS GEL Heritage</Link></li>
              <li><Link href="/shop?brand=Salomon" className="hover:text-lime transition-colors">Salomon Advanced Lab</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-ivory uppercase tracking-widest font-bold mb-4">
              EXPERIENCE
            </h4>
            <ul className="space-y-2.5 text-mutedGrey">
              <li><Link href="/shop" className="hover:text-lime transition-colors">Full Vault Catalogue</Link></li>
              <li><Link href="/wishlist" className="hover:text-lime transition-colors">Saved Wishlist</Link></li>
              <li><Link href="/account" className="hover:text-lime transition-colors">Demo Collector Orders</Link></li>
              <li><Link href="/checkout" className="hover:text-lime transition-colors">Demo Checkout</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-ivory uppercase tracking-widest font-bold mb-4">
              GUARANTEE
            </h4>
            <div className="space-y-3 text-mutedGrey leading-relaxed">
              <div className="flex items-center gap-2 text-ivory">
                <ShieldCheck className="w-4 h-4 text-lime" />
                <span>100% Verified Quality</span>
              </div>
              <p className="text-[11px]">
                Every pair in our catalogue represents verified footwear engineering standards and authentic specifications.
              </p>
              <div className="pt-2 text-[10px] text-mutedGrey-dark border-t border-charcoal">
                ALL TRANSACTIONS IN INDIAN RUPEES (INR ₹)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Demo Disclaimer */}
        <div className="pt-8 border-t border-charcoal/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-mutedGrey-dark text-center md:text-left">
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
