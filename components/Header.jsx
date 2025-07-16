"use client";
import { useState } from "react";
import { ChevronDown, Bell, Headphones, MapPin, User } from "lucide-react";

export default function Header() {
  const tabs = [
    { key: "rent", label: "Rent Apartment", icon: "/rent.png" },
    { key: "lands", label: "Lands for sale", icon: "/land.png" },
    { key: "sale", label: "Properties for sale", icon: "/properties.png" },
  ];

  const [active, setActive] = useState("rent");

  return (
    <header className="w-full bg-white shadow-sm px-4 md:px-6 py-4 hidden md:block">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-12">
          {/* Left: Tabs + Filters */}
          <div className="flex items-center gap-8">
            {/* Tabs */}
            <div className="flex items-center gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className="flex flex-col items-center group focus:outline-none"
                >
                  <img
                    src={tab.icon}
                    alt={tab.label}
                    className="w-6 h-6 object-contain mb-1"
                  />
                  <span
                    className={`text-sm transition-colors whitespace-nowrap ${
                      active === tab.key
                        ? "font-semibold text-[#2D2E46]"
                        : "text-gray-500 group-hover:text-[#2D2E46]"
                    }`}
                  >
                    {tab.label}
                  </span>
                  {active === tab.key && (
                    <div className="h-0.5 w-full bg-[#2D2E46] rounded-full mt-1" />
                  )}
                </button>
              ))}
            </div>

            {/* Filters */}
            <div className="flex items-center gap-5 bg-gray-100 px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Dropdown label="Property type" />
              <Dropdown label="Minimum price" />
              <Dropdown label="Maximum price" />
              <div className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-gray-800 transition-colors">
                <MapPin className="w-4 h-4 mr-1 text-green-600" />
                Location
              </div>
              <button className="p-2 rounded-full bg-[#3A6FF8] hover:bg-blue-700 text-white transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 101 8a7.5 7.5 0 0015 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Profile & Icons */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <IconButton icon={<Headphones className="w-5 h-5" />} />
            <div className="relative">
              <IconButton icon={<Bell className="w-5 h-5" />} />
              <span className="absolute -top-1 -right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </div>
            <button className="flex items-center gap-2 cursor-pointer group focus:outline-none pl-2">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                Bright Coker
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Dropdown({ label }) {
  return (
    <button className="flex items-center text-sm text-gray-600 whitespace-nowrap cursor-pointer hover:text-gray-800 transition-colors focus:outline-none">
      {label}
      <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
    </button>
  );
}

function IconButton({ icon }) {
  return (
    <button className="p-2 text-gray-600 hover:text-[#2D2E46] transition-colors focus:outline-none rounded-lg hover:bg-gray-50">
      {icon}
    </button>
  );
}
