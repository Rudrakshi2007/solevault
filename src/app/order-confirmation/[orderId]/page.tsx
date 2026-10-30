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
    // Fire celebration confetti matching reference palette
    try {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#079FCB', '#12B5D0', '#FFFFFF', '#F28A9A', '#EF648F'],
      });
    } catch {
      // ignore
    }
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-transparent text-[#85DCED] p-12 text-center font-mono">
        Loading order confirmation...
      </div>
    );
  }

  const order = orders.find((o) => o.orderId === params.orderId) || orders[0];

  if (!order) {
    return (
      <div className="min-h-screen py-24 text-center space-y-4 text-white">
        <h1 className="text-2xl font-bold font-display text-white">Demo Order Not Found</h1>
        <p className="text-xs font-mono text-white/70">
          No corresponding demonstration order exists in your session.
        </p>
        <Link
          href="/shop"
          className="btn-reference-white inline-block px-6 py-2.5 rounded-full text-xs font-mono font-bold"
        >
          Return to Catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen py-12 sm:py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Success Card Header: Reference Glass Card */}
        <div className="p-8 sm:p-12 rounded-3xl reference-glass-card text-center space-y-4 shadow-2xl relative overflow-hidden">
          <div className="w-16 h-16 rounded-full reference-sub-panel border border-[#F28A9A]/40 text-[#F28A9A] mx-auto flex items-center justify-center shadow-lg">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="inline-block text-[#F28A9A] text-xs font-mono uppercase tracking-widest font-bold px-3.5 py-1 rounded-full reference-sub-panel border border-[#F28A9A]/30">
            DEMO RESERVATION CONFIRMED
          </span>

          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-none">
            THANK YOU FOR YOUR ORDER.
          </h1>

          <p className="text-xs sm:text-sm font-mono text-white/80 max-w-lg mx-auto">
            Your demonstration order <strong className="text-[#85DCED]">{order.orderId}</strong> has been logged in your local session.
          </p>

          {/* Prototype Disclosure Notice */}
          <div className="mt-6 p-3.5 rounded-2xl reference-sub-panel border border-white/15 text-[11px] font-mono text-white/70 flex items-center justify-center gap-2 max-w-lg mx-auto shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#85DCED] flex-shrink-0" />
            <span>Demonstration prototype notice: No live payment processed, no actual package will be shipped.</span>
          </div>
        </div>

        {/* Order Details & Summary Card */}
        <div className="rounded-3xl reference-glass-card p-6 sm:p-8 space-y-8">
          
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-white/10 text-xs font-mono">
            <div>
              <span className="text-white/60 uppercase block text-[10px] font-bold">Reference</span>
              <span className="font-bold text-[#F28A9A]">{order.orderId}</span>
            </div>
            <div>
              <span className="text-white/60 uppercase block text-[10px] font-bold">Date Placed</span>
              <span className="text-white font-medium">{new Date(order.createdAt).toLocaleDateString()}</span>
            </div>
            <div>
              <span className="text-white/60 uppercase block text-[10px] font-bold">Status</span>
              <span className="text-[#85DCED] font-bold uppercase">{order.status}</span>
            </div>
            <div>
              <span className="text-white/60 uppercase block text-[10px] font-bold">Total Paid (Simulated)</span>
              <span className="font-bold text-white">{formatINR(order.total)}</span>
            </div>
          </div>

          {/* Delivery Address Details */}
          <div className="space-y-2 text-xs font-mono">
            <h3 className="uppercase tracking-widest text-[#85DCED] font-bold text-xs flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#85DCED]" />
              <span>DELIVERY DESTINATION</span>
            </h3>
            <p className="text-white font-bold text-sm">{order.customer.fullName}</p>
            <p className="text-white/80">
              {order.customer.addressLine1}
              {order.customer.addressLine2 ? `, ${order.customer.addressLine2}` : ''}
            </p>
            <p className="text-white/80">
              {order.customer.city}, {order.customer.state} - {order.customer.pincode}
            </p>
            <p className="text-white/60">Contact: +91 {order.customer.phone} | {order.customer.email}</p>
          </div>

          {/* Purchased Items List */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <h3 className="uppercase tracking-widest text-[#85DCED] font-bold text-xs flex items-center gap-2 font-mono">
              <Package className="w-4 h-4 text-[#85DCED]" />
              <span>RESERVED ITEMS</span>
            </h3>

            <div className="divide-y divide-white/10">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-3.5 flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-black/20 border border-white/15 flex-shrink-0 shadow-2xs">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 text-xs font-mono">
                    <span className="text-[10px] text-[#85DCED] uppercase font-bold block">
                      {item.brand}
                    </span>
                    <h4 className="font-bold text-white">{item.name}</h4>
                    <div className="text-white/60 mt-0.5">
                      <span>{item.size}</span> • <span>Qty: {item.quantity}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#85DCED]">
                    {formatINR(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 justify-between items-center">
            <button
              onClick={() => window.print()}
              className="btn-reference-glass inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-semibold"
            >
              <Printer className="w-4 h-4" />
              <span>Print Order Receipt</span>
            </button>

            <Link
              href="/shop"
              className="btn-reference-white inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider"
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
