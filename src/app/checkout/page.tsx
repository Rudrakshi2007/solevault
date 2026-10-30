'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  ShieldAlert,
  Lock,
  ArrowRight,
  ShoppingBag,
  CreditCard,
  Truck,
  CheckCircle2,
} from 'lucide-react';
import { useVaultStore } from '@/lib/store';
import { formatINR, generateDemoOrderId } from '@/lib/utils';
import { DemoOrder } from '@/types/product';

// Form validation schema using Zod
const checkoutSchema = z.object({
  fullName: z.string().min(2, 'Full name is required (at least 2 characters)'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  addressLine1: z.string().min(5, 'Street address is required'),
  addressLine2: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State / Province is required'),
  pincode: z
    .string()
    .regex(/^\d{6}$/, 'PIN code must be a valid 6-digit Indian Postal Code'),
  paymentMethod: z.enum(['demo_cod', 'demo_upi', 'demo_card']),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, getCartTotal, clearCart, addOrder } = useVaultStore();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: 'Vikramaditya Roy',
      email: 'vikram.roy@example.com',
      phone: '9876543210',
      addressLine1: 'Flat 402, Signature Sky Towers, Indiranagar',
      addressLine2: '100ft Road',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560038',
      paymentMethod: 'demo_upi',
    },
  });

  if (!mounted) {
    return (
      <div className="min-h-screen bg-paleBg text-[#087EAD] p-12 text-center font-mono">
        Preparing secure demo checkout...
      </div>
    );
  }

  const subtotal = getCartTotal();
  const shipping = subtotal >= 10000 || subtotal === 0 ? 0 : 499;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-paleBg texture-vertical-glass py-24 px-4 text-center space-y-6">
        <ShoppingBag className="w-16 h-16 text-[#55C7F2] mx-auto" />
        <h1 className="text-2xl sm:text-3xl font-bold font-display uppercase text-[#172B3A]">
          Your Shopping Bag is Empty
        </h1>
        <p className="text-xs font-mono text-[#5A788D] max-w-sm mx-auto">
          Add an item to your bag before proceeding to demonstration checkout.
        </p>
        <Link
          href="/shop"
          className="btn-sky-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider"
        >
          <span>Return To Store</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const onSubmit = (data: CheckoutFormData) => {
    setIsSubmitting(true);

    const orderId = generateDemoOrderId();
    const newOrder: DemoOrder = {
      orderId,
      createdAt: new Date().toISOString(),
      items: cart.map((item) => ({
        productId: item.productId,
        name: item.name,
        brand: item.brand,
        size: item.size,
        color: item.color,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      subtotal,
      shipping,
      discount: 0,
      total,
      customer: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        addressLine1: data.addressLine1,
        addressLine2: data.addressLine2,
        city: data.city,
        state: data.state,
        pincode: data.pincode,
      },
      status: 'confirmed',
    };

    // Save order & clear cart
    addOrder(newOrder);
    clearCart();

    // Redirect to confirmation screen
    setTimeout(() => {
      router.push(`/order-confirmation/${orderId}`);
    }, 600);
  };

  return (
    <div className="w-full min-h-screen bg-paleBg texture-vertical-glass py-12 sm:py-16 text-[#172B3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Strip */}
        <div className="pb-6 border-b border-[#55C7F2]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[#FF3D9A] text-xs font-mono uppercase tracking-widest font-bold block mb-1">
              DEMO TERMINAL
            </span>
            <h1 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-[#172B3A] uppercase">
              DEMO CHECKOUT
            </h1>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#087EAD] bg-white px-3.5 py-2 rounded-xl border border-[#55C7F2]/30 shadow-sm font-semibold">
            <Lock className="w-3.5 h-3.5 text-[#55C7F2]" />
            <span>256-Bit SSL Demo Sandbox</span>
          </div>
        </div>

        {/* Demo Disclosure Box */}
        <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-[#55C7F2]/35 flex items-start gap-3 shadow-sm">
          <ShieldAlert className="w-5 h-5 text-[#FF3D9A] flex-shrink-0 mt-0.5" />
          <div className="text-xs font-mono space-y-1">
            <strong className="text-[#FF3D9A] uppercase font-bold">
              PROTOTYPE DEMONSTRATION DISCLOSURE:
            </strong>
            <p className="text-[#4A667A] leading-relaxed">
              This is a visual and functional prototype storefront for SOLEVAULT. No real money or credit card charges will be made. The form is pre-filled with demo information to facilitate testing.
            </p>
          </div>
        </div>

        {/* Two-Column Grid: Form + Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Checkout Form (7 cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Section 1: Customer Contact */}
              <div className="space-y-4">
                <h2 className="text-sm font-mono uppercase tracking-widest text-[#087EAD] font-bold pb-2 border-b border-[#55C7F2]/25">
                  1. CONTACT INFORMATION
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-[#4A667A] uppercase font-semibold">Full Name</label>
                    <input
                      type="text"
                      {...register('fullName')}
                      className="w-full bg-white border border-[#B9EBFF] focus:border-[#55C7F2] focus:ring-2 focus:ring-[#55C7F2]/20 rounded-xl px-4 py-3 text-[#172B3A] shadow-sm outline-none transition-all"
                    />
                    {errors.fullName && (
                      <p className="text-[#FF3D9A] text-[11px] font-bold">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#4A667A] uppercase font-semibold">Email Address</label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full bg-white border border-[#B9EBFF] focus:border-[#55C7F2] focus:ring-2 focus:ring-[#55C7F2]/20 rounded-xl px-4 py-3 text-[#172B3A] shadow-sm outline-none transition-all"
                    />
                    {errors.email && (
                      <p className="text-[#FF3D9A] text-[11px] font-bold">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#4A667A] uppercase font-semibold">Mobile Number (India)</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 bg-[#EBF6FC] border border-r-0 border-[#B9EBFF] rounded-l-xl text-[#087EAD] font-bold">
                        +91
                      </span>
                      <input
                        type="tel"
                        maxLength={10}
                        {...register('phone')}
                        className="w-full bg-white border border-[#B9EBFF] focus:border-[#55C7F2] focus:ring-2 focus:ring-[#55C7F2]/20 rounded-r-xl px-4 py-3 text-[#172B3A] shadow-sm outline-none transition-all"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[#FF3D9A] text-[11px] font-bold">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Section 2: Shipping Destination */}
              <div className="space-y-4">
                <h2 className="text-sm font-mono uppercase tracking-widest text-[#087EAD] font-bold pb-2 border-b border-[#55C7F2]/25">
                  2. DELIVERY ADDRESS (INDIA)
                </h2>

                <div className="space-y-4 text-xs font-mono">
                  <div className="space-y-1">
                    <label className="text-[#4A667A] uppercase font-semibold">Address Line 1 (Flat, Building, Street)</label>
                    <input
                      type="text"
                      {...register('addressLine1')}
                      className="w-full bg-white border border-[#B9EBFF] focus:border-[#55C7F2] focus:ring-2 focus:ring-[#55C7F2]/20 rounded-xl px-4 py-3 text-[#172B3A] shadow-sm outline-none transition-all"
                    />
                    {errors.addressLine1 && (
                      <p className="text-[#FF3D9A] text-[11px] font-bold">{errors.addressLine1.message}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#4A667A] uppercase font-semibold">Address Line 2 (Landmark, Area - Optional)</label>
                    <input
                      type="text"
                      {...register('addressLine2')}
                      className="w-full bg-white border border-[#B9EBFF] focus:border-[#55C7F2] focus:ring-2 focus:ring-[#55C7F2]/20 rounded-xl px-4 py-3 text-[#172B3A] shadow-sm outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-[#4A667A] uppercase font-semibold">City</label>
                      <input
                        type="text"
                        {...register('city')}
                        className="w-full bg-white border border-[#B9EBFF] focus:border-[#55C7F2] focus:ring-2 focus:ring-[#55C7F2]/20 rounded-xl px-4 py-3 text-[#172B3A] shadow-sm outline-none transition-all"
                      />
                      {errors.city && (
                        <p className="text-[#FF3D9A] text-[11px] font-bold">{errors.city.message}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[#4A667A] uppercase font-semibold">State</label>
                      <input
                        type="text"
                        {...register('state')}
                        className="w-full bg-white border border-[#B9EBFF] focus:border-[#55C7F2] focus:ring-2 focus:ring-[#55C7F2]/20 rounded-xl px-4 py-3 text-[#172B3A] shadow-sm outline-none transition-all"
                      />
                      {errors.state && (
                        <p className="text-[#FF3D9A] text-[11px] font-bold">{errors.state.message}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[#4A667A] uppercase font-semibold">PIN Code</label>
                      <input
                        type="text"
                        maxLength={6}
                        {...register('pincode')}
                        className="w-full bg-white border border-[#B9EBFF] focus:border-[#55C7F2] focus:ring-2 focus:ring-[#55C7F2]/20 rounded-xl px-4 py-3 text-[#172B3A] shadow-sm outline-none transition-all"
                      />
                      {errors.pincode && (
                        <p className="text-[#FF3D9A] text-[11px] font-bold">{errors.pincode.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Demo Payment Method */}
              <div className="space-y-4">
                <h2 className="text-sm font-mono uppercase tracking-widest text-[#087EAD] font-bold pb-2 border-b border-[#55C7F2]/25">
                  3. SIMULATED PAYMENT SELECTION
                </h2>

                <div className="space-y-2.5 text-xs font-mono">
                  <label className="flex items-center gap-3 p-4 rounded-2xl border border-[#55C7F2]/30 bg-white cursor-pointer hover:border-[#FF3D9A] transition-all shadow-sm">
                    <input
                      type="radio"
                      value="demo_upi"
                      {...register('paymentMethod')}
                      className="accent-[#FF3D9A]"
                    />
                    <div className="flex-1">
                      <span className="font-bold text-[#172B3A] block">Instant UPI (Demo QR / VPA)</span>
                      <span className="text-[11px] text-[#5A788D]">Simulates GPay, PhonePe, Paytm authorization</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 rounded-2xl border border-[#55C7F2]/30 bg-white cursor-pointer hover:border-[#FF3D9A] transition-all shadow-sm">
                    <input
                      type="radio"
                      value="demo_card"
                      {...register('paymentMethod')}
                      className="accent-[#FF3D9A]"
                    />
                    <div className="flex-1">
                      <span className="font-bold text-[#172B3A] block">Credit / Debit Card (Simulated Token)</span>
                      <span className="text-[11px] text-[#5A788D]">Visa, Mastercard, RuPay test sandbox</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 rounded-2xl border border-[#55C7F2]/30 bg-white cursor-pointer hover:border-[#FF3D9A] transition-all shadow-sm">
                    <input
                      type="radio"
                      value="demo_cod"
                      {...register('paymentMethod')}
                      className="accent-[#FF3D9A]"
                    />
                    <div className="flex-1">
                      <span className="font-bold text-[#172B3A] block">Pay on Delivery (Simulated Cash/Card)</span>
                      <span className="text-[11px] text-[#5A788D]">Inspect pair upon doorstep courier handover</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-hot-pink w-full py-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>PROCESSING DEMO ORDER...</span>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>CONFIRM & PLACE DEMO ORDER ({formatINR(total)})</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: Order Summary (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl frosted-glass-card p-6 space-y-6">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#087EAD] font-bold pb-2 border-b border-[#55C7F2]/25">
              ORDER SUMMARY ({cart.reduce((s, i) => s + i.quantity, 0)})
            </h2>

            {/* Cart Items List */}
            <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-2 rounded-xl bg-white/70 border border-[#55C7F2]/20">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white border border-[#55C7F2]/25 flex-shrink-0">
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
                    <h3 className="font-bold text-[#172B3A] truncate">{item.name}</h3>
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

            {/* Calculation rows */}
            <div className="space-y-2 pt-4 border-t border-[#55C7F2]/25 text-xs font-mono">
              <div className="flex justify-between text-[#4A667A]">
                <span>Subtotal</span>
                <span className="text-[#172B3A] font-bold">{formatINR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-[#4A667A]">
                <span>Express Courier Shipping</span>
                <span className={shipping === 0 ? 'text-[#087EAD] font-bold' : 'text-[#172B3A]'}>
                  {shipping === 0 ? 'FREE' : formatINR(shipping)}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold pt-3 border-t border-[#55C7F2]/25 text-[#172B3A]">
                <span>Total (INR)</span>
                <span className="text-[#FF3D9A] text-lg font-mono">{formatINR(total)}</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#5A788D] space-y-1">
              <p>• Complimentary insured transit with doorstep verification.</p>
              <p>• Track your demonstration parcel in the Collector Account view.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
