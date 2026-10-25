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
        className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        onClick={closeSizeGuide}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl bg-obsidian border border-charcoal rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden animate-fade-in max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-charcoal">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-lime/10 border border-lime/30 text-lime">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-lime uppercase font-semibold">
                FIT & CONVERSIONS
              </span>
              <h2 className="text-xl font-bold text-ivory">Footwear Sizing Chart</h2>
            </div>
          </div>
          <button
            onClick={closeSizeGuide}
            className="p-1.5 rounded-full text-mutedGrey hover:text-ivory hover:bg-charcoal transition-colors"
            aria-label="Close size guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-6">
          <p className="text-xs sm:text-sm text-mutedGrey leading-relaxed">
            SOLEVAULT lists adult footwear primarily in standard <strong className="text-ivory">UK / India sizing</strong>. Refer to the conversion table below to find your international match.
          </p>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-charcoal">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-charcoal text-lime uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">UK / India</th>
                  <th className="py-3 px-4">US Men</th>
                  <th className="py-3 px-4">US Women</th>
                  <th className="py-3 px-4">EU</th>
                  <th className="py-3 px-4">Foot Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal text-ivory-muted">
                {sizeChart.map((row, idx) => (
                  <tr
                    key={row.uk}
                    className={idx % 2 === 0 ? 'bg-obsidian' : 'bg-charcoal/20'}
                  >
                    <td className="py-3 px-4 font-bold text-lime">{row.uk}</td>
                    <td className="py-3 px-4">{row.usMen}</td>
                    <td className="py-3 px-4">{row.usWomen}</td>
                    <td className="py-3 px-4">{row.eu}</td>
                    <td className="py-3 px-4 text-mutedGrey">{row.cm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Measurement Tips */}
          <div className="bg-charcoal/40 border border-charcoal rounded-xl p-4 space-y-2 text-xs">
            <h3 className="font-semibold text-ivory uppercase tracking-wider font-mono">
              Expert Sizing Tips
            </h3>
            <ul className="list-disc list-inside space-y-1 text-mutedGrey">
              <li>For narrow retro runners (e.g. ASICS, Nike Air Max 90), consider going half a size up for maximum toe box comfort.</li>
              <li>For low-profile terrace silhouettes (e.g. Adidas Samba), true-to-size fit is recommended.</li>
              <li>Measure your foot in the afternoon, as feet naturally expand during the day.</li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-charcoal flex justify-end">
          <button
            type="button"
            onClick={closeSizeGuide}
            className="px-6 py-2.5 rounded-lg bg-charcoal hover:bg-charcoal-light text-ivory text-xs font-mono uppercase tracking-wider transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
