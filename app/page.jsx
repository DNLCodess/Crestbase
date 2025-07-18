"use client";
import PromoCards from "../components/PromoCards";
import PropertySlider from "../components/PropertySlider";

import MobileHeader from "@/components/Mobiile/Header";
import MobileHeroCards from "@/components/Mobiile/Cards";
import MobilePropertySection from "@/components/Mobiile/Property";
import MobileBottomNavigation from "@/components/Mobiile/Navigation";
import MobileCategoryTabs from "@/components/Mobiile/CategoryTabs";

export default function Home() {
  return (
    <>
      {/* Desktop Layout */}
      <main className="bg-white min-h-screen px-6 hidden md:block">
        <PromoCards />
        <PropertySlider />
      </main>

      {/* Mobile Layout */}
      <main className="bg-white min-h-screen px-6 w-full md:hidden">
        <MobileHeader />
        <MobileHeroCards />
        <MobileCategoryTabs />

        <MobilePropertySection />
        <MobileBottomNavigation />
      </main>
    </>
  );
}
