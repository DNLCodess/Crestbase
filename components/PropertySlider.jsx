import { useRef, useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Heart } from "lucide-react";
import Image from "next/image";

// Property dataset
const properties = [
  {
    id: 1,
    title: "Mini Flat",
    location: "Ogba",
    price: "₦500,000",
    image: "/feature1.png",
  },
  {
    id: 2,
    title: "2 Bedroom Flat",
    location: "Ikeja",
    price: "₦1,800,000",
    image: "/feature2.png",
  },
  {
    id: 3,
    title: "4 Bedroom Terrace Flat",
    location: "Berger",
    price: "₦3,400,000",
    image: "/feature3.png",
  },
  {
    id: 4,
    title: "3 Bedroom Flat",
    location: "V.I",
    price: "₦2,600,000",
    image: "/feature4.png",
  },
  {
    id: 5,
    title: "Self Contained",
    location: "Ajah",
    price: "₦400,000",
    image: "/feature2.png",
  },
  {
    id: 6,
    title: "3 Bedroom semi-detached duplex",
    location: "Lekki",
    price: "₦4,200,000",
    image: "/feature3.png",
  },
  {
    id: 7,
    title: "4 Bedroom terrace duplex",
    location: "Ikoyi",
    price: "₦8,500,000",
    image: "/feature4.png",
  },
];

// Tabs with "All" added
const categories = [
  "All",
  "Self Contained",
  "Mini Flat",
  "2 Bedroom Flat",
  "3 Bedroom Flat",
  "4 Bedroom Flat",
  "3 Bedroom Terrace Duplex",
  "3 Bedroom semi-detached duplex",
  "4 Bedroom terrace duplex",
];

export default function PropertySlider() {
  const scrollRef = useRef(null);
  const tabScrollRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollTabsLeft, setCanScrollTabsLeft] = useState(false);
  const [canScrollTabsRight, setCanScrollTabsRight] = useState(false);

  const filteredProperties =
    activeCategory === "All"
      ? properties
      : properties.filter((p) =>
          p.title.toLowerCase().includes(activeCategory.toLowerCase())
        );

  // Handle property cards scroll state
  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRef.current;
      if (!el) return;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    const el = scrollRef.current;
    if (el) {
      handleScroll();
      el.addEventListener("scroll", handleScroll);
    }

    return () => el?.removeEventListener("scroll", handleScroll);
  }, [filteredProperties]);

  // Handle tabs scroll state
  useEffect(() => {
    const handleTabScroll = () => {
      const el = tabScrollRef.current;
      if (!el) return;
      setCanScrollTabsLeft(el.scrollLeft > 0);
      setCanScrollTabsRight(
        el.scrollLeft + el.clientWidth < el.scrollWidth - 1
      );
    };

    const el = tabScrollRef.current;
    if (el) {
      handleTabScroll();
      el.addEventListener("scroll", handleTabScroll);
    }

    return () => el?.removeEventListener("scroll", handleTabScroll);
  }, []);

  const scrollCards = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    // Calculate scroll amount based on screen size
    const isMobile = window.innerWidth < 768;
    const scrollAmount = isMobile
      ? el.clientWidth * 0.85
      : el.clientWidth * 0.75;

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollTabs = (direction) => {
    const el = tabScrollRef.current;
    if (!el) return;

    const scrollAmount = 200;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full max-w-6xl mx-auto mt-6">
      {/* Category Tabs Section */}
      <div className="relative mb-3">
        {/* Tab scroll arrows */}
        {canScrollTabsLeft && (
          <button
            onClick={() => scrollTabs("left")}
            className="absolute z-20 left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-1.5 shadow-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
        )}
        {canScrollTabsRight && (
          <button
            onClick={() => scrollTabs("right")}
            className="absolute z-20 right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-1.5 shadow-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        )}

        {/* Tabs container */}
        <div
          ref={tabScrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 py-3 text-sm font-medium text-gray-500 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap pb-2 transition-all duration-200 flex-shrink-0 ${
                activeCategory === cat
                  ? "text-gray-900 border-b-2 border-gray-900 font-semibold"
                  : "hover:text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <h4 className="text-base font-semibold mb-3">
        Top featured apartments for rent
      </h4>

      {/* Property Cards Section */}
      <div className="relative">
        {/* Card scroll arrows */}
        {canScrollLeft && (
          <button
            onClick={() => scrollCards("left")}
            className="absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scrollCards("right")}
            className="absolute z-10 right-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        )}

        {/* Scrollable cards container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide px-4 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-4 md:gap-6 pb-4">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="w-64 sm:w-72 md:w-80 flex-shrink-0  rounded-2xl  "
              >
                <div className="relative w-full h-40 rounded-t-2xl overflow-hidden">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-200">
                    <Heart
                      size={16}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                    />
                  </button>
                </div>

                <div className="p-3">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="text-sm text-gray-700 font-medium truncate">
                      {prop.title} <span className="text-gray-400 mx-1">|</span>{" "}
                      {prop.location}
                    </p>
                  </div>
                  <p className="text-lg font-bold text-gray-900">
                    {prop.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom scrollbar hiding styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
