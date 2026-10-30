'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Layers, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

export function ProductDetailExploration() {
  const [activeTab, setActiveTab] = useState(0);

  const explorationPanels = [
    {
      id: '01 / SILHOUETTE',
      title: 'ARCHITECTURAL PROFILE',
      subtitle: 'Aerodynamic Court Lineage',
      description:
        'Refined contours balancing vintage basketball proportions with modern foot biomechanics. The sculpted collar and low-profile center of gravity stabilize high-speed lateral motion without sacrificing runway elegance.',
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=85',
      icon: Layers,
      specs: [
        { label: 'Drop Offset', value: '10mm neutral cadence ramp' },
        { label: 'Collar Geometry', value: 'Padded ergonomic Achilles cup' },
        { label: 'Airfoil Structure', value: 'High-density streamline taper' },
      ],
    },
    {
      id: '02 / MATERIAL',
      title: 'PIGSKIN & CRACKED LEATHER',
      subtitle: 'Aerospace Knit & Garment Suede',
      description:
        'Sourced from historic European tanneries and reinforced with engineered ripstop mesh. Each leather hide undergoes cryogenic tumbled oil treatment, creating soft-touch patinas that age uniquely with every mile.',
      image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=85',
      icon: ShieldCheck,
      specs: [
        { label: 'Leather Grade', value: 'Full-grain vintage cracked hide' },
        { label: 'Mesh Weave', value: 'Ballistic breathable monofilament' },
        { label: 'Lining', value: 'Antibacterial moisture-wicking fleece' },
      ],
    },
    {
      id: '03 / DETAIL',
      title: 'KINETIC CUSHIONING CORE',
      subtitle: 'FuelCell Foam & Air-Sole Unit',
      description:
        'Dual-density midsole chambers absorb vertical impact forces and redirect energy into explosive forward spring. Nitrogen-infused cushioning cells maintain resilient rebound over thousands of operational cycles.',
      image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85',
      icon: Cpu,
      specs: [
        { label: 'Midsole Core', value: 'Nitrogen-infused FuelCell foam' },
        { label: 'Impact Pod', value: 'Encapsulated heel Air capsule' },
        { label: 'Torsional Shank', value: 'Rigid carbon-composite bridge' },
      ],
    },
    {
      id: '04 / FINISH',
      title: 'PIVOT WAFFLE TRACTION',
      subtitle: 'Diamond-Cut Gum Rubber',
      description:
        'High-abrasion solid rubber outsoles feature directional herringbone siping and deep-groove flex channels. Calibrated to maintain friction across wet asphalt, hardwood gymnasiums, and polished granite lobbies.',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=85',
      icon: Sparkles,
      specs: [
        { label: 'Compound', value: 'Non-marking volcanic gum rubber' },
        { label: 'Pattern', value: 'Multi-axis pivot circle & siped lugs' },
        { label: 'Durability', value: '600+ Operational urban kilometers' },
      ],
    },
  ];

  const current = explorationPanels[activeTab];

  return (
    <section className="w-full py-24 sm:py-32 relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <span className="text-[#85DCED] text-xs font-mono uppercase tracking-widest font-bold block mb-2">
              ENGINEERING ANATOMY // 04 PILLARS
            </span>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase leading-none">
              PRODUCT DETAIL{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#12B5D0] via-[#85DCED] to-[#F28A9A]">
                EXPLORATION
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-sans text-white/75 max-w-md font-normal leading-relaxed">
            Uncompromising technical precision behind every silhouette in the SOLEVAULT archive.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {explorationPanels.map((panel, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={panel.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between gap-3 ${
                  isActive
                    ? 'reference-glass-card border-white/40 shadow-lg shadow-[#079FCB]/20'
                    : 'reference-sub-panel border-white/10 hover:border-white/30 text-white/70 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[11px] font-mono font-bold tracking-widest ${isActive ? 'text-[#F28A9A]' : 'text-[#85DCED]'}`}>
                    {panel.id}
                  </span>
                  <panel.icon className={`w-4 h-4 ${isActive ? 'text-[#F28A9A]' : 'text-[#12B5D0]'}`} />
                </div>
                <span className={`text-xs sm:text-sm font-display uppercase tracking-wide truncate ${isActive ? 'text-white font-black' : 'text-white/80'}`}>
                  {panel.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Inspection Panel */}
        <div className="rounded-3xl reference-glass-card p-6 sm:p-12 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image Crop View (7 cols) */}
            <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/20 shadow-md">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#073B78]/60 via-transparent to-transparent opacity-80" />
              
              {/* Technical Marker Tag */}
              <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white uppercase tracking-widest reference-sub-panel px-3 py-1.5 rounded-lg border border-white/20 shadow-sm font-bold backdrop-blur-md">
                <span>ZOOM REGION // {current.id}</span>
              </div>
            </div>

            {/* Right Information & Specs Breakdown (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#F28A9A] uppercase tracking-widest font-bold block mb-1">
                  {current.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display uppercase text-white">
                  {current.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm font-normal text-white/80 leading-relaxed">
                {current.description}
              </p>

              {/* Specification Grid with Reference Sub Panel Styling */}
              <div className="rounded-2xl border border-white/15 overflow-hidden divide-y divide-white/10 text-xs font-mono reference-sub-panel shadow-sm">
                {current.specs.map((item, idx) => (
                  <div key={idx} className="p-3.5 flex justify-between items-center hover:bg-white/5 transition-colors">
                    <span className="text-white/60 uppercase font-semibold">{item.label}</span>
                    <span className="text-white font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
