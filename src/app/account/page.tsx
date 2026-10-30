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
    <div className="w-full min-h-screen bg-paleBg texture-vertical-glass py-12 sm:py-16 text-[#172B3A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Profile Banner */}
        <div className="p-8 rounded-3xl frosted-glass-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#55C7F2] to-[#FF3D9A] text-white font-display font-black text-2xl flex items-center justify-center shadow-lg shadow-[#FF3D9A]/20">
              SV
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold font-display uppercase text-[#172B3A]">
                  Demo Collector Profile
                </h1>
                <span className="text-[10px] font-mono uppercase bg-[#FFE8F3] text-[#FF3D9A] px-2.5 py-0.5 rounded-full border border-[#FF3D9A]/30 font-bold">
                  TIER: ARCHIVIST
                </span>
              </div>
              <p className="text-xs font-mono text-[#5A788D] mt-1 font-medium">
                collector@solevault.demo // Session ID: #SV-DEMO-2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <Link
              href="/wishlist"
              className="px-4 py-2.5 rounded-xl bg-white border border-[#55C7F2]/30 text-[#172B3A] hover:text-[#FF3D9A] hover:border-[#FF3D9A] flex items-center gap-2 shadow-sm font-semibold transition-all"
            >
              <Heart className="w-4 h-4 text-[#FF3D9A]" />
              <span>{wishlist.length} Saved</span>
            </Link>
            <Link
              href="/shop"
              className="btn-sky-gradient px-4 py-2.5 rounded-xl text-white font-bold flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Browse Drops</span>
            </Link>
          </div>
        </div>

        {/* Prototype Disclosure Notice */}
        <div className="p-4 rounded-2xl bg-white/80 border border-[#55C7F2]/30 text-xs font-mono text-[#4A667A] flex items-center gap-3 shadow-sm">
          <ShieldCheck className="w-5 h-5 text-[#55C7F2] flex-shrink-0" />
          <span>
            Prototype Disclosure: This collector portal is client-side only. It safely presents your mock order history and wishlist without collecting passwords or personal credentials.
          </span>
        </div>

        {/* Recent Demo Orders */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold font-display uppercase tracking-tight text-[#172B3A] flex items-center gap-2">
              <Package className="w-5 h-5 text-[#FF3D9A]" />
              <span>RECENT DEMO ORDERS ({orders.length})</span>
            </h2>
          </div>

          {orders.length === 0 ? (
            <div className="p-12 rounded-3xl bg-white/70 border border-[#55C7F2]/30 text-center space-y-3 shadow-sm">
              <p className="text-sm font-bold text-[#172B3A]">No Demo Orders Yet</p>
              <p className="text-xs font-mono text-[#5A788D] max-w-sm mx-auto">
                Explore our catalog of 60+ sneakers, select your size, and complete a simulated checkout to view an order entry here.
              </p>
              <Link
                href="/shop"
                className="btn-hot-pink inline-flex items-center gap-2 mt-2 px-6 py-2.5 rounded-xl text-xs font-mono font-bold uppercase"
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
                  className="p-5 rounded-2xl frosted-glass-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono shadow-sm"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#087EAD] text-sm">{order.orderId}</span>
                      <span className="text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-[#FFE8F3] text-[#FF3D9A] border border-[#FF3D9A]/30 font-bold">
                        {order.status}
                      </span>
                    </div>
                    <p className="text-[#4A667A]">
                      {order.items.length} item(s) • Total: {formatINR(order.total)} •{' '}
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-[#7B96A8] truncate max-w-md">
                      {order.items.map((i) => `${i.name} (${i.size})`).join(', ')}
                    </p>
                  </div>

                  <Link
                    href={`/order-confirmation/${order.orderId}`}
                    className="btn-secondary-white inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[#087EAD] font-bold"
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
