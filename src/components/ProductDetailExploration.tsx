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
    <section className="w-full py-24 sm:py-32 bg-paleBg-alt texture-vertical-glass border-b border-[#55C7F2]/25 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5FBFF]/60 via-[#EBF6FC]/80 to-[#F5FBFF] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#55C7F2]/25">
          <div>
            <span className="text-[#087EAD] text-xs font-mono uppercase tracking-widest font-bold block mb-2">
              ENGINEERING ANATOMY // 04 PILLARS
            </span>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-[#172B3A] uppercase leading-none">
              PRODUCT DETAIL{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55C7F2] to-[#FF3D9A]">
                EXPLORATION
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-sans text-[#2C4659] max-w-md font-normal leading-relaxed">
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
                    ? 'bg-white border-[#FF3D9A] shadow-lg shadow-[#FF3D9A]/15'
                    : 'bg-white/60 border-[#55C7F2]/25 hover:border-[#55C7F2] hover:bg-white text-[#4A667A]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[11px] font-mono font-bold tracking-widest ${isActive ? 'text-[#FF3D9A]' : 'text-[#087EAD]'}`}>
                    {panel.id}
                  </span>
                  <panel.icon className={`w-4 h-4 ${isActive ? 'text-[#FF3D9A]' : 'text-[#55C7F2]'}`} />
                </div>
                <span className={`text-xs sm:text-sm font-display uppercase tracking-wide truncate ${isActive ? 'text-[#172B3A] font-black' : 'text-[#2C4659]'}`}>
                  {panel.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Inspection Panel */}
        <div className="rounded-3xl frosted-glass-card p-6 sm:p-12 shadow-2xl overflow-hidden border-[#55C7F2]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image Crop View (7 cols) */}
            <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-[#55C7F2]/30 shadow-md">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A]/30 via-transparent to-transparent opacity-60" />
              
              {/* Technical Marker Tag */}
              <div className="absolute bottom-4 left-4 text-[10px] font-mono text-[#172B3A] uppercase tracking-widest bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#55C7F2]/30 shadow-sm font-bold">
                <span>ZOOM REGION // {current.id}</span>
              </div>
            </div>

            {/* Right Information & Specs Breakdown (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#FF3D9A] uppercase tracking-widest font-bold block mb-1">
                  {current.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display uppercase text-[#172B3A]">
                  {current.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm font-normal text-[#2C4659] leading-relaxed">
                {current.description}
              </p>

              {/* Specification Grid with Fine Sky Blue Dividers */}
              <div className="rounded-2xl border border-[#55C7F2]/30 overflow-hidden divide-y divide-[#55C7F2]/20 text-xs font-mono bg-white/70 shadow-sm">
                {current.specs.map((item, idx) => (
                  <div key={idx} className="p-3.5 flex justify-between items-center hover:bg-[#F5FBFF] transition-colors">
                    <span className="text-[#4A667A] uppercase font-semibold">{item.label}</span>
                    <span className="text-[#172B3A] font-bold">{item.value}</span>
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
