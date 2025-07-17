"use client";

import { useState } from "react";
import { Heart, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MobilePropertySection() {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const apartmentData = [
    {
      id: 1,
      type: "2 Bedroom Flat",
      location: "Ogba",
      price: "₦600,000",
      image: "/rent1.png",
    },
    {
      id: 2,
      type: "3 Bedroom Flat",
      location: "Ikeja",
      price: "₦750,000",
      image: "/rent2.jpg",
    },
  ];

  const duplexData = [
    {
      id: 3,
      type: "4 Bedroom Duplex",
      location: "Omole Estate",
      price: "₦2,000,000",
      image: "/fs1.png",
    },
    {
      id: 4,
      type: "5 Bedroom Duplex",
      location: "Lekki",
      price: "₦3,200,000",
      image: "/rent2.jpg",
    },
  ];

  const landData = [
    {
      id: 5,
      location: "Shimawa, Ikorodu",
      size: "500sqm",
      price: "₦450,000",
      image: "/fsl1.png",
    },
    {
      id: 6,
      location: "The Premier",
      size: "300sqm",
      price: "₦3,500,000",
      image: "/fsl2.jpg",
    },
  ];

  const PropertyCard = ({ property, isLand = false }) => (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden "
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-full h-40">
        {property.image ? (
          <Image
            src={property.image}
            alt="Property"
            fill
            className="object-cover rounded-3xl"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-gray-500 text-sm">No Image</span>
          </div>
        )}

        <button
          onClick={() => toggleFavorite(property.id)}
          className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md z-10"
        >
          <Heart
            className={`w-4 h-4 ${
              favorites.has(property.id)
                ? "fill-red-500 text-red-500"
                : "text-gray-400"
            }`}
          />
        </button>
      </div>

      <div className="py-3">
        <div className="flex items-center justify-between text-sm text-gray-700 font-medium mb-1">
          {!isLand ? (
            <div className="flex items-center gap-1 truncate">
              <span className="truncate">{property.type}</span>
              <span className="text-gray-400">|</span>
              <span className="truncate">{property.location}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 truncate">
              <span className="truncate">{property.location}</span>
              <span className="text-gray-400">|</span>
              <span className="truncate">{property.size}</span>
            </div>
          )}
        </div>

        <div className="text-sm font-bold text-gray-900">{property.price}</div>
      </div>
    </motion.div>
  );

  const SectionHeader = ({ title, linkText }) => (
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-base font-semibold text-gray-900">{title}</h2>
      <button className="flex items-center gap-1 text-sm text-pink-500 font-medium">
        {linkText}
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );

  const PropertyGrid = ({ data, isLand = false }) => (
    <div className="grid grid-cols-2 gap-3">
      {data.map((property) => (
        <PropertyCard key={property.id} property={property} isLand={isLand} />
      ))}
    </div>
  );

  return (
    <div className="space-y-6 md:hidden">
      <section>
        <SectionHeader title="Apartment for rent" linkText="See more" />
        <PropertyGrid data={apartmentData} />
      </section>

      <section>
        <SectionHeader title="Fastest selling properties" linkText="See more" />
        <PropertyGrid data={duplexData} />
      </section>

      <section>
        <SectionHeader title="Fastest selling lands" linkText="See more" />
        <PropertyGrid data={landData} isLand={true} />
      </section>
    </div>
  );
}
