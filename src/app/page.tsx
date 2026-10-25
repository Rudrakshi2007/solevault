import React from 'react';
import { PRODUCTS } from '@/data/products';
import { HeroCarousel } from '@/components/HeroCarousel';
import { FeaturedDrop } from '@/components/FeaturedDrop';
import { CategoryWorlds } from '@/components/CategoryWorlds';
import { TrendingSection } from '@/components/TrendingSection';
import { EditorialCampaign } from '@/components/EditorialCampaign';
import { NewArrivalsRail } from '@/components/NewArrivalsRail';

export default function HomePage() {
  // Select top 5 flagship slides for the hero
  const heroSlides = PRODUCTS.filter((p) => p.heroSlide);

  return (
    <div className="w-full min-h-screen bg-obsidian">
      {/* 1. Cinematic Signature Hero Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* 2. Featured Drop: NOT MADE TO BLEND IN */}
      <FeaturedDrop />

      {/* 3. Category Worlds */}
      <CategoryWorlds />

      {/* 4. Trending Collection */}
      <TrendingSection products={PRODUCTS} />

      {/* 5. Editorial Campaign: EVERY STEP HAS A SIGNATURE */}
      <EditorialCampaign />

      {/* 6. New Arrivals Horizontal Rail */}
      <NewArrivalsRail products={PRODUCTS} />
    </div>
  );
}
