import { useRef, useState, useEffect } from "react";

export default function MobileHeroCards() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Real Estate Goal",
      subtitle:
        "Tell us your goal and our AI recommend properties that align with it",
      buttonText: "Explore",
      gradient: "bg-[linear-gradient(135deg,#3D79EF,#35A162)]",
    },
    {
      id: 2,
      title: "Prop Safe",
      subtitle: "Save time with our AI-powered property recommendations",
      buttonText: "Try Now",
      gradient: "bg-[linear-gradient(135deg,#F1A5C2,#8B5F70)]",
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
            className={`min-w-full ${card.gradient} text-white rounded-2xl p-6 max-h-40 snap-start relative overflow-hidden transition-all duration-300`}
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl mb-2 font-semibold">{card.title}</h3>
                <p className="text-sm opacity-100  leading-relaxed">
                  {card.subtitle}
                </p>
              </div>
              <div className="flex justify-end">
                <button className="bg-white bg-opacity-30 backdrop-blur-md text-indigo-500 font-semibold px-4 py-2 rounded-2xl text-base transition-all duration-200 hover:bg-opacity-40 shadow-[4px_4px_0px_rgba(101,67,33,0.8)]">
                  {card.buttonText}
                </button>
              </div>
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
