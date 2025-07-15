import { useState, useRef } from "react";
import { Heart, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MobilePropertySection() {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const apartmentData = [
    {
      id: 1,
      type: "2 Bedroom Flat",
      location: "Ogba",
      price: "₦600,000",
      image: "/api/placeholder/300/200",
    },
    {
      id: 2,
      type: "3 Bedroom Flat",
      location: "Ikeja",
      price: "₦750,000",
      image: "/api/placeholder/300/200",
    },
  ];

  const duplexData = [
    {
      id: 3,
      type: "4 Bedroom Duplex",
      location: "Omole Estate",
      price: "₦2,000,000",
      image: "/api/placeholder/300/200",
    },
    {
      id: 4,
      type: "5 Bedroom Duplex",
      location: "Lekki",
      price: "₦3,200,000",
      image: "/api/placeholder/300/200",
    },
  ];

  const landData = [
    {
      id: 5,
      location: "Shimawa, Ikorodu",
      size: "500sqm",
      price: "₦450,000",
      image: "/api/placeholder/300/200",
    },
    {
      id: 6,
      location: "The Premier",
      size: "300sqm",
      price: "₦3,500,000",
      image: "/api/placeholder/300/200",
    },
  ];

  const PropertyCard = ({ property, isLand = false }) => (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <div className="w-full h-32 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Property Image</span>
        </div>
        <button
          onClick={() => toggleFavorite(property.id)}
          className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md"
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

      <div className="p-3">
        <div className="text-sm font-semibold text-gray-900 mb-1">
          {isLand ? property.location : property.type}
        </div>
        <div className="text-xs text-gray-500 mb-2">
          {isLand ? property.size : property.location}
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
    <div className="py-4 space-y-6 md:hidden">
      {/* Apartment for rent */}
      <section>
        <SectionHeader title="Apartment for rent" linkText="See more" />
        <PropertyGrid data={apartmentData} />
      </section>

      {/* Fastest selling properties */}
      <section>
        <SectionHeader title="Fastest selling properties" linkText="See more" />
        <PropertyGrid data={duplexData} />
      </section>

      {/* Fastest selling lands */}
      <section>
        <SectionHeader title="Fastest selling lands" linkText="See more" />
        <PropertyGrid data={landData} isLand={true} />
      </section>
    </div>
  );
}
