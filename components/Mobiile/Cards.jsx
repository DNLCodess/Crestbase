import { useRef, useState, useEffect } from "react";

export default function MobileHeroCards() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Real Estate Goal",
      subtitle:
        "Let's set your goal and find all recommended properties that aligns with it",
      buttonText: "Explore",
      gradient: "bg-[linear-gradient(135deg,#3D79EF,#35A162)]",
      shadowStyle: "ring-2 ring-[#F1A5C2] shadow-inner shadow-[#F1A5C2]/30",
    },
    {
      id: 2,
      title: "Prop Smart",
      subtitle: "Save time with our AI-powered property recommendations",
      buttonText: "Try Now",
      gradient: "bg-[linear-gradient(135deg,#F1A5C2,#8B5F70)]",
      shadowStyle: "ring-2 ring-[#F1A5C2] shadow-inner shadow-[#F1A5C2]/30",
    },
    {
      id: 3,
      title: "Investment Guide",
      subtitle: "Get expert insights on property investment opportunities",
      buttonText: "Learn More",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      shadowStyle: "ring-2 ring-blue-300 shadow-inner shadow-blue-300/30",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.clientWidth;
        const index = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(index);
      }
    };

    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
      return () => ref.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="py-4 md:hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className={`min-w-full ${card.gradient} text-white rounded-2xl p-6 snap-start relative overflow-hidden transition-all duration-300 ${card.shadowStyle}`}
          >
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm opacity-90 mb-6 leading-relaxed">
                {card.subtitle}
              </p>
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-black px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? "bg-gray-900 w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
