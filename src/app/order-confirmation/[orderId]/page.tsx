'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  Package,
  Calendar,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Printer,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useVaultStore } from '@/lib/store';
import { formatINR } from '@/lib/utils';
import { DemoOrder } from '@/types/product';

export default function OrderConfirmationPage({
  params,
}: {
  params: { orderId: string };
}) {
  const { orders } = useVaultStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Fire celebration confetti in Sky Blue × Pure White × Hot Pink
    try {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#55C7F2', '#FFFFFF', '#FF3D9A', '#B9EBFF', '#FFB5D8'],
      });
    } catch {
      // ignore
    }
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-paleBg text-[#087EAD] p-12 text-center font-mono">
        Loading order confirmation...
      </div>
    );
  }

  const order = orders.find((o) => o.orderId === params.orderId) || orders[0];

  if (!order) {
    return (
      <div className="min-h-screen bg-paleBg texture-vertical-glass py-24 text-center space-y-4">
        <h1 className="text-2xl font-bold font-display text-[#172B3A]">Demo Order Not Found</h1>
        <p className="text-xs font-mono text-[#5A788D]">
          No corresponding demonstration order exists in your session.
        </p>
        <Link
          href="/shop"
          className="btn-sky-gradient inline-block px-6 py-2.5 rounded-xl text-xs font-mono font-bold"
        >
          Return to Catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-paleBg texture-vertical-glass py-12 sm:py-20 text-[#172B3A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Success Card Header: Frosted Glass */}
        <div className="p-8 sm:p-12 rounded-3xl frosted-glass-card text-center space-y-4 shadow-2xl relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-[#FFE8F3] border border-[#FF3D9A]/40 text-[#FF3D9A] mx-auto flex items-center justify-center shadow-lg shadow-[#FF3D9A]/20">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="inline-block text-[#FF3D9A] text-xs font-mono uppercase tracking-widest font-bold px-3.5 py-1 rounded-full bg-[#FFE8F3] border border-[#FF3D9A]/30">
            DEMO RESERVATION CONFIRMED
          </span>

          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-[#172B3A] uppercase leading-none">
            THANK YOU FOR YOUR ORDER.
          </h1>

          <p className="text-xs sm:text-sm font-mono text-[#4A667A] max-w-lg mx-auto">
            Your demonstration order <strong className="text-[#087EAD]">{order.orderId}</strong> has been logged in your local session.
          </p>

          {/* Prototype Disclosure Notice */}
          <div className="mt-6 p-3.5 rounded-2xl bg-white border border-[#55C7F2]/30 text-[11px] font-mono text-[#5A788D] flex items-center justify-center gap-2 max-w-lg mx-auto shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#55C7F2] flex-shrink-0" />
            <span>Demonstration prototype notice: No live payment processed, no actual package will be shipped.</span>
          </div>
        </div>

        {/* Order Details & Summary Card */}
        <div className="rounded-3xl frosted-glass-card p-6 sm:p-8 space-y-8">
          
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-[#55C7F2]/25 text-xs font-mono">
            <div>
              <span className="text-[#7B96A8] uppercase block text-[10px] font-bold">Reference</span>
              <span className="font-bold text-[#FF3D9A]">{order.orderId}</span>
            </div>
            <div>
              <span className="text-[#7B96A8] uppercase block text-[10px] font-bold">Date Placed</span>
              <span className="text-[#172B3A] font-medium">{new Date(order.createdAt).toLocaleDateString()}</span>
            </div>
            <div>
              <span className="text-[#7B96A8] uppercase block text-[10px] font-bold">Status</span>
              <span className="text-[#087EAD] font-bold uppercase">{order.status}</span>
            </div>
            <div>
              <span className="text-[#7B96A8] uppercase block text-[10px] font-bold">Total Paid (Simulated)</span>
              <span className="font-bold text-[#172B3A]">{formatINR(order.total)}</span>
            </div>
          </div>

          {/* Delivery Address Details */}
          <div className="space-y-2 text-xs font-mono">
            <h3 className="uppercase tracking-widest text-[#087EAD] font-bold text-xs flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#55C7F2]" />
              <span>DELIVERY DESTINATION</span>
            </h3>
            <p className="text-[#172B3A] font-bold text-sm">{order.customer.fullName}</p>
            <p className="text-[#4A667A]">
              {order.customer.addressLine1}
              {order.customer.addressLine2 ? `, ${order.customer.addressLine2}` : ''}
            </p>
            <p className="text-[#4A667A]">
              {order.customer.city}, {order.customer.state} - {order.customer.pincode}
            </p>
            <p className="text-[#7B96A8]">Contact: +91 {order.customer.phone} | {order.customer.email}</p>
          </div>

          {/* Purchased Items List */}
          <div className="space-y-4 pt-4 border-t border-[#55C7F2]/25">
            <h3 className="uppercase tracking-widest text-[#087EAD] font-bold text-xs flex items-center gap-2 font-mono">
              <Package className="w-4 h-4 text-[#55C7F2]" />
              <span>RESERVED ITEMS</span>
            </h3>

            <div className="divide-y divide-[#55C7F2]/20">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-3.5 flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white border border-[#55C7F2]/25 flex-shrink-0 shadow-2xs">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 text-xs font-mono">
                    <span className="text-[10px] text-[#087EAD] uppercase font-bold block">
                      {item.brand}
                    </span>
                    <h4 className="font-bold text-[#172B3A]">{item.name}</h4>
                    <div className="text-[#5A788D] mt-0.5">
                      <span>{item.size}</span> • <span>Qty: {item.quantity}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#087EAD]">
                    {formatINR(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-[#55C7F2]/25 flex flex-wrap gap-4 justify-between items-center">
            <button
              onClick={() => window.print()}
              className="btn-secondary-white inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold"
            >
              <Printer className="w-4 h-4" />
              <span>Print Order Receipt</span>
            </button>

            <Link
              href="/shop"
              className="btn-hot-pink inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider"
            >
              <span>Continue Exploring Vault</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
