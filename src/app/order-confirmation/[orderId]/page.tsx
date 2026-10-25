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
    // Fire subtle luxury celebration confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D7FF3F', '#F4F1EA', '#969696'],
      });
    } catch {
      // ignore
    }
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-obsidian text-ivory p-12 text-center font-mono">
        Loading order confirmation...
      </div>
    );
  }

  const order = orders.find((o) => o.orderId === params.orderId) || orders[0];

  if (!order) {
    return (
      <div className="min-h-screen bg-obsidian py-24 text-center space-y-4">
        <h1 className="text-2xl font-bold font-display text-ivory">Demo Order Not Found</h1>
        <p className="text-xs font-mono text-mutedGrey">
          No corresponding demonstration order exists in your session.
        </p>
        <Link
          href="/shop"
          className="inline-block px-6 py-2.5 rounded-lg bg-lime text-obsidian text-xs font-mono font-bold"
        >
          Return to Catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-obsidian py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Success Card Header */}
        <div className="p-8 sm:p-12 rounded-3xl bg-charcoal/40 border border-charcoal/80 text-center space-y-4 shadow-2xl relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-lime/10 border border-lime/30 text-lime mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="inline-block text-lime text-xs font-mono uppercase tracking-widest font-bold px-3 py-1 rounded bg-lime/10 border border-lime/20">
            DEMO RESERVATION CONFIRMED
          </span>

          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-ivory uppercase leading-none">
            THANK YOU FOR YOUR ORDER.
          </h1>

          <p className="text-xs sm:text-sm font-mono text-mutedGrey max-w-lg mx-auto">
            Your demonstration order <strong className="text-lime">{order.orderId}</strong> has been logged in your local session.
          </p>

          {/* Prototype Disclosure Notice */}
          <div className="mt-6 p-3 rounded-xl bg-obsidian-deep border border-charcoal text-[11px] font-mono text-mutedGrey flex items-center justify-center gap-2 max-w-lg mx-auto">
            <ShieldCheck className="w-4 h-4 text-lime flex-shrink-0" />
            <span>Demonstration prototype notice: No live payment processed, no actual package will be shipped.</span>
          </div>
        </div>

        {/* Order Details & Summary Card */}
        <div className="rounded-2xl bg-charcoal/30 border border-charcoal p-6 sm:p-8 space-y-8">
          
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-charcoal text-xs font-mono">
            <div>
              <span className="text-mutedGrey-dark uppercase block text-[10px]">Reference</span>
              <span className="font-bold text-lime">{order.orderId}</span>
            </div>
            <div>
              <span className="text-mutedGrey-dark uppercase block text-[10px]">Date Placed</span>
              <span className="text-ivory">{new Date(order.createdAt).toLocaleDateString()}</span>
            </div>
            <div>
              <span className="text-mutedGrey-dark uppercase block text-[10px]">Status</span>
              <span className="text-lime font-bold uppercase">{order.status}</span>
            </div>
            <div>
              <span className="text-mutedGrey-dark uppercase block text-[10px]">Total Paid (Simulated)</span>
              <span className="font-bold text-ivory">{formatINR(order.total)}</span>
            </div>
          </div>

          {/* Delivery Address Details */}
          <div className="space-y-2 text-xs font-mono">
            <h3 className="uppercase tracking-widest text-lime font-bold text-xs flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>DELIVERY DESTINATION</span>
            </h3>
            <p className="text-ivory font-semibold">{order.customer.fullName}</p>
            <p className="text-mutedGrey">
              {order.customer.addressLine1}
              {order.customer.addressLine2 ? `, ${order.customer.addressLine2}` : ''}
            </p>
            <p className="text-mutedGrey">
              {order.customer.city}, {order.customer.state} - {order.customer.pincode}
            </p>
            <p className="text-mutedGrey-dark">Contact: +91 {order.customer.phone} | {order.customer.email}</p>
          </div>

          {/* Purchased Items List */}
          <div className="space-y-4 pt-4 border-t border-charcoal">
            <h3 className="uppercase tracking-widest text-lime font-bold text-xs flex items-center gap-2 font-mono">
              <Package className="w-4 h-4" />
              <span>RESERVED ITEMS</span>
            </h3>

            <div className="divide-y divide-charcoal/60">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-3 flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-obsidian border border-charcoal flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 text-xs font-mono">
                    <span className="text-[10px] text-mutedGrey uppercase block">
                      {item.brand}
                    </span>
                    <h4 className="font-semibold text-ivory">{item.name}</h4>
                    <span className="text-lime">{item.size}</span> • <span className="text-mutedGrey">{item.color}</span> • <span className="text-mutedGrey">Qty: {item.quantity}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-ivory">
                    {formatINR(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Subtotal & Total Breakdown */}
          <div className="space-y-2 pt-4 border-t border-charcoal text-xs font-mono">
            <div className="flex justify-between text-mutedGrey">
              <span>Subtotal</span>
              <span className="text-ivory">{formatINR(order.subtotal)}</span>
            </div>
            <div className="flex justify-between text-mutedGrey">
              <span>Express Courier Shipping</span>
              <span className={order.shipping === 0 ? 'text-lime' : 'text-ivory'}>
                {order.shipping === 0 ? 'FREE' : formatINR(order.shipping)}
              </span>
            </div>
            <div className="flex justify-between text-base font-bold pt-3 border-t border-charcoal text-ivory">
              <span>Grand Total</span>
              <span className="text-lime">{formatINR(order.total)}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-lime hover:bg-lime-hover text-obsidian text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-lg shadow-lime/20"
          >
            <span>RETURN TO STORE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-charcoal hover:bg-charcoal-light text-ivory text-xs font-mono uppercase tracking-wider border border-charcoal/80 transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Demonstration Receipt</span>
          </button>
        </div>
      </div>
    </div>
  );
}
