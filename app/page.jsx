"use client";
import PromoCards from "../components/PromoCards";
import CategoryTabs from "../components/CategoryTabs";
import PropertySlider from "../components/PropertySlider";
import MobileTabs from "../components/MobileTabs";
import MobileHeader from "@/components/Mobiile/Header";
import MobileHeroCards from "@/components/Mobiile/Cards";
import MobilePropertySection from "@/components/Mobiile/Property";
import MobileBottomNavigation from "@/components/Mobiile/Navigation";
import MobileCategoryTabs from "@/components/Mobiile/CategoryTabs";

export default function Home() {
  return (
    <>
      {/* Desktop Layout */}
      <main className="bg-white min-h-screen hidden md:block">
        <PromoCards />
        <PropertySlider />
      </main>

      {/* Mobile Layout */}
      <main className="bg-white min-h-screen md:hidden max-w-sm">
        <MobileHeader />
        <MobileHeroCards />
        <MobileCategoryTabs />
        <MobilePropertySection />
        <MobileBottomNavigation />
      </main>
    </>
  );
}
