import { useState } from "react";

const categories = [
  "Self Contained",
  "Mini flat",
  "2 Bedroom flat",
  "3 Bedroom flat",
  "4 Bedroom flat",
  "3 Bedroom terrace duplex",
  "3 Bedroom semi-detached duplex",
  "4 Bedroom terrace duplex",
];

export default function CategoryTabs() {
  const [active, setActive] = useState("Self Contained");

  return (
    <div className="flex items-center gap-5 overflow-x-auto scrollbar-hide px-2 py-2 text-sm font-medium text-[#888] whitespace-nowrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`transition-colors pb-1 ${
            active === cat
              ? "text-[#1E1E1E] border-b-2 border-[#1E1E1E] font-semibold"
              : "hover:text-[#1E1E1E]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
