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
      <div className="min-h-screen bg-obsidian text-ivory p-12 text-center font-mono">
        Preparing secure demo checkout...
      </div>
    );
  }

  const subtotal = getCartTotal();
  const shipping = subtotal >= 10000 || subtotal === 0 ? 0 : 499;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-obsidian py-24 px-4 text-center space-y-6">
        <ShoppingBag className="w-16 h-16 text-mutedGrey mx-auto" />
        <h1 className="text-2xl sm:text-3xl font-bold font-display uppercase text-ivory">
          Your Shopping Bag is Empty
        </h1>
        <p className="text-xs font-mono text-mutedGrey max-w-sm mx-auto">
          Add an item to your bag before proceeding to demonstration checkout.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-lime text-obsidian text-xs font-mono font-bold uppercase tracking-wider hover:bg-lime-hover transition-colors"
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
    <div className="w-full min-h-screen bg-obsidian py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Strip */}
        <div className="pb-6 border-b border-charcoal flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-lime text-xs font-mono uppercase tracking-widest font-bold block mb-1">
              DEMO TERMINAL
            </span>
            <h1 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-ivory uppercase">
              DEMO CHECKOUT
            </h1>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-mutedGrey bg-charcoal/60 px-3 py-1.5 rounded-lg border border-charcoal">
            <Lock className="w-3.5 h-3.5 text-lime" />
            <span>256-Bit SSL Demo Sandbox</span>
          </div>
        </div>

        {/* Demo Disclosure Box */}
        <div className="p-4 rounded-xl bg-charcoal/50 border border-lime/30 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" />
          <div className="text-xs font-mono space-y-1">
            <strong className="text-lime uppercase">
              PROTOTYPE DEMONSTRATION DISCLOSURE:
            </strong>
            <p className="text-mutedGrey-light leading-relaxed">
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
                <h2 className="text-sm font-mono uppercase tracking-widest text-lime font-bold pb-2 border-b border-charcoal">
                  1. CONTACT INFORMATION
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-mutedGrey uppercase">Full Name</label>
                    <input
                      type="text"
                      {...register('fullName')}
                      className="w-full bg-charcoal border border-charcoal-border rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-lime"
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-[11px]">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-mutedGrey uppercase">Email Address</label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full bg-charcoal border border-charcoal-border rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-lime"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-[11px]">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-mutedGrey uppercase">Mobile Number (India)</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 bg-obsidian-deep border border-r-0 border-charcoal-border rounded-l-xl text-mutedGrey">
                        +91
                      </span>
                      <input
                        type="tel"
                        maxLength={10}
                        {...register('phone')}
                        className="w-full bg-charcoal border border-charcoal-border rounded-r-xl px-4 py-3 text-ivory focus:outline-none focus:border-lime"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-400 text-[11px]">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Section 2: Shipping Destination */}
              <div className="space-y-4">
                <h2 className="text-sm font-mono uppercase tracking-widest text-lime font-bold pb-2 border-b border-charcoal">
                  2. DELIVERY ADDRESS (INDIA)
                </h2>

                <div className="space-y-4 text-xs font-mono">
                  <div className="space-y-1">
                    <label className="text-mutedGrey uppercase">Address Line 1 (Flat, Building, Street)</label>
                    <input
                      type="text"
                      {...register('addressLine1')}
                      className="w-full bg-charcoal border border-charcoal-border rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-lime"
                    />
                    {errors.addressLine1 && (
                      <p className="text-red-400 text-[11px]">{errors.addressLine1.message}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-mutedGrey uppercase">Address Line 2 (Landmark, Area - Optional)</label>
                    <input
                      type="text"
                      {...register('addressLine2')}
                      className="w-full bg-charcoal border border-charcoal-border rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-lime"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-mutedGrey uppercase">City</label>
                      <input
                        type="text"
                        {...register('city')}
                        className="w-full bg-charcoal border border-charcoal-border rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-lime"
                      />
                      {errors.city && (
                        <p className="text-red-400 text-[11px]">{errors.city.message}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-mutedGrey uppercase">State</label>
                      <input
                        type="text"
                        {...register('state')}
                        className="w-full bg-charcoal border border-charcoal-border rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-lime"
                      />
                      {errors.state && (
                        <p className="text-red-400 text-[11px]">{errors.state.message}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-mutedGrey uppercase">PIN Code</label>
                      <input
                        type="text"
                        maxLength={6}
                        {...register('pincode')}
                        className="w-full bg-charcoal border border-charcoal-border rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-lime"
                      />
                      {errors.pincode && (
                        <p className="text-red-400 text-[11px]">{errors.pincode.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Demo Payment Method */}
              <div className="space-y-4">
                <h2 className="text-sm font-mono uppercase tracking-widest text-lime font-bold pb-2 border-b border-charcoal">
                  3. SIMULATED PAYMENT SELECTION
                </h2>

                <div className="space-y-2 text-xs font-mono">
                  <label className="flex items-center gap-3 p-4 rounded-xl border border-charcoal bg-charcoal/40 cursor-pointer hover:border-lime transition-colors">
                    <input
                      type="radio"
                      value="demo_upi"
                      {...register('paymentMethod')}
                      className="accent-lime"
                    />
                    <div className="flex-1">
                      <span className="font-bold text-ivory block">Instant UPI (Demo QR / VPA)</span>
                      <span className="text-[11px] text-mutedGrey">Simulates GPay, PhonePe, Paytm authorization</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 rounded-xl border border-charcoal bg-charcoal/40 cursor-pointer hover:border-lime transition-colors">
                    <input
                      type="radio"
                      value="demo_card"
                      {...register('paymentMethod')}
                      className="accent-lime"
                    />
                    <div className="flex-1">
                      <span className="font-bold text-ivory block">Credit / Debit Card (Simulated Token)</span>
                      <span className="text-[11px] text-mutedGrey">Visa, Mastercard, RuPay test sandbox</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 rounded-xl border border-charcoal bg-charcoal/40 cursor-pointer hover:border-lime transition-colors">
                    <input
                      type="radio"
                      value="demo_cod"
                      {...register('paymentMethod')}
                      className="accent-lime"
                    />
                    <div className="flex-1">
                      <span className="font-bold text-ivory block">Pay on Delivery (Simulated Cash/Card)</span>
                      <span className="text-[11px] text-mutedGrey">Inspect pair upon doorstep courier handover</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-lime hover:bg-lime-hover text-obsidian text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-xl shadow-lime/20 disabled:opacity-50"
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
          <div className="lg:col-span-5 rounded-2xl bg-charcoal/30 border border-charcoal p-6 space-y-6">
            <h2 className="text-sm font-mono uppercase tracking-widest text-lime font-bold pb-2 border-b border-charcoal">
              ORDER SUMMARY ({cart.reduce((s, i) => s + i.quantity, 0)})
            </h2>

            {/* Cart Items List */}
            <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-obsidian border border-charcoal flex-shrink-0">
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
                    <h3 className="font-semibold text-ivory truncate">{item.name}</h3>
                    <div className="text-mutedGrey-dark mt-0.5">
                      <span>{item.size}</span> • <span>Qty: {item.quantity}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-ivory">
                    {formatINR(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculation rows */}
            <div className="space-y-2 pt-4 border-t border-charcoal text-xs font-mono">
              <div className="flex justify-between text-mutedGrey">
                <span>Subtotal</span>
                <span className="text-ivory">{formatINR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-mutedGrey">
                <span>Express Courier Shipping</span>
                <span className={shipping === 0 ? 'text-lime' : 'text-ivory'}>
                  {shipping === 0 ? 'FREE' : formatINR(shipping)}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold pt-3 border-t border-charcoal text-ivory">
                <span>Total (INR)</span>
                <span className="text-lime">{formatINR(total)}</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-mutedGrey-dark space-y-1">
              <p>• Complimentary insured transit with doorstep verification.</p>
              <p>• Track your demonstration parcel in the Collector Account view.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
