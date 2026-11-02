'use client';

import React from 'react';

/**
 * 5-Layer Real CSS Atmospheric Background matching the reference screenshot:
 * Layer 1: Base Environment (#079FC6, #12B4CE, #087EAD, #07559A, #063C78)
 * Layer 2: Vertical Glass Texture (Fluted / Reeded dense vertical streaks)
 * Layer 3: Central Ambient Light (#F18B98, #F39A9E, #ED6597, #D943A4, #F6B0A5)
 * Layer 4: Deep Blue Shadows (Navy and electric blue depth forms)
 * Layer 5: Atmospheric Reflections (Horizontal light streaks & white reflections)
 */
export function AtmosphericBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 AtmosphericBackground"
      aria-hidden="true"
    >
      {/* LAYER 1: BASE ENVIRONMENT */}
      <div className="absolute inset-0 bg-layer-1-base" />

      {/* LAYER 4: DEEP BLUE SHADOWS (Placed beneath light bloom to anchor depth) */}
      <div className="absolute inset-0 bg-layer-4-shadows" />

      {/* LAYER 3: CENTRAL AMBIENT LIGHT (Diffused coral-pink, rose & peach bloom) */}
      <div className="absolute inset-0 bg-layer-3-ambient-light AmbientLight" />

      {/* LAYER 2: VERTICAL GLASS TEXTURE (Prominent fluted reeded glass streaks) */}
      <div className="absolute inset-0 bg-layer-2-vertical-glass VerticalGlassTexture" />

      {/* LAYER 5: ATMOSPHERIC REFLECTIONS (Horizontal light streaks & reflections) */}
      <div className="absolute inset-0 bg-layer-5-reflections" />
    </div>
  );
}
