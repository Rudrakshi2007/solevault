import React from 'react';
import { AuroraHero } from '@/components/AuroraHero';
import { ScrollExperience3D } from '@/components/ScrollExperience3D';
import { FeaturedShowcase } from '@/components/FeaturedShowcase';
import { ProductDetailExploration } from '@/components/ProductDetailExploration';
import { CollectionExplorer } from '@/components/CollectionExplorer';
import { FinalCinematicCTA } from '@/components/FinalCinematicCTA';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-paleBg text-darkText selection:bg-hotPink selection:text-white texture-vertical-glass">
      {/* Section 1: Cinematic Sky Blue × Hot Pink Hero */}
      <AuroraHero />

      {/* Section 2: Scroll-Driven 3D Interactive Experience (5 Stages) */}
      <ScrollExperience3D />

      {/* Section 3: Featured Sneaker Showcase (THE NEXT LEVEL OF EVERYDAY) */}
      <FeaturedShowcase />

      {/* Section 4: Product Detail Exploration (Silhouette, Material, Detail, Finish) */}
      <ProductDetailExploration />

      {/* Section 5: Collection Explorer (Frosted Glass Cards) */}
      <CollectionExplorer />

      {/* Section 6: Final Cinematic CTA (YOUR NEXT ICON AWAITS) */}
      <FinalCinematicCTA />
    </div>
  );
}
