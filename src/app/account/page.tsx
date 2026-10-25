'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Package,
  Heart,
  ShoppingBag,
  ArrowRight,
  ExternalLink,
  Award,
} from 'lucide-react';
import { useVaultStore } from '@/lib/store';
import { formatINR } from '@/lib/utils';

export default function AccountPage() {
  const { orders, wishlist } = useVaultStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-obsidian text-ivory p-12 text-center font-mono">
        Loading collector profile...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-obsidian py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Profile Banner */}
        <div className="p-8 rounded-3xl bg-charcoal/40 border border-charcoal/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-lime/20 to-lime text-obsidian font-display font-black text-2xl flex items-center justify-center border border-lime/40 shadow-lg">
              SV
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold font-display uppercase text-ivory">
                  Demo Collector Profile
                </h1>
                <span className="text-[10px] font-mono uppercase bg-lime/10 text-lime px-2 py-0.5 rounded border border-lime/30">
                  TIER: ARCHIVIST
                </span>
              </div>
              <p className="text-xs font-mono text-mutedGrey mt-1">
                collector@solevault.demo // Session ID: #SV-DEMO-2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <Link
              href="/wishlist"
              className="px-4 py-2 rounded-xl bg-charcoal border border-charcoal text-ivory hover:text-lime flex items-center gap-2"
            >
              <Heart className="w-4 h-4 text-lime" />
              <span>{wishlist.length} Saved</span>
            </Link>
            <Link
              href="/shop"
              className="px-4 py-2 rounded-xl bg-lime text-obsidian font-bold flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Browse Drops</span>
            </Link>
          </div>
        </div>

        {/* Prototype Disclosure Notice */}
        <div className="p-4 rounded-xl bg-charcoal/30 border border-charcoal text-xs font-mono text-mutedGrey flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-lime flex-shrink-0" />
          <span>
            Prototype Disclosure: This collector portal is client-side only. It safely presents your mock order history and wishlist without collecting passwords or personal credentials.
          </span>
        </div>

        {/* Recent Demo Orders */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold font-display uppercase tracking-tight text-ivory flex items-center gap-2">
              <Package className="w-5 h-5 text-lime" />
              <span>RECENT DEMO ORDERS ({orders.length})</span>
            </h2>
          </div>

          {orders.length === 0 ? (
            <div className="p-12 rounded-2xl bg-charcoal/20 border border-charcoal text-center space-y-3">
              <p className="text-sm font-semibold text-ivory">No Demo Orders Yet</p>
              <p className="text-xs font-mono text-mutedGrey max-w-sm mx-auto">
                Explore our catalog of 60+ sneakers, select your size, and complete a simulated checkout to view an order entry here.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 mt-2 px-6 py-2.5 rounded-lg bg-lime text-obsidian text-xs font-mono font-bold uppercase"
              >
                <span>EXPLORE CATALOGUE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.orderId}
                  className="p-5 rounded-2xl bg-charcoal/40 border border-charcoal/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-lime text-sm">{order.orderId}</span>
                      <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-lime/10 text-lime border border-lime/20">
                        {order.status}
                      </span>
                    </div>
                    <p className="text-mutedGrey">
                      {order.items.length} item(s) • Total: {formatINR(order.total)} •{' '}
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-mutedGrey-dark truncate max-w-md">
                      {order.items.map((i) => `${i.name} (${i.size})`).join(', ')}
                    </p>
                  </div>

                  <Link
                    href={`/order-confirmation/${order.orderId}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-charcoal hover:bg-charcoal-light border border-charcoal-border text-ivory hover:text-lime transition-colors"
                  >
                    <span>View Receipt</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
