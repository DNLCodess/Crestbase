import { useState } from "react";

export default function MobileCategoryTabs() {
  const [activeTab, setActiveTab] = useState("rent");

  const tabs = [
    {
      id: "rent",
      label: "Rent Apartment",
      icon: "🏠",
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "sale",
      label: "Properties for Sale",
      icon: "🏢",
      color: "bg-green-100 text-green-700",
    },
    {
      id: "lands",
      label: "Lands for Sale",
      icon: "🌍",
      color: "bg-orange-100 text-orange-700",
    },
  ];

  return (
    <div className="py-4 md:hidden">
      <div className="grid grid-cols-3 gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-4 rounded-2xl text-center transition-colors duration-200 relative ${
              activeTab === tab.id
                ? `${tab.color} ring-2 ring-offset-2 ring-${
                    tab.color.split(" ")[1].split("-")[0]
                  }-300`
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
          >
            <div className="text-2xl mb-2">{tab.icon}</div>
            <div className="text-xs font-medium leading-tight">{tab.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
