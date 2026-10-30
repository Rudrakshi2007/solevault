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
      <div className="min-h-screen bg-paleBg text-[#087EAD] p-12 text-center font-mono">
        Loading collector profile...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen py-12 sm:py-16 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Profile Banner */}
        <div className="p-8 rounded-3xl reference-glass-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white text-[#073B78] font-display font-black text-2xl flex items-center justify-center shadow-lg">
              SV
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold font-display uppercase text-white">
                  Demo Collector Profile
                </h1>
                <span className="text-[10px] font-mono uppercase reference-sub-panel text-[#F28A9A] px-2.5 py-0.5 rounded-full border border-white/20 font-bold">
                  TIER: ARCHIVIST
                </span>
              </div>
              <p className="text-xs font-mono text-white/70 mt-1 font-medium">
                collector@solevault.demo // Session ID: #SV-DEMO-2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <Link
              href="/wishlist"
              className="px-4 py-2.5 rounded-full reference-sub-panel border border-white/20 text-white hover:text-[#F28A9A] flex items-center gap-2 shadow-sm font-semibold transition-all"
            >
              <Heart className="w-4 h-4 text-[#F28A9A]" />
              <span>{wishlist.length} Saved</span>
            </Link>
            <Link
              href="/shop"
              className="btn-reference-white px-4 py-2.5 rounded-full font-bold flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Browse Drops</span>
            </Link>
          </div>
        </div>

        {/* Prototype Disclosure Notice */}
        <div className="p-4 rounded-2xl reference-sub-panel border border-white/20 text-xs font-mono text-white/80 flex items-center gap-3 shadow-sm">
          <ShieldCheck className="w-5 h-5 text-[#85DCED] flex-shrink-0" />
          <span>
            Prototype Disclosure: This collector portal is client-side only. It safely presents your mock order history and wishlist without collecting passwords or personal credentials.
          </span>
        </div>

        {/* Recent Demo Orders */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold font-display uppercase tracking-tight text-white flex items-center gap-2">
              <Package className="w-5 h-5 text-[#F28A9A]" />
              <span>RECENT DEMO ORDERS ({orders.length})</span>
            </h2>
          </div>

          {orders.length === 0 ? (
            <div className="p-12 rounded-3xl reference-glass-card text-center space-y-3 shadow-sm">
              <p className="text-sm font-bold text-white">No Demo Orders Yet</p>
              <p className="text-xs font-mono text-white/70 max-w-sm mx-auto">
                Explore our catalog of 60+ sneakers, select your size, and complete a simulated checkout to view an order entry here.
              </p>
              <Link
                href="/shop"
                className="btn-reference-white inline-flex items-center gap-2 mt-2 px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase"
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
                  className="p-5 rounded-2xl reference-glass-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono shadow-sm"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#85DCED] text-sm">{order.orderId}</span>
                      <span className="text-[10px] uppercase px-2.5 py-0.5 rounded-full reference-sub-panel text-[#F28A9A] border border-white/20 font-bold">
                        {order.status}
                      </span>
                    </div>
                    <p className="text-white/80">
                      {order.items.length} item(s) • Total: {formatINR(order.total)} •{' '}
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-white/60 truncate max-w-md">
                      {order.items.map((i) => `${i.name} (${i.size})`).join(', ')}
                    </p>
                  </div>

                  <Link
                    href={`/order-confirmation/${order.orderId}`}
                    className="btn-reference-white inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold"
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
