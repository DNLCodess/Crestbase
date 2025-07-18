"use client";
import Image from "next/image";
import { useState } from "react";

export default function MobileCategoryTabs() {
  const [activeTab, setActiveTab] = useState("rent");

  const tabs = [
    {
      id: "rent",
      label: "Rent Apartment",
      iconSrc: "/icons/house1.png",
      color: "bg-[#FCEDF3]",
      ringColor: "ring-pink-500",
    },
    {
      id: "sale",
      label: "Properties for Sale",
      iconSrc: "/icons/house2.png",
      color: "bg-[#ECF2FE]",
      ringColor: "ring-green-500",
    },
    {
      id: "lands",
      label: "Lands for Sale",
      iconSrc: "/icons/land.png",
      color: "bg-[#EBF6F0]",
      ringColor: "ring-orange-300",
    },
  ];

  return (
    <div className="py-4 md:hidden">
      <div className="grid grid-cols-3 gap-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 rounded-2xl text-center transition duration-200 relative flex flex-col items-center ${
                isActive
                  ? `${tab.color} ${tab.ringColor} ring-2 ring-offset-2`
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <div className="w-10 h-10 relative mb-2">
                <Image
                  src={tab.iconSrc}
                  alt={tab.label}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
              <div className="text-sm font-medium leading-tight">
                {tab.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
