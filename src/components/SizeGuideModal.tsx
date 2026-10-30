'use client';

import React from 'react';
import { X, Ruler } from 'lucide-react';
import { useVaultStore } from '@/lib/store';

export function SizeGuideModal() {
  const { isSizeGuideOpen, closeSizeGuide } = useVaultStore();

  if (!isSizeGuideOpen) return null;

  const sizeChart = [
    { uk: 'UK 6', usMen: 'US 6.5', usWomen: 'US 8', eu: 'EU 39.5', cm: '24.5 cm' },
    { uk: 'UK 7', usMen: 'US 7.5', usWomen: 'US 9', eu: 'EU 40.5', cm: '25.5 cm' },
    { uk: 'UK 8', usMen: 'US 8.5', usWomen: 'US 10', eu: 'EU 42', cm: '26.5 cm' },
    { uk: 'UK 9', usMen: 'US 9.5', usWomen: 'US 11', eu: 'EU 43', cm: '27.5 cm' },
    { uk: 'UK 10', usMen: 'US 10.5', usWomen: 'US 12', eu: 'EU 44.5', cm: '28.5 cm' },
    { uk: 'UK 11', usMen: 'US 11.5', usWomen: 'US 13', eu: 'EU 45.5', cm: '29.5 cm' },
    { uk: 'UK 12', usMen: 'US 12.5', usWomen: 'US 14', eu: 'EU 47', cm: '30.5 cm' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#172B3A]/45 backdrop-blur-sm"
        onClick={closeSizeGuide}
      />

      {/* Modal Dialog: Frosted Glass */}
      <div className="relative z-10 w-full max-w-2xl bg-white/95 backdrop-blur-2xl border border-[#55C7F2]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden animate-fade-in max-h-[90vh] overflow-y-auto text-[#172B3A]">
        <div className="flex items-center justify-between pb-4 border-b border-[#55C7F2]/25">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FFE8F3] border border-[#FF3D9A]/30 text-[#FF3D9A]">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#FF3D9A] uppercase font-bold">
                FIT & CONVERSIONS
              </span>
              <h2 className="text-xl font-bold text-[#172B3A]">Footwear Sizing Chart</h2>
            </div>
          </div>
          <button
            onClick={closeSizeGuide}
            className="p-1.5 rounded-xl text-[#7B96A8] hover:text-[#FF3D9A] hover:bg-[#FFE8F3] transition-colors"
            aria-label="Close size guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-6">
          <p className="text-xs sm:text-sm text-[#4A667A] leading-relaxed">
            SOLEVAULT lists adult footwear primarily in standard <strong className="text-[#172B3A]">UK / India sizing</strong>. Refer to the conversion table below to find your international match.
          </p>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#55C7F2]/30 shadow-sm bg-white">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#EBF6FC] text-[#087EAD] uppercase tracking-wider font-bold">
                <tr>
                  <th className="py-3 px-4">UK / India</th>
                  <th className="py-3 px-4">US Men</th>
                  <th className="py-3 px-4">US Women</th>
                  <th className="py-3 px-4">EU</th>
                  <th className="py-3 px-4">Foot Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#55C7F2]/20 text-[#2C4659]">
                {sizeChart.map((row, idx) => (
                  <tr
                    key={row.uk}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F5FBFF]'}
                  >
                    <td className="py-3 px-4 font-bold text-[#FF3D9A]">{row.uk}</td>
                    <td className="py-3 px-4 font-semibold">{row.usMen}</td>
                    <td className="py-3 px-4">{row.usWomen}</td>
                    <td className="py-3 px-4">{row.eu}</td>
                    <td className="py-3 px-4 text-[#7B96A8]">{row.cm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Measurement Tips */}
          <div className="bg-[#F5FBFF] border border-[#55C7F2]/30 rounded-2xl p-4 space-y-2 text-xs">
            <h3 className="font-bold text-[#087EAD] uppercase tracking-wider font-mono">
              Expert Sizing Tips
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[#4A667A]">
              <li>For narrow retro runners (e.g. ASICS, Nike Air Max 90), consider going half a size up for maximum toe box comfort.</li>
              <li>For low-profile terrace silhouettes (e.g. Adidas Samba), true-to-size fit is recommended.</li>
              <li>Measure your foot in the afternoon, as feet naturally expand during the day.</li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-[#55C7F2]/25 flex justify-end">
          <button
            type="button"
            onClick={closeSizeGuide}
            className="btn-secondary-white px-6 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
